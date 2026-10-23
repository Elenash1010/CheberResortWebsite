(() => {
  const key = "cheber-development-notice-v1";
  let shown = false;
  const readSeen = () => { try { return sessionStorage.getItem(key) === "seen"; } catch { return shown; } };
  if (readSeen()) return;
  const show = () => {
    if (shown || readSeen()) return;
    shown = true;
    try { sessionStorage.setItem(key, "seen"); sessionStorage.removeItem(key + "-pending"); } catch {}
    window.removeEventListener("scroll", onScroll);
    document.removeEventListener("click", onClick);
    const notice = document.createElement("aside");
    notice.className = "development-notice";
    notice.setAttribute("aria-labelledby", "development-notice-title");
    notice.innerHTML = `<button class="development-notice__close" type="button" aria-label="Закрыть сообщение">×</button><div role="status" aria-live="polite"><h2 id="development-notice-title">Дорогие друзья!</h2><p>Наш сайт ещё находится в разработке, поэтому возможны неточности в формулировках и ошибки навигации. Просим отнестись к этому с пониманием.</p><p>Если вы не нашли важную информацию или нужный раздел, пожалуйста, свяжитесь с нами по телефону или через соцсети, указанные в разделе «Контакты».</p><p>Спасибо за ваше терпение и внимание!</p></div><a class="development-notice__contact" href="index.html#contacts-block">Перейти к контактам →</a>`;
    document.body.append(notice);
    let remaining = 120000;
    let started = 0;
    let timer;
    let closed = false;
    const pause = () => {
      if (!timer) return;
      clearTimeout(timer);
      timer = undefined;
      remaining -= Date.now() - started;
    };
    const close = () => {
      if (closed) return;
      closed = true;
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", visibility);
      notice.remove();
    };
    const resume = () => {
      if (closed || timer || document.hidden || notice.matches(":hover") || notice.contains(document.activeElement)) return;
      started = Date.now();
      timer = setTimeout(close, Math.max(remaining, 0));
    };
    const visibility = () => document.hidden ? pause() : resume();
    notice.querySelector("button").addEventListener("click", close);
    notice.querySelector("a").addEventListener("click", close);
    notice.addEventListener("mouseenter", pause);
    notice.addEventListener("mouseleave", resume);
    notice.addEventListener("focusin", pause);
    notice.addEventListener("focusout", () => setTimeout(resume, 0));
    notice.addEventListener("keydown", event => { if (event.key === "Escape") close(); });
    document.addEventListener("visibilitychange", visibility);
    resume();
  };
  const onScroll = () => { if (window.scrollY > 40) show(); };
  const onClick = event => {
    const link = event.target.closest("a[href]");
    if (link) {
      const url = new URL(link.href, location.href);
      if (url.origin === location.origin && url.pathname !== location.pathname && !link.target) {
        try { sessionStorage.setItem(key + "-pending", "yes"); } catch {}
        return;
      }
    }
    if (event.target.closest("a[href], button, summary")) show();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("click", onClick);
  try { if (sessionStorage.getItem(key + "-pending") === "yes") show(); } catch {}
})();