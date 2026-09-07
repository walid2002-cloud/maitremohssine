/** URL /exec du déploiement Google Apps Script (publique). */
const DEFAULT_GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwqzuZdTWMy8K0_VBJAbFPtT_Xp7uVlI5-XWL1RJqPgVjrENGcCMszjBD58GnON4W76fQ/exec";

export function getGoogleScriptUrl(): string {
  return (
    process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
    process.env.NEXT_PUBLIC_VITE_GOOGLE_SCRIPT_URL ||
    DEFAULT_GOOGLE_SCRIPT_URL
  ).trim();
}
