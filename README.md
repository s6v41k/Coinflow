# CoinFlow

CoinFlow is a simple round-up micro-savings demo for low-income users.

## What it does

- Upload card transactions from a CSV file
- Round each purchase up to the next euro
- Add the spare change to a rainy day goal
- Show simple savings metrics
- Simulate a withdraw flow

## Run the project

### Frontend

```powershell
cd frontend
npm.cmd run dev
```

### Backend

```powershell
cd backend
node server.js
```

## Demo flow

1. Load one of the sample files in `frontend/public/`
2. Show the round-up toggle enabled
3. Explain the rainy day pot and progress bar
4. Show the metrics
5. Click the withdraw mock button
