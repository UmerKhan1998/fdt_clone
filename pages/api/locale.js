// pages/api/locale.js
export default async function handler(req, res) {
  try {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    // const apiKey = "19d1d2c83aaaff"; // Replace with your actual API key
    // const apiUrl = `https://ipinfo.io?token=${apiKey}`;

    const apiUrl = `http://ip-api.com/json/${ip}`;
    // const apiUrl = `http://ip-api.com/json/87.251.20.34`;

    // const apiKey = "63a5cf7cc1508bb48771be6b5b926b34"; // Replace with your actual API key
    // const apiUrl = `http://api.ipstack.com/87.251.20.34?access_key=${apiKey}`;
    // // const apiUrl = `http://api.ipstack.com/${ip}?access_key=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log("data", data);

    const locale = data.countryCode ? data.countryCode : "Unknown";

    res.status(200).json({ locale });
  } catch (error) {
    console.error("Error fetching IP information:", error);
    res.status(500).json({ error: "Unable to fetch locale" });
  }
}
