# Intégration Google Sheet — leads Maître Mohssine

Sheet : [ouvrir le fichier](https://docs.google.com/spreadsheets/d/1OldWnzvjJDflRoxLV3g1B0S6m4jM7QLbk9ff7jBH2LA/edit?usp=sharing)

Le site n’écrit **jamais** directement dans Google Sheets.  
Flux : formulaire → `/api/leads` → Google Apps Script Web App → Sheet.

## Colonnes (ligne 1)

Date | Heure | Nom | Prénom | Numéro WhatsApp | Filière / Niveau | Ville | Source | Page | Motivation

## Déploiement Apps Script

1. Ouvrir le Google Sheet.
2. **Extensions → Apps Script**.
3. Coller le code de `scripts/google-apps-script.js`.
4. Enregistrer le projet.
5. **Déployer → Nouveau déploiement**.
6. Type : **Application Web**.
7. Exécuter en tant que : **Moi**.
8. Qui a accès : **Tous** (Anyone) — le serveur Next.js doit pouvoir POST.
9. Copier l’URL (`https://script.google.com/macros/s/.../exec`).
10. Dans `.env.local` (et Vercel) :
    `GOOGLE_SHEETS_WEBAPP_URL="https://script.google.com/macros/s/XXXX/exec"`
11. Relancer / redéployer le site.

Après une modification du script : **Déployer → Gérer les déploiements → Modifier → Nouvelle version**.
