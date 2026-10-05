/**
 * Cloudflare Pages Function: /api/recruitment
 * Proxies application form submissions securely to Web3Forms.
 * 
 * Required / Optional environment variables:
 *   WEB3FORMS_ACCESS_KEY - Web3Forms access key
 */

export async function onRequestPost(context) {
    const { request, env } = context;

    // CORS headers
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    let body;
    const contentType = request.headers.get('content-type') || '';

    try {
        if (contentType.includes('application/json')) {
            body = await request.json();
        } else {
            const formData = await request.formData();
            body = {};
            for (const [key, value] of formData.entries()) {
                body[key] = value;
            }
        }
    } catch (err) {
        return new Response(JSON.stringify({ error: 'Invalid request payload.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
    }

    const { first_name, last_name, usn, role, github_profile, motivation, botcheck } = body;

    // Honeypot bot protection
    if (botcheck) {
        return new Response(JSON.stringify({ error: 'Spam detected.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
    }

    // Validate required fields
    if (!first_name || !last_name || !usn || !role || !motivation) {
        return new Response(JSON.stringify({ error: 'Missing required application fields.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
    }

    // Enforce reasonable length limits
    if (first_name.length > 80 || last_name.length > 80 || usn.length > 30 || motivation.length > 2500) {
        return new Response(JSON.stringify({ error: 'Input exceeds maximum allowed length.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
    }

    const accessKey = env.WEB3FORMS_ACCESS_KEY || 'cd2f1229-315e-425a-b75e-935bdc31ae59';

    const web3Payload = {
        access_key: accessKey,
        subject: `[OS Code Recruitment] Application: ${first_name} ${last_name} (${role})`,
        from_name: 'PowerHouse × OS Code Recruitment Portal',
        first_name,
        last_name,
        usn: usn.toUpperCase(),
        role,
        github_profile: github_profile || 'None provided',
        motivation,
        college: 'East Point College of Engineering and Technology',
        department: 'Department of IoT and Cybersecurity',
        submission_time: new Date().toISOString()
    };

    try {
        const web3Response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(web3Payload)
        });

        const result = await web3Response.json();

        if (!web3Response.ok || (!result.success && result.status !== 'success')) {
            console.error('Web3Forms forwarding error:', result);
            return new Response(JSON.stringify({ error: result.message || 'Failed to submit application to Web3Forms.' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json', ...corsHeaders }
            });
        }

        return new Response(JSON.stringify({ success: true, message: 'Application submitted successfully.' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
    } catch (error) {
        console.error('Server error submitting to Web3Forms:', error);
        return new Response(JSON.stringify({ error: 'Server error while sending application. Please try again.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
    }
}

// Handle CORS preflight
export async function onRequestOptions() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
