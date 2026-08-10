/* -------------------------------------------------
   GSXR-404 — pixel starfield, typewriter, scroll
   reveal, mobile nav, year, skill-bar fill.
   ------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Hero typewriter (cycles through taglines)
  const typed = document.getElementById('typed');
  if (typed && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const phrases = ['cybersecurity ninja', 'AI researcher', 'red team operator', 'freight-tech builder'];
    let pi = 0, ci = 0, deleting = false;
    function tick() {
      const word = phrases[pi];
      typed.textContent = word.slice(0, ci);
      if (!deleting) {
        if (ci < word.length) { ci++; setTimeout(tick, 80); }
        else { deleting = true; setTimeout(tick, 1400); }
      } else {
        if (ci > 0) { ci--; setTimeout(tick, 40); }
        else { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 350); }
      }
    }
    tick();
  }

  // Current year in footer(s)
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }));
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target) && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Pixel starfield (capped, lightweight)
  const canvas = document.getElementById('starfield');
  if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = canvas.getContext('2d');
    let stars = [];
    const COLORS = ['#FF71CE', '#01CDFE', '#05FFA1', '#FFFB96', '#B967FF'];
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.min(120, Math.floor(window.innerWidth * window.innerHeight / 14000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.4,
        s: Math.random() * 0.25 + 0.05,
        c: COLORS[(Math.random() * COLORS.length) | 0]
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const st of stars) {
        st.y += st.s;
        if (st.y > canvas.height) { st.y = 0; st.x = Math.random() * canvas.width; }
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fillStyle = st.c;
        ctx.globalAlpha = 0.8;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }
    resize();
    window.addEventListener('resize', resize);
    draw();
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  // Skill bars fill when in view
  const bars = document.querySelectorAll('.skill-bar .fill');
  if (bars.length && 'IntersectionObserver' in window) {
    const bo = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const w = e.target.dataset.w || '80';
          e.target.style.width = w + '%';
          bo.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    bars.forEach(b => bo.observe(b));
  }
});
