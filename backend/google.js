import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n")
  },
  scopes: [
    "https://www.googleapis.com/auth/documents.readonly",
    "https://www.googleapis.com/auth/spreadsheets.readonly",
    "https://www.googleapis.com/auth/drive.readonly"
  ]
});

// -------- FETCH GOOGLE DOC AS HTML ------------
export async function getDocWithMeta(docId) {
  const client = await auth.getClient();
  const docs = google.docs({ version: "v1", auth: client });

  const res = await docs.documents.get({
    documentId: docId,
  });

  let html = "";
  for (const element of res.data.body.content) {
    if (element.paragraph) {
      for (const run of element.paragraph.elements) {
        if (run.textRun) html += `<p>${run.textRun.content}</p>`;
      }
    }
  }

  return {
    html,
    etag: res.headers.etag, // ⭐ ETag here
  };
}


// -------- FETCH GOOGLE SHEET AS JSON ----------
export async function getSheet(sheetId) {
  const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: "Sheet1"
  });

  return res.data.values;
}

// -------- FETCH GOOGLE DRIVE FILES FROM FOLDER ------
export async function getDriveFiles(folderId) {
  const drive = google.drive({ version: "v3", auth: await auth.getClient() });

  const res = await drive.files.list({
    q: `'${folderId}' in parents`,
    fields: "files(id, name, mimeType)"
  });

  // Return public URLs for frontend
  return res.data.files.map((file) => ({
    id: file.id,
    name: file.name,
    mimeType: file.mimeType,
    url: `https://drive.google.com/uc?export=view&id=${file.id}`
  }));
}
