# Strong Buddies website

A static website made of plain HTML, CSS and a little JavaScript. No build step or installs are needed.

## Open it in VS Code
1. Unzip the folder and open it in VS Code (File > Open Folder).
2. Install the "Live Server" extension, right-click `index.html` and choose "Open with Live Server".
3. Turn on File > Auto Save so edits show up straight away.

## Folder layout
- `index.html` - home page
- `about/` - who-we-are, the-problem, our-approach, restoring-dignity
- `programmes/` - hospital-literacy-and-play, project-dream-again, can-you-see-us
- `get-involved.html` and `get-involved/` - overview, volunteer, partner, fundraise
- `css/style.css` - all colours and styling (the colour variables are at the top, under `:root`)
- `js/nav.js` - the mobile menu
- `assets/logo.png` - your logo
- `assets/illustrations/` - the children illustrations (SVG files)

## Things to replace (use Find in Files: Ctrl+Shift+F)
| Search for | Replace with |
|---|---|
| `#replace-with-donation-link` | your donation page, or a page with mobile money/bank details |
| `#replace-with-volunteer-form-link` | your volunteer form URL |
| `#replace-with-partner-form-link` | your partnership form URL |
| `#replace-with-fundraising-form-link` | your fundraising form URL |
| `#replace-with-newsletter-form-link` | your newsletter sign-up URL |
| `[your-email@example.org]` | your email address |
| `[phone number]` | your phone number |

## Using real photos instead of illustrations
Each illustration is an `<img>` tag pointing to a file in `assets/illustrations/`. To use a photo, save it in `assets/`, then change the `src` and `alt`, for example:
`<img src="../assets/children-reading.jpg" alt="Children reading with a volunteer">`
(use `../assets/` on pages inside a subfolder). Only use photos of children with parental or guardian consent, and avoid details that could identify a child. The current illustrations show fictional children, so don't describe them as real beneficiaries.

## Changing the menu, header or footer
These are repeated in every .html file, so a change has to be made in each file (Find in Files helps).

## Hosting with your own domain
Upload the whole folder to a static host (GitHub Pages, Netlify, Cloudflare Pages or regular shared hosting), then point your domain at it using your host's guide. Check current prices and terms with the provider.
