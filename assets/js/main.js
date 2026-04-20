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
const homeHeaderLinks = [
  ["about-cheber", "О санатории", "Санаторий «Чебер» — современное пространство здоровья и восстановления"],
  ["special-offers", "Акции", "Специальные предложения"],
  ["vouchers", "Путевки", "Путевки: интенсивность и длительность"],
  ["courses", "Курсовки", "Курсовки"],
  ["therapy-procedures", "Терапия и процедуры", "Терапия и процедуры"],
  ["specialists", "Специалисты", "Наши специалисты"],
  ["pool-sauna", "Бассейн и сауна", "Бассейн и сауна"],
  ["children-programs", "Программы для детей", "Программы для детей"],
];
const homeMoreLinks = [
  ["comfort-rooms", "Забронировать номер", "Комфортные номера"],
  ["infrastructure", "Инфраструктура", "Инфраструктура"],
  ["extra-features", "Бронирование под мероприятия", "Дополнительные возможности"],
  ["b2b-spaces", "Пространства для бизнеса", "B2B: Пространства для бизнеса"],
];

function buildHomeAnchorHref(page, anchor) {
  return page === "index.html" ? `#${anchor}` : `index.html#${anchor}`;
}
const innerPageConfigs = {
  "about.html": {
    tags: ["Премиальный санаторий", "Проживание и лечение", "Семейный формат"],
    primary: { href: "contacts.html", label: "Получить консультацию" },
    secondary: { href: "programs.html", label: "Смотреть программы" },
    spotlight: {
      eyebrow: "Почему выбирают ЧЕБЕР",
      title: "Санаторный опыт, который выглядит современно и ощущается заботливым",
      text: "Показываем не только лечение, но и уровень сервиса, атмосферу отдыха, удобные маршруты связи и премиальную подачу ключевых смыслов.",
      facts: ["20+ медицинских направлений", "Территория для отдыха круглый год", "Проживание, процедуры и сервис в одном сценарии"],
    },
    palette: {
      accent: "#4b76b6",
      accentStrong: "#315c99",
      surface: "rgba(240, 246, 255, 0.92)",
    },
    final: {
      title: "Подберем формат восстановления и проживания под ваш сценарий",
      text: "После знакомства с санаторием удобно сразу перейти к программам, размещению или консультации с координатором.",
    },
  },
  "programs.html": {
    tags: ["Индивидуальный подбор", "Профилактика и восстановление", "Разная длительность"],
    primary: { href: "contacts.html", label: "Подобрать программу" },
    secondary: { href: "vouchers.html", label: "Смотреть путевки" },
    spotlight: {
      eyebrow: "Как устроен раздел",
      title: "Программы собраны как витрина готовых сценариев восстановления",
      text: "Каждый формат легко сравнить по задачам, длительности, наполнению и следующему шагу для бронирования или уточнения условий.",
      facts: ["Базовые и интенсивные форматы", "Подходящие решения для взрослых и семей", "Связка с путевками, курсовками и проживанием"],
    },
    palette: {
      accent: "#4e7dbd",
      accentStrong: "#33649f",
      surface: "rgba(241, 247, 255, 0.92)",
    },
    final: {
      title: "Поможем выбрать программу под цель, длительность и состав заезда",
      text: "Если важно быстро понять, что подойдет именно вам, удобнее всего перейти в консультацию и получить персональную рекомендацию.",
    },
  },
  "courses.html": {
    tags: ["Без проживания", "Дневные визиты", "Гибкий формат"],
    primary: { href: "contacts.html", label: "Уточнить условия" },
    secondary: { href: "services.html", label: "Посмотреть услуги" },
    spotlight: {
      eyebrow: "Курсовки",
      title: "Гибкий формат для тех, кто хочет получать процедуры без проживания",
      text: "Визиты можно встроить в привычный график, сохранив доступ к восстановительным и оздоровительным сценариям санатория.",
      facts: ["Подходят жителям города", "Можно комбинировать с бассейном и услугами", "Понятный маршрут оформления и записи"],
    },
    palette: {
      accent: "#5a84bf",
      accentStrong: "#3b679f",
      surface: "rgba(243, 248, 255, 0.92)",
    },
    final: {
      title: "Соберем курсовку под нужные процедуры и удобный режим посещения",
      text: "Если нужен формат без проживания, оставьте запрос и мы предложим удобный набор визитов и услуг.",
    },
  },
  "vouchers.html": {
    tags: ["Разная длительность", "Семейные и тематические форматы", "Быстрое сравнение"],
    primary: { href: "contacts.html", label: "Подобрать путевку" },
    secondary: { href: "hotel.html", label: "Выбрать размещение" },
    spotlight: {
      eyebrow: "Витрина путевок",
      title: "Форматы заезда собраны так, чтобы их можно было сравнить за несколько минут",
      text: "Сразу видно длительность, сценарий отдыха, ориентир по цене и направление, которое лучше всего подходит под запрос гостя.",
      facts: ["Классические и семейные заезды", "Путевки выходного дня и антистресс", "Сценарии для дыхательной системы и пищеварения"],
    },
    palette: {
      accent: "#4f7fc0",
      accentStrong: "#315f99",
      surface: "rgba(240, 246, 255, 0.94)",
    },
    final: {
      title: "Подскажем, какая путевка лучше подойдет по длительности и наполнению",
      text: "Можно начать с консультации, а затем уже перейти к бронированию номера и согласованию программы.",
    },
  },
  "children.html": {
    tags: ["Родители и дети", "Лагерь и семейные заезды", "Питание и безопасность"],
    primary: { href: "contacts.html", label: "Узнать о детских программах" },
    secondary: { href: "hotel.html", label: "Посмотреть семейные номера" },
    spotlight: {
      eyebrow: "Для родителей",
      title: "Страница отвечает на главный вопрос: какой формат подойдет ребенку и семье",
      text: "Детское направление подается отдельно, чтобы быстро разобраться в возрастах, сценариях пребывания, проживании и практических деталях заезда.",
      facts: ["Лагерь и оздоровительные программы", "Форматы с проживанием и семейные сценарии", "Связка с бассейном, гостиницей и документами"],
    },
    palette: {
      accent: "#5c86bf",
      accentStrong: "#3d679f",
      surface: "rgba(244, 248, 255, 0.94)",
    },
    final: {
      title: "Поможем выбрать безопасный и удобный формат отдыха для ребенка",
      text: "Подскажем по возрасту, документам, условиям проживания и подходящим программам без лишних поисков по сайту.",
    },
  },
  "medical.html": {
    tags: ["Процедуры и направления", "Консультация врача", "Премиальный сервис"],
    primary: { href: "contacts.html", label: "Записаться на консультацию" },
    secondary: { href: "programs.html", label: "Смотреть программы" },
    spotlight: {
      eyebrow: "Медицинский блок",
      title: "Направления терапии показаны как понятная и доверительная система услуг",
      text: "Внутри раздела легко считываются основные категории процедур, а следующий шаг к консультации и подбору программы остается очевидным.",
      facts: ["Физиолечение, ванны и климатические практики", "Массаж и восстановительные техники", "Подбор процедур после консультации врача"],
    },
    palette: {
      accent: "#4a78b4",
      accentStrong: "#315c97",
      surface: "rgba(241, 247, 255, 0.94)",
    },
    final: {
      title: "Подберем процедуры и программу после консультации специалиста",
      text: "Если нужен ориентир по направлениям или совместимости услуг, удобнее всего начать с консультации.",
    },
  },
  "hotel.html": {
    tags: ["Размещение и комфорт", "Семейные форматы", "Проживание рядом с лечением"],
    primary: { href: "contacts.html", label: "Забронировать номер" },
    secondary: { href: "offers.html", label: "Смотреть предложения" },
    spotlight: {
      eyebrow: "Гостиница",
      title: "Раздел проживания работает как самостоятельная премиальная витрина",
      text: "Номера, комфорт, правила заезда и семейные сценарии показаны так же выразительно, как программы и спецпредложения на главной.",
      facts: ["Базовые, семейные и улучшенные номера", "Связка с путевками и детскими сценариями", "Понятный путь от выбора до бронирования"],
    },
    palette: {
      accent: "#557db7",
      accentStrong: "#365f98",
      surface: "rgba(242, 247, 255, 0.94)",
    },
    final: {
      title: "Подберем размещение под формат отдыха, лечения и состав гостей",
      text: "Можно сразу уточнить наличие номеров и подходящие даты заезда вместе с программой или путевкой.",
    },
  },
  "services.html": {
    tags: ["Бассейн и сауна", "Тренировки и восстановление", "Дополнительные форматы"],
    primary: { href: "contacts.html", label: "Уточнить посещение" },
    secondary: { href: "children.html", label: "Детские занятия" },
    spotlight: {
      eyebrow: "Дополнительные услуги",
      title: "Водные и спортивные форматы подаются как часть общего оздоровительного опыта",
      text: "Это не второстепенный раздел, а полноценное продолжение премиального маршрута гостя: от свободного плавания до занятий с тренером.",
      facts: ["Свободное плавание и индивидуальные занятия", "Детские и групповые форматы", "Удобно связать с проживанием и программами"],
    },
    palette: {
      accent: "#5b84bc",
      accentStrong: "#3f659c",
      surface: "rgba(243, 248, 255, 0.94)",
    },
    final: {
      title: "Подскажем по посещению бассейна, занятиям и дополнительным услугам",
      text: "Уточним расписание, свободные форматы и варианты сочетания с другими сценариями отдыха и восстановления.",
    },
  },
  "documents.html": {
    tags: ["Подготовка к заезду", "Памятки и лицензии", "Все файлы в одном месте"],
    primary: { href: "contacts.html", label: "Уточнить по документам" },
    secondary: { href: "about.html", label: "О санатории" },
    spotlight: {
      eyebrow: "Практический раздел",
      title: "Документы оформлены как удобный сервисный центр, а не как сухой список файлов",
      text: "Гость быстро понимает, что скачать перед заездом, где найти правила и какие официальные материалы пригодятся на этапе подготовки.",
      facts: ["Файлы на заезд и памятки", "Лицензии и реквизиты рядом", "Быстрая связь, если нужно уточнение"],
    },
    palette: {
      accent: "#567eb8",
      accentStrong: "#385f96",
      surface: "rgba(242, 247, 255, 0.94)",
    },
    final: {
      title: "Если не уверены, какие документы нужны, поможем подготовиться к заезду",
      text: "Быстрее всего уточнить состав документов и порядок оформления через координатора санатория.",
    },
  },
  "offers.html": {
    tags: ["Сезонные акции", "Подарочные сертификаты", "Семейные заезды"],
    primary: { href: "contacts.html", label: "Получить предложение" },
    secondary: { href: "hotel.html", label: "Выбрать размещение" },
    spotlight: {
      eyebrow: "Акции и выгоды",
      title: "Спецпредложения оформлены как эмоциональная витрина с понятным следующим шагом",
      text: "Гость может быстро увидеть выгоду, формат предложения и перейти к подходящему разделу или запросу консультации.",
      facts: ["Подарочные и сезонные предложения", "Сертификаты и семейные форматы", "Связка с проживанием, программами и путевками"],
    },
    palette: {
      accent: "#4f7bb4",
      accentStrong: "#345e96",
      surface: "rgba(242, 247, 255, 0.94)",
    },
    final: {
      title: "Подберем предложение под даты заезда, состав гостей и нужный формат отдыха",
      text: "Можно быстро уточнить актуальные выгоды и сразу перейти к бронированию подходящего сценария.",
    },
  },
  "contacts.html": {
    tags: ["Телефон и мессенджеры", "Адрес и карта", "Быстрый ответ"],
    primary: { href: "tel:+78000000000", label: "Позвонить сейчас" },
    secondary: { href: "https://wa.me/70000000000", label: "Написать в WhatsApp" },
    spotlight: {
      eyebrow: "Связь без лишних шагов",
      title: "Контактная страница закрывает путь пользователя так же уверенно, как главная открывает его",
      text: "Все каналы связи, адрес и навигационные подсказки собраны в одной выразительной сервисной странице с понятными CTA.",
      facts: ["Телефон, почта и мессенджеры", "Понятный режим работы", "Маршрут к быстрой консультации и карте"],
    },
    palette: {
      accent: "#557db7",
      accentStrong: "#356097",
      surface: "rgba(242, 247, 255, 0.94)",
    },
    final: {
      title: "Выберите удобный канал связи, и мы быстро сориентируем по заезду, программе и размещению",
      text: "Если вопрос срочный, звонок или мессенджер остаются самым быстрым способом получить ответ.",
    },
  },
};

function buildInnerHeroButtons(config) {
  const buttons = [config.primary, config.secondary].filter(Boolean);
  if (!buttons.length) return "";

  return `
    <div class="hero-actions page-hero-actions">
      ${buttons
        .map((button, index) => {
          const kind = index === 0 ? "btn btn-primary" : "btn btn-secondary";
          const external = button.href.startsWith("http");
          const rel = external ? ' rel="noreferrer"' : "";
          const target = external ? ' target="_blank"' : "";
          return `<a class="${kind}" href="${button.href}"${target}${rel}>${button.label}</a>`;
        })
        .join("")}
    </div>
  `;
}

function buildSingleInnerButton(button, kind = "primary") {
  if (!button) return "";
  const className = kind === "primary" ? "btn btn-primary" : "btn btn-secondary";
  const external = button.href.startsWith("http");
  const rel = external ? ' rel="noreferrer"' : "";
  const target = external ? ' target="_blank"' : "";
  return `<a class="${className}" href="${button.href}"${target}${rel}>${button.label}</a>`;
}

function buildInnerHeroTags(hero, config) {
  const existing = hero.querySelector(".chip-row");
  if (existing) {
    existing.classList.add("page-hero-tags");
    return existing.outerHTML;
  }

  if (!config.tags?.length) return "";
  return `
    <div class="chip-row page-hero-tags">
      ${config.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
    </div>
  `;
}

function enhanceInnerPages() {
  const page = document.body.dataset.page || "index.html";
  if (page === "index.html") return;

  document.body.classList.add("inner-page-shell");

  const config = innerPageConfigs[page] || innerPageConfigs["about.html"];
  const hero = document.querySelector(".page-hero");

  if (hero && !hero.classList.contains("page-hero--enhanced")) {
    const eyebrow = hero.querySelector(".eyebrow")?.outerHTML || "";
    const title = hero.querySelector("h1")?.outerHTML || "";
    const paragraphs = Array.from(hero.querySelectorAll("p"))
      .map((paragraph) => paragraph.outerHTML)
      .join("");
    const tagsMarkup = buildInnerHeroTags(hero, config);
    const spotlightFacts = config.spotlight.facts
      .map((fact) => `<li>${fact}</li>`)
      .join("");

    hero.classList.add("page-hero--enhanced");
    hero.style.setProperty("--inner-hero-accent", config.palette.accent);
    hero.style.setProperty("--inner-hero-accent-strong", config.palette.accentStrong);
    hero.style.setProperty("--inner-hero-surface", config.palette.surface);
    hero.innerHTML = `
      <div class="page-hero-stage">
        <div class="page-hero-copy">
          ${eyebrow}
          ${title}
          <div class="page-hero-lead">
            ${paragraphs}
          </div>
          ${tagsMarkup}
          ${buildInnerHeroButtons(config)}
        </div>
        <aside class="page-hero-aside">
          <article class="page-hero-aside-card page-hero-aside-card--accent">
            <span class="eyebrow">${config.spotlight.eyebrow}</span>
            <h2>${config.spotlight.title}</h2>
            <p>${config.spotlight.text}</p>
          </article>
          <article class="page-hero-aside-card">
            <strong>В фокусе раздела</strong>
            <ul class="page-hero-facts">
              ${spotlightFacts}
            </ul>
          </article>
        </aside>
      </div>
      <div class="page-hero-backdrop" aria-hidden="true"></div>
    `;
  }

  const sections = Array.from(document.querySelectorAll(".page-main > .section"));
  sections.forEach((section, index) => {
    section.classList.add("inner-page-section");
    if (index === 0) section.classList.add("inner-page-section--intro");
  });

  const hasCtaBanner = document.querySelector(".page-main .cta-banner");
  if (hasCtaBanner) {
    const actions = hasCtaBanner.querySelector(".hero-actions");
    if (actions && !actions.querySelector(".btn-primary") && config.primary) {
      actions.insertAdjacentHTML("afterbegin", buildSingleInnerButton(config.primary, "primary"));
    } else if (!actions) {
      hasCtaBanner.insertAdjacentHTML("beforeend", buildInnerHeroButtons(config));
    }
  } else {
    const pageMain = document.querySelector(".page-main");
    if (pageMain) {
      const finalSection = document.createElement("section");
      finalSection.className = "section reveal inner-page-section inner-page-final-cta";
      finalSection.innerHTML = `
        <div class="cta-banner cta-banner--inner-page">
          <span class="eyebrow">Следующий шаг</span>
          <h2>${config.final.title}</h2>
          <p>${config.final.text}</p>
          ${buildInnerHeroButtons(config)}
        </div>
      `;
      pageMain.appendChild(finalSection);
    }
  }

  const stickyBar = document.querySelector(".sticky-contact-bar");
  if (stickyBar) stickyBar.classList.add("sticky-contact-bar--inner");
}

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
  return homeHeaderLinks
    .map(([anchor, label]) => {
      return `<a class="nav-link" href="${buildHomeAnchorHref(page, anchor)}">${label}</a>`;
    })
    .join("");
}

function buildHeaderMoreMenu(page) {
  const links = homeMoreLinks
    .map(([anchor, label, description]) => `
      <a class="mega-link mega-link--header" href="${buildHomeAnchorHref(page, anchor)}">
        <strong>${label}</strong>
        <span>${description}</span>
      </a>
    `)
    .join("");

  return `
    <button class="nav-link nav-link--toggle" type="button" data-mega-toggle aria-expanded="false" aria-controls="header-more-menu">Еще</button>
    <div class="mega-panel" id="header-more-menu" data-mega-panel>
      <div class="mega-links mega-links--header">
        ${links}
      </div>
    </div>
  `;
}

function buildHeaderContactsLink(page) {
  return `<a class="nav-link" href="${buildHomeAnchorHref(page, "contacts-block")}">Контакты</a>`;
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
  const mobileItems = [...homeHeaderLinks, ...homeMoreLinks];

  return mobileItems
    .map(([anchor, label, description]) => {
      return `
        <a href="${buildHomeAnchorHref(page, anchor)}">
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
            ${buildHeaderMoreMenu(page)}
            ${buildHeaderContactsLink(page)}
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
  enhanceInnerPages();
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





