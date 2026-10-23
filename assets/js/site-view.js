(() => {
  const full = new URLSearchParams(location.search).get("view") === "full" || /\/index2\.html$/.test(location.pathname);
  document.documentElement.dataset.siteView = full ? "full" : "short";
  if (!full) return;
  document.addEventListener("click", event => {
    const link = event.target.closest("a[href]");
    if (!link || link.hasAttribute("download")) return;
    const url = new URL(link.getAttribute("href"), location.href);
    if (url.origin !== location.origin || !/\.html$/.test(url.pathname)) return;
    url.searchParams.set("view", "full");
    link.href = url.href;
  }, true);
})();