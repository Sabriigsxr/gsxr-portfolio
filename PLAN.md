# PLAN.md — GSXR Portfolio "Cute Retro Hacker" Reimagine

**Owner:** Ahmed Sabry (handle: GSXR-404) · **Stack:** Vanilla HTML/CSS/JS (no build, FTP to GoDaddy)
**Concept:** Vaporwave Arcade Landing · **Flavor:** Pastel Vaporwave-Pixel

## Design Direction (from ui-ux-pro-max skill)
- **Style:** Pixel Art + Vaporwave (creative portfolio, nostalgic, arcade)
- **Palette (pastel vaporwave-pixel):**
  - BG `#1a1033` → gradient `#2d1b4e`
  - Accents: `#FF71CE` (pink), `#01CDFE` (cyan), `#05FFA1` (mint), `#FFFB96` (soft yellow), `#B967FF` (purple)
  - Text `#F5E6FF`, muted `#B99FD6`
  - CRT scanlines (`::before` overlay) + pixel starfield
- **Fonts:** `Press Start 2P` (headings/logo, sparing), `Space Mono` (body/UI), optional `VT323` accent
- **Effects:** blinky cursor, glitch-on-hover (skew/offset), marquee ticker, scanlines, IntersectionObserver entrance, `prefers-reduced-motion` respected

## Structure (full redesign)
```
index.html      – Vaporwave arcade landing (single scroll)
about.html      – "Player Profile": stat bars, bio terminal readout, timeline
projects.html   – Arcade-cabinet grid of project cards
blog.html       – Blog archive (restyled)
post.html       – Single post template (restyled)
contact.html    – Contact + newsletter ("TRANSMIT MESSAGE")
thanks.html     – Form success landing (referenced by _next)
css/style.css   – tokens + components (rewritten)
css/responsive.css – breakpoints (rewritten)
js/main.js      – starfield, typewriter, scroll reveal, nav, year
js/form.js      – Formspree handling (refined)
assets/icons/   – inline SVG pixel icons (NO emoji)
assets/img/     – OG image, avatar, project thumbs (placeholder SVGs)
```

## Locked Content
- **Name/handle:** Ahmed Sabry / GSXR-404
- **Hero tagline:** "cybersecurity ninja"
- **Bio (arcade):** Player: AHMED SABRY · Class: AI Researcher / Cybersecurity Ninja · Quest: build smart logistics, hack things for good, and level up the web. Currently grinding: zero-trust ML pipelines & freight optimization.
- **Skills (grouped):**
  - AI/ML: Python, TensorFlow/PyTorch, SQL/NoSQL
  - Security: Cybersecurity Ninja, Red Team, OWASP/MITRE ATT&CK, Suricata, eBPF
  - Cloud/DevOps: Docker & K8s, AWS/GCP, Node.js
  - Web: React, Web Development
  - Domain: Freight Forwarder/Logistics, Rust
- **Projects (structure from CV, full data sent later):**
  1. GSXRRR Freight Intelligence Platform
  2. Self-Hosted Freight Forwarding ERP
  3. SpeedHub Carrier Intelligence Platform
  4. Global Freight Intelligence Database
  5. Custom Freight Forwarder AI Agent
  - Business Impact stats: quote prep hours→<6s, up to 50% cost cut, 8–15 concurrent shipments, 20–50 overseas partners, 10,000+ records

## Still Needed (asked one chunk at a time during build)
- [ ] Blog post seeds (titles/categories)
- [ ] Social URLs (GitHub/Twitter/LinkedIn)
- [ ] Formspree IDs (contact + newsletter)
- [ ] GoDaddy domain URL confirm

## Build Order
1. ✅ Design tokens + global shell (starfield, scanlines, floating nav, focus, cursor-pointer)
2. ✅ Components (arcade buttons, cabinet cards, tags, skill bars, marquee, typewriter, forms)
3. ✅ Pages: index → about → projects → blog → post → contact → thanks (all built)
4. ✅ JS (starfield capped FPS, typewriter, reveal, mobile nav, year, skill-bar fill)
5. ✅ Accessibility pass (alt, aria, 4.5:1 contrast verified, reduced-motion, labels all present)
6. ✅ SEO (title/desc/OG per page, og:image PNG generated)
7. ⬜ Polish & QA (Lighthouse >90, broken-link check, real content swap)

## Notes
- services.html is now orphaned (content folded into about.html + projects.html).
- Replace YOUR_FORM_ID / YOUR_CONTACT_FORM_ID with real Formspree IDs.
- Social <a href="#"> need real URLs.
- og.png is a placeholder banner; swap for a real branded image if desired.

## Skill Compliance (pre-delivery)
- [ ] No emoji icons (SVG only) · cursor-pointer · hover 150–300ms · focus visible
- [ ] Dark-mode text ≥4.5:1 · borders visible · floating nav spacing
- [ ] responsive 375/768/1024/1440 · no horizontal scroll · alt text · form labels · reduced-motion
