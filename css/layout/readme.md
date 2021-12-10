# readme

all I want to do is that put a `<canvas/>` element into a dynamic re-sizing flex-box container, make `<canvas/>`
always as big as it's parent, but when I get parent's `width` and `height` by using `getBoundingClientRect()` and set it
on <canvas/>, it always makes `<canvas/>` breaking out. I fix it by set `<canvas/>` style with `position:absolute`
