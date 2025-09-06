
# ATL Gestionale – DEMO (deploy ready)

Questa è una **versione demo** del gestionale ATL per il deploy immediato su **Vercel**.
Non richiede database (usa **localStorage**, solo per provare i flussi).

## Deploy rapido
1) Carica questi file nel tuo repository GitHub
2) Su Vercel → New Project → seleziona repo → Deploy

## Sviluppo locale
npm i
npm run dev

## Note
- Il logo ufficiale ATL è in `public/logo-atl.pdf` e viene mostrato nel layout tramite <object>.
- Il calcolo scadenze rispetta: Mensile (+1 mese stesso giorno, clamp fine mese), Quadrimestre (+4 mesi), Annuale (30/07).
