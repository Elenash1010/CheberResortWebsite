const navItems = [
  ["index.html", "Главная", "Стартовая витрина санатория, программы и быстрые контакты"],
  ["about.html", "О санатории", "История, преимущества, инфраструктура, подход к восстановлению"],
  ["programs.html", "Программы", "Комплексные программы оздоровления и восстановления"],
  ["courses.html", "Курсовки", "Форматы без проживания, дневные курсы и гибкие решения"],
  ["vouchers.html", "Путевки", "Путевки для взрослых, семей, антистресс и профилактики"],
  ["children.html", "Программы для детей", "Детские программы, лагерь и семейные сценарии"],
  ["index.html#therapy-procedures", "Медицинские услуги", "Процедуры, диагностика, консультации и лечение"],
  ["hotel.html", "Гостиница", "Номера, проживание, комфорт и семейное размещение"],
  ["services.html", "Прочие услуги", "Бассейн, вечернее оздоровление и дополнительные сервисы"],
  ["documents.html", "Документы", "Правила, документы на заезд, лицензии и памятки"],
  ["offers.html", "Акции и спецпредложения", "Сезонные предложения, скидки и пакетные решения"],
  ["index.html#contacts-block", "Контакты", "Телефоны, адрес, почта, мессенджеры и карта"],
];

const searchItems = [
  ...navItems.map(([href, label, description]) => ({ href, label, description })),
  {
    href: "physiotherapy.html",
    label: "Физиолечение",
    description: "Аппаратные физиопроцедуры, стоимость сеанса и запись по назначению врача",
  },
  {
    href: "baths.html",
    label: "Ванны",
    description: "Лечебные ванны, стоимость сеанса и запись по назначению врача",
  },
  {
    href: "climate-therapy.html",
    label: "Лечебные климатические воздействия",
    description: "Аэрофитотерапия, соляная шахта, фитосбор и кислородный коктейль",
  },
  {
    href: "massage.html",
    label: "Массаж",
    description: "Вибрационный, вакуумный, подводный и ручной массаж по назначению врача",
  },
  {
    href: "pool-free-swim.html",
    label: "Свободное плавание",
    description: "Самостоятельное посещение бассейна по расписанию",
  },
  {
    href: "pool-coach-swim.html",
    label: "Плавание с тренером",
    description: "Индивидуальные тренировки и постановка техники плавания",
  },
  {
    href: "pool-children-swim.html",
    label: "Индивидуальные занятия для детей",
    description: "Персональные занятия в бассейне для детей с учетом возраста",
  },
  {
    href: "flipper-school.html",
    label: "Школа плавания Флиппер",
    description: "Групповые занятия по плаванию для детей и подростков",
  },
];
const homeHeaderLinks = [
  ["about-cheber", "О санатории", "Санаторий «Чебер» — современное пространство здоровья и восстановления"],
  ["vouchers", "Путевки", "Путевки: интенсивность и длительность"],
  ["courses", "Курсовки", "Курсовки"],
  ["therapy-procedures", "Терапия и процедуры", "Терапия и процедуры"],
  ["children-programs", "Программы для детей", "Программы для детей"],
  ["comfort-rooms", "Комфортные номера", "Номера и бронирование"],
];
const homeMoreLinks = [
  ["special-offers", "Акции", "Специальные предложения"],
  ["events.html", "Наша АФИША", "Новости и анонсы событий"],

  ["pool-sauna", "Бассейн и сауна", "Плавание, занятия и отдых в сауне"],
  ["infrastructure", "Инфраструктура", "Инфраструктура"],
  ["extra-features", "Бронирование под мероприятия", "Дополнительные возможности"],
  ["b2b-spaces", "Пространства для бизнеса", "B2B: Пространства для бизнеса"],
];

function buildHomeAnchorHref(page, anchor) {
  if (anchor.endsWith(".html")) return anchor;
  return page === "index.html" ? `#${anchor}` : `index.html#${anchor}`;
}
const innerPageConfigs = {
  "about.html": {
    tags: ["Премиальный санаторий", "Проживание и лечение", "Семейный формат"],
    primary: { href: "index.html#contacts-block", label: "Получить консультацию" },
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
    primary: { href: "index.html#contacts-block", label: "Подобрать программу" },
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
    primary: { href: "index.html#contacts-block", label: "Уточнить условия" },
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
    primary: { href: "index.html#contacts-block", label: "Подобрать путевку" },
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
    primary: { href: "index.html#contacts-block", label: "Узнать о детских программах" },
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
  "hotel.html": {
    tags: ["Размещение и комфорт", "Семейные форматы", "Проживание рядом с лечением"],
    primary: { href: "index.html#contacts-block", label: "Забронировать номер" },
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
    primary: { href: "index.html#contacts-block", label: "Уточнить посещение" },
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
    primary: { href: "index.html#contacts-block", label: "Уточнить по документам" },
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
    primary: { href: "index.html#contacts-block", label: "Получить предложение" },
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
  "index.html#contacts-block": {
    tags: ["Телефон и мессенджеры", "Адрес и карта", "Быстрый ответ"],
    primary: { href: "tel:+73412240555", label: "Позвонить сейчас" },
    secondary: { href: "mailto:info@cheberresort.ru", label: "Написать на почту" },
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
  if (document.body.dataset.pageLayout === "plain") return;

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
    .filter(([anchor]) => anchor !== "courses")
    .map(([anchor, label]) => {
      if (anchor === "about-cheber") {
        return `<div class="header-about-dropdown"><button class="nav-link nav-link--toggle" type="button" data-mega-toggle aria-expanded="false" aria-controls="header-about-menu">О санатории</button><div class="mega-panel" id="header-about-menu" data-mega-panel><div class="mega-links mega-links--header"><a class="mega-link mega-link--header" href="${buildHomeAnchorHref(page, "about-cheber")}"><strong>Про Чебер</strong></a><a class="mega-link mega-link--header" href="${buildHomeAnchorHref(page, "specialists")}"><strong>Наши специалисты</strong></a><a class="mega-link mega-link--header" href="documents.html"><strong>Наши документы</strong></a></div></div></div>`;
      }
      if (anchor === "vouchers") {
        return `<div class="header-wellness-dropdown"><button class="nav-link nav-link--toggle" type="button" data-mega-toggle aria-expanded="false" aria-controls="header-wellness-menu">Оздоровление</button><div class="mega-panel" id="header-wellness-menu" data-mega-panel><div class="mega-links mega-links--header"><a class="mega-link mega-link--header" href="${buildHomeAnchorHref(page, "courses")}"><strong>Курсовки</strong><span>Оздоровление без проживания</span></a><a class="mega-link mega-link--header" href="${buildHomeAnchorHref(page, "vouchers")}"><strong>Путевки</strong><span>Программы с проживанием</span></a></div></div></div>`;
      }
      return `<a class="nav-link" href="${buildHomeAnchorHref(page, anchor)}">${label}</a>`;
    })
    .join("");
}

function isVisibleInSiteView([anchor]) {
  return document.documentElement.dataset.siteView !== "short" ||
    !["pool-sauna", "infrastructure", "extra-features", "b2b-spaces"].includes(anchor);
}
function buildHeaderMoreMenu(page) {
  const links = homeMoreLinks.filter(isVisibleInSiteView)
    .map(([anchor, label, description]) => `
      <a class="mega-link mega-link--header" href="${buildHomeAnchorHref(page, anchor)}">
        <strong>${label}</strong>
        <span>${description}</span>
      </a>
    `)
    .join("");

  return `
    <button class="nav-link nav-link--toggle" type="button" data-mega-toggle aria-expanded="false" aria-controls="header-more-menu">Вашему вниманию</button>
    <div class="mega-panel" id="header-more-menu" data-mega-panel>
      <div class="mega-links mega-links--header">
        ${links}
      </div>
    </div>
  `;
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
  const mobileItems = [
    ["about-cheber", "Про Чебер", ""],
    ["specialists", "Наши специалисты", ""],
    ["documents.html", "Наши документы", ""],
    ...homeHeaderLinks.filter(([anchor]) => anchor !== "about-cheber"),
    ...homeMoreLinks
  ].filter(isVisibleInSiteView);

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
            <img class="brand-logo brand-logo--header" src="assets/img/cheber-logo.png" alt="ЧЕБЕР — курорт в сердце Удмуртии">
          </a>
          <nav class="header-inline-nav" aria-label="Основная навигация">
            ${buildHeaderNav(page)}
            ${buildHeaderMoreMenu(page)}
          </nav>
          <div class="header-utility">
            <a class="btn btn-primary header-cta" href="index.html#contacts-block">Забронировать / связаться</a>
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
              <img class="brand-logo brand-logo--footer" src="assets/img/cheber-logo.png" alt="ЧЕБЕР — курорт в сердце Удмуртии">
            </a>
            <div class="footer-legal">
              <p>Информация на сайте не является публичной офертой</p>
              <p>
                Заполняя форму обратной связи, в том числе указывая номер телефона на сайте или лендингах, либо подписываясь на рассылку, вы выражаете: согласие на получение рассылки посредством email любой информации курорта Чебер, выражаете своё согласие на обработку ваших персональных данных, в целях заключения и исполнения договора оказания санаторно-курортных и/или оздоровительных услуг, и/или платных медицинских услуг.
              </p>
              <p>Электронная почта для обращений с вопросом о своих персональных данных, в том числе об их удалении: <a href="mailto:info@cheberresort.ru">info@cheberresort.ru</a></p>
              <p class="footer-legal__warning">ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ, НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА.</p>
            </div>
          </div>
          <div class="footer-contacts">
            <h2>Контакты и соцсети</h2>
            <p><strong>Адрес:</strong> г. Ижевск, ул. Ленина, 132, курорт «ЧЕБЕР».</p>
            <div class="footer-contacts__phones">
              <strong>Телефоны:</strong>
              <a href="tel:+73412240555">8 3412 240 555</a>
              <a href="tel:+79508300573">8 950 830 05 73</a>
              <a href="tel:+79524082075">8 952 408 20 75</a>
            </div>
            <p><strong>E-mail:</strong> <a href="mailto:info@cheberresort.ru">info@cheberresort.ru</a></p>
            <div class="footer-contacts__socials" aria-label="Социальные сети — ссылки появятся позже">
              <span class="footer-social-placeholder" role="img" aria-label="ВКонтакте"><svg class="t-sociallinks__svg" role="presentation" width="64px" height="64px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z" fill="#3869AC"></path>
                    </svg></span>
              <span class="footer-social-placeholder" role="img" aria-label="Telegram"><svg class="t-sociallinks__svg" role="presentation" width="64px" height="64px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#3869AC"></path>
                    </svg></span>
              <span class="footer-social-placeholder" role="img" aria-label="MAX"><svg class="t-sociallinks__svg" role="presentation" width="64px" height="64px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z" fill="#3869AC"></path>
                    </svg></span>
            </div>
          </div>
        </div>
        <div class="footer-note">
          <span>© <span data-year></span> Санаторий «ЧЕБЕР»</span>
          <span>Информация о санаторно-курортных и медицинских услугах</span>
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
  const megaToggles = [...document.querySelectorAll("[data-mega-toggle]")];
  const closeMegaMenus = () => megaToggles.forEach((button) => { button.setAttribute("aria-expanded", "false"); document.getElementById(button.getAttribute("aria-controls"))?.classList.remove("is-open"); });

  function syncScroll() {
    if (!header) return;
    const forceStandardHeader = document.body.dataset.pageLayout === "plain";
    header.classList.toggle("is-scrolled", forceStandardHeader || window.scrollY > 24);
  }

  syncScroll();
  window.addEventListener("scroll", syncScroll, { passive: true });

  if (toggle && mobileNav) {
    function closeMobileNav() {
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("is-open");
    }

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.classList.toggle("is-open", !expanded);
    });

    mobileNav.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (!link) return;

      const url = new URL(link.getAttribute("href"), window.location.href);
      const isSamePageHash =
        url.hash &&
        url.origin === window.location.origin &&
        url.pathname === window.location.pathname;

      closeMobileNav();

      if (!isSamePageHash) return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      event.preventDefault();
      history.pushState(null, "", url.hash);
      requestAnimationFrame(() => target.scrollIntoView({ block: "start", behavior: "smooth" }));
    });

    document.addEventListener("click", (event) => {
      if (!mobileNav.classList.contains("is-open")) return;
      if (event.target.closest(".nav-toggle") || event.target.closest(".mobile-nav")) return;
      closeMobileNav();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMobileNav();
    });
  }

  megaToggles.forEach((button) => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    if (!panel) return;
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      closeMegaMenus();
      button.setAttribute("aria-expanded", String(!expanded));
      panel.classList.toggle("is-open", !expanded);
    });
    panel.addEventListener("click", (event) => {
      if (event.target.closest("a[href]")) closeMegaMenus();
    });
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-mega-toggle], [data-mega-panel]")) closeMegaMenus();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMegaMenus();
  });
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
    const prev = root.querySelector("[data-vouchers-prev]");
    const next = root.querySelector("[data-vouchers-next]");
    const dotsWrap = root.querySelector("[data-vouchers-dots]");
    if (!track || !prev || !next || !dotsWrap) return;

    const templates = Array.from(track.children).map((slide) => slide.outerHTML);
    if (!templates.length) return;

    let visibleCount = 0;
    let cloneCount = 0;
    let currentIndex = 0;
    let logicalIndex = 0;
    let slides = [];
    let dots = [];
    let isAnimating = false;

    const getVisibleCount = () => {
      if (window.innerWidth <= 760) return 1;
      return 2;
    };

    const total = templates.length;
    const isLoopable = () => total > visibleCount;

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
        button.setAttribute("aria-label", `Перейти к путевке ${dotIndex + 1}`);
        button.addEventListener("click", () => {
          if (isAnimating) return;
          logicalIndex = isLoopable() ? dotIndex : 0;
          currentIndex = isLoopable() ? logicalIndex + cloneCount : logicalIndex;
          moveTo(currentIndex, true);
          updateUi();
        });
        dotsWrap.appendChild(button);
      });

      dots = Array.from(dotsWrap.querySelectorAll("button"));
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
      logicalIndex = isLoopable()
        ? ((logicalIndex % total) + total) % total
        : 0;

      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === logicalIndex;
        dot.classList.toggle("is-active", active);
        dot.disabled = !isLoopable() && dotIndex > 0;
        dot.hidden = !isLoopable() && dotIndex > 0;
      });
    }

    function rebuild() {
      const nextVisibleCount = getVisibleCount();
      if (visibleCount === nextVisibleCount && slides.length) {
        currentIndex = logicalIndex + cloneCount;
        moveTo(currentIndex, false);
        updateUi();
        return;
      }

      visibleCount = nextVisibleCount;
      cloneCount = isLoopable() ? Math.min(visibleCount, total) : 0;
      track.innerHTML = "";

      const head = templates.slice(-cloneCount).map((markup) => createSlide(markup, true));
      const body = templates.map((markup) => createSlide(markup));
      const tail = templates.slice(0, cloneCount).map((markup) => createSlide(markup, true));

      [...head, ...body, ...tail].forEach((slide) => track.appendChild(slide));
      slides = Array.from(track.children);
      logicalIndex = isLoopable()
        ? ((logicalIndex % total) + total) % total
        : 0;
      currentIndex = isLoopable() ? logicalIndex + cloneCount : logicalIndex;
      buildDots();
      moveTo(currentIndex, false);
      updateUi();
    }

    function step(direction) {
      if (isAnimating || !slides.length) return;
      if (!isLoopable()) return;
      isAnimating = true;
      logicalIndex = direction > 0
        ? (logicalIndex >= total - 1 ? 0 : logicalIndex + 1)
        : (logicalIndex <= 0 ? total - 1 : logicalIndex - 1);
      currentIndex += direction;
      moveTo(currentIndex, true);
      updateUi();
    }

    prev.addEventListener("click", () => step(-1));
    next.addEventListener("click", () => step(1));

    track.addEventListener("transitionend", (event) => {
      if (event.target !== track || event.propertyName !== "transform" || !isAnimating) return;
      isAnimating = false;

      if (currentIndex < cloneCount) {
        currentIndex = total + currentIndex;
        moveTo(currentIndex, false);
      } else if (currentIndex >= total + cloneCount) {
        currentIndex = currentIndex - total;
        moveTo(currentIndex, false);
      }
    });

    window.addEventListener("resize", rebuild);
    rebuild();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initVouchersSlider();
});

function initVoucherModals() {
  const openers = Array.from(document.querySelectorAll("[data-voucher-modal-open]"));
  const modals = Array.from(document.querySelectorAll("[data-voucher-modal]"));
  if (!openers.length || !modals.length) return;

  let activeModal = null;
  let lastFocusedElement = null;

  const getModal = (name) => modals.find((modal) => modal.dataset.voucherModal === name);

  const closeModal = () => {
    if (!activeModal) return;
    activeModal.classList.remove("is-open");
    activeModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocusedElement) lastFocusedElement.focus();
    activeModal = null;
    lastFocusedElement = null;
  };

  const openModal = (name) => {
    const modal = getModal(name);
    if (!modal) return;
    lastFocusedElement = document.activeElement;
    activeModal = modal;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const closeButton = modal.querySelector("[data-voucher-modal-close]");
    if (closeButton) closeButton.focus();
  };

  openers.forEach((opener) => {
    const modalName = opener.dataset.voucherModalOpen;

    opener.addEventListener("click", () => {
      openModal(modalName);
    });

    opener.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openModal(modalName);
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-voucher-modal-close]")) return;
    closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initVoucherModals();
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

    const descriptions = slides.map((card, cardIndex) => {
      const body = card.querySelector(".expert-card__body");
      const paragraphs = body ? Array.from(body.querySelectorAll("p")) : [];
      if (!paragraphs.length) return null;
      const description = document.createElement("div");
      description.className = "expert-card__description";
      description.id = `expert-description-${Array.from(document.querySelectorAll("[data-experts-slider]")).indexOf(root)}-${cardIndex}`;
      body.insertBefore(description, paragraphs[0]);
      paragraphs.forEach((paragraph) => description.appendChild(paragraph));
      const button = document.createElement("button");
      button.type = "button";
      button.className = "expert-card__toggle";
      button.textContent = "Показать полностью";
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", description.id);
      body.appendChild(button);
      button.addEventListener("click", () => {
        const expanded = button.getAttribute("aria-expanded") !== "true";
        description.classList.toggle("is-expanded", expanded);
        button.setAttribute("aria-expanded", String(expanded));
        button.textContent = expanded ? "Свернуть" : "Показать полностью";
        update();
      });
      return { description, button };
    });

    function refreshDescriptions() {
      descriptions.forEach((entry) => {
        if (!entry) return;
        const { description, button } = entry;
        const expanded = button.getAttribute("aria-expanded") === "true";
        description.classList.remove("is-expanded");
        const overflowing = description.scrollHeight > description.clientHeight + 1;
        button.hidden = !overflowing;
        description.classList.toggle("is-expanded", expanded && overflowing);
        if (!overflowing) {
          button.setAttribute("aria-expanded", "false");
          button.textContent = "Показать полностью";
        }
      });
      update();
    }

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
      track.style.height = `${Math.ceil(Math.max(...slides.slice(index, index + visibleCount).map((slide) => slide.getBoundingClientRect().height)))}px`;

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

    window.addEventListener("resize", refreshDescriptions);
    refreshDescriptions();
    if (document.fonts) document.fonts.ready.then(refreshDescriptions);
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





