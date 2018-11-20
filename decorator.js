const Decorator = function () {
  this.stock = [];
};

Decorator.prototype.addPaint = function (can) {
  this.stock.push(can)
};

Decorator.prototype.paintVolume = function () {
  let totalVol = 0;
  for (const can of this.stock){
    totalVol += can.volume;
  };
  return totalVol;
};

module.exports = Decorator;
