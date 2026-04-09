const navItems = [
  ["index.html", "Главная", "Стартовая витрина санатория, программы и быстрые контакты"],
  ["about.html", "О санатории", "История, преимущества, инфраструктура, подход к восстановлению"],
  ["programs.html", "Программы", "Комплексные программы оздоровления и восстановления"],
  ["courses.html", "Курсовки", "Форматы без проживания, дневные курсы и гибкие решения"],
  ["vouchers.html", "Путевки", "Путевки для взрослых, семей, антистресс и профилактики"],
  ["children.html", "Программы для детей", "Детские программы, лагерь и семейные сценарии"],
  ["medical.html", "Медицинские услуги", "Процедуры, диагностика, консультации и лечение"],
  ["hotel.html", "Гостиница", "Номера, проживание, комфорт и семейное размещение"],
  ["services.html", "Прочие услуги", "Бассейн, вечернее оздоровление и дополнительные сервисы"],
  ["documents.html", "Документы", "Правила, документы на заезд, лицензии и памятки"],
  ["offers.html", "Акции и спецпредложения", "Сезонные предложения, скидки и пакетные решения"],
  ["contacts.html", "Контакты", "Телефоны, адрес, почта, мессенджеры и карта"],
];

const searchItems = navItems.map(([href, label, description]) => ({ href, label, description }));

function buildMainNav(page) {
  const featured = navItems.slice(0, 8);
  return featured
    .map(([href, label]) => {
      const activeClass = page === href ? "nav-link is-active" : "nav-link";
      return `<a class="${activeClass}" href="${href}">${label}</a>`;
    })
    .join("");
}

function buildHeaderNav(page) {
  const featured = [
    ["about.html", "О санатории"],
    ["programs.html", "Программы"],
    ["courses.html", "Курсовки"],
    ["vouchers.html", "Путевки"],
    ["medical.html", "Медицинские услуги"],
    ["contacts.html", "Контакты"],
  ];

  return featured
    .map(([href, label]) => {
      const activeClass = page === href ? "nav-link is-active" : "nav-link";
      return `<a class="${activeClass}" href="${href}">${label}</a>`;
    })
    .join("");
}
function buildMegaLinks(page) {
  return navItems
    .map(([href, label, description]) => {
      const active = page === href ? " mega-link is-active" : " mega-link";
      return `
        <a class="${active.trim()}" href="${href}">
          <strong>${label}</strong>
          <span>${description}</span>
        </a>
      `;
    })
    .join("");
}

function buildMobileNav(page) {
  return navItems
    .map(([href, label, description]) => {
      const active = page === href ? ' aria-current="page"' : "";
      return `
        <a href="${href}"${active}>
          <strong>${label}</strong>
          <span>${description}</span>
        </a>
      `;
    })
    .join("");
}

function renderShell() {
  const page = document.body.dataset.page || "index.html";
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  if (header) {
    header.innerHTML = `
      <div class="header-wrap header-wrap-premium">
        <div class="header-top header-top-premium">
          <a class="brand brand-premium" href="index.html" aria-label="На главную">
            <span class="brand-mark brand-mark-premium">ЧБ</span>
            <span class="brand-copy">
              <strong>ЧЕБЕР</strong>
            </span>
          </a>
          <nav class="header-inline-nav" aria-label="Основная навигация">
            ${buildHeaderNav(page)}
          </nav>
          <div class="header-utility">
            <a class="btn btn-primary header-cta" href="contacts.html">Забронировать / связаться</a>
            <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">Меню</button>
          </div>
        </div>
        <nav class="mobile-nav mobile-nav-premium" id="mobile-nav" aria-label="Мобильная навигация">
          ${buildMobileNav(page)}
        </nav>
      </div>
      <div class="search-overlay" id="search-overlay" aria-hidden="true">
        <div class="search-overlay__backdrop" data-overlay-close="search"></div>
        <div class="search-overlay__panel" role="dialog" aria-modal="true" aria-label="Поиск по сайту">
          <div class="search-overlay__head">
            <strong>Найти раздел или предложение</strong>
            <button class="utility-button" type="button" data-overlay-close="search">Закрыть</button>
          </div>
          <label class="search-field">
            <span>Поиск по разделам</span>
            <input type="search" id="site-search-input" placeholder="Например, программы для детей, бассейн, путевки">
          </label>
          <div class="search-results" id="search-results"></div>
        </div>
      </div>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <div class="footer-wrap footer-wrap-premium">
        <div class="footer-grid">
          <div>
            <a class="brand brand-premium" href="index.html" aria-label="На главную">
              <span class="brand-mark brand-mark-premium">ЧБ</span>
              <span class="brand-copy">
                <strong>ЧЕБЕР</strong>
                <span>Премиальный санаторный опыт, лечение, проживание и семейный отдых</span>
              </span>
            </a>
            <p class="lead-text" style="margin-top: 18px;">
              Статический сайт собран как визуальная продажа санатория: крупные смысловые блоки, richer interaction,
              понятные маршруты к программам и заметный акцент на доверие, медицину и комфорт проживания.
            </p>
          </div>
          <div class="footer-links">
            <strong>Ключевые разделы</strong>
            <a href="programs.html">Программы</a>
            <a href="vouchers.html">Путевки</a>
            <a href="children.html">Программы для детей</a>
            <a href="hotel.html">Гостиница</a>
            <a href="offers.html">Акции</a>
          </div>
          <div class="footer-links">
            <strong>Контакты</strong>
            <a href="tel:+78000000000">8 (800) 000 00 00</a>
            <a href="mailto:info@sosnovy.example">info@sosnovy.example</a>
            <a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
            <a href="https://wa.me/70000000000" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="contacts.html">Адрес и карта</a>
          </div>
        </div>
        <div class="footer-note">
          <span>© <span data-year></span> Санаторий «ЧЕБЕР»</span>
          <span>Premium visual system with Medical and Resort alternates</span>
        </div>
      </div>
    `;
  }

  const yearNode = document.querySelector("[data-year]");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
}

function initTheme() {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("site-theme") || "premium";

  function applyTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem("site-theme", theme);
    document.querySelectorAll(".theme-toggle button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.theme === theme);
    });
  }

  applyTheme(savedTheme);

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".theme-toggle button");
    if (!button) return;
    applyTheme(button.dataset.theme);
  });
}

function initHeader() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const megaToggle = document.querySelector("[data-mega-toggle]");
  const megaPanel = document.querySelector("[data-mega-panel]");

  function syncScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  syncScroll();
  window.addEventListener("scroll", syncScroll, { passive: true });

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.classList.toggle("is-open", !expanded);
    });
  }

  if (megaToggle && megaPanel) {
    megaToggle.addEventListener("click", () => {
      const expanded = megaToggle.getAttribute("aria-expanded") === "true";
      megaToggle.setAttribute("aria-expanded", String(!expanded));
      megaPanel.classList.toggle("is-open", !expanded);
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest("[data-mega-toggle]") && !event.target.closest("[data-mega-panel]")) {
        megaToggle.setAttribute("aria-expanded", "false");
        megaPanel.classList.remove("is-open");
      }
    });
  }
}

function renderSearchResults(query = "") {
  const resultsRoot = document.getElementById("search-results");
  if (!resultsRoot) return;

  const normalized = query.trim().toLowerCase();
  const results = normalized
    ? searchItems.filter((item) => (`${item.label} ${item.description}`).toLowerCase().includes(normalized))
    : searchItems;

  resultsRoot.innerHTML = results
    .map((item) => `
      <a class="search-result" href="${item.href}">
        <strong>${item.label}</strong>
        <span>${item.description}</span>
      </a>
    `)
    .join("");
}

function initSearchOverlay() {
  const overlay = document.getElementById("search-overlay");
  const input = document.getElementById("site-search-input");
  if (!overlay || !input) return;

  renderSearchResults();

  function openOverlay() {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    setTimeout(() => input.focus(), 30);
  }

  function closeOverlay() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
  }

  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-overlay-open='search']");
    const closeButton = event.target.closest("[data-overlay-close='search']");
    if (openButton) openOverlay();
    if (closeButton) closeOverlay();
  });

  input.addEventListener("input", () => renderSearchResults(input.value));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeOverlay();
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  items.forEach((item) => observer.observe(item));
}

function initTabs() {
  const wrappers = document.querySelectorAll("[data-tabs]");
  wrappers.forEach((wrapper) => {
    const buttons = wrapper.querySelectorAll("[data-tab-target]");
    const panels = wrapper.querySelectorAll("[data-tab-panel]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.tabTarget;
        buttons.forEach((item) => item.classList.toggle("is-active", item === button));
        panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.tabPanel === target));
      });
    });
  });
}

function initRails() {
  document.querySelectorAll("[data-rail]").forEach((railRoot) => {
    const track = railRoot.querySelector("[data-rail-track]");
    const prev = railRoot.querySelector("[data-rail-prev]");
    const next = railRoot.querySelector("[data-rail-next]");
    if (!track || !prev || !next) return;

    prev.addEventListener("click", () => track.scrollBy({ left: -360, behavior: "smooth" }));
    next.addEventListener("click", () => track.scrollBy({ left: 360, behavior: "smooth" }));
  });
}

function initOffersSlider() {
  document.querySelectorAll("[data-offers-slider]").forEach((root) => {
    const track = root.querySelector("[data-offers-track]");
    const slides = Array.from(root.querySelectorAll("[data-offer-slide]"));
    const prev = root.querySelector("[data-offers-prev]");
    const next = root.querySelector("[data-offers-next]");
    const dotsWrap = root.querySelector("[data-offers-dots]");
    if (!track || !slides.length || !prev || !next || !dotsWrap) return;

    let index = 0;

    const getVisibleCount = () => (window.innerWidth <= 980 ? 1 : 2);
    const getMaxIndex = () => Math.max(0, slides.length - getVisibleCount());

    slides.forEach((_, dotIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Перейти к предложению ${dotIndex + 1}`);
      button.addEventListener("click", () => {
        index = Math.min(dotIndex, getMaxIndex());
        update();
      });
      dotsWrap.appendChild(button);
    });

    const dots = Array.from(dotsWrap.querySelectorAll("button"));

    function update() {
      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, slides.length - visibleCount);
      index = Math.max(0, Math.min(index, maxIndex));
      const slideWidth = slides[0].getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      track.style.transform = `translateX(-${index * (slideWidth + gap)}px)`;

      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === index;
        dot.classList.toggle("is-active", active);
        dot.disabled = dotIndex > maxIndex;
        dot.hidden = dotIndex > maxIndex;
      });
    }

    prev.addEventListener("click", () => {
      index = index <= 0 ? getMaxIndex() : index - 1;
      update();
    });

    next.addEventListener("click", () => {
      index = index >= getMaxIndex() ? 0 : index + 1;
      update();
    });

    window.addEventListener("resize", update);
    update();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderShell();
  initTheme();
  initHeader();
  initSearchOverlay();
  initReveal();
  initTabs();
  initRails();
});






document.addEventListener("DOMContentLoaded", () => {
  initOffersSlider();
});

function initVouchersSlider() {
  document.querySelectorAll("[data-vouchers-slider]").forEach((root) => {
    const track = root.querySelector("[data-vouchers-track]");
    const slides = Array.from(root.querySelectorAll("[data-voucher-slide]"));
    const prev = root.querySelector("[data-vouchers-prev]");
    const next = root.querySelector("[data-vouchers-next]");
    const dotsWrap = root.querySelector("[data-vouchers-dots]");
    if (!track || !slides.length || !prev || !next || !dotsWrap) return;

    let index = 0;

    const getVisibleCount = () => {
      if (window.innerWidth <= 760) return 1;
      return 2;
    };

    const getMaxIndex = () => Math.max(0, slides.length - getVisibleCount());

    slides.forEach((_, dotIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Перейти к путевке ${dotIndex + 1}`);
      button.addEventListener("click", () => {
        index = Math.min(dotIndex, getMaxIndex());
        update();
      });
      dotsWrap.appendChild(button);
    });

    const dots = Array.from(dotsWrap.querySelectorAll("button"));

    function update() {
      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, slides.length - visibleCount);
      index = Math.max(0, Math.min(index, maxIndex));
      const slideWidth = slides[0].getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      track.style.transform = `translateX(-${index * (slideWidth + gap)}px)`;

      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === index;
        dot.classList.toggle("is-active", active);
        dot.disabled = dotIndex > maxIndex;
        dot.hidden = dotIndex > maxIndex;
      });
    }

    prev.addEventListener("click", () => {
      index = index <= 0 ? getMaxIndex() : index - 1;
      update();
    });

    next.addEventListener("click", () => {
      index = index >= getMaxIndex() ? 0 : index + 1;
      update();
    });

    window.addEventListener("resize", update);
    update();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initVouchersSlider();
});





function initExpertsSlider() {
  document.querySelectorAll("[data-experts-slider]").forEach((root) => {
    const track = root.querySelector("[data-experts-track]");
    const slides = Array.from(root.querySelectorAll("[data-expert-slide]"));
    const prev = root.querySelector("[data-experts-prev]");
    const next = root.querySelector("[data-experts-next]");
    const dotsWrap = root.querySelector("[data-experts-dots]");
    if (!track || !slides.length || !prev || !next || !dotsWrap) return;

    let index = 0;

    const getVisibleCount = () => {
      if (window.innerWidth <= 760) return 1;
      if (window.innerWidth <= 1180) return 2;
      return 4;
    };

    const getMaxIndex = () => Math.max(0, slides.length - getVisibleCount());

    slides.forEach((_, dotIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Перейти к специалисту ${dotIndex + 1}`);
      button.addEventListener("click", () => {
        index = Math.min(dotIndex, getMaxIndex());
        update();
      });
      dotsWrap.appendChild(button);
    });

    const dots = Array.from(dotsWrap.querySelectorAll("button"));

    function update() {
      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, slides.length - visibleCount);
      index = Math.max(0, Math.min(index, maxIndex));
      const slideWidth = slides[0].getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      track.style.transform = `translateX(-${index * (slideWidth + gap)}px)`;

      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === index;
        dot.classList.toggle("is-active", active);
        dot.disabled = dotIndex > maxIndex;
        dot.hidden = dotIndex > maxIndex;
      });
    }

    prev.addEventListener("click", () => {
      index = index <= 0 ? getMaxIndex() : index - 1;
      update();
    });

    next.addEventListener("click", () => {
      index = index >= getMaxIndex() ? 0 : index + 1;
      update();
    });

    window.addEventListener("resize", update);
    update();
  });
}

function initReviewsSlider() {
  document.querySelectorAll("[data-reviews-slider]").forEach((root) => {
    const track = root.querySelector("[data-reviews-track]");
    const slides = Array.from(root.querySelectorAll("[data-review-slide]"));
    const prev = root.querySelector("[data-reviews-prev]");
    const next = root.querySelector("[data-reviews-next]");
    const dotsWrap = root.querySelector("[data-reviews-dots]");
    if (!track || !slides.length || !prev || !next || !dotsWrap) return;

    let index = 0;

    const getVisibleCount = () => {
      if (window.innerWidth <= 820) return 1;
      if (window.innerWidth <= 1180) return 2;
      return 3;
    };

    const getMaxIndex = () => Math.max(0, slides.length - getVisibleCount());

    slides.forEach((_, dotIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Перейти к отзыву ${dotIndex + 1}`);
      button.addEventListener("click", () => {
        index = Math.min(dotIndex, getMaxIndex());
        update();
      });
      dotsWrap.appendChild(button);
    });

    const dots = Array.from(dotsWrap.querySelectorAll("button"));

    function update() {
      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, slides.length - visibleCount);
      index = Math.max(0, Math.min(index, maxIndex));
      const slideWidth = slides[0].getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      track.style.transform = `translateX(-${index * (slideWidth + gap)}px)`;

      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === index;
        dot.classList.toggle("is-active", active);
        dot.disabled = dotIndex > maxIndex;
        dot.hidden = dotIndex > maxIndex;
      });
    }

    prev.addEventListener("click", () => {
      index = index <= 0 ? getMaxIndex() : index - 1;
      update();
    });

    next.addEventListener("click", () => {
      index = index >= getMaxIndex() ? 0 : index + 1;
      update();
    });

    window.addEventListener("resize", update);
    update();
  });
}
function initFaq() {
  document.querySelectorAll("[data-faq]").forEach((root) => {
    const columns = Array.from(root.querySelectorAll(".faq-column"));

    columns.forEach((column) => {
      const items = Array.from(column.querySelectorAll(".faq-item"));

      function setState(item, open) {
        const button = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        if (!button || !answer) return;
        item.classList.toggle("is-open", open);
        button.setAttribute("aria-expanded", String(open));
        answer.hidden = !open;
      }

      items.forEach((item) => {
        const button = item.querySelector(".faq-question");
        if (!button) return;
        setState(item, item.classList.contains("is-open"));
        button.addEventListener("click", () => {
          const willOpen = !item.classList.contains("is-open");
          items.forEach((entry) => setState(entry, false));
          setState(item, willOpen);
        });
      });
    });
  });
}
function initRoomSlider() {
  document.querySelectorAll("[data-room-slider]").forEach((root) => {
    const track = root.querySelector("[data-room-track]");
    const prev = root.querySelector("[data-room-prev]");
    const next = root.querySelector("[data-room-next]");
    const dotsWrap = root.querySelector("[data-room-dots]");
    if (!track || !prev || !next || !dotsWrap) return;

    const templates = Array.from(track.children).map((slide) => slide.outerHTML);
    const total = templates.length;
    let visibleCount = 0;
    let cloneCount = 0;
    let currentIndex = 0;
    let logicalIndex = 0;
    let slides = [];
    let dots = [];
    let isAnimating = false;

    const getVisibleCount = () => (window.innerWidth <= 820 ? 1 : 3);

    function createSlide(markup, isClone = false) {
      const template = document.createElement("template");
      template.innerHTML = markup.trim();
      const node = template.content.firstElementChild;
      if (isClone) node.dataset.clone = "true";
      return node;
    }

    function buildDots() {
      dotsWrap.innerHTML = "";
      templates.forEach((_, dotIndex) => {
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("aria-label", `Перейти к номеру ${dotIndex + 1}`);
        button.addEventListener("click", () => {
          if (isAnimating) return;
          logicalIndex = dotIndex;
          currentIndex = logicalIndex + cloneCount;
          moveTo(currentIndex, true);
          updateUi();
        });
        dotsWrap.appendChild(button);
      });
      dots = Array.from(dotsWrap.querySelectorAll("button"));
    }

    function rebuild() {
      const nextVisibleCount = getVisibleCount();
      if (visibleCount === nextVisibleCount && slides.length) {
        moveTo(currentIndex, false);
        updateUi();
        return;
      }

      visibleCount = nextVisibleCount;
      cloneCount = visibleCount;
      track.innerHTML = "";

      const head = templates.slice(-cloneCount).map((markup) => createSlide(markup, true));
      const body = templates.map((markup) => createSlide(markup));
      const tail = templates.slice(0, cloneCount).map((markup) => createSlide(markup, true));

      [...head, ...body, ...tail].forEach((slide) => track.appendChild(slide));
      slides = Array.from(track.children);
      currentIndex = logicalIndex + cloneCount;
      buildDots();
      moveTo(currentIndex, false);
      updateUi();
    }

    function moveTo(index, animate) {
      const slideWidth = slides[0].getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      track.style.transition = animate ? "transform 0.45s var(--ease)" : "none";
      track.style.transform = `translateX(-${index * (slideWidth + gap)}px)`;
      if (!animate) {
        track.getBoundingClientRect();
        track.style.transition = "transform 0.45s var(--ease)";
      }
    }

    function updateUi() {
      const centerIndex = visibleCount === 1 ? currentIndex : currentIndex + 1;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-center", slideIndex === centerIndex && window.innerWidth > 820);
      });

      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === logicalIndex);
      });
    }

    function step(direction) {
      if (isAnimating || !slides.length) return;
      isAnimating = true;
      logicalIndex = (logicalIndex + direction + total) % total;
      currentIndex += direction;
      moveTo(currentIndex, true);
      updateUi();
    }

    prev.addEventListener("click", () => step(-1));
    next.addEventListener("click", () => step(1));

    track.addEventListener("transitionend", () => {
      if (!isAnimating) return;
      isAnimating = false;

      if (currentIndex < cloneCount) {
        currentIndex = total + currentIndex;
        moveTo(currentIndex, false);
      } else if (currentIndex >= total + cloneCount) {
        currentIndex = currentIndex - total;
        moveTo(currentIndex, false);
      }

      updateUi();
    });

    window.addEventListener("resize", rebuild);
    rebuild();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initExpertsSlider();
  initReviewsSlider();
  initFaq();
  initRoomSlider();
});





