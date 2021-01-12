const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();

const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ text: 'Backend Testing' });
});

app.post('/counter', (req, res) => {
  let count = req.body.value;
  count += 1;
  res.json({ value: count });
});

app.post('/spotify/token', (req, res) => {
  const { code } = req.body;
  const details = {
    code,
    grant_type: 'authorization_code',
    redirect_uri: 'exp://127.0.0.1:19000',
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  };
  let formBody = [];
  for (const property in details) {
    if (Object.prototype.hasOwnProperty.call(details, property)) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(`${encodedKey}=${encodedValue}`);
    }
  }
  formBody = formBody.join('&');
  fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formBody,
  }).then((response) => response.json())
    .then((json) => res.json(json))
    .catch((err) => console.log(err));
});

app.post('/spotify/refresh_token', (req, res) => {
  // eslint-disable-next-line camelcase
  const { refresh_token } = req.body;
  const details = {
    grant_type: 'refresh_token',
    refresh_token,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  };
  let formBody = [];
  for (const property in details) {
    if (Object.prototype.hasOwnProperty.call(details, property)) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(`${encodedKey}=${encodedValue}`);
    }
  }
  formBody = formBody.join('&');
  fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formBody,
  }).then((response) => response.json())
    .then((json) => res.json(json))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
