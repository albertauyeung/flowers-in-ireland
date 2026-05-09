# Flowers in Ireland

A multilingual web app for kids aged 5–12 to discover the wildflowers of Ireland.

- 105 wildflower species with kid-friendly descriptions, photos, and where to find them
- 6 languages: English, 繁體中文, 简体中文, 廣東話, Français, Español
- 9 botanical hotspots around the island (Burren, Killarney NP, Connemara…)
- Pronunciation guides (pinyin, jyutping)
- Match-the-flower quiz mini-game
- Colour filter (yellow / blue-purple / white / pink-red / other) and search
- Hash-based + path-based routing (per-flower URLs are crawlable for SEO)
- Poison warnings on plants children should not touch or taste

## Quick start

It's a static site — no build step needed to view it.

```sh
git clone https://github.com/albertauyeung/flowers-in-ireland.git
cd flowers-in-ireland
python3 -m http.server 8000
# then visit http://localhost:8000
```

Any static server works. Don't open `index.html` directly via `file://` —
image fetches and the Wikipedia API require an HTTP origin.

## Project layout

```
flowers-in-ireland/
├── index.html            # SPA shell (gallery / detail / quiz / spots / about)
├── css/styles.css        # all styles
├── js/
│   ├── i18n.js           # UI strings × 6 languages
│   ├── flowers.js        # 80 flowers + hotspots data (the source of truth)
│   ├── app.js            # routing, rendering, photo loader, feedback wiring
│   └── config.js         # paste-in slot for the optional feedback Worker URL
├── flowers/              # 105 generated static HTML pages, one per flower (for SEO)
├── scripts/
│   └── build-pages.js    # regenerates flowers/*.html and sitemap.xml from flowers.js
├── sitemap.xml           # generated; lists every flower URL plus SPA routes
└── .github/workflows/pages.yml   # GitHub Pages deploy
```

## Editing flower data

All flower data lives in `js/flowers.js`. To add or edit a flower:

1. Edit `js/flowers.js` (each entry has `id`, `wiki`, `latin`, `heightCm`,
   `family`, `familyLatin`, `blooms`, optional `poison`, `where`,
   `names` × 6 languages, optional `pronunciation`, `description` × 6).
2. Regenerate the static per-flower pages and the sitemap:

   ```sh
   node scripts/build-pages.js
   ```
3. Commit both `js/flowers.js` and the regenerated files in `flowers/` and
   `sitemap.xml`. They're committed to the repo so GitHub Pages serves them
   directly without a build step.

The "Related flowers" list on each detail page is derived automatically from
the `family` field — every flower in the same family is shown.

## Deploying to GitHub Pages

The `.github/workflows/pages.yml` workflow runs on every push to `main` and
publishes the entire repo as a Pages site. No build step in CI — generated
files (per-flower pages, sitemap) must be committed before push.

After the first deploy, in **GitHub → Settings → Pages**:
- Source: **GitHub Actions**

The site URL is `https://albertauyeung.github.io/flowers-in-ireland/`.

Once deployed, submit `sitemap.xml` to **Google Search Console** and
**Bing Webmaster Tools** so the per-flower pages get indexed.

## Data sources

- [Irish Wildflowers](https://www.irishwildflowers.ie/) — Zoë Devlin's photographic guide to over 800 native and naturalised species
- [National Biodiversity Data Centre](https://biodiversityireland.ie/) — citizen science records
- [BSBI Plant Atlas 2020](https://bsbi.org/maps-and-data) — distribution data for Britain & Ireland
- [National Botanic Gardens of Ireland](https://www.botanicgardens.ie/) — Irish flora reference
- [Burrenbeo Trust](https://burrenbeo.com/the-burren/natural-heritage/flora/) — Burren flora
- [Wikipedia](https://en.wikipedia.org/) & [Wikimedia Commons](https://commons.wikimedia.org/) — photos and descriptions

## Safety note

Some wildflowers in this app are poisonous if eaten or touched. The detail
page shows a clear warning on those species. The general advice for kids is
**look, don't pick** — especially for foxglove, lily of the valley,
lords-and-ladies, ragwort, marsh marigold and greater celandine.
