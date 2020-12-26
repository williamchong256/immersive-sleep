const express = require('express');

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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
