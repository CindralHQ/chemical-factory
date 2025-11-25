import { getDocWithMeta } from "./google.js";

export default async function handler(req, res) {
  // ---- CORS FIX ----
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  // ------------------

  try {
    const data = await getDocWithMeta(process.env.ABOUT_DOC_ID);
    res.status(200).json({ content: data.html });
  } catch (err) {
    res.status(500).json({ error: "Failed to load About Us" });
  }
}
