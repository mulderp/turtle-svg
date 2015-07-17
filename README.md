# Turtoise

With SVG, browsers can easily render vector graphics.

This can be useful if you want to make drawings of hardware, data structures, fashion or plain art.

This small library provides a number of basic shapes. You can render these in the browser or as an SVG document. In the latter case, you can import the file into a vector drawing program. Then, fire up Inkscape and tune your drawing as needed.

# how to use

    $ node paint <file>

This will call browserify and jsdom behind the scenes and finally results into an SVG file.

# credits

This library is based on some talk from [@substack]() and his svg libraries.

Another nice library is jsdom by Dominic Tarr.

Some examples come from the Processing library.

# license

MIT
