import map from 'lodash/map'
import times from 'lodash/times'

const SUITS = ['Club', 'Diamond', 'Heart', 'Spade']
const RANKS = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']
const RANKS_SHORT = ['A', '2', '3', '4', '5', '6', '6', '8', '9', '10', 'J', 'Q', 'K']
const NUMBER_OF_CARDS = 52



/**
 * Playing card with suite and rank
 * @class Card
 */
export class Card {

  constructor(i) {
    this.index = i
    this.suit = SUITS[i % 4]
    this.rank = RANKS[i % 13]
  }

  toString() {
    return `${this.suit} ${this.rank}`
  }

}


/**
 * Deck of cards
 * @class Deck
 */
export class Deck {

  constructor() {
    this._cards = []
    this._populate()
    this.shuffle()
  }

  _populate() {
    // creates array of indexes from 0 to 51:
    let indexArray = Array.from(Array(NUMBER_OF_CARDS).keys())

    this._cards = map(indexArray, (i) => new Card(i))
  }

  hasCards() {
    return this._cards.length > 0
  }

  get cardsLeft() {
    return this._cards.length;
  }

  shuffle() {
    let n = this._cards.length

    if (n === 0) {
      return false;
    }

    times(n, (i) => {
      let r = Math.floor( Math.random() * n )
      let temp = this._cards[i]
      this._cards[i] = this._cards[r]
      this._cards[r] = temp
    })
    console.log('The deck was shuffled!')
  }

  /**
  - returns one card from the deck to the caller
  - 52 calls to dealOneCard() should result in caller being provided all 52 cards of the deck in random order
  - when caller makes 53rd call to dealOneCard(), no card is dealt
  */
  dealOneCard() {
    console.log('cards: ', this._cards.length)
    return this.hasCards() ? this._cards.pop() : null;
  }

}

// let deck01 = new Deck()
// deck01.shuffle()
// console.log(deck01)
