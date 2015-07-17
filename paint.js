var jsdom = require("jsdom").jsdom;
var fs = require('fs');
var browserify = require('browserify');
var Stream = require('stream').Writable;

// process input file first
var b = browserify();
fn = process.argv[2];
b.add(fn);

var rs = new Stream();

var bundleFile = 'static/bundle.js';
var ws = fs.createWriteStream(bundleFile);

ws.on('error', function(err) {
  console.log('Bundling problem. Stopping. ');
  console.log(err);
});

ws.on('close', function() {

  var boilerplate = fs.readFileSync('./static/index.html', 'utf-8');
  var js = fs.readFileSync(bundleFile, 'utf-8');

  var document = jsdom.env({
    html: boilerplate,
    src: [js],
    done: function(err, w) {
      var canvas = w.document.getElementById('canvas');
      console.log(canvas.outerHTML);
    }
  });
});

b.bundle().pipe(ws);
