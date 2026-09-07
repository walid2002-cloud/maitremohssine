# Google Sheets — envoi automatique des leads

## Flux

```
Formulaire (React)
  → submitLead() — POST form-urlencoded
  → Google Apps Script /exec
  → Google Sheet (appendRow)
  → { "ok": true }
```

**Aucun POST vers `docs.google.com/spreadsheets`.**

## Configuration

Variable (Next.js, côté client) :

```bash
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbwqzuZdTWMy8K0_VBJAbFPtT_Xp7uVlI5-XWL1RJqPgVjrENGcCMszjBD58GnON4W76fQ/exec
```

Fichier central : `src/config/googleScript.ts`  
Fonction partagée : `submitLead()` dans `src/lib/leads.ts`

## Google Sheet

- **ID** : `1OldWnzvjJDflRoxLV3g1B0S6m4jM7QLbk9ff7jBH2LA`
- **Colonnes** : Date | Heure | Nom | Prénom | Numéro WhatsApp | Filière / Niveau | Ville | Page | Source

## Déploiement Apps Script

1. Ouvrir le [Google Sheet](https://docs.google.com/spreadsheets/d/1OldWnzvjJDflRoxLV3g1B0S6m4jM7QLbk9ff7jBH2LA/edit)
2. **Extensions → Apps Script**
3. Coller `scripts/google-apps-script.js` → **Enregistrer**
4. **Déployer → Nouveau déploiement → Application Web**
5. Exécuter en tant que : **Moi**
6. Qui a accès : **Tous** (Anyone) ← **obligatoire**
7. **Déployer** → **Autoriser** Google
8. Copier l’URL `/exec`

## Test curl

```bash
chmod +x scripts/test-leads.sh
./scripts/test-leads.sh
```

Réponse attendue :

```json
{"ok":true}
```

HTTP **200**. Si HTTP **401** ou page HTML « Page introuvable » → redéployer avec accès **Tous**.

## Champs POST

| Champ | Obligatoire |
|-------|-------------|
| nom | oui |
| prenom | oui |
| telephone | oui |
| filiere | oui |
| ville | oui |
| page | auto (`window.location.pathname`) |
| source | auto (`direct` ou UTM/referrer) |

## Vercel

Settings → Environment Variables → `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` → Redeploy

## Erreurs

| Symptôme | Cause |
|----------|-------|
| HTTP 401 + HTML | Web App non déployée en « Tous » ou mauvaise URL |
| CORS navigateur | Redéployer en « Anyone », pas « Only myself » |
| `missing_fields` | Champ vide côté formulaire |
| Faux succès | Impossible — le site vérifie `{ ok: true }` dans la réponse |
