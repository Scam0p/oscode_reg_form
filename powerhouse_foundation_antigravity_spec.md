# Powerhouse Foundation --- Casino Royale Event Registration Platform

## Anti-Gravity implementation specification

**Document type:** Product, design, engineering, security, and
acceptance brief\
**Project:** Migration of the existing OS Code registration website\
**Organisation:** Powerhouse Foundation\
**Event theme:** Casino Royale-inspired event experience\
**Status:** Implementation specification --- confirm event-specific
facts before launch

## Table of contents

1.  Document purpose and implementation mandate
2.  Product outcome
3.  Repository discovery and safe migration
4.  Brand and creative direction
5.  Visual system and design tokens
6.  Typography
7.  Layout and responsive behaviour
8.  Public event website information architecture
9.  Hero section
10. Navigation and footer
11. Registration journey overview
12. Step 1: team leader identity
13. Step 2: team details
14. Step 3: participant directory
15. Student avatar design
16. Participant row states
17. Live directory updates
18. Duplicate allocation and concurrency protection
19. Review and confirmation step
20. Registration success and team pass
21. QR code policy
22. Admin dashboard overview
23. Admin team management
24. Admin student directory management
25. Manual attendance management
26. Database design
27. Supabase and backend security
28. Input validation standards
29. USN normalization and validation
30. Name validation
31. Phone and email validation
32. Team name validation
33. Search and filtering behaviour
34. Error handling and edge cases
35. Motion and interaction design
36. Casino Royale visual motifs
37. Accessibility
38. Privacy and data minimisation
39. Performance
40. SEO, sharing, and metadata
41. Email and notifications
42. Admin roles and permissions
43. Testing strategy
44. Acceptance criteria
45. Suggested implementation phases
46. Required organiser decisions
47. Out of scope
48. Design quality bar
49. Implementation instructions
50. Component map
51. API operations
52. Operational readiness
53. Final product principle
54. Detailed checklists

## Document purpose and implementation mandate

This document is the implementation brief for converting the existing OS
Code club-registration website into a production-ready
event-registration platform for Powerhouse Foundation.

The event's creative direction is Casino Royale: restrained, cinematic,
sophisticated, editorial, and unmistakably premium. The product
interface should borrow the clarity, restraint, precision, typography,
spacing, transitions, and material discipline associated with Apple's
best software interfaces. It must not copy Apple's proprietary assets,
logos, exact screens, or trade dress. Create an original Powerhouse
Foundation experience informed by those principles.

This is a build specification, not a mood board. Inspect the existing
repository before changing it. Preserve useful working code, page
structure, responsive behaviour, assets, routing, and components where
appropriate. Replace the recruitment-specific product logic and content
with the event experience described here. Do not blindly rewrite the
project or introduce a new stack without evidence that the existing one
cannot support the requirements.

The final result must feel like a real event platform designed and
implemented by a careful product team. Avoid generic AI-generated
landing-page patterns. No blinking status dots, floating islands,
gratuitous glass cards, random gradients, animated blobs, fake
dashboards, decorative skeletons, or excessive rounded containers.

Treat every requirement below as implementation work. If a detail is not
specified, choose the simplest robust and accessible behaviour
consistent with the product direction, document the decision, and avoid
inventing event facts such as date, venue, price, schedule, capacity, or
organiser contact details.

## Product outcome

The product has three connected experiences: 1. Public event website:
introduces the Powerhouse Foundation event and guides visitors into
registration. 2. Team registration: a team leader verifies their student
identity, creates a team, selects eligible students from a fixed
directory of approximately 60 students, confirms the team, and receives
a visual digital pass. 3. Organiser administration: authorised
organisers manage the student directory, teams, allocations,
cancellations, exports, event content, and manual attendance.

This is not a commercial ticket marketplace. There is no requirement for
payment processing unless the project owner explicitly adds it later.
There is no requirement for secure admission scanning or automated entry
verification. A team QR graphic is a visual identifier and decorative
event-pass element only. Volunteers will verify attendance manually or
using printed lists.

Do not implement fake payment steps, seat maps, inventory countdowns,
checkout urgency, or claims that a QR ticket is validated at the door.
Do not describe the QR graphic as a secure admission credential.

The fixed student directory is the source of truth for eligible
participants. A student may belong to no more than one active team for
this event. The same student must not be allocated twice, even if two
team leaders submit at nearly the same time.

## Repository discovery and safe migration

Before editing: - Inspect the repository tree and identify the
framework, package manager, scripts, routes, styling system, component
library, icon library, fonts, image assets, and deployment
configuration. - Read the existing README, environment examples, and
relevant configuration files. - Run the existing project and record the
current baseline. - Identify the OS Code recruitment page, hero,
sections, navigation, footer, forms, animations, and reusable
components. - Identify any existing form submission integrations,
including Web3Forms or similar services. - Identify any existing
backend, database, authentication, analytics, and hosting
integrations. - Identify dead code, but do not delete potentially
reusable code until dependencies are understood. - Preserve the existing
repository's conventions where they are sound. - Do not replace the
entire application with a template. - Do not change package managers
without a strong reason. - Do not introduce duplicate UI libraries. - Do
not commit secrets, service-role keys, private keys, signing
certificates, or real student data. - Do not put production credentials
in client-side environment variables. - Do not fabricate successful
integrations. If a provider is not configured, show a documented setup
requirement.

Migration tasks: - Replace OS Code-specific wording, logos, recruitment
copy, forms, and calls to action with Powerhouse Foundation event
content. - Remove club-member recruitment questions and obsolete
application flows. - Keep reusable hero and section components where
they suit the new content. - Rework the page hierarchy around event
discovery and registration. - Remove old form endpoints and old
submission logic after confirming they are no longer used. - Search the
full repository for stale OS Code references, old event names, old
links, and old metadata. - Update page title, description, Open Graph
metadata, favicon only if approved assets exist, and social-sharing
metadata. - Preserve a rollback path through version control. - Document
changed routes, environment variables, database migrations, and
deployment steps.

## Brand and creative direction

Brand: Powerhouse Foundation. Event creative theme: Casino Royale /
James Bond-inspired casino sophistication. Product personality:
confident, understated, precise, polished, cinematic, and welcoming.
Design reference: Apple's clean interface principles, material
restraint, typography, spacing, and purposeful motion. Originality
requirement: create an original visual identity for this event. Do not
use Apple's logo, Apple product UI screenshots, proprietary SF Symbols
files, James Bond film logos, copyrighted film stills, or unlicensed
character imagery.

Suggested visual palette: - Deep ink / near-black for the primary dark
event canvas. - Warm ivory or soft white for readable light surfaces. -
Muted graphite for secondary text and dividers. - Restrained champagne
gold for selected decorative details. - Casino red for the QR pass and a
few event accents. - Muted green only for successful/available states
where semantic colour is needed. - Amber/yellow for already allocated
participants. - Red for destructive/error states, distinct from
decorative casino red.

Do not use every colour everywhere. Colour must have a purpose. The page
must work in both light and dark contexts if the existing product
supports both. If only one theme is implemented, choose a coherent theme
and ensure contrast is accessible. Avoid a rainbow gradient aesthetic.
Avoid neon cyberpunk styling. Avoid gold foil textures that reduce
readability. Avoid excessive drop shadows. Avoid large glowing borders.
Avoid glassmorphism on every surface. Use glass/material blur only where
it communicates a real layer, such as a compact sticky navigation
surface or a modal backdrop. The contact list should be primarily solid,
readable rows, not a grid of floating glass cards.

## Visual system and design tokens

Create a small, consistent design-token layer using the project's
existing styling approach. Do not scatter arbitrary hex values and
one-off spacing values throughout components.

Define tokens for: - Background canvas. - Elevated surface. - Subtle
surface. - Primary text. - Secondary text. - Tertiary text. - Divider. -
Focus ring. - Primary action. - Secondary action. - Casino red. -
Champagne accent. - Available state. - Selected state. - Allocated
state. - Error state. - Disabled state. - Border radius scale. - Spacing
scale. - Typography scale. - Motion durations. - Motion easing. -
Content max-width. - Header height. - Sticky footer height where
applicable.

Use a restrained radius system: - Small radius for inputs and compact
controls. - Medium radius for grouped panels and modals. - Large radius
only for major sections or pass artwork. - Circular radius for avatars
and icon buttons.

Do not make every element pill-shaped. Do not make every container a
card. Use whitespace, alignment, typography, dividers, and section
backgrounds to establish hierarchy. Use a consistent grid and baseline
rhythm. Ensure layouts remain deliberate at narrow phone widths and
large desktop widths.

## Typography

Use the existing licensed fonts if they are appropriate. Otherwise
choose a clean system sans-serif stack or a properly licensed
contemporary sans-serif. Use system fonts where possible to preserve
fast loading and native platform feel.

Typography requirements: - Strong, concise hero headline. - Comfortable
body copy with readable line length. - Clear section titles. - Compact
but legible labels. - Tabular numerals for counts, USNs, registration
IDs, and event statistics where appropriate. - Avoid tiny uppercase
labels for essential information. - Avoid excessive letter spacing. -
Avoid mixing many font families. - Do not use novelty casino fonts for
body copy. - Use an editorial display treatment sparingly for the event
title. - Maintain clear hierarchy without relying on oversized text
everywhere.

Text should be proofread. Use consistent British or Indian English
spelling conventions throughout the website. Do not create filler copy
or generic AI phrases such as "where innovation meets opportunity"
unless the organiser supplies that copy.

## Layout and responsive behaviour

Build responsive layouts mobile-first. Support current Safari on iPhone,
Chrome on Android, and modern desktop browsers. The registration journey
must be comfortable on a phone because participants may register from
messaging-app links. Do not make essential controls hover-only. Use a
readable content width on desktop. Use safe-area insets for fixed bottom
actions on iOS. Avoid horizontal scrolling. Avoid tiny tap targets. Use
sticky action bars only when they do not obscure content. Ensure modals
fit within the visible viewport and can scroll internally where
necessary. Do not trap the user in a modal without a visible close or
cancel route. Keep navigation concise. Use consistent page gutters
across hero, sections, registration, and footer. Use a deliberate mobile
menu, not a desktop menu squeezed into a phone.

## Public event website information architecture

The public website should contain the following sections, subject to the
actual event information supplied by the organiser:

1.  Header / navigation.
2.  Hero with event identity, a concise event statement, and a clear
    Register CTA.
3.  Event introduction explaining who is organising it and what the
    event is.
4.  Event details: date, time, venue, eligibility, team size, and
    registration status. Only show verified values.
5.  Experience / programme section if the organiser provides programme
    information.
6.  Registration explanation with a short step-by-step overview.
7.  Frequently asked questions.
8.  Organiser / contact section.
9.  Footer with Powerhouse Foundation identity, legal/privacy links, and
    social links only when real URLs are supplied.

Do not invent event date, venue, schedule, fee, capacity, prizes,
speakers, sponsors, or contact details. If a required field is not yet
known, use a clearly marked content placeholder in the
admin/configuration layer and do not publish placeholder copy to
visitors. Registration CTA should reflect actual registration status:
Open, Not yet open, Closed, or Full. Do not use fake urgency.

## Hero section

Retain the useful structure and visual craftsmanship of the existing OS
Code hero where possible, but replace its content and visual assets. The
hero should feel like an event campaign, not a SaaS landing page. Use
one dominant headline, one short supporting statement, and one primary
CTA. A secondary link may lead to event details. Use a strong static
image, original vector illustration, or carefully art-directed
background if the project has approved assets. Casino motifs may be
subtle: a playing-card corner, a geometric suit symbol, a chip edge, a
roulette-inspired radial line, or a minimal red seal. Do not use guns as
decorative graphics. If a weapon motif is ever considered, avoid
realistic weapon imagery and prefer non-violent casino details such as
cards, chips, dice, or geometric suit marks. No floating 3D objects. No
parallax that harms readability. No animated particles. No blinking
indicators. No giant animated gradients. No autoplay video with sound.
Respect reduced-motion preferences. The hero must load quickly and
render meaningful content before decorative assets.

## Navigation and footer

Navigation: - Powerhouse Foundation wordmark or approved logo. - Event
details anchor or route. - FAQ anchor or route. - Register CTA. - Mobile
navigation with accessible open/close controls. - Clear focus state and
keyboard operation. - No unnecessary sticky floating pill that covers
content.

Footer: - Use a quiet, compact footer. - Include organiser identity. -
Include privacy policy and terms links only when pages exist. - Include
a contact email or phone only when provided. - Avoid giant coloured
footer strips. - Do not invent social accounts. - Use plain, carefully
spaced text links.

## Registration journey overview

The registration flow should be a focused, multi-step form with clear
progress indication. It should not look like a generic checkout funnel.

Recommended sequence: Step 1: Team leader identity and eligibility
check. Step 2: Team name and team details. Step 3: Participant selection
from the fixed student directory. Step 4: Review and confirmation. Step
5: Confirmation page and visual team pass.

If team size or required information differs after organiser
configuration, the interface should use the configured values rather
than hardcoded assumptions. The known working assumption is a six-person
team, but make this configurable in the event settings. Do not allow a
team to submit until it meets the configured minimum and maximum team
size. If the event requires exactly six people, enforce exactly six
people in both client and server validation. Show progress as clear
numbered steps or a thin progress bar. Avoid animated dots. Keep the
current step's purpose and required action obvious. Allow a user to go
back without losing valid entries. Persist a short-lived draft safely
where appropriate, but do not expose personal information on a shared
device. Clear sensitive draft data after successful registration or
explicit cancellation.

## Step 1: team leader identity

Ask for the team leader's USN and any additional identity/contact fields
the organiser genuinely needs. USN is the primary student identifier. Do
not use name as a unique key. Normalize USN input on every keystroke: -
Convert alphabetic characters to uppercase immediately. - Trim leading
and trailing whitespace. - Remove accidental internal whitespace only if
the official USN format does not allow it. - Validate against the
configured USN pattern. - Do not silently alter valid characters other
than case and permitted whitespace normalization. - Keep the cursor
position stable during normalization. - Set an appropriate inputmode and
autocomplete policy. - Show a concise inline validation message. - Do
not wait until final submission to uppercase the USN.

The client should query the server for leader eligibility and existing
allocation. Do not expose an unrestricted endpoint that reveals every
student's team membership. The server response for a participant who is
already allocated may show the team name only to an authorised
registration context, according to the organiser's privacy policy. If
the leader is already a member of an active team, block creation of
another team and show a clear message: "You're already registered with
\[Team Name\]. Please contact the organiser if this is incorrect." If
the leader is not found in the student directory, explain that the
entered USN is not eligible and provide an organiser contact route if
one is configured. If the USN is malformed, show the expected format
without disclosing whether a similar USN exists. Use server-side rate
limiting and abuse protection for identity lookup. If phone OTP is
enabled, verify the number before allowing team creation. Do not require
OTP unless the organiser configures a provider and decides it is needed.

## Step 2: team details

Collect the team name. Validate that it is present, within a sensible
configured length, and does not contain control characters or markup.
Normalize whitespace. Allow ordinary punctuation where appropriate. Do
not permit HTML injection or script content. Decide whether team names
must be unique. Recommended default: case-insensitive unique active team
names for this event. If a team name is already in use, show a friendly
message and allow the leader to choose another. Assign a distinct team
accent colour from a controlled palette. Colour allocation should be
deterministic or persisted so it does not change on every page load.
Allow an administrator to override a team's colour. Do not rely on
colour alone to convey identity or status. Show the chosen team colour
as a small accent, not as a large saturated panel.

## Step 3: participant directory

The directory contains approximately 60 eligible students and is backed
by the database. Do not hardcode the list into a frontend component. Do
not bundle private student records into public static JavaScript. Fetch
only the fields needed for the registration interface. Recommended
fields shown in the list: - First-name-derived avatar initial. - Full
name. - USN. - Allocation status. - Team name if allocated and
disclosure is permitted. - Selection state for the current team leader.

Use a vertically stacked list, not a grid. A list gives enough room for
full names and USNs and is easier to use on phones. Rows should be
compact but comfortable to tap. The row should have a subtle divider or
restrained surface separation. Do not use a separate floating card for
each student. Use a search input that searches name and USN. Search
should be case-insensitive. Normalize USN search text to uppercase.
Support no-results, loading, network-error, and empty-directory states.
Show a selected counter such as "4 of 6 selected". Show the required
count and remaining count. Make selected rows visibly selected using a
restrained outline or checkmark. Prevent a user from selecting
themselves twice as leader and participant. If the leader counts as one
of the six participants, include them automatically and show that
clearly. If the leader does not count toward team size, make that rule
explicit. This must be configurable and decided before launch.

## Student avatar design

Every student row uses an abstract, original gradient avatar inspired by
the friendly identity treatment of modern operating systems. Do not use
student photographs. Do not use generated human portraits. Do not use
initials from the surname unless the design specification explicitly
changes. Derive the displayed initial from the first Unicode letter of
the student's first name stored in the database. Handle names with
leading whitespace and names beginning with non-Latin characters
gracefully. If the first name is unavailable, use the first letter of
the display name. If no usable letter exists, use a neutral person icon.
The same student should receive a stable gradient assignment across
visits. Derive it deterministically from a stable student identifier or
persist a palette index. Do not use random colours on each render.
Create a small curated set of sophisticated gradients with enough
contrast against the initial. Keep gradients subtle, not fluorescent.
Use white or dark initials according to calculated contrast. Avatar
dimensions should be consistent. Use circular avatars. Do not animate
the avatar itself. Do not use avatars as the only way to identify a
participant; show the full name and USN. Do not expose date of birth,
address, personal photo, or unnecessary personal data in the directory.

## Participant row states

Available: - Neutral surface. - Normal text contrast. - A small
"Available" label may be shown if it improves clarity. - Row is
selectable.

Selected by the current leader: - Use a clear checkmark and subtle
selected background or accent outline. - Show selected state in
accessible text. - Allow deselection before submission. - Do not rely
only on a colour change.

Allocated to another team: - Use the requested yellow/amber outline or
restrained amber-tinted background. - Show "Already allocated" and the
team name where permitted. - Disable selection. - Do not make the whole
row bright yellow. - Do not make the state blink. - Do not show an
alarming error icon for a normal allocation state.

Unavailable due to administrative hold: - Show "Unavailable" or
"Temporarily unavailable". - Do not disclose internal administrative
notes. - Disable selection.

Network state unknown: - Do not optimistically label a student as
available if the server cannot confirm status. - Show a non-blocking
retry message. - Prevent final submission until authoritative
availability can be checked.

## Live directory updates

The directory must update when another team registers, cancels, or
changes participants. Use database-backed realtime subscriptions if
supported by the selected backend. If realtime delivery fails, provide a
safe fallback refresh or revalidation when the user returns to the tab
or proceeds to confirmation. Do not use fake live counters. Do not
display a blinking live dot. A small text label such as "Updated just
now" is sufficient if needed. When a participant becomes allocated while
the current user is selecting: - Update the row to the allocated
state. - Remove the ability to select that participant. - If they were
selected in the current unsaved draft, mark them as unavailable and
explain what changed. - Do not silently remove the selection without
explanation. - Preserve the rest of the draft. - Ask the user to select
a replacement. When a participant becomes available because a team is
cancelled: - Update the row to available. - Do not automatically add the
student to any draft. - Make the new availability visible. Realtime
updates are a convenience only. The final database transaction is the
authoritative check.

## Duplicate allocation and concurrency protection

This is a critical invariant and must be enforced in the database, not
just the UI.

Invariant: A student may be a member of at most one active team for a
given event.

Implementation requirements: - Use a relational join table for team
membership. - Enforce uniqueness for the event/student allocation at the
database level. - Use a transaction when creating a team and inserting
all team members. - Validate the team leader's existing allocation
inside the transaction. - Validate every selected student's allocation
inside the transaction. - If any student is already allocated, reject
the entire transaction. Do not partially create a team. - Return a
structured conflict response identifying the conflicting student and,
where disclosure is permitted, the existing team. - Do not rely on a
prior client-side availability query as proof that the student remains
available. - Protect against simultaneous requests from two leaders. -
Use an idempotency key or equivalent safe retry strategy for the final
submit action. - Prevent duplicate team creation when the user
double-clicks submit or retries after a slow network. - Use database
constraints as the final guard. - Log conflicts for administrator
diagnosis without logging unnecessary personal data.

If the database does not support partial unique indexes or the chosen
schema makes active membership uniqueness difficult, use a
transactionally maintained allocation table with a unique event/student
key.

## Review and confirmation step

Before final submission show a clear summary: - Team name. - Team leader
name and USN. - Team colour. - Number of participants. - Each
participant's name and USN. - Event title and configured event
details. - Any registration terms or consent text supplied by the
organiser.

Allow the leader to go back and edit the team name or participant
selection. Show a clear final action such as "Confirm registration". Do
not call it "Buy tickets" unless paid ticketing is added later. Do not
imply payment. Do not create the final team until the server confirms
all allocations. If the server detects a conflict, remain in the flow
and explain exactly which participant is no longer available. Do not
clear the entire form on a conflict. Require explicit consent for any
required privacy notice or terms. Do not pre-check optional marketing
consent.

## Registration success and team pass

After a successful transaction, show a dedicated confirmation page. The
page should feel celebratory but restrained. Show: - "Registration
confirmed". - Team name. - Registration reference. - Team colour. -
Participant list. - Event details that are confirmed. - Download team
pass action. - Print action. - Optional share action using the platform
share sheet if supported. - A clear note that the pass is a visual
registration confirmation and that event staff will verify attendance
manually.

Create a team pass design inspired by a premium casino invitation: -
Deep red or near-black base. - Restrained red-on-red geometric pattern
or fine linework. - Small playing-card suit marks or chip-inspired
geometry. - Strong event title typography. - Powerhouse Foundation
identity. - Team name and registration reference. - Participant names,
if the organiser wants them included. - A decorative QR graphic in
red/white or white/red. - No fake "verified" stamp. - No fake scan
success. - No false security language. - Do not encode personal
information in the QR graphic. - If the QR graphic is only decorative,
label it as a visual identifier or omit it. Do not generate a random QR
and imply it can be scanned. - If a functional QR is desired later,
encode only a non-sensitive registration reference and state clearly
that it is for lookup, not access validation.

Provide a downloadable PDF pass that prints cleanly on A4 and can also
be viewed on a phone. Use a layout that does not clip in print. Do not
promise Apple Wallet support until actual signed .pkpass generation and
provisioning are implemented and tested. A static webpage or PDF is not
an Apple Wallet pass.

## QR code policy

Current scope: - No admission validation engine. - No mandatory QR
scanning. - No one-time token redemption. - No check-in API
dependency. - No claim that the QR code prevents copying or reuse. -
Manual attendance verification remains the operational process.

If a QR image is used only as event artwork, make it decorative and do
not make it look like a functional scan target. If a scannable team
reference is useful for organiser lookup, generate a genuine QR encoding
a random, non-sensitive registration reference. The admin can search
that reference manually. Do not encode student USNs, phone numbers,
names, or other personal information. If the organiser later requests
individual check-in, treat it as a separate feature with authentication,
secure token design, duplicate-scan handling, audit logs, and a
documented check-in workflow.

## Admin dashboard overview

Create a protected organiser dashboard separate from the public
registration journey. Require authenticated admin access. Use role-based
permissions. Do not expose admin routes or data through public
endpoints. Do not rely on a hidden URL as security. The dashboard should
use the same visual language but prioritise operational clarity over
decorative styling.

Dashboard sections: - Overview. - Teams. - Participants. - Student
directory. - Event settings. - Exports. - Admin users / permissions if
required. - Audit history.

Overview metrics: - Total eligible students. - Allocated students. -
Available students. - Active teams. - Cancelled teams. - Total
registered participants. - Manual attendance count if tracked. -
Remaining unallocated students.

Use real database values. Do not invent charts or metrics. Do not use
animated counters that repeatedly count up. Do not use blinking status
indicators. Keep tables readable and searchable.

## Admin team management

Admin team list should support: - Search by team name. - Search by
registration reference. - Search by leader name or USN. - Filter by
active/cancelled status. - Sort by registration time, team name, or
participant count. - Open a team detail view. - View team leader. - View
all team members. - View team colour. - View registration timestamp. -
View any permitted contact information. - Edit team name. - Change team
colour. - Replace a participant, subject to allocation rules. - Cancel a
team. - Restore a team if policy allows. - Export the selected team or
all teams.

Destructive actions: - Require confirmation. - Explain the impact. - Do
not use a casual one-click destructive action. - Record the
administrator and timestamp. - Release participant allocations
transactionally when a team is cancelled. - If a team is restored,
recheck all allocations before restoring it. - Never silently overwrite
another active allocation.

## Admin student directory management

Admin can view the full student directory. Admin can search by name and
USN. Admin can add a student. Admin can edit a student's name or USN.
Admin can deactivate a student without deleting historical registration
records. Admin can import a CSV with a preview and validation report.
Admin can export the current directory if permitted. Admin can see
whether a student is available or allocated. Admin can open the team
record for an allocated student. Admin can correct a mistaken allocation
through a controlled workflow.

CSV import: - Validate headers. - Validate required fields. - Detect
duplicate USNs within the file. - Detect USNs already in the database. -
Show row-level errors. - Preview changes before committing. - Do not
partially import an invalid file without explicit, clearly explained
partial-import support. - Never import arbitrary columns into the public
directory. - Do not allow an uploaded CSV to overwrite admin accounts or
role assignments.

## Manual attendance management

Attendance is manual in the initial scope. Admin or authorised
volunteers may mark each participant as present. Store attendance
status, timestamp, and the admin/volunteer identity. Allow correction
with an audit record. Provide a participant list sorted by team and
name. Provide a printable check-in sheet with columns for participant
name, USN, team, and a manual attendance checkbox. Do not make the
decorative QR code the source of attendance truth. Do not imply that
attendance has been verified by a QR scan. If volunteers need access,
create a limited role that can view relevant participant details and
mark attendance but cannot edit teams, import students, or change event
settings.

## Database design

Use a relational database. Supabase PostgreSQL is the preferred option
if it fits the existing project and deployment needs.

Suggested entities: - events - students - teams - team_members -
registrations or team registration records - admin_users / profiles -
attendance - audit_logs - event_settings

Suggested fields:

events: - id - slug - title - description - date_start - date_end -
venue_name - venue_address - registration_status - min_team_size -
max_team_size - leader_counts_as_member - created_at - updated_at

students: - id - usn - full_name - first_name - email, optional - phone,
optional - is_active - created_at - updated_at

teams: - id - event_id - team_name - normalized_team_name -
leader_student_id - team_colour - status - registration_reference -
created_at - updated_at - cancelled_at, optional

team_members: - id - event_id - team_id - student_id - member_role -
created_at

attendance: - id - event_id - team_id - student_id - status -
marked_by - marked_at - notes, restricted to admin

audit_logs: - id - actor_id - action - entity_type - entity_id -
timestamp - safe_metadata

event_settings: - event_id - registration_open - registration_close -
team_size rules - directory visibility policy - leader membership rule -
pass settings - event content fields

Use foreign keys. Use appropriate indexes. Use unique constraints for
USN and registration reference. Use an appropriate unique constraint or
allocation table to prevent a student from belonging to multiple active
teams for the same event. Use transactions for team creation,
cancellation, replacement, and restoration. Use timestamps in UTC in
storage and display local event time in Asia/Kolkata unless the event is
explicitly elsewhere. Avoid storing redundant data unless there is a
clear snapshot/history reason. If names are snapshotted into a
registration record for historical integrity, document why and ensure
edits do not create inconsistent current allocations.

## Supabase and backend security

If Supabase is used: - Enable Row Level Security on every table exposed
through the API. - Public users should not be able to read the complete
private student directory without a deliberate policy decision. - Public
registration should use narrowly scoped server-side functions or secure
RPC operations. - Never expose the service-role key to the browser. -
Admin access must be authenticated and role checked. - Admin roles must
not be self-assignable. - Protect admin role changes. - Restrict update
and delete operations. - Use server-side validation even when client
validation exists. - Use database constraints for critical invariants. -
Keep audit records for sensitive administrative changes. - Configure
allowed origins and redirect URLs. - Configure authentication email
templates if email auth is used. - Configure rate limits where
available. - Review database policies with both an anonymous user and an
ordinary authenticated user. - Test that one user cannot query another
user's private data. - Test that a public user cannot read admin
tables. - Test that a volunteer cannot change event settings. - Test
that an admin cannot accidentally create duplicate allocations.

Do not trust a client-supplied team name, student ID, allocation status,
role, or registration reference. The server must derive authoritative
values from the database.

## Input validation standards

Every input must have both client-side and server-side validation. Use
clear, inline messages adjacent to the relevant field. Do not rely on
alert() for ordinary validation. Do not show an error before the user
has had a reasonable opportunity to enter a value, except where
immediate format normalization is requested. Do not clear valid fields
after a validation error. Use accessible labels and descriptions. Set
appropriate autocomplete attributes. Prevent accidental form submission
from Enter where it would cause an unintended step transition. Disable
submit while a request is in progress, but keep the button label
informative. Do not use a spinner that blinks indefinitely. Show a
stable loading label and provide retry guidance on failure.

## USN normalization and validation

USN must be uppercased as the user types. The input should not allow
accidental lowercase values to remain in state. Normalize before search,
lookup, comparison, and submission. Trim outer whitespace. Validate the
expected USN pattern configured for the college/event. Do not invent a
USN regular expression without confirming the actual institutional
format. Keep validation error messages helpful and non-revealing. Do not
convert unrelated characters or silently drop characters. Test paste,
autofill, mobile keyboard, cursor movement, and lowercase entry. Ensure
screen readers receive the validation status.

## Name validation

Names should accept legitimate Unicode characters. Do not restrict names
to ASCII letters only. Allow spaces, apostrophes, hyphens, and common
diacritics. Trim leading and trailing whitespace. Collapse repeated
spaces for display where appropriate without changing the canonical
source unexpectedly. Do not uppercase or title-case the full name
automatically. Do not reject a valid name merely because it contains a
non-English character. Escape output in the UI to prevent injection.

## Phone and email validation

Only collect phone and email if they are needed for event communication
or identity verification. Phone input should support the configured
country code and valid national format. Do not assume every participant
uses an Indian mobile number unless the organiser confirms that. Email
should use sensible syntax validation and server-side verification if it
is relied upon. Do not treat a syntactically valid email as proof of
ownership. If OTP verification is enabled, use a trusted provider and
protect against repeated attempts. Do not show full phone numbers in
public directory rows.

## Team name validation

Team name is required. Set a configured maximum length. Trim whitespace.
Reject empty strings after trimming. Reject control characters. Escape
all output. Use a normalized comparison key for uniqueness. Decide
whether punctuation and emoji are allowed; default to ordinary letters,
numbers, spaces, and common punctuation. Do not allow HTML or script
markup. Show a specific duplicate-name message. Do not silently rename a
team.

## Search and filtering behaviour

Student search should match first name, full name, and USN. Search
should be case-insensitive. Normalize USN search input to uppercase.
Debounce remote queries if the directory is not already safely loaded.
For a directory of 60 records, a local filtered view may be appropriate
if the data is delivered securely for the current registration context.
Do not load sensitive student information into public page source.
Preserve search text when the user selects or deselects a participant.
Show a clear empty state. Provide a clear button. Do not show a fake "AI
search" feature.

## Error handling and edge cases

Handle: - Invalid USN. - Student not found. - Inactive student. - Leader
already allocated. - Participant already allocated. - Duplicate team
name. - Team too small. - Team too large. - Leader selected twice. -
Leader/member rule conflict. - Directory unavailable. - Realtime
connection unavailable. - Registration closed. - Registration not yet
open. - Event full if a capacity limit is configured. - Double-click
submit. - Network timeout. - Server error. - Authentication expired. -
Admin permission denied. - CSV import with malformed rows. -
Cancellation while another registration is in progress. - Participant
deactivated during a draft. - Team restoration conflict. - Browser
refresh during registration. - User returns to a stale registration
draft. - Two users trying to allocate the same student simultaneously.

For each state: - Explain what happened. - Explain what the user can do
next. - Preserve valid data where safe. - Avoid technical stack
traces. - Log useful diagnostics server-side without leaking personal
information.

## Motion and interaction design

Motion should be quiet, fast, purposeful, and optional. Use subtle
transitions for: - Step changes. - Row selection. - Checkmark
appearance. - Inline validation. - Modal open/close. - Availability
state updates. - Confirmation transition.

Motion rules: - Prefer opacity and small position changes. - Avoid
springy, bouncy movement. - Avoid continuous animation. - Avoid
pulsing. - Avoid blinking. - Avoid animated background gradients. -
Avoid parallax on essential content. - Avoid scroll-jacking. - Avoid
auto-rotating carousels. - Respect prefers-reduced-motion. - Do not
animate large blocks of content in a way that delays access. - Ensure
motion does not cause layout shifts. - Keep focus stable after a step
change.

## Casino Royale visual motifs

Use a small, consistent set of original vector motifs: - Playing-card
suit marks: spade, heart, diamond, club. - Poker chip rings. - Minimal
card-corner geometry. - Roulette-inspired arcs or radial lines. - Fine
red rules and corner ornaments. - Abstract casino table geometry. - A
restrained monogram or event seal if approved.

Use these motifs as supporting details in: - Hero artwork. - Section
separators. - Registration progress details. - Empty states. -
Confirmation pass. - Small decorative corners. - Printed pass.

Do not: - Use realistic guns or weapon illustrations. - Use copyrighted
James Bond imagery or film logos. - Use casino imagery that implies
gambling is being offered. - Scatter decorative icons randomly across
every section. - Put illustrations behind essential form text. - Use
emoji as the primary visual identity. - Add decorative elements that
harm accessibility or performance.

## Accessibility

Target WCAG 2.2 AA where practical. All interactive elements must be
keyboard accessible. Use semantic headings and landmarks. Use real
labels for form fields. Use aria-describedby for help and validation
text. Use aria-live politely for allocation conflicts and asynchronous
status updates. Do not announce every realtime update in a disruptive
way. Ensure focus is visible. Ensure colour contrast for text and
controls. Do not rely on colour alone for selected, available, or
allocated states. Use meaningful button labels. Ensure modals trap focus
correctly and return focus to the trigger. Ensure list rows are not
clickable divs without keyboard semantics. Support reduced motion. Use
appropriate alt text for meaningful imagery. Mark decorative SVGs as
hidden from assistive technology. Ensure QR artwork is not presented as
an accessible interactive control if it is decorative. Test with
VoiceOver on iOS and a desktop screen reader if possible.

## Privacy and data minimisation

The directory contains personal information. Treat it as private
event-registration data. Collect only what the organiser needs. Do not
display student photos. Do not expose phone numbers or email addresses
in the participant list. Do not expose the entire directory to search
engines. Use noindex for registration and admin routes where
appropriate. Do not place personal data in URLs. Do not encode personal
data into QR codes. Do not send participant details to analytics
providers. Do not use session replay tools on registration or admin
pages unless sensitive fields are properly masked and the organiser has
approved the tool. Set an appropriate retention policy. Restrict exports
to authorised admins. Log access to sensitive exports if feasible.
Provide a privacy notice explaining the purpose of collecting student
data, who can access it, how it is used, and how to request correction.
Do not invent legal compliance claims. Have the organiser review the
notice and applicable requirements.

## Performance

Keep the site fast on ordinary mobile connections. Reuse existing assets
where appropriate. Compress images. Prefer SVG for simple decorative
vectors. Lazy-load below-the-fold imagery. Avoid loading a large
animation library for a few transitions. Avoid shipping admin-only code
to the public route if the architecture supports code splitting. Avoid
loading all third-party scripts by default. Use a small icon set.
Prevent layout shifts. Provide useful loading states. Cache public event
content safely. Do not cache private student data in a shared public
cache. Use pagination only if the directory grows enough to justify it;
60 rows can be rendered efficiently when the data is safely available.

## SEO, sharing, and metadata

Set an accurate title and meta description for the event. Use canonical
URLs if the deployment has a stable domain. Set Open Graph title,
description, and approved event artwork. Use a readable share preview.
Do not put student or registration data into metadata. Do not index
private registration, confirmation, or admin pages. Do not invent event
details in structured data. Add event structured data only after date,
venue, organiser, and other required facts are confirmed.

## Email and notifications

If email delivery is configured, send a confirmation to the team leader.
Include team name, registration reference, participant summary, and
event information. Do not include unnecessary personal information. Do
not send individual participant emails unless the organiser requests
this and the addresses are available with appropriate consent. Do not
claim email was sent if the provider call failed. Use a transactional
email provider with verified sender configuration. Keep email templates
visually consistent with the event identity but simple and readable. If
email is not configured, provide the downloadable confirmation pass and
clear on-screen confirmation. Avoid introducing SMS or WhatsApp
messaging without an explicit provider and consent decision.

## Admin roles and permissions

Suggested roles: - Owner: full access, role management, event
configuration. - Organiser: team and student management, exports, event
operations. - Volunteer: view assigned participant data and mark manual
attendance only.

Use least privilege. Do not make every admin an owner. Do not allow
users to grant themselves a role. Require an owner action for role
changes. Record sensitive actions in audit history. Provide a safe
process for removing access. Do not display admin controls to public
visitors.

## Testing strategy

Write tests for business rules before declaring the platform
production-ready.

Unit tests: - USN normalization. - USN validation. - Name
normalization. - Team-name normalization. - Team-size validation. -
Avatar initial extraction. - Stable avatar gradient assignment. -
Registration status logic. - Participant availability logic.

Integration tests: - Successful team registration. - Leader already
allocated. - Participant already allocated. - Duplicate team name. -
Inactive student. - Team cancellation releases allocation. - Team
restoration checks allocation conflicts. - Atomic rollback if one
participant conflicts. - Concurrent registration attempts for the same
student. - Idempotent repeated submit. - Admin permission boundaries. -
CSV import validation. - Manual attendance update.

UI tests: - Mobile registration flow. - Desktop registration flow. -
Keyboard-only participant selection. - Search and clear. - Selected row
state. - Allocated row state. - Realtime update while another user has
the directory open. - Conflict message when availability changes during
selection. - USN lowercase auto-uppercase. - Refresh and resume
behaviour. - Reduced-motion mode. - Confirmation pass download. - Print
layout.

Security tests: - Anonymous access to private student data. - Anonymous
access to admin data. - Authenticated non-admin access to admin
endpoints. - Volunteer attempting organiser actions. - Client attempting
to set allocation status. - Client attempting to change role. - SQL
injection and XSS input handling. - Rate-limit identity lookups. -
Export permission checks.

## Acceptance criteria: public website

The migration is accepted when: - No obsolete OS Code recruitment copy
remains on public pages. - The event is clearly attributed to Powerhouse
Foundation. - All published event facts are confirmed by the
organiser. - The hero and section design feel cohesive and
intentional. - The page works at phone, tablet, and desktop widths. -
Navigation and footer work. - Registration status is accurate. - No dead
CTA remains. - No broken asset or console error remains. - No blinking
dots, floating islands, generic AI widgets, or gratuitous animated blobs
appear. - The site loads without requiring the user to wait for
decorative animation.

## Acceptance criteria: registration

The registration system is accepted when: - A valid eligible leader can
proceed. - A leader already allocated to a team is blocked with a clear
message. - A leader with an unknown or invalid USN receives a useful
error. - USN letters automatically become uppercase while typing and
pasting. - Team name is validated. - Student directory data comes from
the database. - Student avatars use stable gradients and first-name
initials. - The list is searchable. - Available students are
selectable. - Selected students have a clear selected state. - Students
allocated to another team have the amber/yellow state and are not
selectable. - Team name is shown for allocated students only where
permitted. - The selected counter is correct. - Team size rules are
enforced. - The leader membership rule is explicit. - A final server
transaction checks all selected students. - Concurrent attempts cannot
allocate one student twice. - A conflict does not partially create a
team. - The user can recover from a conflict without losing all valid
input. - Successful registration creates one team and the correct member
records. - Repeated submission does not create duplicate teams.

## Acceptance criteria: admin

The admin experience is accepted when: - Only authorised users can
access it. - Admin can see accurate registration totals. - Admin can
search teams and students. - Admin can inspect a team's members. - Admin
can edit team details under controlled rules. - Admin can cancel a team
and release allocations safely. - Admin can restore a team only if
allocation rules still pass. - Admin can manage the student directory. -
CSV import validates and previews records. - Admin can export permitted
registration data. - Admin can mark manual attendance. - Volunteer
permissions are restricted. - Sensitive actions are audited.

## Acceptance criteria: visual pass

The visual pass is accepted when: - It clearly says registration
confirmation, not verified admission. - It uses the Casino
Royale-inspired red treatment. - It includes Powerhouse Foundation
identity. - It displays the correct team name and registration
reference. - It displays the intended participant information. - It is
responsive on mobile. - It downloads as a valid PDF. - It prints without
clipping. - Decorative QR artwork is not represented as a functional
verification code. - If a functional reference QR is added, it contains
only a non-sensitive random reference. - Apple Wallet is not advertised
unless actual .pkpass generation has been implemented and tested.

## Suggested implementation phases

Phase 0 --- Discovery: - Inspect repository and existing deployment. -
Identify reusable components. - Confirm framework and backend
constraints. - Confirm event content and exact team rules. - Confirm
whether leader counts as a member. - Confirm whether all 60 students are
eligible. - Confirm whether registration requires OTP. - Confirm who can
view allocation/team names. - Confirm event capacity and registration
dates if applicable.

Phase 1 --- Design foundation: - Define tokens. - Update global
typography and layout. - Build header and footer. - Rework hero and
public event sections. - Establish responsive behaviour. - Remove
recruitment content.

Phase 2 --- Database and security: - Create schema and migrations. -
Seed test student data only. - Add uniqueness constraints. - Configure
Row Level Security. - Implement secure registration operation. -
Implement admin authentication and roles. - Test database invariants.

Phase 3 --- Registration: - Implement leader identity validation. -
Implement team details. - Implement participant list and search. -
Implement stable gradient avatars. - Implement selection and allocation
states. - Implement live updates. - Implement final transactional
submission. - Implement conflict recovery. - Implement confirmation
page.

Phase 4 --- Admin: - Build overview. - Build team management. - Build
student directory management. - Build cancellation and replacement
flows. - Build exports. - Build manual attendance. - Add audit history.

Phase 5 --- Pass and polish: - Build visual team pass. - Build PDF
export and print styles. - Add optional decorative/reference QR as
explicitly scoped. - Refine responsive and accessibility behaviour. -
Run performance and security checks.

Phase 6 --- Launch: - Configure production environment. - Import the
approved student directory. - Create admin accounts securely. - Verify
event details. - Test end-to-end with test records. - Remove test
data. - Confirm backup and recovery plan. - Deploy. - Perform a
production smoke test.

## Required organiser decisions before production

The implementation must not guess the following: - Final event title. -
Event date and time. - Venue and address. - Registration opening and
closing dates. - Whether registration is free or paid. - Exact team
size. - Whether the leader counts as one of the team members. - Whether
teams can have fewer than the maximum number. - Whether the 60 students
are the only eligible participants. - Whether external participants may
join. - Whether the leader must be from the fixed directory. - Whether a
student can be allocated to only one team across the event or across
multiple event instances. - Whether team names must be unique. - Whether
allocated team names may be shown to other leaders. - Whether OTP is
required. - Which contact details must be collected. - Whether
confirmation email is required. - Whether individual participant passes
are needed or only a team pass. - Whether the QR is decorative or a
non-sensitive lookup reference. - Who has owner, organiser, and
volunteer access. - Who is responsible for manual attendance. - Privacy
notice wording and data retention period.

If a decision is missing, implement a configurable setting with a safe
default or leave the relevant feature unpublished until the organiser
confirms it.

## Out of scope unless separately approved

The following are not part of the initial build: - Payment gateway. -
Refund management. - Seat selection. - Public ticket marketplace. -
Automated admission scanning. - Secure one-time QR redemption. -
Individual Apple Wallet passes. - Google Wallet issuer integration. -
SMS or WhatsApp campaigns. - Public participant profiles. - Participant
photographs. - Social feed or comments. - Leaderboards. -
Gamification. - AI chatbot. - AI-generated participant descriptions. -
Public team browsing. - Live public attendee count if it could expose
participant activity. Do not build these merely because a generic event
platform might include them.

## Design quality bar: anti-patterns to avoid

Do not ship: - Blinking dots. - Pulsing status indicators. - Floating
islands. - Floating glass cards with no functional purpose. - Random
decorative cards. - Fake terminal panels. - Fake analytics charts. -
Fake loading progress. - Infinite carousels. - Excessive
glassmorphism. - Frosted glass behind every row. - Neon borders. - Large
glowing buttons. - Unnecessary gradients behind text. - Floating action
buttons that obscure content. - AI-generated stock illustrations. -
Random emoji decorations. - Oversized rounded rectangles everywhere. -
Excessive animation on scroll. - Scroll hijacking. - Tiny low-contrast
text. - Placeholder copy left in production. - Buttons that do
nothing. - Fake real-time labels. - Fake security badges. - Fake ticket
validation. - Fake Wallet buttons. - Fake testimonials or sponsor
logos. - Invented event information.

## Design quality bar: what good looks like

The interface should feel: - Quietly confident. - Editorial and
cinematic. - Precise. - Responsive. - Native-feeling on iPhone. - Clear
at a glance. - Trustworthy. - Fast. - Consistent. - Deliberately
art-directed.

Use: - Strong typographic hierarchy. - Generous but efficient spacing. -
Clean alignment. - Subtle separators. - A disciplined colour palette. -
Restrained gradients for student avatars. - Purposeful amber allocation
states. - A small number of original casino vector motifs. - Smooth but
restrained transitions. - Excellent mobile form ergonomics. - Clear
empty, error, loading, and success states. - Consistent component
behaviour.

## Implementation instructions for the coding agent

Work in the existing repository. Do not stop after producing a visual
mock-up. Implement functional frontend behaviour and the
backend/database work that the repository can support. Do not fabricate
backend success using local component state. Do not hardcode the 60
students. Do not expose secrets. Do not skip database constraints. Do
not treat client-side validation as security. Do not use fake QR
graphics while claiming they are scannable. Do not create nonfunctional
Wallet buttons. Do not invent event details. Do not remove working
sections without checking their dependencies. Do not introduce
unnecessary dependencies. Do not rewrite unrelated code. Do not use
placeholder buttons for unfinished functionality in the final build. If
an integration requires credentials, implement the integration boundary,
document the exact environment variables, and clearly identify it as
pending configuration. Keep code modular and maintainable. Use
meaningful component names. Keep business logic out of large
presentation components. Keep database operations in a dedicated
service/server layer. Add tests for critical invariants. Run lint, type
checks, tests, and production build. Fix errors introduced by the
migration. At the end, provide a concise implementation report
listing: - What changed. - Which routes were created or updated. - Which
database migrations were added. - Which environment variables are
required. - Which tests were run and their result. - Which features
remain blocked on organiser decisions or credentials. - How to
seed/import the approved student directory. - How to create the first
admin account. - How to deploy and roll back.

## Suggested component map

Adapt this map to the existing framework rather than creating duplicate
components: - EventSiteLayout - EventHeader - EventHero - EventDetails -
EventProgramme - RegistrationExplainer - EventFAQ - EventFooter -
RegistrationLayout - RegistrationProgress - LeaderIdentityForm -
USNInput - TeamDetailsForm - TeamNameInput - StudentDirectory -
StudentSearch - StudentRow - StudentAvatar - AllocationStatus -
SelectionSummary - RegistrationReview - RegistrationConflict -
RegistrationSuccess - TeamPass - AdminLayout - AdminOverview -
TeamTable - TeamDetail - StudentTable - StudentImport -
AttendanceTable - EventSettings - AuditLog

Keep components focused. Do not create one component per tiny wrapper.
Do not duplicate validation logic between screens. Share validation
schemas between client and server where the stack allows, while still
validating authoritatively on the server.

## Suggested API operations

Use the existing backend conventions where possible. The following are
conceptual operations, not a mandate to expose these exact public
routes.

Public / registration: - Get public event configuration. - Validate
leader USN eligibility. - Check leader allocation status. - Create or
update a registration draft if drafts are supported. - Search eligible
participants within an authorised registration session. - Get
participant allocation status. - Submit team registration transaction. -
Get registration confirmation by a secure, non-guessable reference if a
confirmation link is required.

Admin: - Get dashboard summary. - List teams with filters. - Get team
details. - Update team details. - Cancel team. - Restore team. - Replace
team member. - List students. - Create/update/deactivate student. -
Import students. - Export teams and participants. - Mark attendance. -
Update event settings. - Manage roles. - Read audit history.

Every operation must authenticate or authorise appropriately. Use
server-side schema validation. Return stable error codes that the
frontend can map to user-friendly messages. Avoid exposing raw database
errors.

## Operational readiness and launch checklist

Before launch: - Verify domain and HTTPS. - Verify production
environment variables. - Verify database backups. - Verify admin account
creation. - Verify Row Level Security. - Verify student CSV import. -
Verify all 60 student records. - Check duplicate USNs. - Check duplicate
names without treating names as unique identifiers. - Confirm event
team-size rules. - Confirm leader inclusion rule. - Confirm registration
open/close configuration. - Confirm privacy notice. - Confirm event
date, venue, and contact details. - Confirm email sender if email is
enabled. - Confirm PDF download. - Test on iPhone Safari. - Test on
Android Chrome. - Test on desktop Chrome and Safari. - Test a full
registration. - Test duplicate leader. - Test duplicate participant. -
Test concurrent allocation. - Test cancellation and release. - Test
admin permissions. - Test volunteer permissions. - Test CSV export. -
Test manual attendance. - Test no-network and server-error states. -
Remove test registrations. - Confirm organiser support contact. -
Confirm rollback plan.

## Final product principle

Build the simplest robust product that fulfils the real event workflow.

The public site should sell the event experience through clear design
and accurate information. The registration flow should make team
formation easy and prevent duplicate allocations reliably. The directory
should make availability immediately understandable without exposing
unnecessary personal information. The admin dashboard should let
organisers operate the event without spreadsheets becoming the source of
truth. The pass should look excellent but must not pretend to provide
security or validation that does not exist.

Prioritise correctness, privacy, accessibility, and visual restraint
over novelty. A polished production experience is not achieved by adding
more effects. It is achieved by making every detail intentional, every
state understandable, and every action dependable.

## Public website checklist

-   [ ] Inspect and preserve the existing hero composition where it
    remains useful.
-   [ ] Replace OS Code recruitment headline and supporting copy.
-   [ ] Replace recruitment CTAs with event registration CTAs.
-   [ ] Remove recruitment application questions.
-   [ ] Remove stale club-specific routes.
-   [ ] Update page metadata and social preview.
-   [ ] Verify every event fact against organiser-provided content.
-   [ ] Build responsive header navigation.
-   [ ] Build responsive footer.
-   [ ] Add event details section.
-   [ ] Add event FAQ section.
-   [ ] Add organiser contact details only when supplied.
-   [ ] Ensure registration status is reflected in all CTAs.
-   [ ] Ensure closed registration cannot be bypassed by a direct URL.
-   [ ] Check mobile safe-area spacing.
-   [ ] Check image loading and layout stability.
-   [ ] Check keyboard navigation.
-   [ ] Check reduced-motion mode.
-   [ ] Check contrast in all themes.
-   [ ] Check no dead links remain.

## Registration flow checklist

-   [ ] Build a clear multi-step registration layout.
-   [ ] Show the current step and total steps.
-   [ ] Preserve valid form state when navigating backwards.
-   [ ] Normalize USN to uppercase while typing.
-   [ ] Normalize pasted USN values.
-   [ ] Validate USN against the confirmed institutional format.
-   [ ] Trim whitespace from USN.
-   [ ] Check leader existence on the server.
-   [ ] Check leader active status.
-   [ ] Check whether leader already belongs to an active team.
-   [ ] Show existing team name only when policy permits.
-   [ ] Block a leader from creating a second active team.
-   [ ] Collect the team name.
-   [ ] Normalize team name for duplicate comparison.
-   [ ] Validate team name length.
-   [ ] Reject empty team names.
-   [ ] Reject unsafe control characters.
-   [ ] Check team name uniqueness on the server.
-   [ ] Assign a stable team accent colour.
-   [ ] Load student directory from the database.
-   [ ] Show only required student fields.
-   [ ] Derive avatar initial from first name.
-   [ ] Assign stable gradient from student identity.
-   [ ] Search by full name.
-   [ ] Search by first name.
-   [ ] Search by USN.
-   [ ] Normalize search case.
-   [ ] Show available participant state.
-   [ ] Show selected participant state.
-   [ ] Show allocated participant state.
-   [ ] Show team name for allocated participant when permitted.
-   [ ] Prevent selecting allocated participants.
-   [ ] Prevent selecting the leader twice.
-   [ ] Enforce configured team size.
-   [ ] Show selected count and remaining count.
-   [ ] Handle participant becoming allocated during selection.
-   [ ] Handle realtime disconnection.
-   [ ] Revalidate all participants during final submission.
-   [ ] Submit the team atomically.
-   [ ] Handle duplicate submit safely.
-   [ ] Handle transaction conflicts without partial registration.
-   [ ] Show a clear success page.
-   [ ] Generate a downloadable team pass.

## Admin checklist

-   [ ] Protect admin routes.
-   [ ] Implement role checks server-side.
-   [ ] Create owner role.
-   [ ] Create organiser role.
-   [ ] Create volunteer role if needed.
-   [ ] Show accurate team count.
-   [ ] Show accurate allocated participant count.
-   [ ] Show accurate available participant count.
-   [ ] Search teams.
-   [ ] Filter teams by status.
-   [ ] View team details.
-   [ ] Edit team name.
-   [ ] Change team colour.
-   [ ] Replace participant safely.
-   [ ] Cancel team safely.
-   [ ] Release allocations on cancellation.
-   [ ] Restore team only after rechecking availability.
-   [ ] Search student directory.
-   [ ] Add student.
-   [ ] Edit student.
-   [ ] Deactivate student.
-   [ ] Preview CSV import.
-   [ ] Validate CSV import.
-   [ ] Report duplicate USNs.
-   [ ] Commit valid import transactionally.
-   [ ] Export permitted data.
-   [ ] Mark manual attendance.
-   [ ] Print attendance sheet.
-   [ ] Restrict volunteer permissions.
-   [ ] Record audit events.

## Security and quality checklist

-   [ ] Enable database row-level security.
-   [ ] Keep service-role keys server-side.
-   [ ] Validate all input on the server.
-   [ ] Use database constraints for allocation uniqueness.
-   [ ] Use transactions for team registration.
-   [ ] Use transactions for cancellation.
-   [ ] Rate-limit identity lookups.
-   [ ] Prevent public access to admin records.
-   [ ] Prevent public access to unnecessary contact data.
-   [ ] Prevent role self-assignment.
-   [ ] Escape user-generated text.
-   [ ] Prevent XSS in team names.
-   [ ] Do not put PII in QR data.
-   [ ] Do not put PII in URLs.
-   [ ] Do not index private routes.
-   [ ] Test concurrent registration.
-   [ ] Test idempotent submission.
-   [ ] Test admin permission boundaries.
-   [ ] Test volunteer permission boundaries.
-   [ ] Test CSV upload security.
-   [ ] Test export permissions.
-   [ ] Test mobile browser compatibility.
-   [ ] Test accessibility.
-   [ ] Test production build.
-   [ ] Document rollback.

## Registration test-case matrix

  -----------------------------------------------------------------------
  Scenario                            Expected result
  ----------------------------------- -----------------------------------
  Valid eligible leader enters a      Server confirms eligibility and
  valid USN                           permits progression.

  Leader enters lowercase USN         Input converts letters to uppercase
                                      immediately; normalized value is
                                      submitted.

  Leader pastes lowercase USN         Pasted value is normalized without
                                      losing cursor usability.

  Leader enters malformed USN         Inline format error appears; no
                                      directory access is granted.

  Leader USN is absent from directory User receives a neutral
                                      not-eligible message.

  Leader is inactive                  Registration is blocked with an
                                      organiser-contact route if
                                      configured.

  Leader is already in an active team Registration is blocked and
                                      existing team is shown only
                                      according to privacy policy.

  Leader is included in team size and Duplicate self-selection is
  is selected again                   prevented.

  Leader is excluded from team size   UI clearly explains the configured
                                      member count.

  Team name is blank                  Submission is blocked with an
                                      inline message.

  Team name contains only whitespace  Submission is blocked after
                                      normalization.

  Team name duplicates an active team Server rejects it and asks for
  ignoring case                       another name.

  Team name contains markup           Markup is escaped or rejected; no
                                      script executes.

  Team is below minimum size          Submission is blocked and remaining
                                      count is shown.

  Team exceeds maximum size           Additional selections are
                                      prevented.

  A participant is available          Participant can be selected.

  A participant is already allocated  Participant row shows allocated
                                      state and cannot be selected.

  A participant is selected by        Selected state and counter update.
  current leader                      

  A selected participant is           Selected state and counter update.
  deselected                          

  Search returns no matches           Helpful empty state appears.

  Directory request fails             Retry state appears; no false
                                      availability is shown.

  Realtime allocation arrives for a   Student is marked unavailable and
  selected student                    user is asked to choose a
                                      replacement.

  Realtime cancellation releases a    Student becomes available without
  student                             being auto-selected.

  Two leaders submit the same student Only one transaction succeeds; the
  simultaneously                      other receives a conflict.

  Submit button is double-clicked     Only one team is created.

  Network times out after successful  Idempotent retry returns the
  server commit                       existing registration result.

  One selected participant conflicts  Entire transaction rolls back; no
  during commit                       partial team is created.

  Registration is closed              Direct registration route blocks
                                      submission.

  Registration is not yet open        User sees the configured opening
                                      message.

  Registration draft is refreshed     Safe draft behaviour follows
                                      documented expiry and privacy
                                      policy.
  -----------------------------------------------------------------------

## Admin and operations test-case matrix

  -----------------------------------------------------------------------
  Scenario                            Expected result
  ----------------------------------- -----------------------------------
  Unauthenticated visitor opens admin Access is denied and no admin data
  route                               is returned.

  Authenticated ordinary user opens   Access is denied.
  admin route                         

  Volunteer opens attendance view     Only permitted participant data and
                                      attendance actions are available.

  Volunteer attempts to edit team     Server denies the operation.
  name                                

  Organiser opens team list           Authorised team data is shown.

  Organiser searches by USN           Matching student and team are
                                      returned within permissions.

  Admin cancels a team                Team status changes and allocations
                                      are released atomically.

  Admin restores a team with all      Team can be restored after
  members free                        transactional validation.

  Admin restores a team with one      Restore is rejected without
  member allocated elsewhere          changing other records.

  Admin replaces a member             Old allocation is released and new
                                      allocation is claimed atomically.

  Admin imports valid CSV             Preview and import succeed with a
                                      row count summary.

  Admin imports duplicate USNs        Duplicates are reported and not
                                      silently accepted.

  Admin imports malformed rows        Row-level errors are shown before
                                      commit.

  Admin exports participant data      Only authorised fields are
                                      exported.

  Volunteer exports data              Export is denied unless explicitly
                                      permitted.

  Admin marks participant present     Attendance record and actor
                                      timestamp are stored.

  Admin corrects attendance           Correction is stored and audited.

  Admin changes event team size       Setting is validated and existing
                                      teams are not silently corrupted.

  Admin changes registration status   Public CTA and submission gate
                                      reflect the new status.

  Admin changes team colour           Colour persists across public and
                                      admin views.
  -----------------------------------------------------------------------

## Privacy and security test-case matrix

  -----------------------------------------------------------------------
  Scenario                            Expected result
  ----------------------------------- -----------------------------------
  Anonymous API request lists all     Request is denied or returns only
  students                            explicitly public minimal data.

  Public page source is inspected     No private student dataset or
                                      secrets are embedded.

  Browser bundle is inspected         No service-role key or private
                                      signing key is present.

  Client submits a fabricated student Server verifies student exists and
  ID                                  is eligible.

  Client submits fabricated           Server ignores client-supplied
  allocation status                   status and checks database.

  Client submits fabricated admin     Server rejects privilege
  role                                escalation.

  User enters script in team name     Output is safely escaped.

  User enters SQL-like input          Parameterized queries prevent
                                      injection.

  QR data is inspected                No USN, phone, email, or
                                      participant name is encoded.

  Private registration route is       Route is not indexed.
  crawled                             

  Analytics is inspected              No participant PII is sent to
                                      analytics.

  Export URL is shared with           Access is denied.
  unauthorised user                   

  Identity lookup is repeatedly       Rate limit or abuse protection
  called                              activates.

  Admin role is revoked               Subsequent privileged requests are
                                      denied.

  Database policy is tested as        Private tables remain inaccessible.
  anonymous                           
  -----------------------------------------------------------------------

## Field-level data contract

  ---------------------------------------------------------------------------
  Field            Source                         Required Validation /
                                                           handling
  ---------------- ----------------- --------------------- ------------------
  Event ID         Event                               Yes Server-owned
                   configuration                           identifier

  Event title      Organiser                           Yes Plain text,
                                                           escaped

  Event date       Organiser                  If published Confirmed timezone
                                                           and format

  Venue            Organiser                  If published Confirmed address

  Student ID       Database                            Yes Stable internal ID

  USN              Approved student                    Yes Unique, normalized
                   directory                               uppercase

  Full name        Approved student                    Yes Unicode-safe
                   directory                               

  First name       Derived or stored            For avatar Initial extraction

  Team ID          Database             Yes after creation Server-generated

  Team name        Team leader                         Yes Trimmed, bounded,
                                                           unique if
                                                           configured

  Team colour      Palette / admin                     Yes Persisted
                                                           controlled value

  Leader student   Verified student                    Yes Must be eligible
  ID                                                       and unallocated

  Team member IDs  Selected               Configured count Unique and
                   directory entries                       eligible

  Registration     Server                Yes after success Random,
  reference                                                non-sensitive,
                                                           non-guessable

  Registration     Server/admin                        Yes Controlled enum
  status                                                   

  Attendance       Admin/volunteer                Optional Controlled enum
  status                                                   

  Created          Server                              Yes UTC
  timestamp                                                

  Updated          Server                              Yes UTC
  timestamp                                                

  Cancelled        Server                         Optional UTC
  timestamp                                                

  Actor ID         Authentication        For admin actions Server-derived
  ---------------------------------------------------------------------------

## Controlled status vocabulary

  -----------------------------------------------------------------------
  Domain                  Status                  Meaning
  ----------------------- ----------------------- -----------------------
  Registration            draft                   In-progress
                                                  registration, if drafts
                                                  are implemented

  Registration            confirmed               Team registration
                                                  completed

  Registration            cancelled               Team cancelled by
                                                  authorised organiser

  Student                 active                  Eligible for
                                                  registration

  Student                 inactive                Not eligible for new
                                                  allocation

  Allocation              available               Not allocated to an
                                                  active team

  Allocation              selected                Selected in the current
                                                  unsaved registration

  Allocation              allocated               Member of an active
                                                  team

  Attendance              not_marked              No manual attendance
                                                  decision recorded

  Attendance              present                 Manually marked present

  Attendance              absent                  Manually marked absent

  Attendance              excused                 Manually marked
                                                  excused, if used
  -----------------------------------------------------------------------

## Error response contract

Return structured, stable error codes. Suggested codes: -
`INVALID_USN_FORMAT` - `STUDENT_NOT_FOUND` - `STUDENT_INACTIVE` -
`LEADER_ALREADY_ALLOCATED` - `PARTICIPANT_ALREADY_ALLOCATED` -
`TEAM_NAME_REQUIRED` - `TEAM_NAME_TAKEN` - `TEAM_SIZE_INVALID` -
`REGISTRATION_NOT_OPEN` - `REGISTRATION_CLOSED` -
`REGISTRATION_CONFLICT` - `DUPLICATE_SUBMISSION` - `UNAUTHENTICATED` -
`FORBIDDEN` - `RATE_LIMITED` - `VALIDATION_ERROR` -
`SERVICE_UNAVAILABLE`

The frontend maps these codes to concise, human-readable messages. Never
display raw SQL, stack traces, database hostnames, or secret
configuration.

## Detailed build checklist --- Repository

-   [ ] Record the current branch and working tree state before editing.
-   [ ] Identify the app entry point and route definitions.
-   [ ] Identify the existing OS Code landing page components.
-   [ ] Identify existing form submission endpoints.
-   [ ] Identify all references to the old club name and recruitment
    flow.
-   [ ] Identify the current design tokens and CSS variables.
-   [ ] Identify installed icon and animation packages.
-   [ ] Identify the current deployment platform and build command.
-   [ ] Identify whether environment variables are documented.
-   [ ] Create a migration branch before large changes.

## Detailed build checklist --- Design

-   [ ] Create the event design token file.
-   [ ] Define the primary and secondary surfaces.
-   [ ] Define typography and spacing tokens.
-   [ ] Define the casino red accent.
-   [ ] Define the amber allocation state.
-   [ ] Define available and selected states.
-   [ ] Define the avatar gradient palette.
-   [ ] Define focus and disabled styles.
-   [ ] Define motion durations and easing.
-   [ ] Define responsive breakpoints using existing project
    conventions.
-   [ ] Define the content max-width.
-   [ ] Define button sizes and hierarchy.
-   [ ] Define form field styles.
-   [ ] Define list row height and spacing.
-   [ ] Define modal and drawer behaviour.
-   [ ] Define print styles for the pass.

## Detailed build checklist --- Public pages

-   [ ] Replace the OS Code hero copy.
-   [ ] Replace recruitment illustrations with approved event artwork.
-   [ ] Update the navigation labels.
-   [ ] Add event overview content.
-   [ ] Add event detail fields.
-   [ ] Add registration explanation.
-   [ ] Add FAQ content from organiser-approved answers.
-   [ ] Add contact section using confirmed details.
-   [ ] Update footer identity.
-   [ ] Update title and description metadata.
-   [ ] Update Open Graph image.
-   [ ] Set private routes to noindex.
-   [ ] Verify all public links.

## Detailed build checklist --- Backend

-   [ ] Create the event record.
-   [ ] Create student schema.
-   [ ] Create team schema.
-   [ ] Create team membership schema.
-   [ ] Create attendance schema.
-   [ ] Create audit log schema.
-   [ ] Create event settings schema.
-   [ ] Add unique USN constraint.
-   [ ] Add unique registration reference constraint.
-   [ ] Add active allocation uniqueness enforcement.
-   [ ] Add team name uniqueness if configured.
-   [ ] Add required foreign keys.
-   [ ] Add query indexes.
-   [ ] Create transactional registration operation.
-   [ ] Create transactional cancellation operation.
-   [ ] Create transactional replacement operation.
-   [ ] Create safe restore operation.
-   [ ] Add idempotency handling.
-   [ ] Add structured error responses.
-   [ ] Add rate limiting to identity lookups.

## Detailed build checklist --- Security

-   [ ] Enable row-level security.
-   [ ] Write public event configuration policy.
-   [ ] Write registration lookup policy.
-   [ ] Write registration creation policy.
-   [ ] Write admin read policy.
-   [ ] Write admin write policy.
-   [ ] Write volunteer attendance policy.
-   [ ] Protect role management.
-   [ ] Keep service credentials server-side.
-   [ ] Configure allowed origins.
-   [ ] Configure authentication redirect URLs.
-   [ ] Test anonymous table access.
-   [ ] Test authenticated non-admin access.
-   [ ] Test volunteer permission boundary.
-   [ ] Test organiser permission boundary.
-   [ ] Test owner permission boundary.

## Detailed build checklist --- Registration UI

-   [ ] Build registration shell.
-   [ ] Build step indicator.
-   [ ] Build leader USN field.
-   [ ] Implement uppercase normalization.
-   [ ] Implement format validation.
-   [ ] Implement leader eligibility lookup.
-   [ ] Implement leader duplicate check.
-   [ ] Build team name field.
-   [ ] Implement team name duplicate check.
-   [ ] Build participant directory.
-   [ ] Build search input.
-   [ ] Build student avatar.
-   [ ] Build participant row.
-   [ ] Build selected state.
-   [ ] Build allocated state.
-   [ ] Build team colour marker.
-   [ ] Build selected count.
-   [ ] Build team size validation.
-   [ ] Build review summary.
-   [ ] Build transactional submit action.
-   [ ] Build conflict recovery state.
-   [ ] Build success state.

## Detailed build checklist --- Realtime

-   [ ] Subscribe to relevant allocation changes.
-   [ ] Scope subscriptions to the current event.
-   [ ] Handle subscription errors.
-   [ ] Handle reconnection.
-   [ ] Update affected student rows.
-   [ ] Preserve search and selection state.
-   [ ] Resolve stale selected participants.
-   [ ] Revalidate before final submit.
-   [ ] Do not treat realtime as authoritative.
-   [ ] Test two browser sessions concurrently.

## Detailed build checklist --- Pass and exports

-   [ ] Design the team pass.
-   [ ] Add event identity.
-   [ ] Add team name.
-   [ ] Add registration reference.
-   [ ] Add team accent colour.
-   [ ] Add participant summary.
-   [ ] Add restrained casino vector ornament.
-   [ ] Add optional non-sensitive QR reference only if approved.
-   [ ] Generate PDF.
-   [ ] Add print stylesheet.
-   [ ] Test A4 output.
-   [ ] Test mobile viewing.
-   [ ] Do not add fake Wallet support.
-   [ ] Document future Wallet integration separately.

## Detailed build checklist --- Admin

-   [ ] Build admin login route.
-   [ ] Build admin navigation.
-   [ ] Build overview metrics.
-   [ ] Build team table.
-   [ ] Build team detail page.
-   [ ] Build team search and filters.
-   [ ] Build student table.
-   [ ] Build student editor.
-   [ ] Build CSV import preview.
-   [ ] Build import validation.
-   [ ] Build export action.
-   [ ] Build team cancellation confirmation.
-   [ ] Build team restore workflow.
-   [ ] Build participant replacement workflow.
-   [ ] Build attendance view.
-   [ ] Build printable attendance sheet.
-   [ ] Build event settings page.
-   [ ] Build audit history view.

## Detailed build checklist --- Quality assurance

-   [ ] Run formatter.
-   [ ] Run linter.
-   [ ] Run type checker.
-   [ ] Run unit tests.
-   [ ] Run integration tests.
-   [ ] Run end-to-end tests.
-   [ ] Run production build.
-   [ ] Inspect browser console.
-   [ ] Inspect network failures.
-   [ ] Test phone portrait.
-   [ ] Test phone landscape.
-   [ ] Test tablet.
-   [ ] Test desktop.
-   [ ] Test keyboard navigation.
-   [ ] Test VoiceOver labels.
-   [ ] Test reduced motion.
-   [ ] Test colour contrast.
-   [ ] Test registration race condition.
-   [ ] Test cancellation and reallocation.
-   [ ] Test CSV import edge cases.
-   [ ] Test backup and rollback.

## Requirement traceability register

  -----------------------------------------------------------------------
  ID                                  Requirement
  ----------------------------------- -----------------------------------
  MIG-001                             Inspect and preserve reusable OS
                                      Code website structure.

  MIG-002                             Remove all obsolete recruitment
                                      flows and copy.

  BRD-001                             Use Powerhouse Foundation as event
                                      organiser identity.

  DSN-001                             Use an original Apple-inspired
                                      clean design language.

  DSN-002                             Use Casino Royale motifs sparingly
                                      and legally.

  DSN-003                             Avoid blinking dots, floating
                                      islands, and generic AI visuals.

  DSN-004                             Use a readable list-based
                                      participant directory.

  DSN-005                             Use stable first-name gradient
                                      avatars.

  REG-001                             Verify team leader by USN.

  REG-002                             Uppercase USN during typing and
                                      paste.

  REG-003                             Block leaders already allocated to
                                      a team.

  REG-004                             Validate team name.

  REG-005                             Select participants from
                                      database-backed directory.

  REG-006                             Prevent duplicate student
                                      allocation.

  REG-007                             Enforce configured team size.

  REG-008                             Show selected and allocated states
                                      clearly.

  REG-009                             Update directory when allocations
                                      change.

  REG-010                             Use atomic server-side registration
                                      transaction.

  REG-011                             Handle concurrent registration
                                      conflicts.

  REG-012                             Preserve valid user input after
                                      conflict.

  PAS-001                             Generate a visual team confirmation
                                      pass.

  PAS-002                             Use Casino Royale-inspired red pass
                                      design.

  PAS-003                             Do not misrepresent decorative QR
                                      as secure ticket validation.

  PAS-004                             Offer PDF download and print
                                      layout.

  ADM-001                             Protect organiser dashboard.

  ADM-002                             Support team and student
                                      management.

  ADM-003                             Support cancellation and safe
                                      allocation release.

  ADM-004                             Support CSV import and export.

  ADM-005                             Support manual attendance.

  SEC-001                             Enforce database row-level
                                      security.

  SEC-002                             Keep secrets server-side.

  SEC-003                             Minimise participant personal data
                                      exposure.

  SEC-004                             Audit sensitive administrative
                                      actions.

  A11Y-001                            Support keyboard navigation and
                                      screen readers.

  A11Y-002                            Do not rely on colour alone.

  A11Y-003                            Respect reduced motion.

  QA-001                              Test registration and allocation
                                      invariants.

  QA-002                              Test concurrency and duplicate
                                      submission.

  QA-003                              Test public, admin, and volunteer
                                      permission boundaries.
  -----------------------------------------------------------------------
