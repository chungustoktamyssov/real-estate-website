// server.js
require('dotenv').config();

const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/api/listings', (req, res) => {
  // Later, you'll fetch real data here
  res.json([
    { id: 1, address: "123 Main St", price: "$500,000" },
    { id: 2, address: "456 Oak Ave", price: "$650,000" }
  ]);
});

async function getAccessToken() {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', process.env.CLIENT_ID);
  params.append('client_secret', process.env.CLIENT_SECRET);
  params.append('scope', 'DDFApi_Read');

  const response = await axios.post(
    'https://identity.crea.ca/connect/token',
    params,
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  );
  return response.data.access_token;
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

});