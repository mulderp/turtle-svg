(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var T = require('..');
var createElement = require('svg-create-element');

// Draw gray box
var d = 70;
var p1 = d;
var p2 = p1+d;
var p3 = p2+d;
var p4 = p3+d;
var r = 2;

var t = new T({stroke: '#331ff2', fill: '#7f7f7f'});

var drawLines = function() {
  var g = createElement('g');
  g.appendChild(t.line(p3, p3, p2, p3));
  g.appendChild(t.line(p2, p3, p2, p2));
  g.appendChild(t.line(p2, p2, p3, p2));
  return g;
}

var drawBox = function() {
  var g = createElement('g');
  g.appendChild(t.rect(p1, p2, p1, p1));
  return g;
}

var drawPoints = function() {
  var g = createElement('g');

  g.appendChild(t.circle(p1, p1, r));
  g.appendChild(t.circle(p1, p3, r)); 
  g.appendChild(t.circle(p2, p4, r));
  g.appendChild(t.circle(p3, p1, r)); 
  g.appendChild(t.circle(p4, p2, r));
  g.appendChild(t.circle(p4, p4, r));
  return g;
}

var drawHello = function() {

  var g = createElement('g');

  g.appendChild(t.text(p3, p2, 'hello'));
  return g;

}


var svg = document.getElementById('canvas'); 

svg.appendChild(drawLines());
svg.appendChild(drawBox());
svg.appendChild(drawPoints());
svg.appendChild(drawHello());

},{"..":2,"svg-create-element":3}],2:[function(require,module,exports){
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

},{"svg-create-element":3}],3:[function(require,module,exports){
var has = require('has');

module.exports = function (name, attr) {
    var elem = document.createElementNS('http://www.w3.org/2000/svg', name);
    if (!attr) return elem;
    for (var key in attr) {
        if (!has(attr, key)) continue;
        var nkey = key.replace(/([a-z])([A-Z])/g, function (_, a, b) {
            return a + '-' + b.toLowerCase();
        });
        elem.setAttribute(nkey, attr[key]);
    }
    return elem;
}

},{"has":4}],4:[function(require,module,exports){
var hasOwn = Object.prototype.hasOwnProperty;


module.exports = function has(obj, property) {
  return hasOwn.call(obj, property);
};

},{}]},{},[1]);
