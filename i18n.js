// i18n.js
import NextIntl from "next-intl";

const i18n = new NextIntl({
  locale: "en-AE", // Default locale
  locales: ["en-SA", "ar-SA", "ar-AE", "en-AE"], // List of supported locales
  providers: [], // Additional data providers if needed
});

export default i18n;
