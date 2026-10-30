# Mitolyn landing page

Landing page affiliate Mitolyn (ClickBank). Express + EJS, nội dung ở `data/content.js`, chạy quảng cáo Google/Microsoft Ads.

Build: `node --check server.js` · Nhánh làm việc: `main` · Trả lời chủ shop bằng tiếng Việt.

## Luật cốt lõi
- Giá, bảo hành, chính sách ship phải khớp trang checkout thật (tránh Destination mismatch / Misrepresentation).
- Chỉ đăng đánh giá thật có sự đồng ý của khách; không bịa số liệu, cam kết sức khỏe.
- Mọi nút mua đi qua `/order` tới hoplink ClickBank kèm `tid` theo nút (bfc34c5).

## Luồng làm việc
Mỗi việc một session ngắn, mở bằng lệnh luồng: `/trang`, `/seo-ads`. Bảng phạm vi: `docs/luong/README.md`.
- Chỉ sửa file thuộc luồng mình. Việc của luồng khác: ghi sang sổ luồng đó với tiền tố `[từ <luồng>]`.
- Quên mở bằng lệnh luồng: hỏi chủ shop việc này thuộc luồng nào. Việc vặt 1 dòng thì làm thẳng, không cần đọc sổ.
- Sổ `docs/luong/<luồng>.md` có đúng 4 mục, giữ dưới 120 dòng. Quyết định đã chốt không được làm ngược khi chủ shop chưa đồng ý.

## Ship
- Xong mỗi việc: `node --check server.js` không lỗi, rồi trong CÙNG commit ghi sổ luồng: thêm 1 dòng Nhật ký (mới nhất ở trên); cập nhật Trạng thái, Quyết định đã chốt, Việc cần làm tiếp; sửa CLAUDE.md nếu thay đổi làm nó sai.
- Nhật ký quá 30 dòng: dời phần cũ sang `docs/luong/luu-tru/<luồng>-YYYY-MM.md`.
- Push lên `main`. Bị từ chối: `git pull --rebase` rồi push lại. Không bao giờ `push --force`.
- Kết thúc bằng đúng 1 dòng: "Đã push + đã ghi sổ <luồng>. Có thể đóng luồng."
- `/xong` chỉ dùng khi việc bị dừng giữa chừng chưa push.
