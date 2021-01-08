const express = require('express');
const fs = require('fs');

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

app.get('/data', (req, res) => {
  fs.readFile(`${__dirname}/sampleData.json`, (err, data) => {
    if (err) throw err;
    const json = JSON.parse(data);
    res.json(json);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
