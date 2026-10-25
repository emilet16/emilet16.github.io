# eturcotte.dev

Static portfolio. No framework, no build step.

    index.html   page markup
    styles.css   tokens, components and page styles (Ember design system)
    assets/      resume.pdf, favicons, og.png (link-preview image)

Preview locally:  python3 -m http.server 8000   then open http://localhost:8000

Deploy: connect the repo to Cloudflare Pages, Vercel or GitHub Pages
(build command: none, output directory: /), then point eturcotte.dev at it.

Before launch: check og.png renders in a link preview (e.g. paste the URL in a
messaging app) and run Lighthouse on mobile.
