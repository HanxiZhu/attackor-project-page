# AttackOR Project Page

A bilingual, static academic project page based on [Clarity Template](https://github.com/lorenmt/clarity-template). Content is grounded in `attack_or_colm2026.tex` and the [AttackOR implementation](https://github.com/HanxiZhu/AttackOR). The figures are web exports of the supplied paper PDFs. The linked manuscript PDF was compiled from the supplied TeX source.

## Local preview

From this directory:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. No build step or package installation is required.

## GitHub Pages

Copy this directory to the root of a GitHub repository, then set **Settings → Pages → Build and deployment → Deploy from a branch**, selecting the default branch and `/ (root)`. The page uses relative asset paths and includes `.nojekyll`, so it also works under a repository subpath.

## Maintenance

- Edit `index.html` for project content. Each translated element has `data-en` and `data-zh` text.
- Edit `assets/scripts/site.js` for the language switch and vulnerability chart data.
- Edit `assets/stylesheets/site.css` for project-specific layout; `assets/stylesheets/clarity.css` is the reused Clarity stylesheet.
- For another project, duplicate this directory and replace the content, data, and figures while retaining the shared styling and language-switch convention.

The original Clarity attribution appears in the footer. See `CLARITY-LICENSE.txt` for its license text.
