// google.js
import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n")
  },
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets.readonly",
    "https://www.googleapis.com/auth/documents.readonly",
    "https://www.googleapis.com/auth/drive.readonly"
  ]
});


// ------------------------------------------------------
// 🔵 Convert Google Drive Share Links → Direct Image URL
// ------------------------------------------------------
function convertDriveLink(url) {
  if (!url) return "";

  // Match share links like:
  // https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  const match = url.match(/\/d\/(.*?)\//);

  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }

  return url; // already clean
}


// ------------------------------------------------------
// 🔵 GET GOOGLE DOC AS HTML
// ------------------------------------------------------
export async function getDocWithMeta(docId) {
  const client = await auth.getClient();
  const docs = google.docs({ version: "v1", auth: client });

  const res = await docs.documents.get({ documentId: docId });

  let html = "";
  for (const block of res.data.body.content || []) {
    if (!block.paragraph) continue;

    for (const el of block.paragraph.elements || []) {
      if (el.textRun?.content) {
        html += `<p>${el.textRun.content}</p>`;
      }
    }
  }

  return { html };
}


// ------------------------------------------------------
// 🔵 GET GOOGLE SHEET (Auto-convert Drive links)
// ------------------------------------------------------
export async function getSheet(sheetId) {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: "Sheet1!A1:Z1000"
  });

  let rows = res.data.values || [];

  // Convert every cell in sheet
  rows = rows.map(row =>
    row.map(col => convertDriveLink(col))
  );

  return rows;
}


// ------------------------------------------------------
// 🔵 GET FILES FROM DRIVE FOLDER
// ------------------------------------------------------
export async function getDriveFiles(folderId) {
  const drive = google.drive({ version: "v3", auth: await auth.getClient() });

  const res = await drive.files.list({
    q: `'${folderId}' in parents`,
    fields: "files(id, name, mimeType)"
  });

  return res.data.files.map(file => ({
    id: file.id,
    name: file.name,
    mimeType: file.mimeType,
    url: `https://drive.google.com/uc?export=view&id=${file.id}`
  }));
}
