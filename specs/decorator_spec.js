const assert = require('assert')
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')

describe('Decorator', function () {
  let decorator;
  let can1;
  beforeEach(function () {
    can1 = new Paint(10);
    decorator = new Decorator() ;
  });

  it('should have stock', function () {
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a can of paint to paint stock', function () {
    decorator.addPaint(can1);
    const actual = decorator.stock.length;
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to calculate the total paint in stock', function () {
    decorator.addPaint(can1);
    const actual = decorator.paintVolume();
    assert.deepStrictEqual(actual, 10);
  });
});
