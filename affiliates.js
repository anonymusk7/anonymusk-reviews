// ===== AFFILIATE LINKS: the only file you need to edit =====
// Replace each REPLACE_ME_AFFILIATE with your real referral URL (full https://... link).
// While a value is still REPLACE_ME_AFFILIATE, buttons link to the plain official site
// (no tracking) and show a small "placeholder" note, so nothing is broken or faked.
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
    if (url && url !== 'REPLACE_ME_AFFILIATE' && /^https?:\/\//.test(url)) {
      a.href = url; a.rel = 'sponsored nofollow noopener'; a.target = '_blank';
      var ph = a.querySelector('.ph'); if (ph) ph.remove();
    }
  });
});
