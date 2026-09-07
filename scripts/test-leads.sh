#!/usr/bin/env bash
# Teste l'endpoint Google Apps Script /exec (même flux que le navigateur : POST → redirect → GET)
set -euo pipefail

URL="${1:-${NEXT_PUBLIC_GOOGLE_SCRIPT_URL:-https://script.google.com/macros/s/AKfycbwqzuZdTWMy8K0_VBJAbFPtT_Xp7uVlI5-XWL1RJqPgVjrENGcCMszjBD58GnON4W76fQ/exec}}"

gas_post() {
  local label="$1"
  shift
  echo "==> POST — $label"
  local headers
  headers=$(curl -sS -D - -o /dev/null -X POST "$URL" \
    -H "Content-Type: application/x-www-form-urlencoded;charset=UTF-8" \
    "$@")
  local location
  location=$(echo "$headers" | rg -i '^location:' | awk '{print $2}' | tr -d '\r')
  if [[ -z "$location" ]]; then
    echo "KO — pas de redirect Location après POST"
    echo "$headers"
    return 1
  fi
  local body http
  body=$(curl -sS -w "\nHTTP:%{http_code}" "$location")
  http=$(echo "$body" | tail -1)
  body=$(echo "$body" | sed '$d')
  echo "$body"
  echo "$http"
  if echo "$body" | rg -q '"ok":\s*true|"success":\s*true'; then
    echo "OK"
  else
    echo "KO — réponse inattendue"
    return 1
  fi
  echo ""
}

gas_post "Test / Cursor" \
  --data-urlencode "nom=Test" \
  --data-urlencode "prenom=Cursor" \
  --data-urlencode "telephone=0600000000" \
  --data-urlencode "filiere=1 Bac" \
  --data-urlencode "ville=Casablanca" \
  --data-urlencode "page=/test" \
  --data-urlencode "source=cursor-test"

gas_post "Boudarra / Walid (cas réel)" \
  --data-urlencode "nom=Boudarra" \
  --data-urlencode "prenom=Walid" \
  --data-urlencode "telephone=0652555216" \
  --data-urlencode "filiere=Bac Eco" \
  --data-urlencode "ville=Mohammedia" \
  --data-urlencode "page=/" \
  --data-urlencode "source=direct"
