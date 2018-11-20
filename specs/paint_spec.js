const assert = require('assert')
const Paint = require('../paint.js')



describe('Paint', function () {
  let paint;

  beforeEach(function () {
    can1 = new Paint(10);
    can2 = new Paint(0)
  });

  it('should have volume', function () {
    const actual = can1.volume;
    assert.strictEqual(actual, 10);
  });

  it('should check if it is empty', function () {
    const actual = can2.isEmpty();
    assert.strictEqual(actual, "paint can is empty");
  });

  it('should be able to empty', function () {
    can1.emptyPaint(5);
    const actual = can1.volume;
    assert.strictEqual(actual, 5);
  });
});
