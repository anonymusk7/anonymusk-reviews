# Play 9: Crypto tool review / affiliate site

**Live:** https://anonymusk7.github.io/anonymusk-reviews/
**Repo:** https://github.com/anonymusk7/anonymusk-reviews (GitHub Pages, branch `main`, root)
**Local:** `/workspace/anonymusk/plays/09-reviews/site/` (this folder is the git clone)

I used a new repo instead of a `/reviews/` folder on anonymusk-tools so it can't conflict with other plays pushing to that repo.

## Pages
- `index.html`: hub, review cards, quick picks, CTA
- `coingecko.html`, `dexscreener.html`, `tradingview.html`, `ledger.html`, `hetzner.html`: one review each (good for / skip it if / pros / cons / pricing / bottom line)
- `disclosure.html`: affiliate disclosure and review policy
- `sitemap.xml`, `robots.txt`, `.nojekyll`, `style.css`, `affiliates.js`

Every page has a CTA to the free tools (https://anonymusk7.github.io/anonymusk-tools/) and the DFY launch-video service (…/service.html).

## Honesty rules this site follows
- No star ratings, scores, "we tested" claims, testimonials or earnings numbers.
- No hard-coded prices. Pages point to each provider's official pricing page.
- Cons include real public incidents (for example, Ledger's 2020 data breach, the 2023 Ledger Recover controversy and the Dec 2023 Connect Kit attack).
- "Last reviewed October 2026." Re-check facts when you update.

## Adding real affiliate links (one file)
1. Join each program yourself (CoinGecko, DEX Screener, TradingView, Ledger, Hetzner referral or affiliate programs, where available) and copy your referral URL.
2. Edit `site/affiliates.js` and replace each `REPLACE_ME_AFFILIATE` with the full `https://…` URL. Example: `ledger: "https://shop.ledger.com/?r=XXXX",`.
3. `cd site && git commit -am "affiliate links" && git push`. Pages updates in about a minute.

Until a key is replaced, its buttons go to the plain official site with no tracking and show a yellow "placeholder: REPLACE_ME_AFFILIATE" tag. After you replace it, the button switches to your URL, gets `rel="sponsored nofollow"`, and the tag disappears.
Check what's left: `grep -n REPLACE_ME_AFFILIATE site/affiliates.js`

## Editing / adding reviews
Content lives in `build.py` (the `REVIEWS` list). Edit it, run `python3 build.py`, then commit and push from `site/`.
`build.py` overwrites `affiliates.js`, so either copy your real links into the `AFF_JS` block in `build.py` or don't rebuild after you edit links by hand.
Smoke test: `NODE_PATH=/tmp/pt/node_modules node e2e.js` loads every page, counts affiliate buttons and screenshots index and Ledger.

## Still needs you
- Real affiliate or referral sign-ups (only you can do this; no earnings are claimed anywhere).
- Optional: a custom domain. I didn't buy one.
- Optional: submit `sitemap.xml` in Google Search Console.
