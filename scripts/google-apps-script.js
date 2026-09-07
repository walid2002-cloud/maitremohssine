/**
 * Google Apps Script — coller ce fichier dans Extensions > Apps Script du Sheet :
 * https://docs.google.com/spreadsheets/d/1OldWnzvjJDflRoxLV3g1B0S6m4jM7QLbk9ff7jBH2LA/edit
 *
 * Étapes :
 * 1. Ouvrir le Google Sheet
 * 2. Extensions → Apps Script
 * 3. Coller ce code, Enregistrer
 * 4. Déployer → Nouveau déploiement → Type : Application Web
 * 5. Exécuter en tant que : Moi
 * 6. Qui a accès : Tous (Anyone) — nécessaire pour que le serveur du site puisse POST
 * 7. Copier l’URL du déploiement
 * 8. Dans le projet, créer `.env.local` :
 *    GOOGLE_SHEETS_WEBAPP_URL="https://script.google.com/macros/s/XXXX/exec"
 * 9. Redéployer le site (Vercel : ajouter la même variable d’environnement)
 *
 * Colonnes attendues (ligne 1) :
 * Date | Heure | Nom | Prénom | Numéro WhatsApp | Filière / Niveau | Ville | Source | Page | Motivation
 */

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json_({ ok: false, error: "empty_body" });
    }

    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];

    ensureHeader_(sheet);

    var now = new Date();
    var tz = Session.getScriptTimeZone() || "Africa/Casablanca";
    var dateStr = Utilities.formatDate(now, tz, "dd/MM/yyyy");
    var timeStr = Utilities.formatDate(now, tz, "HH:mm:ss");

    sheet.appendRow([
      dateStr,
      timeStr,
      str_(data.nom),
      str_(data.prenom),
      str_(data.whatsapp),
      str_(data.filiere),
      str_(data.ville),
      str_(data.source) || "Site direct",
      str_(data.page),
      str_(data.motivation),
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, message: "Maître Mohssine leads endpoint" });
}

function str_(value) {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function ensureHeader_(sheet) {
  var header = [
    "Date",
    "Heure",
    "Nom",
    "Prénom",
    "Numéro WhatsApp",
    "Filière / Niveau",
    "Ville",
    "Source",
    "Page",
    "Motivation",
  ];
  var first = sheet.getRange(1, 1, 1, header.length).getValues()[0];
  if (!first[0]) {
    sheet.getRange(1, 1, 1, header.length).setValues([header]);
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
