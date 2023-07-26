import Footer from "@/components/footer/Footer";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

import { useRouter } from "next/router";

import en_SA from "../lang/en-SA.json";
import ar_SA from "../lang/ar-SA.json";
import en_AE from "../lang/en-AE.json";
import ar_AE from "../lang/ar-AE.json";
import { NextIntlProvider } from "next-intl";
import GeoLocationComp from "@/components/GeoLocationComp";

const messages = {
  "en-SA": en_SA,
  "ar-SA": ar_SA,
  "en-AE": en_AE,
  "ar-AE": ar_AE,
};

function getDirection(locale) {
  if (locale?.includes("ar")) {
    return "rtl";
  }

  return "ltr";
}

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <>
      <div lang={locale} dir={locale?.includes("ar") ? "rtl" : "ltr"}>
        <div
          style={{
            fontFamily: locale?.includes("ar") ? "ArbFONTS" : "Acumin-Pro-Book",
          }}
        >
          <NextIntlProvider locale={locale} messages={messages[locale]}>
            <ToastContainer />
            {/* <GeoLocationComp/> */}
            <Component {...pageProps} dir={getDirection(locale)} />
            <Script src="https://embed.tawk.to/64620efbad80445890ed00d7/1h0fgl23e" />
            <Footer />
          </NextIntlProvider>
        </div>
      </div>
    </>
  );
}
