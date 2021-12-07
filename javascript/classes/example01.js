class Base {
  name = "chili"

  constructor() {
    this.printName()
    this.render()
  }

  printName() {
    console.log(this.name)
  }

  render() {
    this.renderSelf()
    this.renderChildren()
  }

  renderSelf() {
    console.log('base: render self')
  }

  renderChildren() {
    console.log('base: render children')
  }
}

class Over extends Base {
  name = 'slice'

  constructor() {
    super();
  }

  // render() {
  //   console.log('over will not call father class function')
  // }

  renderSelf() {
    console.log('over: render self')
  }
}

let over = new Over();
