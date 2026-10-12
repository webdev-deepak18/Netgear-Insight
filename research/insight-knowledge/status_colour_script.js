// 010 · Insight status colours. Paste into the browser console on a logged-in Insight portal page
// (Dashboard, then Devices). Reads styles only: colours next to status words, SVG fills, small round dots.
// No names, serials or account data are collected. The result is copied to the clipboard.
(() => {
  const words = /^(online|offline|connected|disconnected|unmanaged|waiting|pending|critical|major|minor|warning|up|down)$/i;
  const out = {};
  const add = (k, v) => { if (!v || v === 'none' || v === 'rgba(0, 0, 0, 0)') return; (out[k] = out[k] || {})[v] = (out[k][v] || 0) + 1; };
  document.querySelectorAll('svg *').forEach(el => { const cs = getComputedStyle(el); add('svg fill', cs.fill); add('svg stroke', cs.stroke); });
  document.querySelectorAll('body *').forEach(el => {
    const cs = getComputedStyle(el);
    const t = (el.textContent || '').trim();
    if (el.children.length === 0 && words.test(t)) {
      add(`"${t}" text colour`, cs.color);
      const box = el.parentElement;
      if (box) box.querySelectorAll('*').forEach(s => { if (s === el) return; const ss = getComputedStyle(s); add(`"${t}" nearby bg`, ss.backgroundColor); add(`"${t}" nearby fill`, ss.fill); });
    }
    const r = el.getBoundingClientRect();
    if (r.width > 4 && r.width <= 16 && Math.abs(r.width - r.height) < 1 && parseFloat(cs.borderRadius) >= r.width / 2 - 1) add('small round dot bg', cs.backgroundColor);
  });
  const json = JSON.stringify({ page: location.pathname.split('/')[1] || '/', out }, null, 1);
  copy(json); console.log(json);
})();
