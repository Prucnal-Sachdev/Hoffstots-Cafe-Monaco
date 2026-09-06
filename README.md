# Hoffstot's Cafe Monaco — homepage preview

A speculative rebuild of the homepage for Hoffstot's Cafe Monaco (Oakmont, PA), built by
Prucnal & Sachdev. Not commissioned.

- **Preview:** https://prucnalj.github.io/Hoffstots-Cafe-Monaco/ (built `noindex`)
- **Their current site:** https://hoffstots.com
- **Open questions:** [CONTENT-NEEDED.md](CONTENT-NEEDED.md)

## What this fixes

Verified on their live site on 2026-09-05:

1. A Father's Day reservations banner, live in September.
2. Two contradictory drive-thru notices — one from February, one for tomorrow.
3. The footer frozen at © 2018.
4. The word `restaurant_menu` printed on the page where an icon font failed.
5. Two duplicate, partly disagreeing blocks of opening hours.

Their site is added to and never cleared out, rather than abandoned — the notice for
tomorrow proves somebody maintains it. The fix is editorial, not technical.

## The real opportunity

All seven menus are PDF downloads, so none of their food is indexable and all of it is
painful to read on a phone. The preview lists the menus but does not transcribe them.

## Not claimed

Our research says "open since 1971". That year appears nowhere on their own site, so it
is not on this page and not in the outreach email.

## Stack

Astro, static output, no client framework, no webfonts, no JavaScript on the page.

```bash
MSYS_NO_PATHCONV=1 SITE_URL=https://prucnalj.github.io BASE_PATH=/Hoffstots-Cafe-Monaco \
  PUBLIC_NOINDEX=1 npm run build
```
