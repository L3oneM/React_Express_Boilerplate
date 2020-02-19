const express = require('express');

const app = express();

const PORT = 3001;

app.get('/api/testData', (req, res) => {
  const test = [{ id: 1, name: 'Tom', last: 'Jack' }];

  res.json(test);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
