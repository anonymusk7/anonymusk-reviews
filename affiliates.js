// ===== AFFILIATE LINKS =====
// Source of truth is AFFILIATES in ../build.py (a rebuild regenerates this file but keeps any real
// https:// link you added here). Replace REPLACE_ME_AFFILIATE with your full referral URL.
// While a value is still a REPLACE_ME placeholder, buttons stay plain links to the official site
// (no tracking) and nothing extra is shown to visitors.
window.AFFILIATES = {
  coingecko: "REPLACE_ME_AFFILIATE",  // CoinGecko (official: https://www.coingecko.com/),
  dexscreener: "REPLACE_ME_AFFILIATE",  // DEX Screener (official: https://dexscreener.com/),
  tradingview: "REPLACE_ME_AFFILIATE",  // TradingView (official: https://www.tradingview.com/),
  ledger: "REPLACE_ME_AFFILIATE",  // Ledger (official: https://www.ledger.com/),
  hetzner: "REPLACE_ME_AFFILIATE",  // Hetzner Cloud (official: https://www.hetzner.com/cloud)
};
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[data-aff]').forEach(function (a) {
    var url = window.AFFILIATES[a.dataset.aff];
    if (url && url.indexOf('REPLACE_ME') === -1 && /^https?:\/\//.test(url) && a.href !== url) {
      a.href = url; a.rel = 'sponsored nofollow noopener'; a.target = '_blank';
      if (!a.querySelector('.aff-note')) { var s = document.createElement('span'); s.className = 'aff-note'; s.textContent = '(affiliate link)'; a.appendChild(s); }
    }
  });
});
