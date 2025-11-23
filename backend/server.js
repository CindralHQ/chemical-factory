// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getSheet, getDriveFiles, getDocWithMeta } from "./google.js";

dotenv.config();

const app = express();
app.use(cors());


// ------------------------------------------------------
// 📌 1. ABOUT US
// ------------------------------------------------------
app.get("/api/about", async (req, res) => {
  try {
    const data = await getDocWithMeta(process.env.ABOUT_DOC_ID);
    res.json({ content: data.html });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load About Us content" });
  }
});


// ------------------------------------------------------
// 📌 2. PRODUCTS (Google Sheet + Auto Drive Link Conversion)
// ------------------------------------------------------
app.get("/api/products", async (req, res) => {
  try {
    const rows = await getSheet(process.env.SHEET_ID);

    const body = rows.slice(1); // skip header row

    const products = body.map((row, index) => ({
      id: index + 1,
      title: row[0] || "",
      casNo: row[1] || "",
      description: row[2] || "",
      image: row[7] || "",         
      tdsLink: row[3] || "",
      msdsLink: row[4] || "",
      category: row[5] || "",
      relatedProducts: row[6] || "",
    }));

    res.json(products);
  } catch (err) {
    console.error("Failed to load products:", err);
    res.status(500).json({ error: "Failed to load products" });
  }
});


// ------------------------------------------------------
// 📌 3. FILES (Drive folder)
// ------------------------------------------------------
app.get("/api/files", async (req, res) => {
  try {
    const files = await getDriveFiles(process.env.FOLDER_ID);
    res.json({ files });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load files" });
  }
});


// ------------------------------------------------------
// 📌 Server
// ------------------------------------------------------
app.listen(5000, () => console.log("Backend running on port 5000"));
