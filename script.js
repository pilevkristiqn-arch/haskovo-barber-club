const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuToggle.textContent = mobileMenu.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value.trim();

  if (!name || !phone) {
    formMessage.style.display = "block";
    formMessage.style.color = "#e57373";
    formMessage.textContent = "Моля, попълни име и телефон.";
    return;
  }

  const message =
    `Здравейте, искам да запазя час в Haskovo Barber Club.%0A%0A` +
    `Име: ${encodeURIComponent(name)}%0A` +
    `Телефон: ${encodeURIComponent(phone)}%0A` +
    `Услуга: ${encodeURIComponent(service)}%0A` +
    `Предпочитан ден/час: ${encodeURIComponent(date || "Не е посочен")}`;

  /*
    Замени номера по-долу с реалния WhatsApp номер.
    Формат: код на държавата + номер, без +, интервали и тирета.
    Пример за България: 359888000000
  */
  const whatsappNumber = "359888000000";

  formMessage.style.display = "block";
  formMessage.style.color = "#c9a45c";
  formMessage.textContent = "Заявката е подготвена. Отваряме WhatsApp...";

  setTimeout(() => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  }, 700);
});