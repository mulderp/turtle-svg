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
