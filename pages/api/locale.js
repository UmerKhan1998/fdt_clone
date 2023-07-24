// pages/api/locale.js
export default async function handler(req, res) {
  try {
    const apiKey = "19d1d2c83aaaff"; // Replace with your actual API key
    const apiUrl = `https://ipinfo.io?token=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    const locale = data.country ? data.country : "Unknown";

    console.log("data", locale);

    res.status(200).json({ locale });
  } catch (error) {
    console.error("Error fetching IP information:", error);
    res.status(500).json({ error: "Unable to fetch locale" });
  }
}
