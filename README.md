# Turtle-SVG

Turtle is one of the first programs that come to mind for learning digital drawing. But we live in a web era. And there is SVG.

With SVG, browsers can easily render vector graphics. This can be useful if you want to make drawings of hardware, data structures, fashion or plain art.

This small library provides a number of basic shapes. You can render these in the browser or as an SVG document. In the latter case, you can import the file into a vector drawing program. Then, fire up Inkscape and tune your drawing as needed.

# how to use

    $ node paint <file>

This will call [browserify](https://github.com/substack/node-browserify) and jsdom behind the scenes and finally results into an SVG file.

# credits

This library is based on [a talk](https://github.com/substack/oneshot-oslo-2015-svg) by [@substack](https://twitter.com/substack) and his svg libraries (esp. [svg-create-element](https://github.com/substack/svg-create-element), maybe I will be using [load-svg](https://github.com/substack/load-svg) later too).

To generate the actual SVG file, [jsdom](https://github.com/tmpvar/jsdom) by [@tmpvar](https://github.com/tmpvar) is used.

Some drawing examples come from the [Processing](https://processing.org/reference/) library. For now, only the box example has been freely interprated.

# examples

    $ git clone git@github.com:mulderp/turtle-svg.git 
    $ npm install
    $ node examples/box.js

You now can load the resulting SVG with a browser from `static/index.html`, or, you can open the resulting SVG in e.g. Inkscape.

# license

MIT
