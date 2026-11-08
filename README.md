# Dr. Sanoar Rahman — Academic & Research Portfolio

A multi-page, editable academic portfolio built with plain HTML, CSS and JavaScript for GitHub Pages.

## Included pages

- `index.html` — Home
- `pages/people.html` — People
- `pages/lab-news.html` — Lab News
- `pages/projects.html` — Projects
- `pages/publications.html` — Publications
- `pages/teaching.html` — Teaching
- `pages/gallery.html` — Gallery
- `pages/contact.html` — Contact

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (DM Sans and Source Serif 4)
- GitHub Pages

No framework, build process, database or separate hosting service is required.

## Upload to GitHub

1. Open the repository: https://github.com/Ishrak-Anan/Sanoar-Rahman
2. On the Code tab, choose **Add file → Upload files**.
3. Extract the ZIP on your computer.
4. Open the folder created by extracting the ZIP (it will usually be named `Sanoar-Rahman-Portfolio-Backbone`).
5. Select **everything inside that folder** (including `index.html`, `pages`, `assets`, `.nojekyll`, and `README.md`).
6. Drag those selected items into the GitHub upload area. Do not upload only the outer folder.
7. Wait for the upload to finish.
8. In the commit message, enter `Add initial academic portfolio structure`.
9. Select **Commit changes** to the `main` branch.

The root of the repository must contain `index.html`, `pages/`, and `assets/`. Do not leave them nested inside another `Sanoar-Rahman-Portfolio/` directory.

## Enable GitHub Pages

After committing the files:

1. Open **Settings** in the repository.
2. In the left menu, open **Pages** (under Code and automation).
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main`.
5. Select folder `/(root)`.
6. Click **Save**.

The expected site address is:

https://ishrak-anan.github.io/Sanoar-Rahman/

It may take a few minutes for the first deployment to become available.

## Editing content

All page text is directly editable in the HTML files:

- Home: `index.html`
- People: `pages/people.html`
- Lab News: `pages/lab-news.html`
- Projects: `pages/projects.html`
- Publications: `pages/publications.html`
- Teaching: `pages/teaching.html`
- Gallery: `pages/gallery.html`
- Contact: `pages/contact.html`

Use GitHub's pencil (Edit this file) button to edit a page in the browser. Make a commit to publish your changes.

## Editing design

- Colour variables and theme colours: `assets/css/variables.css`
- General typography and layout: `assets/css/global.css`
- Sidebar: `assets/css/sidebar.css`
- Page components: `assets/css/pages.css`
- Mobile and tablet layouts: `assets/css/responsive.css`
- Theme persistence: `assets/js/theme.js`
- Navigation and interactions: `assets/js/main.js`

## Adding images later

Place images in the matching folders:

- Profile photo: `assets/images/profile/`
- Project images: `assets/images/projects/`
- News images: `assets/images/news/`
- Gallery images: `assets/images/gallery/`

Then add an `<img>` element to the relevant HTML page. Use descriptive `alt` text for accessibility. Optimise images before uploading (prefer WebP or compressed JPG/PNG).

## Important content notes

This starter website intentionally uses placeholders where verified information has not yet been supplied. It does not invent a biography, publication list, awards, contact details, research-team members or project outcomes.

The Teaching page includes GEOG 411 (Hydrology) and GEOG 412 (Groundwater Hydrology), which should be checked for current-term accuracy before public use.

## Notes

- The site is designed to work at the repository path `/Sanoar-Rahman/` on GitHub Pages.
- Keep the directory names and file paths unchanged unless you update all corresponding links.
- The light/dark theme preference is stored in the visitor's browser.
- The site uses Google Fonts when internet access is available and falls back to system fonts if not.
