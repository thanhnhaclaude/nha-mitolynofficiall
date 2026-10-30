# Luồng làm việc – Mitolyn landing page

| Luồng | Lệnh mở | Phụ trách | Liên quan |
|---|---|---|---|
| Trang & nội dung | `/trang` | `data/content.js`, `data/legal.js`, `views/`, `public/` | `seo-ads` |
| SEO, tracking & quảng cáo | `/seo-ads` | `server.js` (sitemap, robots, `/order`), `config/site.js`, `.env.example`, tracking GTM/GA4/Ads/UET | `trang` |

Luồng không tự nhớ nhau; chúng nối với nhau qua sổ `docs/luong/<luồng>.md`. Nếu sổ và CLAUDE.md mâu thuẫn, CLAUDE.md là đúng.
