#!/usr/bin/env node
/* Generate static per-flower HTML pages and an updated sitemap.xml.
 *
 * Each flower gets a crawlable page at /flowers/<id>.html with full meta tags
 * (canonical, OG, Twitter, JSON-LD) and a server-rendered body so search
 * engines see content without running JS. The SPA bundle is loaded on the
 * page and re-renders the detail view on top once JS is available.
 *
 * Run: node scripts/build-pages.js
 */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const SITE_ORIGIN = "https://albertauyeung.github.io";
const SITE_BASE = "/flowers-in-ireland";
const SITE_URL = SITE_ORIGIN + SITE_BASE + "/";

const SUPPORTED_LANGS = ["en", "zh-Hant", "zh-Hans", "yue", "fr", "es"];

function loadModule(file) {
  const code = fs.readFileSync(path.join(ROOT, file), "utf8");
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.window;
}

const { FLOWERS } = loadModule("js/flowers.js");
const { I18N } = loadModule("js/i18n.js");

if (!Array.isArray(FLOWERS) || !FLOWERS.length) {
  console.error("Could not load FLOWERS from js/flowers.js");
  process.exit(1);
}

function escapeHtml(s) {
  if (s == null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
function escapeAttr(s) { return escapeHtml(s); }

function trim(s, n) {
  if (!s) return "";
  if (s.length <= n) return s;
  return s.slice(0, n - 1).trimEnd() + "…";
}

function flowerPageUrl(flowerId) {
  return SITE_ORIGIN + SITE_BASE + "/flowers/" + flowerId + ".html";
}

function renderFlowerPage(flower) {
  const name = flower.names.en;
  const otherNames = SUPPORTED_LANGS
    .filter((l) => l !== "en" && flower.names[l] && flower.names[l] !== name)
    .map((l) => flower.names[l]);

  const descEn = flower.description.en;
  const metaDesc = trim(descEn, 158);
  const title = `${name} (${flower.latin}) — Flowers in Ireland`;
  const canonical = flowerPageUrl(flower.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${name} — Flowers in Ireland`,
    "url": canonical,
    "inLanguage": "en",
    "isFamilyFriendly": true,
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "children aged 5-12"
    },
    "about": {
      "@type": "Thing",
      "name": name,
      "alternateName": otherNames,
      "description": descEn,
      "identifier": flower.latin,
      "sameAs": `https://en.wikipedia.org/wiki/${flower.wiki}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Flowers in Ireland",
      "url": SITE_URL
    }
  };

  const whereList = (flower.where || [])
    .map((w) => `        <li>${escapeHtml(w)}</li>`)
    .join("\n");

  const otherNamesBlock = otherNames.length
    ? `      <p class="other-names">${otherNames.map(escapeHtml).join(" · ")}</p>`
    : "";

  const poisonBlock = flower.poison
    ? `          <p class="poison-warn">⚠️ Poisonous — do not pick or taste this plant.</p>`
    : "";

  const familyLine = flower.family
    ? `${escapeHtml(flower.family)}${flower.familyLatin ? ` <em>(${escapeHtml(flower.familyLatin)})</em>` : ""}`
    : "—";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeAttr(metaDesc)}" />
  <meta name="author" content="Flowers in Ireland" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${escapeAttr(canonical)}" />
  <link rel="alternate" hreflang="en" href="${escapeAttr(canonical)}" />
  <link rel="alternate" hreflang="x-default" href="${escapeAttr(canonical)}" />

  <meta property="og:type" content="article" />
  <meta property="og:url" content="${escapeAttr(canonical)}" />
  <meta property="og:title" content="${escapeAttr(name + " — Flowers in Ireland")}" />
  <meta property="og:description" content="${escapeAttr(metaDesc)}" />
  <meta property="og:site_name" content="Flowers in Ireland" />
  <meta property="og:locale" content="en_IE" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeAttr(name + " — Flowers in Ireland")}" />
  <meta name="twitter:description" content="${escapeAttr(metaDesc)}" />

  <link rel="stylesheet" href="../css/styles.css" />
  <link rel="preconnect" href="https://en.wikipedia.org" />
  <link rel="preconnect" href="https://upload.wikimedia.org" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🌼%3C/text%3E%3C/svg%3E" />

  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>

  <script defer src="https://cloud.umami.is/script.js" data-website-id="0c30afdf-7301-47b0-8a70-24b0a10719ca"></script>
</head>
<body>
  <header class="site-header">
    <a class="brand" href="../" aria-label="Home">
      <span class="brand-emoji" aria-hidden="true">🌼</span>
      <span class="brand-text" data-i18n="appTitle">Flowers in Ireland</span>
    </a>
    <nav class="main-nav" aria-label="Main">
      <a href="../" data-nav="gallery" data-i18n="navFlowers">Flowers</a>
      <a href="../#/quiz" data-nav="quiz" data-i18n="navQuiz">Quiz</a>
      <a href="../#/spots" data-nav="spots" data-i18n="navSpots">Where to find</a>
      <a href="../#/about" data-nav="about" data-i18n="navAbout">About</a>
    </nav>
    <div class="lang-picker">
      <label for="lang-select" class="visually-hidden" data-i18n="chooseLanguage">Choose language</label>
      <select id="lang-select" aria-label="Language">
        <option value="en">English</option>
        <option value="zh-Hant">華文（繁體）</option>
        <option value="zh-Hans">华文 (简体)</option>
        <option value="yue">粵語</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
      </select>
    </div>
  </header>

  <main id="app">
    <section class="view view-detail" data-view="detail">
      <a class="btn btn-back" href="../" data-action="back">
        <span aria-hidden="true">←</span> <span data-i18n="back">Back</span>
      </a>
      <article id="flower-detail" class="flower-detail">
        <div>
          <div class="photo skeleton"><img alt="${escapeAttr(name)}" loading="lazy" /></div>
          <p class="photo-credit">Photo by <a href="https://en.wikipedia.org/wiki/${escapeAttr(flower.wiki)}" target="_blank" rel="noopener" class="src-link">Wikipedia</a> · sourced from Wikimedia Commons</p>
        </div>
        <div>
          <h1 style="border-bottom: 4px solid ${escapeAttr(flower.color)}; padding-bottom: 0.3rem; display:inline-block;">${escapeHtml(name)}</h1>
${otherNamesBlock}
          <p class="latin">${escapeHtml(flower.latin)}</p>
          <p class="description">${escapeHtml(descEn)}</p>
${poisonBlock}
          <div class="facts">
            <div class="fact">
              <div class="fact-label">Height</div>
              <div>${flower.heightCm} cm</div>
            </div>
            <div class="fact">
              <div class="fact-label">Blooms</div>
              <div>${escapeHtml(flower.blooms || "—")}</div>
            </div>
            <div class="fact">
              <div class="fact-label">Family</div>
              <div>${familyLine}</div>
            </div>
            <div class="fact">
              <div class="fact-label">Latin name</div>
              <div><em>${escapeHtml(flower.latin)}</em></div>
            </div>
          </div>
          <div class="where">
            <div class="fact-label" style="color:#b35a00;font-weight:800;font-size:0.8rem;text-transform:uppercase;">Where to find</div>
            <ul>
${whereList}
            </ul>
          </div>
          <div class="actions">
            <a class="learn-more" href="https://en.wikipedia.org/wiki/${escapeAttr(flower.wiki)}" target="_blank" rel="noopener">Learn more on Wikipedia →</a>
          </div>
        </div>
      </article>
    </section>
  </main>

  <footer class="site-footer">
    <p>
      <span data-i18n="footerCredit">Photos via Wikimedia Commons. Flower info adapted from Irish Wildflowers, BSBI &amp; Wikipedia.</span>
    </p>
  </footer>

  <script src="../js/i18n.js"></script>
  <script src="../js/flowers.js"></script>
  <script src="../js/app.js"></script>
</body>
</html>
`;
}

function buildSitemap(flowers) {
  const urls = [
    { loc: SITE_URL, priority: "1.0", changefreq: "monthly" },
    { loc: SITE_URL + "#/spots", priority: "0.8", changefreq: "monthly" },
    { loc: SITE_URL + "#/quiz", priority: "0.6", changefreq: "monthly" },
    { loc: SITE_URL + "#/about", priority: "0.4", changefreq: "yearly" },
    ...flowers.map((f) => ({
      loc: flowerPageUrl(f.id),
      priority: "0.7",
      changefreq: "monthly"
    }))
  ];

  const body = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

function main() {
  const outDir = path.join(ROOT, "flowers");
  fs.mkdirSync(outDir, { recursive: true });

  let written = 0;
  for (const flower of FLOWERS) {
    const html = renderFlowerPage(flower);
    fs.writeFileSync(path.join(outDir, flower.id + ".html"), html);
    written++;
  }

  const sitemap = buildSitemap(FLOWERS);
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap);

  console.log(`Wrote ${written} flower pages to flowers/ and updated sitemap.xml`);
}

main();
