import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getSheet, getDriveFiles, getDocWithMeta } from "./google.js";

dotenv.config();

const app = express();
app.use(cors());

// Get About Us page content
app.get("/api/about", async (req, res) => {
  const data = await getDocWithMeta(process.env.ABOUT_DOC_ID);
  res.send({
    content: data.html,
    etag: data.etag
  });
});

// Get Sheet data
app.get("/api/products", async (req, res) => {
  const data = await getSheet(process.env.SHEET_ID);
  res.send({ data });
});

// Get drive images / files from folder
app.get("/api/files", async (req, res) => {
  const files = await getDriveFiles(process.env.FOLDER_ID);
  res.send({ files });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
