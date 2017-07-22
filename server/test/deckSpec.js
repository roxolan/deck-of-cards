import { expect } from 'chai';
import { Deck } from '../src/deck.js';

describe('Deck', () => {
  it('Should have 52 cards', () => {
    let deck = new Deck()
    expect(deck._cards.length).to.equal(52)
  })

  it('Should not contain duplicates', () => {
    let deck = new Deck()
    let flatValues = deck._cards.map(card => `${card.suit}${card.rank}`) // flatten to strings so we can compare using Set
    expect(deck._cards.length).to.equal(new Set(flatValues).size)
  });
})
