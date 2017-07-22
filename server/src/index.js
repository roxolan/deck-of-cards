import { Deck } from './deck'

const express = require('express')
const path = require('path')

const app = express()
const port = 7000

const deck = new Deck()
deck.shuffle()

app.get('/', (req, res) => {
  res.send(deck)
})

app.get('/deck', (req, res) => {
  return res.send('Some deck display')
})

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
