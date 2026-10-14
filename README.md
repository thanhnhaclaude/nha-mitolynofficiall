# Mitolyn – Website Node.js (Express + EJS)

Landing page bán hàng render phía server: tải nhanh, chuẩn SEO Google/Bing, tuân thủ chính sách quảng cáo sức khỏe của Google Ads và Microsoft Ads.

## Cấu trúc

```
server.js            Routes, sitemap.xml, robots.txt, /order (link mua hàng)
config/site.js       Đọc cấu hình từ .env
data/content.js      TOÀN BỘ nội dung marketing: thành phần, lợi ích, giá, FAQ, đánh giá
data/legal.js        Privacy, Terms, Disclaimer, Affiliate Disclosure
views/               Giao diện EJS (partials + pages)
public/              CSS, JS, ảnh SVG
```

## Chạy trên máy

```bash
npm install
cp .env.example .env     # rồi điền giá trị
npm run dev              # http://localhost:3000 (hoặc PORT trong .env)
```

## Việc PHẢI làm trước khi chạy quảng cáo

1. **`.env`**: điền `ORDER_URL` (link affiliate/checkout), `SITE_URL`, `CONTACT_EMAIL`, `BUSINESS_NAME`, `BUSINESS_ADDRESS`.
2. **`data/content.js`**: đối chiếu **giá, số ngày bảo hành, chính sách ship** với trang checkout thật. Sai lệch sẽ bị Google từ chối quảng cáo (Destination mismatch / Misrepresentation).
3. **Đánh giá khách hàng**: chỉ thêm review **thật**, có sự đồng ý của khách. Mục này tự ẩn khi danh sách rỗng.
4. **Ảnh sản phẩm**: nếu có ảnh chính thức từ trang affiliate, thay `public/img/bottle.svg`. Thêm `public/img/og-image.png` (1200×630) để có ảnh khi chia sẻ link.
5. **Tracking**: `GTM_ID`, `GA4_ID`, `GOOGLE_ADS_ID` + `GOOGLE_ADS_CONVERSION_LABEL`, `BING_UET_ID`. Nút "Buy Now" tự gửi sự kiện `begin_checkout` và conversion.
6. **Xác minh webmaster**: `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION`. Sau đó submit `https://domain/sitemap.xml` trong Google Search Console và Bing Webmaster Tools.

## Đẩy lên GitHub

```bash
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

## Deploy lên Hostinger

### Cách A: Gói Business / Cloud (Node.js Web App)
1. hPanel → **Websites → Add website → Node.js Apps** (hoặc *Deploy Node.js app*).
2. Chọn **Import Git repository**, kết nối GitHub và chọn repo này, nhánh `main`.
3. Build settings: Node 20+, install `npm install`, start `npm start`, entry `server.js`.
4. Mục **Environment variables**: nhập các biến trong `.env.example` với `NODE_ENV=production` và `SITE_URL=https://tenmiencuaban.com`. **Không** commit file `.env`.
5. Gắn tên miền, bật SSL. Mỗi lần push lên `main`, bấm Redeploy (hoặc bật auto-deploy nếu gói có hỗ trợ).

### Cách B: VPS (Ubuntu)
```bash
# trên VPS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt install -y nodejs nginx
sudo npm i -g pm2
git clone https://github.com/<user>/<repo>.git /var/www/mitolyn && cd /var/www/mitolyn
cp .env.example .env && nano .env      # NODE_ENV=production, PORT=3000
npm ci --omit=dev && pm2 start server.js --name mitolyn-site && pm2 save && pm2 startup
```
Cấu hình Nginx reverse proxy `proxy_pass http://127.0.0.1:3000;` kèm `proxy_set_header Host $host;` và `proxy_set_header X-Forwarded-Proto $scheme;`, rồi chạy `sudo certbot --nginx` để có SSL.

**Tự động deploy:** trong GitHub repo → Settings → Secrets thêm `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_APP_DIR`; Settings → Variables thêm `ENABLE_VPS_DEPLOY=true`. Workflow `.github/workflows/deploy-vps.yml` sẽ chạy mỗi lần push.

## Ghi chú tuân thủ quảng cáo

- Chỉ dùng câu chữ kiểu "supports / may help", không hứa giảm số cân cụ thể, không before/after.
- Footer luôn có FDA disclaimer và (khi `AFFILIATE_MODE=true`) affiliate disclosure.
- Không dùng đồng hồ đếm ngược giả hay "chỉ còn 3 chai". Google xem đây là thủ thuật gây hiểu lầm.
- Nếu bạn **không** phải chủ thương hiệu, tránh tự xưng "official website". Google Ads xử lý rất nặng lỗi Misrepresentation.
