const Paint = function (volume) {
  this.volume = volume;
};

Paint.prototype.isEmpty = function () {
  if (this.volume === 0)
  return "paint can is empty"
};

Paint.prototype.emptyPaint = function(volUsed) {
  paintLeft = this.volume -= volUsed;
  return paintLeft;
};

module.exports = Paint;
