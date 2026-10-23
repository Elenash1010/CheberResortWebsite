const cheberRooms = [
  {
    id: "standard-2-2",
    equipment: ["Холодильник в номере", "Фен по требованию", "Гладильные принадлежности по требованию", "Телевизор в номере", "Чайная станция в номере"],
    name: "«Стандартный» двухкомнатный, 2+2",
    facts: ["2 комнаты", "Размещение 2+2"],
    photos: [4372, 4369, 4375, 4378, 4380, 4382, 4385, 4389, 4392, 4394, 4397, 4400].map((number, index) => ({
      src: `assets/img/rooms/Standard%20Two-Room%20Accommodation,%202+2%20(5th%20and%206th%20floors,%20excluding%20rooms%20510%20and%20610)/0Y0A${number}_resized.jpg`,
      alt: `«Стандартный» двухкомнатный, 2+2 — фото ${index + 1}`,
      caption: "«Стандартный» двухкомнатный, 2+2"
    }))
  },
  { id: "standard-comfort-2-2", name: "«Стандартный» двухкомнатный улучшенной комфортности, 2+2", facts: ["2 комнаты", "Размещение 2+2", "Улучшенная комфортность"], equipment: ["Душевая кабина", "Две полутораспальные кровати в каждой комнате", "Новая мебель", "Телевизор"] },
  {
    id: "standard-1-1",
    equipment: ["Чайная станция", "Холодильник в холле"],
    name: "«Стандартный» двухкомнатный, 1+1",
    facts: ["2 комнаты", "Размещение 1+1"],
    photos: [
      "0Y0A4593_resized.jpg",
      "0Y0A4412_resized.jpg",
      "0Y0A4416_resized.jpg",
      "0Y0A4419_resized.jpg",
      "0Y0A4422_resized.jpg",
      "0Y0A4425_resized.jpg",
      "0Y0A4428_resized.jpg",
      "0Y0A4430_resized.jpg",
      "0Y0A4433_resized.jpg",
      "0Y0A4435_resized.jpg",
      "0Y0A4437_resized.jpg",
      "0Y0A4438_resized.jpg",
      "0Y0A4439_resized.jpg",
      "0Y0A4440_resized.jpg",
      "0Y0A4442_resized.jpg",
      "0Y0A4444_resized.jpg",
      "0Y0A4447_resized.jpg",
      "0Y0A4448_resized.jpg",
      "0Y0A4451_resized.jpg",
      "0Y0A4454_resized.jpg",
      "0Y0A4457_resized.jpg",
      "0Y0A4458_resized.jpg",
      "0Y0A4459_resized.jpg",
      "0Y0A4461_resized.jpg",
      "0Y0A4464_resized.jpg",
      "0Y0A4467_resized.jpg",
      "0Y0A4469_resized.jpg",
      "0Y0A4471_resized.jpg",
      "0Y0A4473_resized.jpg",
      "0Y0A4474_resized.jpg",
      "0Y0A4535_resized.jpg",
      "0Y0A4536_resized.jpg",
      "0Y0A4539_resized.jpg",
      "0Y0A4543_resized.jpg",
      "0Y0A4547_resized.jpg",
      "0Y0A4550_resized.jpg",
      "0Y0A4555_resized.jpg",
      "0Y0A4558_resized.jpg",
      "0Y0A4560_resized.jpg",
      "0Y0A4561_resized.jpg",
      "0Y0A4563_resized.jpg",
      "0Y0A4565_resized.jpg",
      "0Y0A4568_resized.jpg",
      "0Y0A4571_resized.jpg",
      "0Y0A4574_resized.jpg",
      "0Y0A4576_resized.jpg",
      "0Y0A4579_resized.jpg",
      "0Y0A4583_resized.jpg",
      "0Y0A4586_resized.jpg",
      "0Y0A4589_resized.jpg",
      "0Y0A4590_resized.jpg",
      "0Y0A4595_resized.jpg",
      "0Y0A4598_resized.jpg",
      "0Y0A4602_resized.jpg",
      "0Y0A4606_resized.jpg",
      "0Y0A4610_resized.jpg",
      "0Y0A4612_resized.jpg",
      "0Y0A4615_resized.jpg"
    ].map((filename, index) => ({
      src: `assets/img/rooms/Standard%20Two-Room%20Accommodation%2C%201%2B1%20(rooms%20307%2C%20308%2C%20311%E2%80%93317%2C%20404%2C%20405%2C%20502%2C%20503)/${encodeURIComponent(filename)}`,
      alt: `«Стандартный» двухкомнатный, 1+1 — фото ${index + 1}`,
      caption: "«Стандартный» двухкомнатный, 1+1"
    }))
  },
  {
    id: "family",
    equipmentNote: "Цена указана за номер при заселении не более трёх человек.",
    name: "Семейный трёхместный",
    facts: ["Не более трёх человек"],
    description: "Семейный номер для размещения не более трёх человек.",
    photos: [4486, 4488, 4489, 4491, 4495, 4497, 4498, 4499].map((number, index) => ({
      src: `assets/img/rooms/Family%20Triple%20Room%20(rooms%20302%E2%80%93306).%20The%20rate%20is%20per%20room%20for%20up%20to%20three%20guests/0Y0A${number}_resized.jpg`,
      alt: `Семейный трёхместный — фото ${index + 1}`,
      caption: "Семейный трёхместный"
    }))
  },
  { id: "single-comfort-1-1", name: "Одноместный улучшенной комфортности, 1+1", facts: ["Размещение 1+1", "Улучшенная комфортность"] },
  {
    id: "single-comfort",
    name: "Одноместный улучшенной комфортности",
    facts: ["Одноместный", "Улучшенная комфортность"],
    photos: [4372, 4369, 4375, 4378, 4380, 4382, 4385, 4389, 4392, 4394, 4397, 4400, 4404, 4408].map((number, index) => ({
      src: `assets/img/rooms/Superior%20Single%20Room%20(rooms%20410,%20610,%20710)/0Y0A${number}_resized.jpg`,
      alt: `Одноместный улучшенной комфортности — фото ${index + 1}`,
      caption: "Одноместный улучшенной комфортности"
    }))
  },
  {
    id: "studio",
    equipment: ["Кондиционер", "Чайник", "Телевизор", "Холодильник", "Гладильные принадлежности по требованию"],
    name: "Одноместный повышенной комфортности «Студия»",
    facts: ["Одноместный", "Студия", "Повышенная комфортность"],
    photos: [4339, 4282, 4285, 4288, 4290, 4292, 4294, 4297, 4300, 4303, 4306, 4309, 4311, 4312, 4316, 4319, 4320, 4322, 4324, 4329, 4332, 4336, 4342, 4344, 4346, 4348, 4349, 4352].map((number, index) => ({
      src: `assets/img/rooms/Deluxe%20Single%20Studio%20(rooms%20411%E2%80%93415)/0Y0A${number}_resized.jpg`,
      alt: `Одноместный повышенной комфортности «Студия» — фото ${index + 1}`,
      caption: "Одноместный повышенной комфортности «Студия»"
    }))
  },
  {
    id: "single-two-room",
    equipment: ["Кондиционер", "Чайник", "Телевизор", "Холодильник", "Фен", "Гладильные принадлежности по требованию"],
    name: "Одноместный двухкомнатный повышенной комфортности",
    facts: ["Одноместный", "2 комнаты", "Повышенная комфортность"]
  },
  {
    id: "apartments",
    equipment: ["Своя кухня", "Кондиционер", "Холодильник", "Чайник", "Ванна", "Гладильные принадлежности по требованию"],
    name: "Апартаменты",
    facts: ["Апартаменты"],
    photos: [
      "0Y0A4204_resized.jpg",
      "0Y0A4166_resized (1).jpg",
      "0Y0A4168_resized (1).jpg",
      "0Y0A4171_resized (1).jpg",
      "0Y0A4174_resized (1).jpg",
      "0Y0A4178_resized.jpg",
      "0Y0A4181_resized.jpg",
      "0Y0A4184_resized.jpg",
      "0Y0A4185_resized (1).jpg",
      "0Y0A4194_resized.jpg",
      "0Y0A4198_resized.jpg",
      "0Y0A4202_resized.jpg",
      "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"
    ].map((filename, index) => ({
      src: `assets/img/rooms/Apartments%20(rooms%20309,%20408,%20409)/${encodeURIComponent(filename)}`,
      alt: `Апартаменты — фото ${index + 1}`,
      caption: "Апартаменты"
    }))
  }
];

(() => {
  const root = document.querySelector("#room-page");
  if (!root) return;
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
  const equipmentIcons = [
    [/Холодильник|Своя кухня/, "kitchen.svg"],
    [/Фен/, "hair-dryer.svg"],
    [/Гладильные принадлежности/, "ironing-facilities.svg"],
    [/Телевизор/, "tv.svg"],
    [/Чайная станция|Чайник/, "kettle.svg"],
    [/Душевая кабина/, "shower.svg"],
    [/кровати/, "bed.svg"],
    [/Новая мебель/, "new-furniture.svg"],
    [/Кондиционер/, "air-conditioning.svg"],
    [/Ванна/, "bathtub.svg"]
  ];
  const equipmentItem = (item) => {
    const icon = equipmentIcons.find(([pattern]) => pattern.test(item));
    return `<li>${icon ? `<img class="room-equipment-icon" src="assets/icons/${encodeURIComponent(icon[1])}" alt="" aria-hidden="true" width="36" height="36">` : ""}<span>${escapeHtml(item)}</span></li>`;
  };
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
    <section class="room-section"><h2>Оснащение и комфорт</h2><div class="room-equipment-grid"><article><h3>Оснащение номера</h3>${room.equipment ? `<ul class="room-equipment-list" role="list">${room.equipment.map(equipmentItem).join("")}</ul>` : `<p>Подробности об оснащении этой категории номера уточняйте при бронировании.</p>`}${room.equipmentNote ? `<p>${escapeHtml(room.equipmentNote)}</p>` : ""}</article><article><h3>Для вашего отдыха</h3><ul><li>Чайная станция</li><li>Гигиенический набор</li><li>Косметика «Чебер»</li><li>Доставка питания в номер</li><li>Меню сна</li></ul></article></div></section>
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
