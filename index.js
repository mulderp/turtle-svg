var createElement = require('svg-create-element');

var Turtle = function(options) {
  if (!options) {
    options = {};
  }

  this.stroke = options.stroke ? options.stroke : 'black';
  this.strokeWidth = options.strokeWidth ? options.strokeWidth : '2';
  this.fill = options.fill ? options.fill : 'white';

  this.line = function(x1, y1, x2, y2) {
    var el = createElement('line', {
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      stroke: this.stroke,
      'stroke-width': this.strokeWidth
    });
    return el;
  }

  this.rect = function(x, y, w, h) {
    var el = createElement('rect', {
      x: x,
      y: y,
      width: w,
      height: h,
      stroke: this.stroke,
      'stroke-width': this.strokeWidth,
      fill: this.fill
    });
    return el;
  }
  
  this.circle = function(x, y, r) {
    var el = createElement('circle', {
      cx: x,
      cy: y,
      r: r,
      stroke: this.stroke,
      'stroke-width': this.strokeWidth,
      fill: this.fill
    });
    return el;
  }

  this.text = function(x, y, t) {
    var el = createElement('text', {
      x: x,
      y: y,
      stroke: this.stroke,
      //'stroke-width': this.strokeWidth,
      fill: this.fill
    });
    el.innerHTML = t;
    return el;
  }
}

module.exports = Turtle;
