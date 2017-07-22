import { expect } from 'chai'
import map from 'lodash/map'
import { Deck } from '../src/deck.js'

describe('Deck', () => {
  it('Should have 52 cards', () => {
    let deck = new Deck()
    expect(deck._cards.length).to.equal(52)
  })

  it('Should not contain duplicates', () => {
    let deck = new Deck()
    let flatValues = deck._cards.map(card => `${card.suit}${card.rank}`) // flatten to strings so we can compare using Set
    expect(deck._cards.length).to.equal(new Set(flatValues).size)
  })
})

describe('shuffle', () => {
  it('Should return false if deck is empty', () => {
    let deck = new Deck()

    while(!!deck._cards.length) {
      deck.dealOneCard()
    }

    expect(deck.shuffle()).to.be.false
  })
})

describe('dealOneCard', () => {
  it('Should return a card object with index, suit, and rank properties', () => {
    let deck = new Deck()
    let card = deck.dealOneCard()
    expect(card.hasOwnProperty('index') && card.hasOwnProperty('suit') && card.hasOwnProperty('rank')).to.be.true
  })

  it('Should remove dealt card from the deck', () => {
    let deck = new Deck()
    let card = deck.dealOneCard()
    let remainingCardIndexes = map(deck._cards, card => card.index)
    expect(remainingCardIndexes.indexOf(card.index)).to.equal(-1)
  })

  it('Should return null if no cards are left in the deck', () => {
    let deck = new Deck()

    while(!!deck._cards.length) {
      deck.dealOneCard()
    }

    expect(deck.dealOneCard()).to.equal(null)
  })
})
