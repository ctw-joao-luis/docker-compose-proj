require('./database');
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/user', (req, res) => {
  res.send('Got a POST request')
})

app.get('/user', (req, res) => {
  res.send('Got a GET request')
})

app.get('/user/:id', (req, res) => {
  res.send('Got a ID GET request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
