// ==== Style (disuntik otomatis ke halaman) ====
(function injectStyle(){
  const css = `
  :root{
    --money:#0B3D2E;
    --money-dark:#06251A;
    --money-light:#134B38;
    --paper:#F7F2E7;
    --paper-dim:#EFE8D6;
    --ink:#16241C;
    --ink-soft:#3D4A41;
    --gold:#C9A227;
    --gold-soft:#E4C875;
    --stamp:#B23A2E;
    --line:#D8CFB8;
    --radius:14px;
  }

  *{ box-sizing:border-box; margin:0; padding:0; }

  html{ scroll-behavior:smooth; }

  body{
    background:var(--money);
    color:var(--paper);
    font-family:'Inter', sans-serif;
    font-weight:600;
    line-height:1.5;
    overflow-x:hidden;
  }

  h1,h2,h3,h4{
    font-family:'Space Grotesk', sans-serif;
    font-weight:600;
    line-height:1.15;
    letter-spacing:-0.01em;
  }

  .mono{ font-family:'JetBrains Mono', monospace; }

  a{ color:inherit; text-decoration:none; }

  img{ max-width:100%; display:block; }

  .wrap{
    max-width:1120px;
    margin:0 auto;
    padding:0 28px;
  }

  /* reveal on scroll */
  .reveal{
    opacity:0;
    transform:translateY(24px);
    transition:opacity .7s ease, transform .7s ease;
  }
  .reveal.visible{ opacity:1; transform:translateY(0); }

  @media (prefers-reduced-motion: reduce){
    .reveal{ opacity:1; transform:none; transition:none; }
    html{ scroll-behavior:auto; }
  }

  /* ---------- NAV ---------- */
  header{
    position:sticky; top:0; z-index:50;
    background:rgba(11,61,46,0.92);
    backdrop-filter:blur(8px);
    border-bottom:1px solid rgba(247,242,231,0.12);
  }
  nav{
    display:flex; align-items:center; justify-content:space-between;
    padding:18px 28px;
    max-width:1120px; margin:0 auto;
  }
  .logo{
    font-family:'Space Grotesk', sans-serif;
    font-weight:700;
    font-size:1.15rem;
    display:flex; align-items:center; gap:8px;
  }
  .logo .dot{
    width:9px; height:9px; border-radius:50%;
    background:var(--gold);
    box-shadow:0 0 0 3px rgba(201,162,39,0.25);
  }
  .nav-links{
    display:flex; gap:32px; font-size:0.92rem; color:rgba(247,242,231,0.8);
  }
  .nav-links a:hover{ color:var(--paper); }
  .nav-cta{
    background:var(--gold);
    color:var(--money-dark);
    font-weight:600;
    font-size:0.88rem;
    padding:10px 18px;
    border-radius:999px;
    white-space:nowrap;
  }
  .nav-cta:hover{ background:var(--gold-soft); }
  .burger{ display:none; background:none; border:none; color:var(--paper); font-size:1.5rem; cursor:pointer; }

  @media (max-width:840px){
    .nav-links{ display:none; }
    .burger{ display:block; }
  }

  /* ---------- HERO / RECEIPT ---------- */
  .hero{
    padding:72px 0 40px;
    position:relative;
  }
  .hero-grid{
    display:grid;
    grid-template-columns:1.05fr 0.95fr;
    gap:56px;
    align-items:center;
  }
  @media (max-width:900px){
    .hero-grid{ grid-template-columns:1fr; }
  }

  .eyebrow{
    display:inline-flex; align-items:center; gap:8px;
    font-family:'JetBrains Mono', monospace;
    font-size:0.78rem;
    letter-spacing:0.08em;
    color:var(--gold-soft);
    border:1px dashed rgba(228,200,117,0.5);
    padding:6px 12px;
    border-radius:999px;
    margin-bottom:22px;
  }

  .hero h1{
    font-size:clamp(2.1rem, 4.4vw, 3.4rem);
    color:var(--paper);
    margin-bottom:20px;
  }
  .hero h1 em{
    font-style:normal;
    color:var(--gold-soft);
  }

  .hero p.lead{
    font-size:1.05rem;
    color:rgba(247,242,231,0.78);
    max-width:480px;
    margin-bottom:32px;
  }

  .hero-actions{ display:flex; gap:14px; flex-wrap:wrap; }

  .btn{
    display:inline-flex; align-items:center; gap:8px;
    padding:14px 24px;
    border-radius:999px;
    font-weight:600;
    font-size:0.95rem;
    cursor:pointer;
    border:none;
    transition:transform .15s ease, background .15s ease;
  }
  .btn:hover{ transform:translateY(-2px); }
  .btn-primary{ background:var(--gold); color:var(--money-dark); }
  .btn-primary:hover{ background:var(--gold-soft); }
  .btn-ghost{ background:transparent; color:var(--paper); border:1px solid rgba(247,242,231,0.35); }
  .btn-ghost:hover{ border-color:var(--paper); }

  /* Receipt card */
  .receipt{
    background:var(--paper);
    color:var(--ink);
    border-radius:4px;
    padding:28px 26px 34px;
    position:relative;
    box-shadow:0 30px 60px -20px rgba(0,0,0,0.5);
    transform:rotate(1.4deg);
  }
  .receipt::before, .receipt::after{
    content:"";
    position:absolute; left:0; right:0; height:11px;
    background:
      linear-gradient(-45deg, var(--money) 6px, transparent 0),
      linear-gradient(45deg, var(--money) 6px, transparent 0);
    background-size:12px 12px;
    background-repeat:repeat-x;
  }
  .receipt::before{ top:-1px; background-position:left top; }
  .receipt::after{ bottom:-1px; transform:rotate(180deg); background-position:left top; }

  .receipt-head{
    text-align:center;
    border-bottom:1px dashed var(--line);
    padding-bottom:16px;
    margin-bottom:16px;
  }
  .receipt-head .store{
    font-family:'Space Grotesk', sans-serif;
    font-weight:700;
    font-size:1.1rem;
    letter-spacing:0.02em;
  }
  .receipt-head .sub{
    font-family:'JetBrains Mono', monospace;
    font-size:0.72rem;
    color:var(--ink-soft);
    margin-top:4px;
  }

  .receipt-item{
    display:flex; justify-content:space-between; gap:12px;
    font-family:'JetBrains Mono', monospace;
    font-size:0.85rem;
    padding:9px 0;
    border-bottom:1px dashed var(--line);
  }
  .receipt-item:last-of-type{ border-bottom:none; }
  .receipt-item .label{ color:var(--ink-soft); }
  .receipt-item .label.strike{ text-decoration:line-through; opacity:0.55; }
  .receipt-item .val{ font-weight:600; white-space:nowrap; }
  .receipt-item .val.plus{ color:var(--money); }

  .receipt-total{
    display:flex; justify-content:space-between; align-items:baseline;
    margin-top:16px; padding-top:14px;
    border-top:2px solid var(--ink);
    font-family:'Space Grotesk', sans-serif;
  }
  .receipt-total .t-label{ font-weight:600; font-size:0.95rem; }
  .receipt-total .t-val{ font-weight:700; font-size:1.05rem; }

  .stamp{
    position:absolute;
    font-family:'Space Grotesk', sans-serif;
    font-weight:700;
    font-size:0.8rem;
    color:var(--stamp);
    border:2.5px solid var(--stamp);
    border-radius:8px;
    padding:5px 12px;
    transform:rotate(-9deg);
    letter-spacing:0.04em;
    opacity:0.85;
  }
  .receipt .stamp{ top:22px; right:18px; }

  /* ---------- SECTION HEADERS ---------- */
  .section{ padding:88px 0; }
  .section-tight{ padding:60px 0; }
  .section-head{ max-width:600px; margin-bottom:48px; }
  .section-head .eyebrow{ margin-bottom:16px; }
  .section-head h2{ font-size:clamp(1.7rem,3vw,2.3rem); color:var(--paper); }
  .section-head p{ color:rgba(247,242,231,0.72); margin-top:14px; font-size:1rem; }

  .on-paper{ background:var(--paper); color:var(--ink); }
  .on-paper .section-head h2{ color:var(--ink); }
  .on-paper .section-head p{ color:var(--ink-soft); }
  .on-paper .eyebrow{ color:var(--money); border-color:rgba(11,61,46,0.35); }
  .on-paper .value-card{ background:rgba(11,61,46,0.05); border-color:rgba(11,61,46,0.16); }
  .on-paper .value-card .num{ color:var(--money); }
  .on-paper .value-card h3{ color:var(--ink); }
  .on-paper .value-card p{ color:var(--ink-soft); }

  /* ---------- KENAPA / VALUE PROPS ---------- */
  .value-grid{
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap:22px;
  }
  @media (max-width:800px){ .value-grid{ grid-template-columns:1fr; } }

  .value-card{
    border:1px solid rgba(247,242,231,0.14);
    border-radius:var(--radius);
    padding:28px 24px;
    background:rgba(247,242,231,0.03);
  }
  .value-card .num{
    font-family:'JetBrains Mono', monospace;
    color:var(--gold-soft);
    font-size:0.8rem;
    margin-bottom:14px;
  }
  .value-card h3{ font-size:1.15rem; color:var(--paper); margin-bottom:10px; }
  .value-card p{ color:rgba(247,242,231,0.68); font-size:0.92rem; }

  /* ---------- PAKET / PRICING ---------- */
  .pricing-grid{
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap:22px;
  }
  @media (max-width:900px){ .pricing-grid{ grid-template-columns:1fr; } }

  .price-card{
    background:var(--paper);
    border-radius:4px;
    padding:30px 26px 28px;
    position:relative;
    border:1px solid var(--line);
  }
  .price-card::before{
    content:"";
    position:absolute; top:-1px; left:0; right:0; height:9px;
    background:linear-gradient(-45deg, var(--money) 5px, transparent 0),
               linear-gradient(45deg, var(--money) 5px, transparent 0);
    background-size:10px 10px;
  }
  .price-card.featured{
    border:2px solid var(--stamp);
    transform:translateY(-10px);
  }
  .price-tier{
    font-family:'JetBrains Mono', monospace;
    font-size:0.72rem;
    letter-spacing:0.1em;
    color:var(--money);
    text-transform:uppercase;
    margin-bottom:6px;
  }
  .price-card h3{ font-size:1.3rem; color:var(--ink); margin-bottom:6px; }
  .price-tag{
    font-family:'JetBrains Mono', monospace;
    font-weight:700;
    font-size:1.15rem;
    color:var(--ink);
    margin:14px 0 18px;
    padding-bottom:16px;
    border-bottom:1px dashed var(--line);
  }
  .price-tag span{ font-size:0.75rem; font-weight:400; color:var(--ink-soft); display:block; margin-top:2px; }

  .price-feats{ list-style:none; }
  .price-feats li{
    display:flex; gap:9px; align-items:flex-start;
    font-size:0.88rem;
    color:var(--ink-soft);
    padding:6px 0;
  }
  .price-feats li::before{
    content:"✓";
    color:var(--money);
    font-weight:700;
    flex-shrink:0;
  }

  .price-badge{
    position:absolute; top:-14px; right:20px;
    background:var(--stamp); color:var(--paper);
    font-family:'Space Grotesk', sans-serif;
    font-weight:700; font-size:0.72rem;
    padding:6px 14px; border-radius:999px;
    transform:rotate(3deg);
  }

  .price-cta{
    display:block; text-align:center;
    margin-top:22px;
    padding:12px; border-radius:8px;
    background:var(--money); color:var(--paper);
    font-weight:600; font-size:0.9rem;
  }
  .price-cta:hover{ background:var(--money-light); }
  .price-card.featured .price-cta{ background:var(--stamp); }
  .price-card.featured .price-cta:hover{ background:#c94635; }

  .addon-note{
    margin-top:26px;
    font-family:'JetBrains Mono', monospace;
    font-size:0.85rem;
    color:rgba(247,242,231,0.72);
    text-align:center;
  }
  .addon-note strong{ color:var(--gold-soft); }

  /* ---------- CARA KERJA ---------- */
  .steps{
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    gap:20px;
  }
  @media (max-width:900px){ .steps{ grid-template-columns:1fr 1fr; } }
  @media (max-width:520px){ .steps{ grid-template-columns:1fr; } }

  .step{ position:relative; padding-top:8px; }
  .step .step-num{
    font-family:'JetBrains Mono', monospace;
    color:var(--gold-soft);
    font-size:0.82rem;
    border-bottom:1px dashed rgba(247,242,231,0.3);
    padding-bottom:10px;
    margin-bottom:14px;
  }
  .step h4{ font-size:1.02rem; color:var(--paper); margin-bottom:8px; }
  .step p{ font-size:0.87rem; color:rgba(247,242,231,0.65); }

  /* ---------- GALERI / PHONE MOCKUPS ---------- */
  .compare{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:36px;
    align-items:end;
  }
  @media (max-width:700px){ .compare{ grid-template-columns:1fr; } }

  .phone-col{ text-align:center; }
  .phone-col .tag{
    font-family:'JetBrains Mono', monospace;
    font-size:0.75rem;
    letter-spacing:0.08em;
    margin-bottom:16px;
    display:inline-block;
    padding:5px 12px;
    border-radius:999px;
  }
  .tag-before{ color:var(--ink-soft); border:1px dashed var(--line); }
  .tag-after{ color:var(--paper); background:var(--money); }

  .phone{
    width:230px; height:460px;
    margin:0 auto;
    border-radius:32px;
    padding:14px;
    position:relative;
  }
  .phone-before{ background:#EAE4D3; border:1px solid var(--line); }
  .phone-after{
    background:linear-gradient(160deg, var(--money) 0%, var(--money-dark) 100%);
    box-shadow:0 24px 50px -18px rgba(11,61,46,0.6);
  }
  .phone-screen{
    background:var(--paper);
    height:100%; border-radius:20px;
    padding:26px 16px;
    overflow:hidden;
  }
  .phone-before .phone-screen{ background:#F2EEE2; }

  .p-avatar{
    width:52px; height:52px; border-radius:50%;
    margin:0 auto 10px;
    background:#CFC8B4;
  }
  .phone-after .p-avatar{
    background:conic-gradient(from 180deg, var(--gold), var(--stamp), var(--gold));
  }
  .p-name{
    text-align:center; font-family:'Space Grotesk',sans-serif;
    font-weight:600; font-size:0.78rem; color:var(--ink);
    margin-bottom:3px;
  }
  .p-bio{ text-align:center; font-size:0.62rem; color:var(--ink-soft); margin-bottom:16px; }

  .p-btn{
    height:30px; border-radius:8px;
    background:#DDD6C4;
    margin-bottom:8px;
  }
  .phone-after .p-btn{
    background:var(--money);
    position:relative;
    overflow:hidden;
  }
  .phone-after .p-btn::after{
    content:"";
    position:absolute; inset:0;
    background:linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
    transform:translateX(-100%);
    animation:shine 2.8s ease-in-out infinite;
  }
  .phone-after .p-btn:nth-child(2){ animation-delay:0s; }
  @keyframes shine{
    0%,60%{ transform:translateX(-120%); }
    100%{ transform:translateX(120%); }
  }

  .video-frame{
    max-width:620px;
    margin:0 auto;
    border-radius:16px;
    overflow:hidden;
    box-shadow:0 30px 60px -20px rgba(11,61,46,0.35);
    border:1px solid var(--line);
  }
  .video-frame video{ width:100%; display:block; }
  .video-caption{
    text-align:center;
    font-size:0.82rem;
    color:var(--ink-soft);
    margin-top:14px;
  }
  .gallery-cta{
    display:flex; gap:14px; justify-content:center; flex-wrap:wrap;
    margin-top:28px;
  }
  .on-paper .btn-ghost{ color:var(--ink); border-color:rgba(22,36,28,0.3); }
  .on-paper .btn-ghost:hover{ border-color:var(--ink); }

  /* ---------- TESTIMONI ---------- */
  .testi-grid{
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap:20px;
  }
  @media (max-width:900px){ .testi-grid{ grid-template-columns:1fr; } }
  .testi-card{
    background:rgba(247,242,231,0.04);
    border:1px solid rgba(247,242,231,0.12);
    border-radius:var(--radius);
    padding:24px;
  }
  .testi-card p{ font-size:0.92rem; color:rgba(247,242,231,0.82); margin-bottom:16px; }
  .testi-card .who{
    font-family:'JetBrains Mono', monospace;
    font-size:0.78rem;
    color:var(--gold-soft);
  }

  /* ---------- FOOTER CTA ---------- */
  .cta-band{
    background:var(--paper);
    color:var(--ink);
    border-radius:4px;
    padding:52px 40px;
    text-align:center;
    position:relative;
    margin:0 28px;
  }
  .cta-band::before, .cta-band::after{
    content:"";
    position:absolute; left:0; right:0; height:11px;
    background:linear-gradient(-45deg, var(--money) 6px, transparent 0),
               linear-gradient(45deg, var(--money) 6px, transparent 0);
    background-size:12px 12px;
  }
  .cta-band::before{ top:-1px; }
  .cta-band::after{ bottom:-1px; transform:rotate(180deg); }

  .cta-band h2{ font-size:clamp(1.5rem,3vw,2.1rem); margin-bottom:12px; }
  .cta-band p{ color:var(--ink-soft); margin-bottom:26px; }
  .cta-band .btn-ghost{ color:var(--ink); border-color:rgba(22,36,28,0.3); }
  .cta-band .btn-ghost:hover{ border-color:var(--ink); }
  .cta-band .btn-primary + .btn-ghost{ margin-left:14px; }

  footer{
    padding:60px 28px 40px;
    text-align:center;
  }
  footer .foot-links{
    display:flex; gap:24px; justify-content:center;
    margin-bottom:20px;
    font-size:0.85rem;
    color:rgba(247,242,231,0.65);
  }
  footer .copy{
    font-family:'JetBrains Mono', monospace;
    font-size:0.72rem;
    color:rgba(247,242,231,0.4);
  }

`;
  const styleTag = document.createElement('style');
  styleTag.textContent = css;
  document.head.appendChild(styleTag);
})();

// ==== Script asli ====
  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal:not(.visible)');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold:0.15 });
  revealEls.forEach(el=>io.observe(el));

  // mobile nav (simple toggle: scroll to top links via alert-free fallback)
  const burger = document.getElementById('burgerBtn');
  burger.addEventListener('click', ()=>{
    const existing = document.getElementById('mobileMenu');
    if(existing){ existing.remove(); return; }
    const menu = document.createElement('div');
    menu.id = 'mobileMenu';
    menu.style.cssText = 'position:fixed;inset:0;top:64px;background:var(--money-dark);z-index:60;display:flex;flex-direction:column;padding:28px;gap:22px;font-size:1.1rem;';
    menu.innerHTML = `
      <a href="#kenapa">Kenapa Upgrade</a>
      <a href="#paket">Paket</a>
      <a href="#cara-kerja">Cara Kerja</a>
      <a href="#galeri">Contoh</a>
      <a href="#kontak" style="color:var(--gold-soft);">Order Sekarang</a>
    `;
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>menu.remove()));
    document.body.appendChild(menu);
  });

