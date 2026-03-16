# Backend

Minimalny backend proxy dla portfolio. Ukrywa klucz API po stronie serwera i wysyla go do upstream jako `X-API-KEY`.

## Wymagane zmienne `.env`

```env
PORT=3001
PORTFOLIOAPI_KEY=your_secret_key
PORTFOLIOAPI_URL=https://api.portfolioapi.wiktormalyska.ovh
API_USERNAME=wiktormalyska
```

Backend wspiera tez `API_BASE_URL` jako alternatywe dla `PORTFOLIOAPI_URL`.

## Endpointy

- `GET /health`
- `GET /api/projects`
- `GET /api/projects/:username`

## Uruchomienie

```powershell
npm install
npm run dev
```

## Szybki test

```powershell
Invoke-WebRequest http://localhost:3001/health | Select-Object -ExpandProperty Content
Invoke-WebRequest http://localhost:3001/api/projects | Select-Object -ExpandProperty Content
```

