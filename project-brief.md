# Project‑Brief Outline: Personal Portfolio / Business‑Service Blog

## Goal
Create a responsive, retro‑tech / cyber‑security‑themed website that showcases my AI, cybersecurity, freight‑forwarding, and AI‑techniques projects, includes a blog, service pages, and a contact form, and is hosted on my GoDaddy domain.

## Tasks
- [ ] Define site structure and pages (Home, About, Services, Blog, Contact) → Verify: sitemap drawn and approved.
- [ ] Choose design tokens (colors, fonts, spacing) matching retro‑tech cyber‑security vibe → Verify: CSS variables file created and reviewed.
- [ ] Implement base layout (header, nav, footer) with responsive breakpoints → Verify: layout renders correctly on mobile, tablet, desktop.
- [ ] Build Home page with hero, about snippet, skills grid, featured projects, blog preview, CTA/newsletter → Verify: all sections display correctly and link to relevant pages.
- [ ] Create Services page with service cards and verification checklist → Verify: each service card shows title, description, list, and CTA.
- [ ] Develop Blog archive page with post cards and pagination → Verify: clicking a post opens the correct post page; pagination works.
- [ ] Create a single post template (post.html) with goal, tasks, done‑when, and notes sections → Verify: sample post renders correctly with markdown‑like content.
- [ ] Add Contact form with name, email, message, and integrate Formspree (or similar) endpoint → Verify: test submission returns success and email received.
- [ ] Implement newsletter signup form in the footer/CTA section → Verify: test subscription returns success and email captured.
- [ ] Add SEO basics (meta title, description, Open Graph tags) to each page → Verify: page source contains appropriate meta tags.
- [ ] Optimize assets (compress images, enable browser caching via .htaccess) → Verify: PageSpeed Insights score > 90 on mobile and desktop.
- [ ] Deploy to GoDaddy hosting via FTP/SFTP → Verify: site loads at https://gsxr-404.godaddysites.com/ and all links work.
- [ ] Perform final QA: check broken links, test forms on multiple browsers, ensure responsiveness → Verify: no issues found; site ready for launch.

## Done When
- [ ] All pages are live and accessible via the domain.
- [ ] All forms (contact, newsletter) submit successfully and trigger email notifications.
- [ ] Site passes a basic accessibility audit (axe or Lighthouse) with no critical errors.
- [ ] Performance scores are above 90 on Lighthouse for both mobile and desktop.
- [ ] Stakeholder (me) reviews and signs off on content and design.

## Notes
- Keep the design minimalistic but with neon accents (cyan, magenta, green) on a dark background.
- Use the Space Mono font for body copy and Press Start 2P for logo/headings to reinforce the retro‑coding feel.
- All JavaScript is vanilla; no build step required—just copy‑paste the files to the host.
- Consider adding a dark‑mode toggle later as an enhancement.
- Keep the project‑brief under one page; if it grows, split into separate planning documents (e.g., technical spec, content plan).