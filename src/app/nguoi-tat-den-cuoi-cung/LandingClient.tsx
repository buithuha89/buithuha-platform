"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const CSS = `
.ndtc{--paper:#F7F3EC;--surf:#FFFDF9;--surf2:#F1EADD;--ink:#221E18;--muted:#6E6455;--muted2:#8A7F6D;
--line:#E7DECE;--line-2:#F0E9DB;--night:#14171C;--night-2:#1E232B;
--gold:#CC8A22;--gold-b:#E4A93A;--gold-d:#A9741A;--gold-tint:#F6EAD1;--gold-line:#E7CE9C;
--teal:#0C6070;--teal-d:#084451;--teal-tint:#E4EEEF;--teal-line:#BAD7DB;
--pain:#B4530A;--pain-tint:#FAEBDD;--pain-line:#ECCBA8;
--f:"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
--mono:ui-monospace,"Cascadia Mono",Consolas,"SF Mono",monospace;--maxw:1100px;
background:var(--paper);color:var(--ink);font-family:var(--f);line-height:1.6;-webkit-font-smoothing:antialiased;
overflow-x:hidden;min-height:100vh;padding-bottom:80px}
.ndtc *{box-sizing:border-box}
.ndtc .wrap{max-width:var(--maxw);margin:0 auto;padding:0 22px}
.ndtc h1,.ndtc h2,.ndtc h3{margin:0;letter-spacing:-.03em;text-wrap:balance;line-height:1.1;font-weight:800}
.ndtc h2{font-size:clamp(28px,5vw,44px);margin-bottom:16px;text-align:center}
.ndtc .lbl{font-size:11.5px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--gold-d);display:block;margin-bottom:16px;text-align:center}
.ndtc .lbl.pain{color:var(--pain)}
.ndtc .lead{color:var(--muted);font-size:clamp(16px,2.1vw,19px);max-width:62ch;margin-left:auto;margin-right:auto;text-align:center;text-wrap:pretty}
.ndtc .beat p,.ndtc .stateblk li span,.ndtc .rung span,.ndtc .obj .a,.ndtc .row .t small{text-wrap:pretty}
.ndtc section{padding:72px 0}
.ndtc .btn{display:inline-flex;align-items:center;gap:10px;justify-content:center;background:var(--gold-b);color:#231A08;
font-weight:800;font-size:16px;letter-spacing:.02em;padding:17px 34px;border-radius:999px;text-decoration:none;border:0;
cursor:pointer;text-transform:uppercase;font-family:inherit;box-shadow:0 12px 30px rgba(204,138,34,.34);
transition:transform .12s ease,background .15s ease,filter .15s ease}
.ndtc .btn:hover{background:var(--gold);transform:translateY(-2px)}
.ndtc .btn:focus-visible{outline:3px solid var(--teal);outline-offset:3px}
.ndtc .btn.lg{font-size:17px;padding:20px 42px}
.ndtc .center{text-align:center}
.ndtc .nav{position:sticky;top:0;z-index:40;background:rgba(247,243,236,.9);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.ndtc .nav .wrap{display:flex;align-items:center;justify-content:space-between;height:62px}
.ndtc .brand{font-weight:800;font-size:15px;text-decoration:none;color:var(--ink)}
.ndtc .brand small{display:block;font-weight:500;font-size:11px;color:var(--muted)}
.ndtc .nav .btn{padding:11px 22px;font-size:13px}

/* HERO — night + lamp */
.ndtc .hero{background:var(--night);color:#F3EEE4;padding:80px 0 74px;position:relative;overflow:hidden}
.ndtc .hero::after{content:"";position:absolute;left:-120px;top:-140px;width:620px;height:520px;
background:radial-gradient(ellipse at center,rgba(224,169,58,.22),rgba(224,169,58,.05) 44%,transparent 68%);pointer-events:none}
.ndtc .hero .wrap{position:relative;text-align:center}
.ndtc .hero .lamp{font-size:30px;margin-bottom:14px;filter:drop-shadow(0 0 20px rgba(224,169,58,.55))}
.ndtc .hero .lbl{color:var(--gold-b)}
.ndtc .hero h1{font-size:clamp(31px,5.6vw,58px);max-width:19ch;margin:0 auto 20px;color:#fff;text-wrap:balance}
.ndtc .hero h1 em{font-style:normal;color:var(--gold-b)}
.ndtc .hero .sub{color:#C9C0B1;font-size:clamp(16px,2.15vw,19px);max-width:56ch;margin:0 auto 14px;text-wrap:pretty}
.ndtc .hero .sub b{color:#fff}
.ndtc .hero .kill{font-size:15px;max-width:58ch;margin:8px auto 30px;padding-top:16px;border-top:1px solid rgba(228,169,58,.35);color:#B9AF9E}
.ndtc .hero .kill b{color:#fff}
.ndtc .proofstrip{margin:38px auto 0;padding-top:22px;border-top:1px solid #2C313A;display:flex;flex-wrap:wrap;justify-content:center;gap:14px 30px;max-width:780px}
.ndtc .proofstrip div{align-items:center}
.ndtc .proofstrip div{display:flex;flex-direction:column}
.ndtc .proofstrip .v{font-family:var(--mono);font-weight:800;font-size:22px;color:var(--gold-b);letter-spacing:-.02em}
.ndtc .proofstrip .l{font-size:11px;color:#8A8172;letter-spacing:.05em}
.ndtc .trustband{padding:24px 0;background:var(--surf2);border-bottom:1px solid var(--line)}
.ndtc .trustband .wrap{display:flex;flex-direction:column;align-items:center;gap:13px;text-align:center}
.ndtc .trustband .tlbl{font-size:11.5px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:var(--muted)}
.ndtc .trustband .tlogos{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:12px 34px}
.ndtc .trustband .tlogos span{font-weight:800;font-size:clamp(18px,2.6vw,25px);color:var(--ink);letter-spacing:-.01em}

/* OPERATING-STATE PANEL */
.ndtc .panel{margin-top:34px;background:var(--surf);border:1px solid var(--line);border-radius:16px;overflow:hidden;box-shadow:0 30px 70px -42px rgba(34,30,24,.42)}
.ndtc .panelhead{display:flex;align-items:center;gap:10px;padding:13px 18px;border-bottom:1px solid var(--line-2);background:var(--surf2)}
.ndtc .panelhead .dots{display:flex;gap:6px}
.ndtc .panelhead .dots i{width:10px;height:10px;border-radius:50%;background:var(--line)}
.ndtc .panelhead .fn{font-family:var(--mono);font-size:11.5px;color:var(--muted2);letter-spacing:.04em}
.ndtc .panelbody{padding:20px;display:grid;grid-template-columns:1fr 1fr;gap:22px}
.ndtc .panelbody .stateblk.good{border-left:1px dashed var(--line);padding-left:22px}
.ndtc .stateblk .stt{display:flex;align-items:center;gap:8px;font-size:11.5px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;margin-bottom:13px}
.ndtc .stateblk.bad .stt{color:var(--pain)} .ndtc .stateblk.good .stt{color:var(--teal)}
.ndtc .stateblk .tag{margin-left:auto;font-family:var(--mono);font-size:10px;padding:2px 8px;border-radius:5px}
.ndtc .stateblk.bad .tag{background:var(--pain-tint);color:var(--pain);border:1px solid var(--pain-line)}
.ndtc .stateblk.good .tag{background:var(--teal-tint);color:var(--teal-d);border:1px solid var(--teal-line)}
.ndtc .stateblk ul{list-style:none;margin:0;padding:0;display:grid;gap:9px}
.ndtc .stateblk li{display:grid;grid-template-columns:16px 1fr;gap:9px;font-size:14.4px;align-items:start;color:var(--ink)}
.ndtc .stateblk li i{font-style:normal;font-weight:800;font-family:var(--mono);font-size:13px;line-height:1.5}
.ndtc .stateblk.bad li i{color:var(--pain)} .ndtc .stateblk.good li i{color:var(--teal)}
.ndtc .arrowline{text-align:center;margin-top:26px;font-size:18px;font-weight:800;color:var(--gold-d)}

/* STORY TIMELINE */
.ndtc .storysec{text-align:center}
.ndtc .tl{max-width:640px;margin:36px auto 0;position:relative;padding-left:32px;text-align:left}
.ndtc .tl::before{content:"";position:absolute;left:8px;top:8px;bottom:8px;width:2px;background:linear-gradient(var(--gold-line),var(--line))}
.ndtc .beat{position:relative;padding:0 0 26px}
.ndtc .beat::before{content:"";position:absolute;left:-30px;top:5px;width:15px;height:15px;border-radius:50%;background:var(--surf2);border:2px solid var(--gold)}
.ndtc .beat .tm{font-family:var(--mono);font-size:12px;font-weight:700;color:var(--gold-d);letter-spacing:.04em}
.ndtc .beat p{margin:4px 0 0;font-size:15.6px;color:var(--ink)}
.ndtc .beat p em{color:var(--muted);font-style:italic}
.ndtc .turn{max-width:640px;margin:8px auto 0;border-top:1px dashed var(--line);padding-top:24px;display:grid;gap:12px;text-align:center}
.ndtc .turn p{margin:0}
.ndtc .turn .tbeat{font-weight:800;font-size:18px}
.ndtc .turn .tbeat.gold{color:var(--gold-d);font-size:20px}
.ndtc .turn .tdim{color:var(--muted);font-size:15.6px}
.ndtc .turn b{color:var(--ink)}

/* 6 TẦNG LADDER */
.ndtc .ladder{display:grid;gap:10px;margin-top:34px}
.ndtc .rung{display:grid;grid-template-columns:auto 1fr;gap:18px;align-items:center;background:var(--surf);border:1px solid var(--line);border-radius:14px;padding:20px 22px;transition:transform .15s ease,border-color .15s ease,box-shadow .15s ease}
.ndtc .rung:hover{border-color:var(--gold);transform:translateX(4px);box-shadow:0 16px 34px -26px rgba(169,116,26,.5)}
.ndtc .rung .rno{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--gold-d);background:var(--gold-tint);border:1px solid var(--gold-line);border-radius:9px;padding:8px 11px;text-align:center;line-height:1.2;white-space:nowrap}
.ndtc .rung .rno b{display:block;font-size:19px}
.ndtc .rung .rtx b{font-size:17px;display:block;margin-bottom:3px}
.ndtc .rung .rtx span{color:var(--muted);font-size:14.5px}

/* PROOF STATS */
.ndtc .stats{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:32px}
.ndtc .stat{background:var(--surf);border:1px solid var(--line);border-radius:14px;padding:24px 12px;text-align:center}
.ndtc .stat .v{font-family:var(--mono);font-variant-numeric:tabular-nums;font-size:clamp(21px,3vw,30px);font-weight:800;color:var(--gold-d);letter-spacing:-.02em}
.ndtc .stat .l{font-size:12px;color:var(--muted);margin-top:5px}
.ndtc .mentor{display:grid;grid-template-columns:280px 1fr;gap:36px;align-items:center}
.ndtc .mentorimg{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:18px;border:1px solid var(--line);box-shadow:0 26px 54px -30px rgba(34,30,24,.55);display:block}
.ndtc .mentortx .lbl{margin-bottom:12px}
.ndtc .mentortx h2{margin-bottom:14px}

/* TESTIMONIALS */
.ndtc .tgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:30px}
.ndtc .tcard{background:var(--surf);border:1px solid var(--line);border-radius:14px;padding:24px}
.ndtc .tcard .stars{color:var(--gold-b);font-size:14px;letter-spacing:2px;margin-bottom:10px}
.ndtc .tcard p{font-size:15.4px;color:var(--ink);margin:0 0 16px;text-wrap:pretty}
.ndtc .tcard .who{display:flex;align-items:center;gap:12px}
.ndtc .tcard .av{width:44px;height:44px;border-radius:50%;background:var(--gold-tint);color:var(--gold-d);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:17px;flex-shrink:0}
.ndtc .tcard .nm{font-weight:800;font-size:14.5px}
.ndtc .tcard .rl{color:var(--muted);font-size:12.8px}

/* OBJECTIONS */
.ndtc .obj{background:var(--surf);border:1px solid var(--line);border-radius:12px;padding:20px 22px;margin-bottom:11px}
.ndtc .obj .q{font-weight:800;font-size:16px;margin-bottom:5px}
.ndtc .obj .a{color:var(--muted);font-size:14.7px}
.ndtc .obj .a b{color:var(--ink)}

/* POSITIONING — night + lamp glow */
.ndtc .posn{margin-top:12px;background:var(--night);color:#F3EEE4;border-radius:18px;padding:40px 36px;position:relative;overflow:hidden}
.ndtc .posn::before{content:"";position:absolute;left:-70px;top:-90px;width:440px;height:340px;background:radial-gradient(ellipse,rgba(224,169,58,.2),transparent 66%);pointer-events:none;z-index:0}
.ndtc .posn>*{position:relative;z-index:1}
.ndtc .posn .k{font-size:11.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold-b);font-weight:800;margin-bottom:14px;display:block}
.ndtc .posn h3{font-size:clamp(21px,3.3vw,31px);color:#fff;margin:0 0 16px;max-width:26ch;line-height:1.2;letter-spacing:-.02em}
.ndtc .posn p{color:#C9C0B1;font-size:15.6px;margin:0;max-width:64ch;text-wrap:pretty}
.ndtc .posn .line{margin-top:22px;display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}
.ndtc .posn .strike{color:#9A8F7D;text-decoration:line-through;font-weight:600;font-size:17px}
.ndtc .posn .big{font-size:clamp(30px,6vw,50px);font-weight:800;color:var(--gold-b);letter-spacing:-.03em}
.ndtc .posn .to{color:var(--gold-b);font-weight:800}

/* OFFER */
.ndtc .offerbox{background:var(--surf);border:2px solid var(--gold-line);border-radius:16px;margin-top:30px;overflow:hidden;box-shadow:0 30px 70px -44px rgba(169,116,26,.5)}
.ndtc .offerhead{background:var(--gold-tint);border-bottom:1px solid var(--gold-line);padding:22px 28px}
.ndtc .offerhead b{font-size:18px;font-weight:800}
.ndtc .offerhead small{display:block;color:var(--muted);font-size:13px;margin-top:3px}
.ndtc .ledger{padding:8px 28px}
.ndtc .row{display:grid;grid-template-columns:1fr auto;gap:16px;padding:15px 0;border-bottom:1px solid var(--line-2);align-items:start}
.ndtc .row:last-of-type{border-bottom:0}
.ndtc .row .t b{font-size:15.5px}
.ndtc .row .t small{display:block;color:var(--muted);font-size:13.6px;margin-top:2px}
.ndtc .row .v{font-family:var(--mono);font-size:13px;color:var(--gold-d);font-weight:700;white-space:nowrap;padding-top:3px}
.ndtc .price{background:var(--gold-tint);padding:20px 28px;border-top:2px solid var(--gold-line);display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:12px}
.ndtc .price .l{color:var(--muted);font-size:14.5px}
.ndtc .price .r{font-size:22px;font-weight:800;color:var(--gold-d)}
.ndtc .price s{color:var(--muted);font-weight:500;font-size:14px;margin-right:8px}
.ndtc .guar{margin:20px 28px;background:var(--teal-tint);border:1px solid var(--teal-line);border-radius:12px;padding:18px 20px;color:var(--muted);font-size:14.7px}
.ndtc .guar b{color:var(--ink)} .ndtc .guar .t{color:var(--teal-d);font-weight:800}
.ndtc .scarce{list-style:none;padding:16px 20px;margin:0 28px 22px;display:grid;gap:9px;background:var(--pain-tint);border:1px solid var(--pain-line);border-radius:12px}
.ndtc .scarce li{display:grid;grid-template-columns:auto 1fr;gap:11px;color:var(--muted);font-size:14.7px}
.ndtc .scarce i{font-style:normal;color:var(--pain);font-weight:800}
.ndtc .scarce b{color:var(--ink)}
.ndtc .offercta{padding:0 28px 28px;text-align:center}
.ndtc .offercta .btn{width:100%;max-width:420px}

/* MUA LẺ */
.ndtc .alabox{margin-top:24px;background:var(--surf);border:1px solid var(--line);border-radius:16px;padding:24px 26px}
.ndtc .alahead{font-weight:800;font-size:17px;margin-bottom:4px}
.ndtc .alasub{color:var(--muted);font-size:13.5px;margin-bottom:16px}
.ndtc .alagrid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
.ndtc .ala{border:1px solid var(--line);border-radius:10px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;gap:10px;background:var(--surf2)}
.ndtc .ala b{font-size:14px;font-weight:600;line-height:1.3}
.ndtc .ala .r2{display:flex;align-items:center;gap:9px;flex-shrink:0}
.ndtc .ala .p2{font-family:var(--mono);font-size:12.5px;color:var(--muted)}
.ndtc .alabtn{background:none;border:1px solid var(--gold);color:var(--gold-d);font-weight:700;font-size:12px;padding:6px 11px;border-radius:7px;cursor:pointer;font-family:inherit;white-space:nowrap}
.ndtc .alabtn:hover{background:var(--gold-tint)}
.ndtc .decoy{margin-top:18px;background:var(--gold-tint);border:1px solid var(--gold-line);border-radius:10px;padding:18px 20px;font-size:14.5px;color:var(--ink);text-align:center}
.ndtc .decoy b{color:var(--gold-d)}
.ndtc .decoy .btn{margin-top:14px;width:100%;max-width:360px}

/* FAQ */
.ndtc details{background:var(--surf);border:1px solid var(--line);border-radius:12px;margin-bottom:10px;overflow:hidden}
.ndtc summary{cursor:pointer;padding:18px 22px;font-weight:700;font-size:15.5px;list-style:none;display:flex;justify-content:space-between;gap:14px;align-items:center}
.ndtc summary::-webkit-details-marker{display:none}
.ndtc summary::after{content:"+";color:var(--gold-d);font-size:20px;font-weight:800}
.ndtc details[open] summary::after{content:"–"}
.ndtc details .body{padding:15px 22px 18px;color:var(--muted);font-size:14.7px;border-top:1px solid var(--line-2)}
.ndtc details .body b{color:var(--ink)}

/* FINAL — night + lamp */
.ndtc .final{background:var(--night);color:#EDE6D9;text-align:center;padding:88px 0;position:relative;overflow:hidden}
.ndtc .final::before{content:"";position:absolute;left:50%;top:-100px;transform:translateX(-50%);width:520px;height:380px;background:radial-gradient(ellipse,rgba(224,169,58,.2),transparent 66%);pointer-events:none;z-index:0}
.ndtc .final .wrap{position:relative;z-index:1}
.ndtc .final .lamp{font-size:26px;margin-bottom:12px;filter:drop-shadow(0 0 18px rgba(224,169,58,.55))}
.ndtc .final h2{color:#fff;max-width:18ch;margin:0 auto 16px}
.ndtc .final p{color:#C4BBAC;font-size:17.5px;max-width:52ch;margin:0 auto 30px}
.ndtc .final .mini{margin-top:16px;font-size:12.5px;color:#8A8172}

.ndtc footer{padding:36px 0 28px;text-align:center;color:var(--muted);font-size:13px;border-top:1px solid var(--line)}
.ndtc .sticky{position:fixed;left:0;right:0;bottom:0;z-index:50;padding:11px 16px calc(11px + env(safe-area-inset-bottom));
background:rgba(247,243,236,.94);backdrop-filter:blur(10px);border-top:1px solid var(--line)}
.ndtc .sticky .inner{max-width:540px;margin:0 auto}
.ndtc .sticky .btn{width:100%}

/* FAB */
.ndtc .fab{position:fixed;right:15px;bottom:88px;z-index:55;display:flex;flex-direction:column;gap:9px}
.ndtc .fab a{display:inline-flex;align-items:center;gap:8px;padding:10px 15px;border-radius:30px;color:#fff;text-decoration:none;font-weight:800;font-size:13px;box-shadow:0 8px 22px rgba(0,0,0,.22)}
.ndtc .fab .zl{background:#0068FF} .ndtc .fab .fb{background:#1877F2}
.ndtc .fab a:hover{filter:brightness(1.06)}

.ndtc .btnsoft{display:inline-flex;align-items:center;gap:7px;background:none;border:0;color:var(--gold-d);font-weight:700;font-size:14px;font-family:inherit;cursor:pointer;text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1.5px;padding:6px 2px;text-align:left}
.ndtc .btnsoft:hover{color:var(--gold)}
.ndtc .hero .btnsoft{color:#E7C97D}
.ndtc .herosoft{margin-top:14px}
.ndtc .why{max-width:760px}
.ndtc .why h2{margin-bottom:18px}
.ndtc .why p{font-size:clamp(16px,2.05vw,18.5px);color:var(--ink);margin:0 0 15px;text-wrap:pretty}
.ndtc .why p b{color:var(--gold-d)}
.ndtc .why .sig{margin-top:6px;font-weight:800;color:var(--ink)}
.ndtc .softclose{background:var(--surf);border:1px dashed var(--gold-line);border-radius:16px;padding:30px 28px;text-align:center;max-width:680px;margin:0 auto}
.ndtc .softclose h3{font-size:clamp(19px,2.6vw,25px);margin-bottom:10px}
.ndtc .softclose p{color:var(--muted);font-size:15.3px;max-width:54ch;margin:0 auto 20px;text-wrap:pretty}
.ndtc .softclose p b{color:var(--ink)}
.ndtc .final .btnsoft{color:#E7C97D;margin-top:14px}
.ndtc .reveal{opacity:0;transform:translateY(16px)}
.ndtc .reveal.in{opacity:1;transform:none;transition:opacity .6s ease,transform .6s ease}
@media (prefers-reduced-motion:reduce){.ndtc .reveal{opacity:1;transform:none;transition:none}}

/* MODAL */
.ndtc-ov{position:fixed;inset:0;z-index:60;background:rgba(20,23,28,.6);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:18px}
.ndtc-modal{position:relative;width:100%;max-width:420px;background:#FFFDF9;border-radius:16px;padding:30px 28px;box-shadow:0 30px 80px rgba(0,0,0,.32);font-family:"Be Vietnam Pro",system-ui,sans-serif;color:#221E18}
.ndtc-modal h3{margin:0 0 5px;font-size:21px;font-weight:800;letter-spacing:-.02em}
.ndtc-modal .desc{margin:0 0 18px;font-size:14px;color:#6E6455}
.ndtc-modal label{display:block;font-size:13.5px;font-weight:600;margin:0 0 5px}
.ndtc-modal input{width:100%;padding:11px 13px;border:1px solid #E0D7C7;border-radius:8px;font-size:15px;margin-bottom:13px;font-family:inherit;color:#221E18;background:#fff}
.ndtc-modal input:focus{outline:2px solid #CC8A22;outline-offset:1px;border-color:#CC8A22}
.ndtc-modal .go{width:100%;background:#E4A93A;color:#231A08;border:0;padding:14px;border-radius:8px;font-weight:800;font-size:15.5px;cursor:pointer;font-family:inherit;text-transform:uppercase;letter-spacing:.02em}
.ndtc-modal .go:disabled{opacity:.6}
.ndtc-modal .x{position:absolute;top:12px;right:14px;border:0;background:none;font-size:22px;cursor:pointer;color:#8A7F6D;line-height:1}
.ndtc-modal .err{background:#FAEBDD;border:1px solid #ECCBA8;color:#B4530A;padding:9px 12px;border-radius:8px;font-size:13.5px;margin-bottom:12px}
.ndtc-modal .ok{text-align:center;padding:14px 0}
.ndtc-modal .ok .big{font-size:44px;line-height:1}
.ndtc-modal .ok h3{margin-top:10px}

@media (max-width:820px){
.ndtc section{padding:58px 0}
.ndtc .panelbody{grid-template-columns:1fr}
.ndtc .panelbody .stateblk.good{border-left:0;border-top:1px dashed var(--line);padding-left:0;padding-top:16px}
.ndtc .alagrid{grid-template-columns:1fr}
.ndtc .stats{grid-template-columns:repeat(2,1fr)} .ndtc .stats .stat:last-child{grid-column:span 2}
.ndtc .ledger,.ndtc .offercta,.ndtc .price,.ndtc .offerhead{padding-left:20px;padding-right:20px}
.ndtc .guar,.ndtc .scarce{margin-left:20px;margin-right:20px}
.ndtc .tgrid{grid-template-columns:1fr} .ndtc .posn{padding:30px 24px}
.ndtc .mentor{grid-template-columns:1fr;gap:22px} .ndtc .mentorimg{max-width:260px;margin:0 auto}
.ndtc .fab a{padding:9px 13px;font-size:12px} .ndtc .fab{bottom:80px;right:12px}
}
`;

export default function LandingClient() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"hold" | "gift">("hold");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [err, setErr] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const rootRef = useRef<HTMLDivElement>(null);

  // Lời chứng thực THẬT — chờ chị Hà cung cấp (tên + chức danh + cho phép dùng).
  // Điền vào mảng này là khối testimonial tự hiện lên trang. KHÔNG dựng review giả.
  const testimonials: { quote: string; name: string; role: string }[] = [
    // { quote: "…", name: "…", role: "Giám đốc, Công ty …" },
  ];

  useEffect(() => {
    const els = rootRef.current?.querySelectorAll(".reveal");
    if (!els?.length) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErr("");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.name,
          email: form.email,
          phone: form.phone,
          password: crypto.randomUUID().slice(0, 12) + "Aa1",
          newsletter_opt_in: true,
        }),
      });
      const d = await res.json();
      if (res.ok && d.success) setStatus("done");
      else { setErr(d.error || "Có lỗi xảy ra. Vui lòng thử lại."); setStatus("idle"); }
    } catch {
      setErr("Lỗi kết nối. Vui lòng thử lại.");
      setStatus("idle");
    }
  };

  const openModal = (m: "hold" | "gift" = "hold") => { setMode(m); setStatus("idle"); setErr(""); setOpen(true); };

  const CTA = ({ children, cls }: { children: React.ReactNode; cls?: string }) => (
    <button className={"btn" + (cls ? " " + cls : "")} onClick={() => openModal("hold")}>{children}</button>
  );
  const SoftCTA = ({ children, cls }: { children: React.ReactNode; cls?: string }) => (
    <button className={"btnsoft" + (cls ? " " + cls : "")} onClick={() => openModal("gift")}>{children}</button>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="ndtc" ref={rootRef}>

        <div className="nav"><div className="wrap">
          <Link href="/" className="brand">Hà Bùi Academy<small>Học viện Quản trị &amp; Kỹ năng thiết yếu</small></Link>
          <CTA>Giữ chỗ</CTA>
        </div></div>

        {/* HERO */}
        <header className="hero"><div className="wrap">
          <div className="lamp">🔦</div>
          <span className="lbl">Người Tắt Đèn Cuối Cùng · Lộ Trình 6&nbsp;Tầng Thôi Ôm Hết™</span>
          <h1>Doanh nghiệp của bạn phải chạy được — <em>cả khi bạn vắng mặt</em>.</h1>
          <p className="sub">Bạn dựng cơ ngơi này để được tự do. Hôm nay, người bị trói chặt nhất trong đó — <b>chính là bạn</b>. Tự do bắt đầu từ ngày bạn <b>thôi ôm hết</b>.</p>
          <p className="sub kill">Không cần bỏ việc để đi học, không cần giỏi quản lý bẩm sinh. <b>6 khóa online</b>, học <b>trọn đời</b>, có <b>biểu mẫu áp dụng ngay trong tuần đầu</b>.</p>
          <CTA cls="lg">Đăng ký ngay →</CTA>
          <div className="herosoft"><SoftCTA>Chưa sẵn sàng? Nhận miễn phí cẩm nang “Thoát vòng lặp ôm việc” →</SoftCTA></div>
          <div className="proofstrip">
            <div><span className="v">10.000+</span><span className="l">HỌC VIÊN</span></div>
            <div><span className="v">350+</span><span className="l">CHƯƠNG TRÌNH</span></div>
            <div><span className="v">1.000+</span><span className="l">KHÓA HỌC</span></div>
            <div><span className="v">15</span><span className="l">NĂM ĐÀO TẠO / QUẢN LÝ</span></div>
            <div><span className="v">MBA</span><span className="l">QUẢN TRỊ KINH DOANH</span></div>
          </div>
        </div></header>

        {/* TRUST BAND — proof thật */}
        <section className="trustband"><div className="wrap">
          <span className="tlbl">Đã trực tiếp đào tạo &amp; xây khung năng lực tại</span>
          <div className="tlogos">
            <span>Vingroup</span>
            <span>FPT Telecom</span>
            <span>TokyoLife</span>
          </div>
        </div></section>

        {/* WHY — vì sao tôi làm (nháp, chị chỉnh lời cho đúng niềm tin thật) */}
        <section><div className="wrap reveal">
          <span className="lbl">Vì sao tôi làm điều này</span>
          <div className="why">
            <h2>Tôi không tin bạn cần cố gắng nhiều hơn. Tôi tin bạn cần thôi ôm hết.</h2>
            <p>Tôi đi qua đúng cái vòng đó: giỏi nên ôm, ôm nên kẹt, kẹt nên chẳng ai lớn lên được bên cạnh tôi. Càng chăm, doanh nghiệp càng phụ thuộc vào một người — và người đó kiệt sức.</p>
            <p>Mười lăm năm đào tạo quản lý, tới giờ vẫn <b>đang trực tiếp ngồi ghế nóng</b>, tôi thấy sự thật này lặp đi lặp lại: người chủ không thiếu năng lực — họ thiếu <b>một cách vận hành để năng lực đó chảy ra khỏi đầu mình</b>, thành quy trình, thành người, thành hệ thống.</p>
            <p>Tôi dựng 6 khóa này để trao lại đúng cách làm đó — gọn, thật, dùng được ngay — để bạn thôi phải là người tắt đèn cuối cùng.</p>
            <div className="sig">— Hà Bùi</div>
          </div>
        </div></section>

        {/* OPERATING STATE */}
        <section><div className="wrap reveal">
          <span className="lbl">Khoảng cách</span>
          <h2>Khoảng cách không nằm ở năng lực. Nằm ở cách bạn đang vận hành.</h2>
          <p className="lead">Cùng một con người, một đội ngũ — chỉ khác cách vận hành. Đây là “trạng thái” doanh nghiệp bạn hôm nay, và sau khi đi hết lộ trình:</p>
          <div className="panel">
            <div className="panelhead"><span className="dots"><i></i><i></i><i></i></span><span className="fn">trang-thai-van-hanh.log</span></div>
            <div className="panelbody">
              <div className="stateblk bad">
                <div className="stt">◆ Hôm nay <span className="tag">PHỤ THUỘC 1 NGƯỜI</span></div>
                <ul>
                  <li><i>✕</i><span>Việc gì cũng phải qua tay bạn duyệt.</span></li>
                  <li><i>✕</i><span>Giao xong vẫn phải kiểm — thậm chí làm lại.</span></li>
                  <li><i>✕</i><span>Không ai dám tự quyết. Mọi thứ dội ngược lên bàn bạn.</span></li>
                  <li><i>✕</i><span>Nghỉ ba ngày là việc dồn ứ chờ bạn về.</span></li>
                  <li><i>✕</i><span>Tuyển mãi không ra người “làm được như mình”.</span></li>
                  <li><i>✕</i><span>Bạn là người tắt đèn cuối cùng. Mỗi ngày.</span></li>
                </ul>
              </div>
              <div className="stateblk good">
                <div className="stt">◆ Sau lộ trình <span className="tag">TỰ VẬN HÀNH</span></div>
                <ul>
                  <li><i>✓</i><span>Đội ngũ biết rõ đích đến — và tự đi tới đó.</span></li>
                  <li><i>✓</i><span>Bạn giao việc một lần. Không phải làm lại.</span></li>
                  <li><i>✓</i><span>Quản lý tự quyết, tự chịu trách nhiệm kết quả.</span></li>
                  <li><i>✓</i><span>Bạn nghỉ một tuần — cỗ máy vẫn chạy.</span></li>
                  <li><i>✓</i><span>Người mới cứng nghề sau 90 ngày, không phải 9 tháng.</span></li>
                  <li><i>✓</i><span>Bạn dành giờ làm cho thứ thật sự đưa doanh nghiệp đi lên.</span></li>
                </ul>
              </div>
            </div>
          </div>
          <p className="arrowline">↓ Bạn không cần cố gắng nhiều hơn. Bạn cần một cách làm khác. ↓</p>
        </div></section>

        {/* STORY */}
        <section style={{ background: "var(--surf2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="wrap reveal storysec">
            <span className="lbl pain">Sự thật</span>
            <h2>Bạn không còn mệt nữa. Bạn chỉ chai lì.</h2>
            <div className="tl">
              <div className="beat"><span className="tm">5:40 SÁNG</span><p>Bạn tỉnh trước chuông báo thức — không phải vì ngủ đủ, mà vì cái đầu không chịu tắt. Tay với điện thoại trước khi chân chạm đất: hai mươi mấy tin nhắn. Ngày mới bắt đầu bằng việc dọn hậu quả của ngày cũ.</p></div>
              <div className="beat"><span className="tm">8:30 → TRƯA</span><p>Bạn tự hứa dành buổi sáng cho việc lớn. 9 giờ 10, một nhân viên đứng ở cửa: <em>“Sếp xem giúp em cái này.”</em> Bạn xem. Xem xong thì sửa. Sửa xong thì làm luôn cho nhanh. Đến trưa, việc lớn vẫn nằm nguyên chỗ cũ.</p></div>
              <div className="beat"><span className="tm">19:00 TỐI</span><p>Đèn văn phòng vẫn sáng, vì bạn còn ngồi đó. Mọi người về hết. Lúc đó bạn mới bắt đầu làm việc của bạn.</p></div>
              <div className="beat"><span className="tm">23:00 KHUYA</span><p>Cơm nguội. Nhà ngủ rồi. Cái vai cứng như đá. Cơn ho vặt ba tuần chưa dứt. Bạn không nhớ nổi lần cuối mình ngủ một giấc trọn vẹn.</p></div>
            </div>
            <div className="turn">
              <p className="tbeat">Rồi thứ đáng sợ hơn xuất hiện: bạn hết mệt.</p>
              <p className="tdim">Không phải vì nhẹ đi — mà vì bạn <b>chai</b>. Việc gấp không còn làm tim bạn đập nhanh. Lời khen trôi qua như nước. Ngày xưa bạn làm nghề này bằng <b>lửa</b>. Giờ bạn làm bằng <b>quán tính</b>.</p>
              <p className="tbeat">Càng chạy nhanh, việc càng dồn về bạn — vì bạn làm nhanh nhất, đúng nhất, ít sai nhất. Bạn chính là cái nút thắt mà bạn đang cố gỡ.</p>
              <p className="tbeat gold">Bạn không kẹt vì kém. Bạn kẹt vì giỏi.</p>
              <p className="tdim">Mọi tiêu chuẩn, mọi cách làm đúng đều nằm trong đầu bạn — nên việc gì cũng phải quay về bạn. Ngày bạn đưa nó <b>ra khỏi đầu</b>, biến nó thành mô hình ai cũng dùng được, là ngày bạn thôi vận hành bằng <b>sức</b> (thứ có trần) và bắt đầu vận hành bằng <b>năng lực</b> (thứ học được, trao đi được).</p>
              <p className="tbeat">Đèn vẫn sáng sau khi bạn về. Chỉ là bạn không còn phải là người tắt đèn cuối cùng.</p>
            </div>
          </div>
        </section>

        {/* 6 TẦNG */}
        <section><div className="wrap reveal">
          <span className="lbl">Lộ Trình 6 Tầng Thôi Ôm Hết™</span>
          <h2>6 tầng năng lực để bước ra khỏi vòng lặp ôm việc.</h2>
          <p className="lead">Mỗi tầng là một khóa gọn, đi kèm <b style={{ color: "var(--ink)" }}>câu chuyện thật · mô hình chuẩn · biểu mẫu áp dụng được ngay</b>. Leo lần lượt — mỗi tầng gỡ một nút thắt đang buộc bạn vào bàn làm việc. Truy cập trọn đời, học theo nhịp của bạn.</p>
          <div className="ladder">
            <div className="rung"><div className="rno">Tầng<b>01</b></div><div className="rtx"><b>Tư duy người quản lý</b><span>Cách thoát khỏi vòng lặp ôm việc — nhìn ra việc nào đáng làm, việc nào phải buông.</span></div></div>
            <div className="rung"><div className="rno">Tầng<b>02</b></div><div className="rtx"><b>Giao việc &amp; uỷ quyền</b><span>Kèm biểu mẫu: giao mà vẫn giữ chuẩn, không phải kiểm từng ly hay làm lại.</span></div></div>
            <div className="rung"><div className="rno">Tầng<b>03</b></div><div className="rtx"><b>Đào tạo đội ngũ &amp; onboarding</b><span>Lộ trình đưa người mới tự đứng được — thay vì bạn kèm mãi.</span></div></div>
            <div className="rung"><div className="rno">Tầng<b>04</b></div><div className="rtx"><b>Khung năng lực cơ bản</b><span>Để tuyển đúng người, đánh giá công bằng, đào tạo có đích.</span></div></div>
            <div className="rung"><div className="rno">Tầng<b>05</b></div><div className="rtx"><b>Nhận sai không mất uy tín</b><span>Cách xử lý khi mình sai mà vẫn giữ được vị thế trước đội ngũ.</span></div></div>
            <div className="rung"><div className="rno">Tầng<b>06</b></div><div className="rtx"><b>Phản hồi &amp; nói chuyện khó</b><span>Góp ý, xử lý sai phạm — nói thẳng mà không mất người.</span></div></div>
          </div>
          <div className="center" style={{ marginTop: 34 }}><CTA>Xem gói học ưu đãi →</CTA></div>
        </div></section>

        {/* PROOF */}
        <section style={{ background: "var(--surf2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="wrap reveal">
            <div className="mentor">
              <img className="mentorimg" src={siteConfig.owner.avatar} alt="Hà Bùi — Hà Bùi Academy" loading="lazy" />
              <div className="mentortx">
                <span className="lbl">Người đồng hành</span>
                <h2>Tôi vẫn đang ngồi trong ghế nóng — cùng chỗ với bạn.</h2>
                <p className="lead">Tôi không đứng ngoài nhìn vào. Tôi vẫn giao việc, vẫn xử lý người, vẫn xây khung năng lực mỗi tuần. <b style={{ color: "var(--ink)" }}>MBA · 15 năm đào tạo · từng phụ trách đào tạo quản lý tại Vingroup, FPT Telecom, TokyoLife · đang trực tiếp quản lý nhân sự.</b></p>
              </div>
            </div>
            <div className="stats" style={{ marginTop: 32 }}>
              <div className="stat"><div className="v">10.000+</div><div className="l">học viên đã đào tạo</div></div>
              <div className="stat"><div className="v">350+</div><div className="l">chương trình đào tạo</div></div>
              <div className="stat"><div className="v">1.000+</div><div className="l">khóa học</div></div>
              <div className="stat"><div className="v">15</div><div className="l">năm đào tạo / quản lý</div></div>
              <div className="stat"><div className="v">MBA</div><div className="l">Quản trị Kinh doanh</div></div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS — chỉ hiện khi có lời chứng thực THẬT */}
        {testimonials.length > 0 && (
          <section><div className="wrap reveal">
            <span className="lbl">Người học nói gì</span>
            <h2>Họ đã bước ra khỏi vòng lặp.</h2>
            <div className="tgrid">
              {testimonials.map((t, i) => (
                <div className="tcard" key={i}>
                  <div className="stars">★★★★★</div>
                  <p>“{t.quote}”</p>
                  <div className="who">
                    <div className="av">{t.name.trim().charAt(0)}</div>
                    <div><div className="nm">{t.name}</div><div className="rl">{t.role}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div></section>
        )}

        {/* OBJECTIONS */}
        <section><div className="wrap reveal">
          <span className="lbl">Trả lời thẳng</span>
          <h2>Bạn đang nghĩ gì?</h2>
          <div style={{ marginTop: 28 }}>
            <div className="obj"><div className="q">“Doanh nghiệp tôi nhỏ, chuyện này là của tập đoàn chứ?”</div><div className="a">Ngược lại. Tập đoàn có nhiều lớp đệm nên chịu được sự mơ hồ. Doanh nghiệp nhỏ thì mọi mơ hồ đổ hết lên đầu người chủ. Càng nhỏ càng phải xây sớm.</div></div>
            <div className="obj"><div className="q">“Tôi bận muốn chết, lấy đâu thời gian?”</div><div className="a">Bạn bận chính vì chưa có hệ thống. Mỗi tuần 2 giờ học + 1 giờ áp dụng. Mỗi chặng đi ra một sản phẩm dùng được ngay — đây là thời gian để <b>bớt bận về sau</b>.</div></div>
            <div className="obj"><div className="q">“Tôi giao rồi, mà không ai làm được như tôi.”</div><div className="a">Đúng — vì tiêu chuẩn “thế nào là được” đang nằm trong đầu bạn, chưa ai nhìn thấy. Khi cái chuẩn hết vô hình, người ta tự soi và tự sửa được.</div></div>
            <div className="obj"><div className="q">“Tôi làm một mình, chưa có nhân viên.”</div><div className="a">Vẫn học được — và nên học sớm. Bạn đóng gói năng lực thành quy trình để thuê ngoài, tự động hoá, hoặc giao cho người đầu tiên mà không phải cầm tay chỉ việc.</div></div>
            <div className="obj"><div className="q">“Lỡ không hợp thì sao?”</div><div className="a">Tôi hoàn 100% học phí trong 14 ngày. Rủi ro thuộc về tôi, không phải bạn.</div></div>
          </div>
        </div></section>

        {/* POSITIONING GIÁ */}
        <section><div className="wrap reveal">
          <span className="lbl">Vì sao chỉ 1.999.000đ?</span>
          <div className="posn">
            <span className="k">Cùng một hệ thống — một mức giá khác hẳn</span>
            <h3>Cùng năng lực “giải phóng người&nbsp;chủ” mà nhiều nơi dạy offline vài chục triệu — tôi đóng gói online để bạn học trọn đời.</h3>
            <p>Tôi không mở lớp offline chục triệu. Tôi lấy đúng 6 năng lực cốt lõi đúc kết từ 15 năm đứng lớp cho Vingroup, FPT Telecom, TokyoLife, gói thành khóa online kèm biểu mẫu dùng ngay — để một người chủ trả <b style={{ color: "#fff" }}>một lần</b>, <b style={{ color: "#fff" }}>dùng trọn đời</b>, không phải bỏ việc đi học xa.</p>
            <div className="line">
              <span className="strike">Giá trị thật 6.900.000đ</span>
              <span className="to">→</span>
              <span className="big">1.999.000đ</span>
            </div>
          </div>
        </div></section>

        {/* OFFER */}
        <section id="dangky" style={{ background: "var(--surf2)", borderTop: "1px solid var(--line)" }}>
          <div className="wrap reveal">
            <span className="lbl">Ưu đãi Founding Member · chỉ 15 suất đầu tiên</span>
            <h2>Bạn nhận được gì</h2>
            <div className="offerbox">
              <div className="offerhead"><b>Gói trọn — Lộ Trình 6 Tầng Thôi Ôm Hết™</b><small>Học online (LMS) · truy cập TRỌN ĐỜI · 6 buổi Zoom tháo gỡ · cộng đồng trọn đời</small></div>
              <div className="ledger">
                <div className="row"><div className="t"><b>6 khóa (6 tầng năng lực) trên LMS — truy cập trọn đời</b><small>Tư duy thoát vòng lặp · Giao việc &amp; uỷ quyền · Đào tạo đội ngũ &amp; onboarding · Khung năng lực · Nhận sai không mất uy tín · Phản hồi &amp; nói chuyện khó.</small></div><div className="v">2.940.000đ</div></div>
                <div className="row"><div className="t"><b>6 buổi Zoom tháo gỡ vướng mắc (nhóm)</b><small>Mang đúng tình huống của bạn ra để cùng gỡ trực tiếp.</small></div><div className="v">2.400.000đ</div></div>
                <div className="row"><div className="t"><b>Bộ biểu mẫu áp dụng được ngay</b><small>Biểu mẫu giao việc &amp; uỷ quyền, khung năng lực theo vị trí, quy trình onboarding theo mô tả công việc, kịch bản 10 cuộc nói chuyện khó.</small></div><div className="v">990.000đ</div></div>
                <div className="row"><div className="t"><b>Cộng đồng trọn đời — case study quản trị + biểu mẫu</b><small>Nơi bạn hỏi được những câu không hỏi được với nhân viên.</small></div><div className="v">570.000đ</div></div>
              </div>
              <div className="price">
                <div className="l">Giá gốc: <b style={{ color: "var(--ink)" }}>6.900.000đ</b><br /><span style={{ fontSize: 13 }}>Ưu đãi khách hàng đầu tiên · truy cập trọn đời</span></div>
                <div className="r"><s>6.900.000đ</s> 1.999.000đ</div>
              </div>
              <div className="guar"><span className="t">✓ Cam kết bảo đảm.</span> Xem hết <b>3 tầng đầu</b>, nếu bạn không thấy giá trị, nhắn tôi trong <b>14 ngày</b> — tôi <b>hoàn 100% học phí</b>. Rủi ro để tôi lo, không phải bạn.</div>
              <ul className="scarce">
                <li><i>◆</i><div>Giá <b>1.999.000đ</b> (thay vì 6.900.000đ) + <b>truy cập trọn đời</b> chỉ mở cho <b>15 khách hàng đầu tiên</b> — hết suất, giá về 6.900.000đ.</div></li>
                <li><i>◆</i><div>Khóa mở ngay sau khi đăng ký. 6 buổi Zoom tháo gỡ nhóm bắt đầu đợt đầu từ <b>15/09/2026</b>.</div></li>
              </ul>
              <div className="offercta"><CTA cls="lg">Đăng ký ngay — 1.999.000đ</CTA></div>
            </div>
          </div>
        </section>

        {/* MUA LẺ — chim mồi */}
        <section style={{ background: "var(--surf2)", borderTop: "1px solid var(--line)" }}>
          <div className="wrap reveal">
            <span className="lbl">Chưa muốn cả gói?</span>
            <h2>Mua lẻ từng tầng — chỉ 490.000đ/khóa.</h2>
            <div className="alabox">
              <div className="alahead">6 khóa, mua riêng khóa nào bạn cần</div>
              <div className="alasub">Học phí khóa lẻ được trừ thẳng vào gói trọn nếu bạn nâng cấp trong 30 ngày.</div>
              <div className="alagrid">
                <div className="ala"><b>1. Tư duy người quản lý — thoát vòng lặp</b><div className="r2"><span className="p2">490.000đ</span><button className="alabtn" onClick={() => openModal("hold")}>Mua lẻ</button></div></div>
                <div className="ala"><b>2. Giao việc &amp; uỷ quyền (+ biểu mẫu)</b><div className="r2"><span className="p2">490.000đ</span><button className="alabtn" onClick={() => openModal("hold")}>Mua lẻ</button></div></div>
                <div className="ala"><b>3. Đào tạo đội ngũ &amp; onboarding</b><div className="r2"><span className="p2">490.000đ</span><button className="alabtn" onClick={() => openModal("hold")}>Mua lẻ</button></div></div>
                <div className="ala"><b>4. Khung năng lực cơ bản</b><div className="r2"><span className="p2">490.000đ</span><button className="alabtn" onClick={() => openModal("hold")}>Mua lẻ</button></div></div>
                <div className="ala"><b>5. Nhận sai mà không mất uy tín</b><div className="r2"><span className="p2">490.000đ</span><button className="alabtn" onClick={() => openModal("hold")}>Mua lẻ</button></div></div>
                <div className="ala"><b>6. Phản hồi &amp; nói chuyện khó</b><div className="r2"><span className="p2">490.000đ</span><button className="alabtn" onClick={() => openModal("hold")}>Mua lẻ</button></div></div>
              </div>
              <div className="decoy">
                Mua lẻ chỉ <b>4 khóa</b> đã là <b>1.960.000đ</b> — gần bằng cả gói trọn <b>1.999.000đ</b>, mà gói có tới <b>6 khóa + 6 buổi Zoom + biểu mẫu + cộng đồng trọn đời</b>.<br />
                <CTA cls="lg">Lấy cả gói cho hời — 1.999.000đ</CTA>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section><div className="wrap reveal">
          <span className="lbl">Hỏi &amp; Đáp</span>
          <h2>Câu hỏi thường gặp</h2>
          <div style={{ marginTop: 26 }}>
            <details><summary>Học thế nào, bắt đầu khi nào?</summary><div className="body">6 khóa nằm sẵn trên LMS — đăng ký xong học được ngay, mọi lúc, <b>truy cập trọn đời</b>. Lộ trình gợi ý 180 ngày để mỗi năng lực thành thói quen. Riêng <b>6 buổi Zoom tháo gỡ nhóm</b> bắt đầu đợt đầu từ <b>15/09/2026</b>, mỗi buổi cách nhau ~2 tuần (có ghi hình).</div></details>
            <details><summary>Online hay offline?</summary><div className="body"><b>100% online</b>: khóa học trên LMS (xem lại không giới hạn) + 6 buổi Zoom nhóm (có ghi hình). Không sợ lỡ buổi nào vì việc đột xuất.</div></details>
            <details><summary>Doanh nghiệp bao nhiêu người thì hợp?</summary><div className="body">Hợp nhất với chủ SME <b>5–50 nhân sự</b>, quản lý đã có đội, và cả người đang <b>làm một mình</b> chuẩn bị tuyển người đầu tiên.</div></details>
            <details><summary>Thanh toán &amp; hoá đơn?</summary><div className="body">Học phí ưu đãi <b>1.999.000đ</b>, thanh toán 1 lần là truy cập trọn đời. Có <b>xuất hoá đơn VAT</b> nếu bạn cần cho doanh nghiệp.</div></details>
            <details><summary>Sau khóa có hỗ trợ tiếp không?</summary><div className="body">Có — bạn ở lại <b>Cộng đồng trọn đời</b>: case study quản trị và biểu mẫu được cập nhật, hỏi đáp cùng cộng đồng chủ doanh nghiệp &amp; quản lý.</div></details>
            <details><summary>Vẫn còn phân vân?</summary><div className="body">Để lại thông tin, tôi sẽ liên hệ tư vấn trực tiếp — nếu chương trình không hợp với bạn lúc này, tôi nói thẳng. Hoặc nhắn tôi ngay qua <a href={siteConfig.socials.zalo} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold-d)", fontWeight: 600 }}>Zalo</a> / <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold-d)", fontWeight: 600 }}>Facebook</a>.</div></details>
          </div>
        </div></section>

        {/* SOFT CLOSE — bắt lead cho người chưa sẵn sàng */}
        <section style={{ background: "var(--surf2)", borderTop: "1px solid var(--line)" }}>
          <div className="wrap reveal">
            <div className="softclose">
              <h3>Chưa sẵn sàng đăng ký hôm nay?</h3>
              <p>Không sao. Mang về trước bộ cẩm nang <b>“7 câu hỏi tự nhìn lại cách bạn đang vận hành”</b> — đọc 10 phút, bạn tự thấy mình đang <b>GÁNH</b> hay đang <b>DẪN DẮT</b>.</p>
              <button className="btn" onClick={() => openModal("gift")}>Nhận cẩm nang miễn phí</button>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final"><div className="wrap reveal">
          <div className="lamp">🔦</div>
          <h2>Sẵn sàng thôi làm người tắt đèn cuối cùng?</h2>
          <p>Năm sau, doanh nghiệp của bạn sẽ chạy bằng hệ thống — hoặc vẫn chạy bằng sức của bạn. Cả hai đều là một lựa chọn.</p>
          <CTA cls="lg">Đăng ký ngay →</CTA>
          <div className="mini">Chỉ 1.999.000đ · Truy cập trọn đời · Hoàn 100% trong 14 ngày · 15 suất đầu tiên</div>
          <div><SoftCTA>Chưa sẵn sàng? Nhận cẩm nang miễn phí →</SoftCTA></div>
        </div></section>

        <footer>Hà Bùi Academy — Học viện Quản trị &amp; Kỹ năng thiết yếu · buithuha.com</footer>

        <div className="fab">
          <a className="zl" href={siteConfig.socials.zalo} target="_blank" rel="noopener noreferrer" aria-label="Chat Zalo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.1 1-.6 2.4-1.3 3.3-.2.3.1.7.4.6 1.9-.4 3.3-1 4.2-1.6 1 .3 2 .4 3.1.4 5.5 0 10-3.6 10-8S17.5 3 12 3z" /></svg>Zalo
          </a>
          <a className="fb" href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Nhắn Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.1 1-.6 2.4-1.3 3.3-.2.3.1.7.4.6 1.9-.4 3.3-1 4.2-1.6 1 .3 2 .4 3.1.4 5.5 0 10-3.6 10-8S17.5 3 12 3z" /></svg>Facebook
          </a>
        </div>

        <div className="sticky"><div className="inner"><CTA>Đăng ký ngay — chỉ 1.999.000đ (trọn đời)</CTA></div></div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="ndtc-ov" onClick={() => status !== "loading" && setOpen(false)}>
          <div className="ndtc-modal" onClick={(e) => e.stopPropagation()}>
            <button className="x" onClick={() => status !== "loading" && setOpen(false)} aria-label="Đóng">×</button>
            {status === "done" ? (
              <div className="ok">
                <div className="big">{mode === "gift" ? "🎁" : "✅"}</div>
                <h3>{mode === "gift" ? "Đã nhận — cẩm nang đang tới!" : "Đã nhận thông tin của bạn!"}</h3>
                <p className="desc">{mode === "gift"
                  ? "Tôi sẽ gửi bộ cẩm nang tới email của bạn sớm — nhớ kiểm tra cả mục Spam nhé."
                  : "Tôi sẽ liên hệ sớm để tư vấn và xác nhận suất Founding Member. Kiểm tra email (cả mục Spam) giúp tôi nhé."}</p>
              </div>
            ) : (
              <>
                <h3>{mode === "gift" ? "Nhận miễn phí bộ cẩm nang" : "Giữ chỗ Founding Member"}</h3>
                <p className="desc">{mode === "gift"
                  ? "Để lại thông tin — tôi gửi bạn cẩm nang “7 câu hỏi tự nhìn lại cách bạn đang vận hành”, đọc là tự soi được mình đang GÁNH hay DẪN DẮT."
                  : "Để lại thông tin — tôi sẽ liên hệ tư vấn trực tiếp và giữ suất cho bạn. Chỉ 15 suất."}</p>
                {err && <div className="err">{err}</div>}
                <form onSubmit={submit}>
                  <label>Họ và tên</label>
                  <input required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Nguyễn Văn A" />
                  <label>Số điện thoại</label>
                  <input required type="tel" pattern="^(0|\+84)[0-9]{9}$" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} placeholder="0912345678" />
                  <label>Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="ban@email.com" />
                  <button className="go" type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Đang gửi..." : (mode === "gift" ? "Gửi cẩm nang cho tôi" : "Giữ chỗ ngay")}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
