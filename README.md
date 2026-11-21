# MJ Firmeza | Web Designer & Developer

Portfolio built with HTML, CSS and JavaScript. Ready for GitHub Pages.

## Details
- Name: MJ Firmeza
- Email: mjfrmz@gmail.com
- Headshots: `assets/mj-firmeza-headshot.jpg` and `assets/mj-firmeza-headshot-square.jpg`
- Featured projects: Nest Nook Homes, Sell With Resolve, Buy With Resolve, Heavenly Homes
- Client/agency permission to use project work was reported as approved.

## Publish on GitHub Pages
1. Create a public GitHub repository named `YOUR-USERNAME.github.io` (or use any repository name).
2. Upload the **contents** of this folder, not its parent folder, including the hidden `.github` folder if you want automated screenshots.
3. Open Settings > Pages > Build and deployment > Deploy from a branch. Select `main` and `/ (root)`.
4. Your site will appear at `https://YOUR-USERNAME.github.io/`, or `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Actual screenshots
The portfolio is configured to look first for four local screenshot files:
- `assets/nest-nook-homes.png`
- `assets/sell-with-resolve.png`
- `assets/buy-with-resolve.png`
- `assets/heavenly-homes.png`

Since the current editing environment cannot fetch these external websites as image files, the ZIP does not contain saved screenshot images. Until you generate or add them, it falls back automatically to live webpage preview images from WordPress.com mshots. If those are blocked, visitors get a direct website link instead of a broken image.

To automatically save real screenshots with GitHub Actions once you've uploaded the site:
1. In your repository open **Actions > Capture website screenshots > Run workflow**.
2. If needed, ensure Actions has permission to create commits: Settings > Actions > General > Workflow permissions > Read and write permissions.
3. When the run completes, the four screenshots will be stored in `assets/` and GitHub Pages will use them automatically.

The capture workflow only records publicly viewable homepages; some sites may block browser automation. You can also capture your own screenshots and upload them using the exact filenames above.

## Notes
- Contact uses `mailto:`; no backend is needed.
- Project navigation, filters, and mobile menu use `script.js`.
- Heavenly Homes is described as a completed REI BlackBook template customization, not an uncompleted Carrot rebuild.
