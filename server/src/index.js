const express = require('express')
const path = require('path')

const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.send({
    message: 'I am a server route',
  })
})

app.get('/deck', (req, res) => {
  return res.send('Some deck display')
})

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
