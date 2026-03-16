require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    name: 'CoinFlow backend',
    status: 'ok',
    message: 'Backend is ready for the demo.'
  });
});

app.get('/api/demo-script', (req, res) => {
  res.json({
    steps: [
      'Upload the sample CSV with 3 transactions.',
      'Show the round-up toggle turned on.',
      'Explain how spare change moves into the rainy day pot.',
      'Show the goal progress bar and metrics.',
      'Click the withdraw mock button to finish the flow.'
    ]
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`CoinFlow backend running on http://localhost:${PORT}`);
});
