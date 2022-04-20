/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  const person = new Person(numBottles, numExchange);
  while (person.stillCanExchange()) {
    person.drink();
  }
  person.drink();
  return person.drunkBottles
};

class Person {
  _fullBottles = 0;
  _emptyBottles = 0;
  _exchange;
  drunkBottles = 0;

  constructor(initialBottles, numExchange) {
    this._fullBottles = initialBottles;
    this._exchange = numExchange;
  }

  drink() {
    this.drunkBottles += this._fullBottles;
    this._emptyBottles += this._fullBottles;
    this._fullBottles = 0;
    this.exchange();
  }

  exchange() {
    if ((this._emptyBottles / this._exchange) >= 1) {
      const canExchangeBottles = Math.trunc(this._emptyBottles / this._exchange)
      this._fullBottles += canExchangeBottles;
      this._emptyBottles -= canExchangeBottles * this._exchange;
    }
  }

  stillCanExchange() {
    return (this._emptyBottles + this._fullBottles) >= this._exchange
  }
}

export {
  numWaterBottles
}
