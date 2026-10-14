# Maryam Elazomy: Portfolio

A static website: plain HTML, CSS and JavaScript. No build step, no dependencies.

## How the site works
One short page: name and portrait, then 12 square tiles (10 work sections, Leadership & Recognition, About & CV). Clicking a tile opens that section's projects full screen; clicking a project opens its detail with images and videos.

## Files
```
index.html        page structure
css/style.css     all styling (colours are variables at the top)
js/data.js        ALL CONTENT: text, projects, links, media paths. Edit this one.
js/main.js        rendering and interactions. Normally not edited.
assets/img/       images (portrait, project covers)
assets/video/     videos
assets/cv/        CV PDFs (already included)
```

## Adding content (js/data.js)
- **Portrait:** set `portrait: "assets/img/maryam-portrait.jpg"` (portrait crop, 4:5 works best).
- **Section tiles (the squares on the home page):** each section has a `tone` (colour). Add `cover: "assets/img/x.jpg"` to a section to show an image on its tile. Without `cover`, the tile uses the first image of its first project.
- **A project's media:** inside the project, fill `media: [{ src: "assets/img/x.jpg", caption: "..." }, { src: "assets/video/x.mp4", poster: "assets/img/x-poster.jpg" }]`. The first file is the card cover. Add `links: [{ label: "Behance", href: "https://..." }]` for external links.
- **Add or remove a project:** copy one item object inside a section's `items` list.
- Open the site with `?dev=1` (for example `index.html?dev=1`) to see developer notes (`todo`) and hidden draft items (`draft: true`). Visitors never see these.
- Videos: use MP4 (H.264), under about 20 MB each for fast loading, or link to Behance or YouTube through `links`.
- Optimise images before uploading (JPG or WebP, about 1600 px wide).

## Deploy for free
**GitHub Pages:** create a repository, upload all files so `index.html` is at the root, then Settings, Pages, Deploy from branch `main`, folder `/ (root)`.
**Vercel:** import the repository (or drag the folder into vercel.com/new). Framework preset "Other", no build command, output directory is the root.

## Checks before publishing
- Replace the contact email and links in `data.js` if they changed.
- Update the dates that change: Green Loop final results (20 Oct 2026), Game Jam status.
- Items marked `todo` in `data.js` need real details from Maryam (The Lost Memory, Mascot Animations, Blender Game Assets, High-Poly Character Design, Environment Sketches, Camel Robot Mini World, GDAP). "Event coverage" inside Event & Communication is a hidden draft until event photos and details exist.
