// Dịch giao diện RS Việt ↔ Anh. Mã nguồn vẫn viết tiếng Việt; khi lang = 'en' module này
// dịch chữ hiển thị (text, placeholder, title, aria-label, data-tooltip) bằng từ điển + quy tắc,
// và tự dịch lại khi DOM đổi. Chuỗi không có trong từ điển giữ nguyên (không bao giờ hỏng giao diện).
(function () {
 const KEY = 'rs-lang';
 const DICT = {
  'Tổng quan feedback':'Feedback overview','Tổng quan phản hồi':'Feedback overview','Toàn màn hình':'Full screen','Chế độ tối':'Dark mode','Ngôn ngữ':'Language',
  'Các trang':'Pages','Trang đã bình luận':'Commented pages','Bình luận':'Comments','Đang sửa':'In progress','Đã sửa':'Resolved','Sửa lại':'Reopen',
  'Email được mời':'Invited email','Gửi mã':'Send code','Mã đăng nhập đã gửi tới':'Sign-in code sent to','Xác nhận':'Confirm','Đổi email':'Change email',
  'Nội dung bình luận':'Comment','Chọn vị trí trên website':'Pick a spot on the page','Chọn lại vị trí':'Pick a new spot','Bỏ vị trí':'Clear spot','Gửi':'Send',
  'Hiện các trang':'Show pages','Ẩn các trang':'Hide pages','Hiện bình luận':'Show comments','Ẩn bình luận':'Hide comments','Kích thước preview':'Preview size',
  'Website đang review':'Website under review','Thu gọn danh sách trang':'Collapse page list','Thu gọn bình luận':'Collapse comments','Danh sách bình luận':'Comment list',
  'Hủy trả lời':'Cancel reply','Viết bình luận cho trang này…':'Write a comment for this page…','Viết trả lời…':'Write a reply…','Trả lời…':'Reply…',
  'Website':'Website','Xem website':'View website','KHÔNG GIAN OWNER':'OWNER WORKSPACE','Những trang cần bạn xem và xử lý góp ý.':'Pages that need your review and feedback handling.',
  'Phản hồi theo trang':'Feedback by page','Phản hồi mới nhất':'Latest feedback','Người có thể bình luận':'People who can comment','Thêm':'Add',
  'Phản hồi được lưu chung qua Supabase, đồng bộ giữa các thiết bị.':'Feedback is stored in Supabase and synced across devices.',
  'Email người được mời bình luận':'Email of person invited to comment','Trang có phản hồi':'Pages with feedback','‹ Trước':'‹ Prev','Sau ›':'Next ›',
  'Chưa có trang nào được import.':'No pages imported yet.','Bạn chưa bình luận trang nào.':'You haven\'t commented on any page yet.',
  'Chưa có phản hồi. Bình luận từ các trang sẽ xuất hiện ở đây.':'No feedback yet. Comments from pages will appear here.','Chưa có ai được cấp quyền.':'No one has access yet.',
  'Khách hàng':'Client','Đăng xuất':'Sign out','(xem thử)':'(preview)',' (xem thử)':' (preview)',
  'Chế độ xem thử — chưa nối Supabase nên không lưu được thay đổi thật.':'Preview mode — Supabase is not connected, so changes are not saved.',
  'Chế độ xem thử — chưa nối Supabase nên bình luận sẽ không được lưu thật.':'Preview mode — Supabase is not connected, so comments will not be saved.',
  'Chế độ xem thử — chưa nối Supabase nên không lưu được bình luận thật.':'Preview mode — Supabase is not connected, so the comment was not saved.',
  'Chế độ xem thử — chưa nối Supabase nên không lưu được trả lời thật.':'Preview mode — Supabase is not connected, so the reply was not saved.',
  'Chế độ xem thử — chưa nối Supabase nên không lưu được trạng thái thật.':'Preview mode — Supabase is not connected, so the status was not saved.',
  'Chế độ xem thử — chưa nối Supabase nên không lưu được.':'Preview mode — Supabase is not connected, so nothing is saved.',
  'Email này chưa được cấp quyền bình luận cho dự án này. Liên hệ chủ dự án.':'This email has no permission to comment on this project. Contact the project owner.',
  'Đang gửi mã…':'Sending code…','Đang xác nhận…':'Verifying…','Đang tải ảnh lên…':'Uploading images…','Đang thêm…':'Adding…','Đang chọn vị trí…':'Picking a spot…',
  'Bấm vào phần tử muốn góp ý. Nhấn Esc để hủy.':'Click the element you want to comment on. Press Esc to cancel.',
  'Đã gửi bình luận. Bấm bình luận trong danh sách để xem lại vị trí.':'Comment sent. Click a comment in the list to see its location again.',
  'Bình luận chung cho trang':'General comment for this page','Bình luận tại đây':'Comment here','Bình luận tại vị trí đã chọn':'Comment at the selected spot','Chi tiết bình luận':'Comment details',
  'Đóng ô bình luận':'Close comment box','Sửa bình luận':'Edit comment','Hủy':'Cancel','Lưu':'Save','Trả lời':'Reply','Gửi trả lời':'Send reply','Gửi bình luận':'Send comment',
  'Trả lời bình luận':'Reply to comment','Nội dung tại vị trí':'Comment at this spot','Viết góp ý tại vị trí này…':'Write feedback for this spot…',
  'Enter để gửi · Shift + Enter xuống dòng':'Enter to send · Shift + Enter for new line','Nhập nội dung hoặc đính kèm ảnh.':'Enter text or attach an image.',
  'Chưa gửi được. Kiểm tra nội dung và thử lại.':'Could not send. Check the content and try again.',
  'Chưa có bình luận đang sửa.':'No comments in progress.','Chưa có bình luận đã sửa.':'No resolved comments.',
  'Đính kèm ảnh':'Attach image','Bỏ ảnh này':'Remove this image','Chèn emoji':'Insert emoji','vừa xong':'just now',
  'Bấm trên website để đặt bình luận':'Click on the website to place a comment',
  'Website chưa tải xong. Chờ trang hiển thị rồi chọn vị trí lại.':'The website has not finished loading. Wait for it, then pick a spot again.',
  'Không truy cập được nội dung website. Trang preview cần cùng địa chỉ gốc với Review System.':'Cannot access the website content. The preview must share the same origin as Review System.',
  'Bạn đang mở trực tiếp file HTML. Hãy mở bản xem thử qua địa chỉ bên dưới để chọn vị trí.':'You opened the HTML file directly. Open the preview via the address below to pick a spot.',
  'Email người được mời bình luận ':'Email of person invited to comment '
 };
 const RULES = [
  [/^(\d+) phút trước$/, (m) => m[1] + ' min ago'], [/^(\d+) giờ trước$/, (m) => m[1] + ' h ago'], [/^(\d+) ngày trước$/, (m) => m[1] + ' d ago'],
  [/^(\d+) trang(?: HTML)? · (\d+) bình luận đang sửa$/, (m) => m[1] + ' pages · ' + m[2] + ' comments in progress'],
  [/^(\d+) trang HTML để review$/, (m) => m[1] + ' HTML pages to review'], [/^(\d+) trang HTML · (\d+) bình luận đang sửa$/, (m) => m[1] + ' HTML pages · ' + m[2] + ' comments in progress'],
  [/^(\d+) đang sửa · (\d+) đã sửa$/, (m) => m[1] + ' in progress · ' + m[2] + ' resolved'],
  [/^Đang sửa \((\d+)\)$/, (m) => 'In progress (' + m[1] + ')'], [/^Đã sửa \((\d+)\)$/, (m) => 'Resolved (' + m[1] + ')'],
  [/^Ngoại lệ \((\d+)\)$/, (m) => 'Exceptions (' + m[1] + ')'],
  [/^Vị trí: (.*)$/s, (m) => 'Spot: ' + m[1]], [/^Trả lời (.+)$/s, (m) => 'Reply to ' + m[1]],
  [/^Tối đa (\d+) ảnh mỗi bình luận\.$/, (m) => 'Up to ' + m[1] + ' images per comment.'],
  [/^Bình luận của (.+?): /s, (m, s) => 'Comment by ' + m[1] + ': ' + s.slice(m[0].length)],
  [/^Không lưu được: (.*)$/s, (m) => 'Could not save: ' + m[1]], [/^Không gửi được mã: (.*)$/s, (m) => 'Could not send code: ' + m[1]],
  [/^Mã không đúng hoặc đã hết hạn: (.*)$/s, (m) => 'Wrong or expired code: ' + m[1]], [/^Không gửi được bình luận: (.*)$/s, (m) => 'Could not send comment: ' + m[1]],
  [/^Không gửi được trả lời: (.*)$/s, (m) => 'Could not send reply: ' + m[1]], [/^Không cập nhật được: (.*)$/s, (m) => 'Could not update: ' + m[1]],
  [/^Không tải được ảnh: (.*)$/s, (m) => 'Could not upload image: ' + m[1]], [/^Không thêm được: (.*)$/s, (m) => 'Could not add: ' + m[1]],
  [/^Lỗi chọn vị trí: (.*)$/s, (m) => 'Error picking a spot: ' + m[1]],
  [/^Đã thêm (.+?) — họ có thể đăng nhập bằng email này ở trang Website để bình luận\.$/s, (m) => 'Added ' + m[1] + ' — they can sign in with this email on the Website page to comment.'],
  [/^Email này đã là Owner của dự án, không cần thêm\.$/, () => 'This email is already an Owner of the project.'],
  [/^Mở Review System tại localhost:4173$/, () => 'Open Review System at localhost:4173']
 ];
 let lang = 'vi'; try { lang = localStorage.getItem(KEY) === 'en' ? 'en' : 'vi'; } catch {}
 const vnRe = /[ạảãàáâấầẩẫậăắằẳẵặẹẻẽèéêếềểễệỉĩìíịọỏõòóôốồổỗộơớờởỡợụủũùúưứừửữựỳỷỹýđĐ]/i;
 function tr(s) {
  if (!vnRe.test(s) && !/^(Website|Owner)$/.test(s)) return s;
  const t = s.trim(); if (!t) return s;
  const lead = s.slice(0, s.indexOf(t)), tail = s.slice(s.indexOf(t) + t.length);
  let out = DICT[t];
  if (out === undefined) for (const [re, fn] of RULES) { const m = t.match(re); if (m) { out = fn(m, t); break; } }
  return out === undefined ? s : lead + out + tail;
 }
 const ATTRS = ['placeholder', 'title', 'aria-label', 'data-tooltip'];
 const nodeRec = new WeakMap(), attrRec = new WeakMap();
 const SKIP = 'script,style,.body,.avatar,.feedback-email,.identity-email,#signedEmail,.card-top strong,.reply-info strong,.note-author-row strong:first-child';
 const skipped = (el) => !!(el && el.closest && el.closest(SKIP));
 function doText(n) {
  const el = n.parentElement; if (!el || el.tagName === 'TEXTAREA' || skipped(el)) return;
  const cur = n.nodeValue, rec = nodeRec.get(n), src = rec && cur === rec.out ? rec.src : cur;
  const out = lang === 'en' ? tr(src) : src;
  if (out !== cur) n.nodeValue = out;
  nodeRec.set(n, { src, out });
 }
 function doAttrs(el) {
  if (skipped(el)) return;
  let rec = attrRec.get(el); if (!rec) { rec = {}; attrRec.set(el, rec); }
  for (const a of ATTRS) {
   if (!el.hasAttribute(a)) continue;
   const cur = el.getAttribute(a), r = rec[a], src = r && cur === r.out ? r.src : cur;
   const out = lang === 'en' ? tr(src) : src;
   if (out !== cur) el.setAttribute(a, out);
   rec[a] = { src, out };
  }
 }
 function walk(root) {
  if (root.nodeType === 3) { doText(root); return; }
  if (root.nodeType !== 1) return;
  doAttrs(root);
  const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  for (let n = w.nextNode(); n; n = w.nextNode()) n.nodeType === 3 ? doText(n) : doAttrs(n);
 }
 let titleRec = null;
 function doTitle() { const cur = document.title, src = titleRec && cur === titleRec.out ? titleRec.src : cur; const out = lang === 'en' ? src.replace(/^[^—]+/, (x) => tr(x.trim()) + ' ') : src; if (out !== cur) document.title = out.replace(/ +—/, ' —'); titleRec = { src, out: document.title }; }
 let busy = false;
 const mo = new MutationObserver((list) => {
  if (lang !== 'en' || busy) return; busy = true;
  try { for (const m of list) { if (m.type === 'childList') m.addedNodes.forEach(walk); else if (m.type === 'characterData') doText(m.target); else if (m.type === 'attributes') doAttrs(m.target); } } finally { busy = false; }
 });
 function start() { mo.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS }); }
 function apply() { busy = true; try { walk(document.body); doTitle(); document.documentElement.lang = lang; } finally { busy = false; } }
 window.RS_I18N = {
  get lang() { return lang; },
  setLang(l) { l = l === 'en' ? 'en' : 'vi'; if (l === lang) return; lang = l; try { localStorage.setItem(KEY, l); } catch {} apply(); },
  tr
 };
 const init = () => { start(); if (lang === 'en') apply(); };
 document.body ? init() : document.addEventListener('DOMContentLoaded', init);
})();
