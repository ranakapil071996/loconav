require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use('/news', require('./api/news.api'));

app.listen(PORT, () => {
  console.log('Server is up on port: ' + PORT);
});
