# notebook

## recently added or prepare to read

- [ ] want to know how to develop a program like Figma, after reading
  [figma developer blog](https://www.figma.com/blog/building-a-professional-design-tool-on-the-web/), it seems Figma is
  writer in C++ and cross-compiled to JavaScript using the [emscripten](https://emscripten.org/) cross-compiler.
  使用浏览器本身的渲染能力，通过编辑html、svg或者2d canvas有许多bottleneck。对于缩放不友好，不能利用GPU加速，对蒙版、模糊、合成模式等支持不同等

    - [ ] 
      Figma是用C++实现的渲染引擎，[skia](https://skia.org/docs/user/modules/canvaskit/)库，同时skia库也提供了WebAssembly接口，可以尝试也去模仿实现一个。

## questions

### react

- [ ] 为什么react的回调ref写内联函数更新时会调用两次，而写成类方法则不会。
- [ ] 为什么最推荐`createRef()`