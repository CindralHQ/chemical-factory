// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getSheet, getDocWithMeta } from "./google.js";

dotenv.config();

const app = express();
app.use(cors());

// ------------------------------------------------------
// 📌 About Us
// ------------------------------------------------------
app.get("/api/about", async (req, res) => {
  try {
    const data = await getDocWithMeta(process.env.ABOUT_DOC_ID);
    res.json({ content: data.html });
  } catch (err) {
    res.status(500).json({ error: "Failed to load About Us" });
  }
});

// ------------------------------------------------------
// 📌 Products
// ------------------------------------------------------
app.get("/api/products", async (req, res) => {
  try {
    const rows = await getSheet(process.env.SHEET_ID);
    const body = rows.slice(1);

    const products = body.map((row, index) => ({
      id: index + 1,
      title: row[0] || "",
      casNo: row[1] || "",
      description: row[2] || "",
      tdsLink: row[3] || "",
      msdsLink: row[4] || "",
      category: row[5] || "",
      relatedProducts: row[6] || "",
      image: row[7] || "", // NOW TRUE DRIVE API URL
    }));

    res.json(products);
  } catch (err) {
    console.error("Failed to load products:", err);
    res.status(500).json({ error: "Failed to load products" });
  }
});

// ------------------------------------------------------
app.listen(5000, () => console.log("Backend running on port 5000"));
