const cheberRooms = [
  {
    id: "standard-2-2",
    name: "«Стандартный» двухкомнатный, 2+2",
    facts: ["2 комнаты", "Размещение 2+2"],
    photos: [1, 2, 3, 4, 5, 6, 7].map((number) => ({
      src: `assets/img/rooms/Two-room%20standard/${number}.jpg`,
      alt: `«Стандартный» двухкомнатный, 2+2 — фото ${number}`,
      caption: "«Стандартный» двухкомнатный, 2+2"
    }))
  },
  { id: "standard-comfort-2-2", name: "«Стандартный» двухкомнатный улучшенной комфортности, 2+2", facts: ["2 комнаты", "Размещение 2+2", "Улучшенная комфортность"] },
  { id: "standard-1-1", name: "«Стандартный» двухкомнатный, 1+1", facts: ["2 комнаты", "Размещение 1+1"] },
  { id: "family", name: "Семейный трёхместный", facts: ["Не более трёх человек"], description: "Семейный номер для размещения не более трёх человек." },
  { id: "single-comfort-1-1", name: "Одноместный улучшенной комфортности, 1+1", facts: ["Размещение 1+1", "Улучшенная комфортность"] },
  { id: "single-comfort", name: "Одноместный улучшенной комфортности", facts: ["Одноместный", "Улучшенная комфортность"] },
  { id: "studio", name: "Одноместный повышенной комфортности «Студия»", facts: ["Одноместный", "Студия", "Повышенная комфортность"] },
  { id: "single-two-room", name: "Одноместный двухкомнатный повышенной комфортности", facts: ["Одноместный", "2 комнаты", "Повышенная комфортность"] },
  { id: "apartments", name: "Апартаменты", facts: ["Апартаменты"] }
];

(() => {
  const root = document.querySelector("#room-page");
  if (!root) return;
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
  const roomHref = (room) => `room.html?room=${room.id}`;
  const roomCard = (room) => `<a class="room-other-card" href="${roomHref(room)}"><img src="assets/img/cheber-fasad.png" alt="Санаторий курорт Чебер" loading="lazy"><div><h3>${escapeHtml(room.name)}</h3><span>Подробнее о номере ↗</span></div></a>`;
  if (root.dataset.catalog === "true") {
    root.innerHTML = `<nav class="room-breadcrumbs" aria-label="Навигация"><a href="index.html">Главная</a><span>Номера</span></nav><h1>Комфортные номера</h1><div class="room-other-grid">${cheberRooms.map(roomCard).join("")}</div>`;
    return;
  }
  const requestedId = new URLSearchParams(location.search).get("room");
  const room = cheberRooms.find((entry) => entry.id === requestedId) || cheberRooms[0];
  const photos = room.photos || [{ src: "assets/img/cheber-fasad.png", alt: "Санаторий курорт Чебер", caption: "Санаторий курорт «Чебер»" }];
  document.title = `${room.name} — ЧЕБЕР`;
  document.querySelector('meta[name="description"]').content = `${room.name} в санатории курорте Чебер. Размещение и запрос на бронирование.`;
  root.innerHTML = `
    <h1>${escapeHtml(room.name)}</h1>
    <section class="room-detail" aria-label="Описание номера">
      <div class="room-gallery">
        <div class="room-gallery-stage"><img id="room-photo" src="${photos[0].src}" alt="${escapeHtml(photos[0].alt)}"><button class="room-gallery-arrow room-gallery-arrow--prev" type="button" aria-label="Предыдущее фото" data-photo-step="-1" ${photos.length < 2 ? "hidden" : ""}>←</button><button class="room-gallery-arrow room-gallery-arrow--next" type="button" aria-label="Следующее фото" data-photo-step="1" ${photos.length < 2 ? "hidden" : ""}>→</button></div>
        <div class="room-gallery-thumbs" aria-label="Фотографии">${photos.map((photo, index) => `<button type="button" class="room-gallery-thumb" data-photo-index="${index}" aria-label="Показать фото ${index + 1}" aria-pressed="${index === 0}"><img src="${photo.src}" alt=""></button>`).join("")}</div>
        <p class="room-photo-caption" id="room-photo-caption">${escapeHtml(photos[0].caption || "")}</p>
      </div>
      <article class="room-summary"><h2>О номере</h2><div class="room-facts">${room.facts.map((fact) => `<span>${escapeHtml(fact)}</span>`).join("")}</div><p>${escapeHtml(room.description || "Поможем уточнить наличие номера и подобрать условия проживания.")}</p><p>Стоимость проживания зависит от дат заезда и выбранной программы. Уточните условия при бронировании.</p></article>
    </section>
    <section class="room-section"><h2>Оснащение и комфорт</h2><div class="room-equipment-grid"><article><h3>Оснащение номера</h3><p>Подробности об оснащении этой категории номера уточняйте при бронировании.</p></article><article><h3>Для вашего отдыха</h3><ul><li>Чайная станция</li><li>Гигиенический набор</li><li>Косметика «Чебер»</li><li>Доставка питания в номер</li><li>Меню сна</li></ul></article></div></section>
    <div class="room-section voucher-modal__actions">
      <a class="btn btn-secondary" href="index.html#comfort-rooms">Выбрать другой номер</a>
      <a class="btn btn-primary" href="index.html#contacts-block">Забронировать этот номер</a>
    </div>`;

  let photoIndex = 0;
  function showPhoto(index) {
    photoIndex = (index + photos.length) % photos.length;
    const photo = photos[photoIndex];
    const image = root.querySelector("#room-photo");
    image.src = photo.src;
    image.alt = photo.alt;
    root.querySelector("#room-photo-caption").textContent = photo.caption || "";
    root.querySelectorAll("[data-photo-index]").forEach((button) => button.setAttribute("aria-pressed", String(Number(button.dataset.photoIndex) === photoIndex)));
  }
  root.querySelectorAll("[data-photo-index]").forEach((button) => button.addEventListener("click", () => showPhoto(Number(button.dataset.photoIndex))));
  root.querySelectorAll("[data-photo-step]").forEach((button) => button.addEventListener("click", () => showPhoto(photoIndex + Number(button.dataset.photoStep))));

})();
