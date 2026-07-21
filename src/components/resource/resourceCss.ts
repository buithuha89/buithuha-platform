// CSS dùng chung cho các trang tài nguyên (checklist / biểu mẫu / ebook). Scoped dưới .rsc
//
// Các biến cục bộ (--paper, --ink, --gold…) giữ nguyên TÊN để phần CSS bên dưới
// không phải sửa, nhưng GIÁ TRỊ nay trỏ về hệ token chung ở src/app/globals.css.
// Nhờ vậy trang tài nguyên đổi màu theo cả site, không còn kẹt bảng màu kem-vàng riêng.
export const RESOURCE_CSS = `
.rsc{--paper:var(--bg);--surf:var(--surface);--surf2:var(--bg-alt);--ink:var(--fg);--muted:var(--fg-muted);--faint:var(--fg-subtle);
--line:var(--border);--line2:var(--border);--night:#0B1512;
--gold:var(--accent);--gold-b:var(--accent);--gold-d:var(--accent-hover);--gold-tint:rgb(var(--accent-rgb) / .10);--gold-line:rgb(var(--accent-rgb) / .28);--teal:var(--accent);
--f:"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
background:var(--paper);color:var(--ink);font-family:var(--f);line-height:1.6;-webkit-font-smoothing:antialiased;min-height:100vh}
.rsc *{box-sizing:border-box}
.rsc .wrap{max-width:820px;margin:0 auto;padding:0 20px}
.rsc .top{background:var(--night);color:#EAF5EF;padding:15px 0}
.rsc .top .wrap{display:flex;align-items:center;justify-content:space-between;gap:12px}
.rsc .top a.brand{color:#fff;font-weight:800;font-size:14px;text-decoration:none;line-height:1.2}
.rsc .top a.brand small{display:block;font-weight:500;font-size:10.5px;color:#7B9A8B}
.rsc .top a.back{color:#A6C3B5;font-size:13.5px;text-decoration:none;font-weight:600;white-space:nowrap}
.rsc .top a.back:hover{color:#fff}
.rsc .head{padding:44px 0 6px}
.rsc .eyebrow{display:inline-block;font-size:11.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--gold-d);background:var(--gold-tint);border:1px solid var(--gold-line);padding:5px 12px;border-radius:999px;margin-bottom:16px}
.rsc h1{font-size:clamp(26px,4.6vw,36px);line-height:1.12;letter-spacing:-.02em;margin:0 0 14px;font-weight:800;text-wrap:balance}
.rsc .lead{color:var(--muted);font-size:clamp(15.5px,2vw,18px);max-width:64ch;margin:0;text-wrap:pretty}
.rsc .body{padding:26px 0 30px}
.rsc .card{background:var(--surf);border:1px solid var(--line);border-radius:16px;padding:24px 26px;margin-bottom:16px;box-shadow:0 20px 44px -34px rgba(16,36,27,.4)}
.rsc .ctitle{display:flex;align-items:center;gap:11px;font-size:18px;font-weight:800;letter-spacing:-.01em}
.rsc .ctitle .ic{font-size:22px;line-height:1}
.rsc .csub{color:var(--muted);font-size:14px;margin:6px 0 16px}
.rsc ul.check{list-style:none;margin:0;padding:0;display:grid}
.rsc ul.check li{display:grid;grid-template-columns:auto 1fr;gap:12px;padding:11px 2px;border-top:1px solid var(--line2);align-items:start;font-size:15px}
.rsc ul.check li:first-child{border-top:0}
.rsc ul.check input{margin-top:2px;width:18px;height:18px;accent-color:var(--gold);flex-shrink:0;cursor:pointer}
.rsc ul.check label{cursor:pointer}
.rsc ul.check input:checked ~ label{color:var(--faint);text-decoration:line-through}
.rsc .purpose{background:var(--gold-tint);border:1px solid var(--gold-line);border-radius:10px;padding:13px 16px;font-size:14px;color:var(--ink);margin-bottom:16px}
.rsc ol.fields{margin:0;padding:0;list-style:none;counter-reset:f;display:grid;gap:9px}
.rsc ol.fields li{counter-increment:f;display:grid;grid-template-columns:auto 1fr;gap:12px;font-size:14.6px;align-items:start}
.rsc ol.fields li::before{content:counter(f);font-family:ui-monospace,monospace;font-size:12px;font-weight:800;color:var(--gold-d);background:var(--gold-tint);border:1px solid var(--gold-line);width:24px;height:24px;border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.rsc .howto{margin-top:16px;padding-top:14px;border-top:1px dashed var(--line);font-size:13.8px;color:var(--muted)}
.rsc .howto b{color:var(--ink)}
.rsc .intro{font-size:16px;color:var(--ink);margin-bottom:6px;text-wrap:pretty}
.rsc .qblock{padding:22px 0;border-top:1px solid var(--line)}
.rsc .qblock:first-of-type{border-top:0;padding-top:6px}
.rsc .qnum{font-family:ui-monospace,monospace;font-size:12.5px;font-weight:700;color:var(--gold-d)}
.rsc .qq{font-size:18px;font-weight:800;letter-spacing:-.01em;margin:6px 0 10px;text-wrap:pretty}
.rsc .qg{color:var(--muted);font-size:15.3px;text-wrap:pretty}
.rsc .ctaband{background:var(--night);color:#EAF5EF;border-radius:18px;padding:30px 28px;text-align:center;margin:8px 0 10px;position:relative;overflow:hidden}
.rsc .ctaband::before{content:"";position:absolute;left:50%;top:-80px;transform:translateX(-50%);width:400px;height:280px;background:radial-gradient(ellipse,rgb(45 212 191 / .2),transparent 66%);pointer-events:none}
.rsc .ctaband>*{position:relative;z-index:1}
.rsc .ctaband h3{color:#fff;font-size:clamp(19px,2.6vw,24px);margin:0 0 8px}
.rsc .ctaband p{color:#A6C3B5;font-size:15px;max-width:54ch;margin:0 auto 18px}
.rsc .btn{display:inline-flex;align-items:center;gap:9px;justify-content:center;background:var(--gold-b);color:var(--accent-fg);font-weight:800;font-size:15.5px;padding:15px 30px;border-radius:999px;border:0;cursor:pointer;font-family:inherit;box-shadow:0 12px 30px rgb(var(--accent-rgb) / .34);transition:transform .12s ease,background .15s ease;text-decoration:none}
.rsc .btn:hover{background:var(--gold-d);transform:translateY(-2px)}
.rsc footer{padding:26px 0 46px;text-align:center;color:var(--faint);font-size:13px}
.rsc footer a{color:var(--gold-d);text-decoration:none;font-weight:600}
.rsc-ov{position:fixed;inset:0;z-index:60;background:rgba(11,21,18,.6);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:18px}
.rsc-modal{position:relative;width:100%;max-width:420px;background:var(--surface);border-radius:16px;padding:28px 26px;box-shadow:0 30px 80px rgba(0,0,0,.32);font-family:"Be Vietnam Pro",system-ui,sans-serif;color:var(--fg)}
.rsc-modal h3{margin:0 0 5px;font-size:20px;font-weight:800;letter-spacing:-.01em}
.rsc-modal .desc{margin:0 0 16px;font-size:14px;color:var(--fg-muted)}
.rsc-modal label{display:block;font-size:13px;font-weight:600;margin:0 0 5px}
.rsc-modal input{width:100%;padding:11px 13px;border:1px solid var(--border-strong);border-radius:8px;font-size:15px;margin-bottom:12px;font-family:inherit;color:var(--fg);background:var(--surface)}
.rsc-modal input:focus{outline:2px solid var(--accent);outline-offset:1px;border-color:var(--accent)}
.rsc-modal .go{width:100%;background:var(--accent);color:var(--accent-fg);border:0;padding:13px;border-radius:8px;font-weight:800;font-size:15px;cursor:pointer;font-family:inherit}
.rsc-modal .go:disabled{opacity:.6}
.rsc-modal .x{position:absolute;top:12px;right:14px;border:0;background:none;font-size:22px;cursor:pointer;color:var(--fg-subtle);line-height:1}
.rsc-modal .err{background:rgb(var(--danger-rgb) / .08);border:1px solid rgb(var(--danger-rgb) / .25);color:var(--danger);padding:9px 12px;border-radius:8px;font-size:13px;margin-bottom:12px}
.rsc-modal .ok{text-align:center;padding:12px 0}
.rsc-modal .ok .big{font-size:42px;line-height:1}
.rsc-modal .fine{color:var(--fg-subtle);font-size:12px;text-align:center;margin-top:8px}
@media(max-width:560px){.rsc .card{padding:22px 18px}.rsc .head{padding:32px 0 6px}}
`;
