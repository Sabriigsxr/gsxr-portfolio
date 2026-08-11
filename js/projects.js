/* ============================================================
   PROJECTS — ASCII FLOWTRAIL
   port of the Framer "Ascii FlowTrail" module to vanilla JS:
   image → ASCII glyph dithering + mouse-following glyph trail.
   plus the module filter ( ./run --all / --ai / --cyber / --freight / --web )
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- 1. module filter ---------------- */
  const pills = document.querySelectorAll('.pill');
  const cards = document.querySelectorAll('.term-card');
  const typed = document.getElementById('typed-cmd');
  const noRes = document.getElementById('no-results');

  pills.forEach(p => p.addEventListener('click', () => {
    pills.forEach(x => x.classList.remove('active'));
    p.classList.add('active');
    const cur = p.dataset.filter;
    let n = 0;
    cards.forEach(c => {
      const show = cur === 'all' || c.dataset.cats.includes(cur);
      c.classList.toggle('hidden', !show);
      if (show) n++;
    });
    if (typed) typed.textContent = './run ' + (cur === 'all' ? '--all' : '--' + cur);
    if (noRes) noRes.hidden = n > 0;
  }));

  /* ---------------- 2. AsciiFlowTrail canvas ---------------- */
  const hero = document.getElementById('ascii-trail');
  if (!hero) return;
  const canvas = document.getElementById('trail-canvas');
  const ctx = canvas.getContext('2d');

  const RAMP = ' .:-=+*#%@';           // dark → bright glyph ramp
  const FLOW = ['*', '+', '.', ':', '≈', '~', '·', '▓', '▒', '░', '»', '>', '✦'];
  const CELL_BASE = 12;

  const img = new Image();
  let cols = 0, rows = 0, buf = null, dpr = 1, glyphs = [];
  let CELL = CELL_BASE;

  function build() {
    const w = hero.clientWidth, h = hero.clientHeight;
    if (!w || !h) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    CELL = Math.max(8, Math.floor(w / 105));
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    cols = Math.floor(w / CELL);
    rows = Math.floor(h / CELL);
    buf = document.createElement('canvas');
    buf.width = cols; buf.height = rows;
    const b = buf.getContext('2d');

    const iw = img.naturalWidth, ih = img.naturalHeight;
    if (iw) {
      const s = Math.max(cols / iw, rows / ih);
      b.drawImage(img, (cols - iw * s) / 2, (rows - ih * s) / 2, iw * s, ih * s);
    }
    const data = b.getImageData(0, 0, cols, rows).data;

    glyphs = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = (y * cols + x) * 4;
        const lum = (data[i] * .3 + data[i + 1] * .59 + data[i + 2] * .11) / 255;
        const idx = Math.min(RAMP.length - 1, Math.floor(lum * RAMP.length));
        let color = '#31234f';
        if (lum > .6)       color = '#ff71ce';
        else if (lum > .34) color = '#b967ff';
        else if (lum > .13) color = '#01cdfe';
        glyphs.push({ ch: RAMP[idx], color, x, y });
      }
    }
    renderStatic();
  }

  function renderStatic() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
    ctx.fillStyle = '#080319';
    ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
    ctx.font = (CELL - 3) + 'px "Space Mono", monospace';
    ctx.textBaseline = 'top';
    for (const g of glyphs) {
      ctx.fillStyle = g.color;
      ctx.fillText(g.ch, g.x * CELL, g.y * CELL);
    }
  }

  /* ---- mouse flow trail (smooth follow + turbulence) ---- */
  let mx = 0, my = 0, sx = 0, sy = 0, first = true;
  const trail = [];
  let t = 0;

  hero.addEventListener('pointermove', e => {
    const r = canvas.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
    if (first) { sx = mx; sy = my; first = false; }
  });

  function frame() {
    t += .02;
    if (!first) {
      sx += (mx - sx) * .13;
      sy += (my - sy) * .13;
      trail.push({ x: sx, y: sy, life: 1 });
      if (trail.length > 46) trail.shift();
    }
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < trail.length; i++) {
      const p = trail[i];
      p.life -= .02;
      if (p.life <= 0) continue;
      const gx = p.x + Math.sin(t * 2 + i * .55) * 10;
      const gy = p.y + Math.cos(t * 1.7 + i * .42) * 8 + (i - trail.length) * 2;
      ctx.globalAlpha = Math.max(0, p.life) * .85;
      ctx.font = (4 + p.life * 14) + 'px "Space Mono", monospace';
      ctx.fillStyle = i % 3 === 0 ? '#01cdfe' : i % 3 === 1 ? '#ff71ce' : '#05ffa1';
      ctx.fillText(FLOW[(i + Math.floor(t * 8)) % FLOW.length], gx, gy);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    requestAnimationFrame(frame);
  }

  img.onload = () => { build(); frame(); };
  img.onerror = () => { renderStatic(); };
  img.src = hero.dataset.src;
  window.addEventListener('resize', () => build());
});
