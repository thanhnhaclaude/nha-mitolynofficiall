const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const site = require('./config/site');
const content = require('./data/content');
const legal = require('./data/legal');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', 1);
app.disable('x-powered-by');

// Tracking tags (GTM, gtag, UET) load third-party scripts, so CSP is left off;
// the remaining helmet headers still apply.
app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
app.use(compression());
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: process.env.NODE_ENV === 'production' ? '30d' : 0,
  etag: true,
}));

// Force a single canonical host (https + no "www") in production.
app.use((req, res, next) => {
  if (process.env.NODE_ENV !== 'production') return next();
  const canonicalHost = new URL(site.url).host;
  const proto = req.headers['x-forwarded-proto'] || req.protocol;
  if (req.headers.host !== canonicalHost || proto !== 'https') {
    return res.redirect(301, site.url + req.originalUrl);
  }
  next();
});

app.use((req, res, next) => {
  res.locals.site = site;
  res.locals.path = req.path;
  next();
});

const render = (res, view, page) => res.render(view, { page, ...content });

app.get('/', (req, res) => render(res, 'pages/home', {
  title: `${site.name}® Review 2026 – Ingredients, Benefits, Price & Guarantee`,
  description: `Struggling with stubborn weight and low energy? Learn how ${site.name} supports healthy metabolism and mitochondrial energy with 6 natural ingredients. Pricing, guarantee & FAQs.`,
  canonical: '/',
  schema: 'home',
}));

app.get('/ingredients', (req, res) => render(res, 'pages/ingredients', {
  title: `${site.name} Ingredients – What's Inside Each Capsule & Why`,
  description: `A clear, science-referenced look at the 6 plant-based ingredients in ${site.name}: Maqui Berry, Rhodiola, Astaxanthin, Amla, Theobroma Cacao and Schisandra.`,
  canonical: '/ingredients',
}));

app.get('/faq', (req, res) => render(res, 'pages/faq', {
  title: `${site.name} FAQ – Safety, Shipping, Refunds & How to Take It`,
  description: `Answers to the most common ${site.name} questions: how to take it, side effects, shipping times and the money-back guarantee.`,
  canonical: '/faq',
  schema: 'faq',
}));

app.get('/contact', (req, res) => render(res, 'pages/contact', {
  title: `Contact Us – ${site.name}`,
  description: `Questions about your order or ${site.name}? Contact our support team.`,
  canonical: '/contact',
}));

Object.entries(legal).forEach(([slug, doc]) => {
  app.get(`/${slug}`, (req, res) => render(res, 'pages/legal', {
    title: `${doc.title} – ${site.name}`,
    description: doc.description,
    canonical: `/${slug}`,
    doc,
    noindex: false,
  }));
});

// Outbound order link: one place to change the destination, and lets ads
// tracking fire before leaving. rel="sponsored nofollow" is set on the anchors.
app.get('/order', (req, res) => {
  const target = new URL(site.orderUrl, site.url);
  const pkg = req.query.pkg;
  if (pkg && /^[a-z0-9-]{1,20}$/i.test(pkg)) target.searchParams.set('pkg', pkg);
  res.set('X-Robots-Tag', 'noindex, nofollow');
  res.redirect(302, target.toString());
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send(
    `User-agent: *\nAllow: /\nDisallow: /order\n\nSitemap: ${site.url}/sitemap.xml\n`
  );
});

app.get('/sitemap.xml', (req, res) => {
  const pages = ['/', '/ingredients', '/faq', '/contact', ...Object.keys(legal).map((s) => `/${s}`)];
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages.map((p) => `  <url><loc>${site.url}${p}</loc><lastmod>${today}</lastmod><priority>${p === '/' ? '1.0' : '0.6'}</priority></url>`).join('\n');
  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
});

app.use((req, res) => {
  res.status(404);
  render(res, 'pages/404', {
    title: `Page Not Found – ${site.name}`,
    description: 'The page you are looking for does not exist.',
    canonical: req.path,
    noindex: true,
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
