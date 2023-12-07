import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from './en.json';
import uaJSON from './ua.json';


const resources = {
  en: {
    translation: { ...enJSON }
  },
  ua: {
    translation: { ...uaJSON }
  }
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: "ua",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;