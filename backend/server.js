require('./database');
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);

app.get('/user', (req, res) => {
  res.send('Got a GET request');
});

app.get('/user/:id', (req, res) => {
  res.send('Got a ID GET request');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
