import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-fs-backend";

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    initImmediate: false,
    fallbackLng: "en",
    lng: "en",
    // preload: readdirSync(join(__dirname, '../locales')).filter((fileName) => {
    //   const joinedPath = join(join(__dirname, '../locales'), fileName);
    //   const isDirectory = lstatSync(joinedPath).isDirectory();
    //   return isDirectory;
    // }),
    preload: ["en"],
    ns: ["translation"],
    defaultNS: "translation",
    backend: {
      loadPath:
        process.env.NODE_ENV !== "production"
          ? `locales/{{lng}}/{{ns}}.json`
          : ` app/locales/{{lng}}/{{ns}}.json`,
    },
    react: {
      useSuspense: false, // https://stackoverflow.com/questions/59464880/how-to-fix-no-fallback-ui-was-specified-in-react-i18next-using-hooks
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
