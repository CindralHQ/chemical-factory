import { getDocWithMeta } from "./google.js";

export default async function handler(req, res) {
  try {
    const data = await getDocWithMeta(process.env.ABOUT_DOC_ID);
    res.status(200).json({ content: data.html });
  } catch (err) {
    res.status(500).json({ error: "Failed to load About Us" });
  }
}
