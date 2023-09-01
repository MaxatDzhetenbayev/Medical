import i18n from "i18next";

// Настройка i18next (подключение к файлам с переводами и др.)

// Функция для изменения названия сайта
function changeSiteTitle() {
  const siteName = i18n.t("site-name"); // Получаем перевод названия сайта
  const titleElement = document.getElementById("site-title"); // Получаем элемент title
  if (titleElement) {
    titleElement.innerText = siteName; // Устанавливаем новое название сайта
  }
}

// Вызываем функцию для изменения названия сайта при смене языка или при загрузке страницы
i18n.on("languageChanged", () => {
  changeSiteTitle();
});

// Вызываем функцию при загрузке страницы, чтобы установить правильное начальное название сайта
changeSiteTitle();
