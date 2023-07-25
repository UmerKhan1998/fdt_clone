// pages/index.js
import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

function GeoLocationComp() {
  const [locale1, setLocale1] = useState("Loading...");
  const [ip, setIp] = useState("");

  console.log("locale1", locale1);

  const { locale } = useRouter();
  const router = useRouter();
  const Arabic = locale?.includes("ar");

  useEffect(() => {
    // Fetch the locale from the API endpoint
    // fetch("/api/locale")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setLocale1(data.locale);
    //     if (data.locale === "SA") {
    //       router.push(`/${Arabic ? "ar" : "en"}-SA`);
    //     } else {
    //       router.push(`/${Arabic ? "ar" : "en"}-AE`);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching locale:", error);
    //   });

    // console.log("dataIp", ip);
    fetch(
      // `http://api.ipstack.com/${ip}?access_key=63a5cf7cc1508bb48771be6b5b926b34` //Saudia Arabia
      `http://ip-api.com/json/${ip && ip}`
      // `http://api.ipstack.com/87.251.20.34?access_key=63a5cf7cc1508bb48771be6b5b926b34` //Netherlands
      // `http://api.ipstack.com/5.253.206.122?access_key=63a5cf7cc1508bb48771be6b5b926b34` //Poland
      // `http://api.ipstack.com/5.253.206.122?access_key=63a5cf7cc1508bb48771be6b5b926b34` //Saudia Arabia
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("data", data);
        // setLocale1(data?.country_code);
        setLocale1(data?.countryCode); //ip-api
        if (data?.countryCode === "SA") {
          router.push(`/${Arabic ? "ar" : "en"}-SA`);
        } else {
          router.push(`/${Arabic ? "ar" : "en"}-AE`);
        }
      })
      .catch((error) => {
        console.error("Error fetching locale:", error);
      });

    // console.log("locale", locale1);

    fetch("/api/ip")
      .then((response) => response.json())
      .then((data) => setIp(data.ip));
  }, []);

  return (
    <div>
      <h1>Locale from PC IP:</h1>
      <p>{locale1}</p>
      <p>Your IP address: {ip}</p>
    </div>
  );
}

export default GeoLocationComp;
