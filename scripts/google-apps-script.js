/**
 * Google Apps Script — Maître Mohssine leads
 *
 * Sheet ID : 1OldWnzvjJDflRoxLV3g1B0S6m4jM7QLbk9ff7jBH2LA
 * Déploiement : docs/GOOGLE_SHEETS_SETUP.md
 *
 * Colonnes :
 * Date | Heure | Nom | Prénom | Numéro WhatsApp | Filière / Niveau | Ville | Page | Source
 */

var SPREADSHEET_ID = "1OldWnzvjJDflRoxLV3g1B0S6m4jM7QLbk9ff7jBH2LA";

var HEADERS = [
  "Date",
  "Heure",
  "Nom",
  "Prénom",
  "Numéro WhatsApp",
  "Filière / Niveau",
  "Ville",
  "Page",
  "Source",
];

function doPost(e) {
  try {
    var data = parseBody_(e);
    if (!data) {
      return json_({ ok: false, error: "empty_body" });
    }

    var nom = str_(data.nom);
    var prenom = str_(data.prenom);
    var telephone = str_(data.telephone) || str_(data.whatsapp);
    var filiere = str_(data.filiere);
    var ville = str_(data.ville);

    if (!nom || !prenom || !telephone || !filiere || !ville) {
      return json_({ ok: false, error: "missing_fields" });
    }

    var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0];
    ensureHeader_(sheet);

    var now = new Date();
    var tz = Session.getScriptTimeZone() || "Africa/Casablanca";
    var dateStr = Utilities.formatDate(now, tz, "dd/MM/yyyy");
    var timeStr = Utilities.formatDate(now, tz, "HH:mm:ss");

    sheet.appendRow([
      dateStr,
      timeStr,
      nom,
      prenom,
      telephone,
      filiere,
      ville,
      str_(data.page) || "/",
      str_(data.source) || "direct",
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({
    ok: true,
    message: "Maître Mohssine leads endpoint",
    spreadsheetId: SPREADSHEET_ID,
  });
}

function parseBody_(e) {
  if (!e) return null;

  if (e.postData && e.postData.contents) {
    var type = (e.postData.type || "").toLowerCase();
    if (type.indexOf("application/json") !== -1) {
      return JSON.parse(e.postData.contents);
    }
    if (type.indexOf("application/x-www-form-urlencoded") !== -1) {
      return parseQuery_(e.postData.contents);
    }
  }

  if (e.parameter && Object.keys(e.parameter).length > 0) {
    return e.parameter;
  }

  return null;
}

function parseQuery_(raw) {
  var out = {};
  raw.split("&").forEach(function (pair) {
    var idx = pair.indexOf("=");
    if (idx === -1) return;
    var key = decodeURIComponent(pair.slice(0, idx).replace(/\+/g, " "));
    var val = decodeURIComponent(pair.slice(idx + 1).replace(/\+/g, " "));
    out[key] = val;
  });
  return out;
}

function str_(value) {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function ensureHeader_(sheet) {
  var first = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  if (!first[0]) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
