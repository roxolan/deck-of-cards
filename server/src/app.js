import { Deck, NUMBER_OF_CARDS } from './deck'
import times from 'lodash/times'

(() => {
  let deck = new Deck()
  deck.shuffle()
  // console.log(deck)
  times(NUMBER_OF_CARDS, () => {
    deck.dealOneCard()
    console.log('number of cards: ', deck.cardsLeft)
  })
})()
