import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: "ru",
    //  resources: {
    //    kz: {
    //      cancer: "Рак",
    //      contacttitle: "контакттер",
    //      callcenter: "контакттер",
    //      patienthelpersphone: "контакттер",
    //      location: "контакттер",
    //    },
    //    ru: {
    //      cancer: "Раки",
    //      contacttitle: "контакттер",
    //      callcenter: "контакттер",
    //      patienthelpersphone: "контакттер",
    //      location: "контакттер",
    //    },
    //  },
    detection: {
      order: ["queryString", "cookie"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
