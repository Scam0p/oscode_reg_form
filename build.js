const fs = require('fs');
const path = require('path');

// 1. Load local .env file if it exists
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split(/\r?\n/).forEach(line => {
        if (line.trim().startsWith('#') || !line.includes('=')) return;
        const parts = line.split('=');
        const key = parts[0].trim();
        let val = parts.slice(1).join('=').trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.substring(1, val.length - 1);
        }
        process.env[key] = val;
    });
}

// 2. Clean & recreate dist directory
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir);

const srcDir = path.join(__dirname, 'src');

// 3. Define recursive copy with cache-busting injection for HTML files
function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach((childItemName) => {
            if (childItemName === 'input.css') {
                return;
            }
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        if (src.endsWith('.html')) {
            let html = fs.readFileSync(src, 'utf8');
            const buildVersion = Date.now();
            let updatedHtml = html.split('style.css').join(`style.css?v=${buildVersion}`);
            fs.writeFileSync(dest, updatedHtml, 'utf8');
        } else {
            fs.copyFileSync(src, dest);
        }
    }
}

copyRecursiveSync(srcDir, distDir);

console.log('Build successful! All Powerhouse Foundation assets compiled to dist/ directory.');
