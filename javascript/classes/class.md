# class

## class prototype

1. `user.prototype`指向`User.prototype`，`user`调用自身方法实际调用的是`User.prototype`上的方法。

```javascript
let user = new User()
```

2. class的function在class上供调用，而在class field内定义的变量则在对象上，不在class的prototype上。

```javascript
class User {
    name = "John";
}

let user = new User();
alert(user.name); // John
alert(User.prototype.name); // undefined
```

3. User.prototype.constructor指向User这个class。

## class field

1. 单纯调用某个对象的方法而没有关联上下文的话，this会指向意外的地方。你可以使用箭头函数或者手动bind()。

```javascript
class Button {
    constructor(value) {
        this.value = value;
    }

    click() {
        alert(this.value);
    }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined
```

## Private and protected properties and methods

- Protected fields start with `_`. That’s a well-known convention, not enforced at the language level. Programmers
  should only access a field starting with `_` from its class and classes inheriting from it.(you can use get/set make
  protected fields access under control)
- Private fields start with `#`. JavaScript makes sure we can only access those from inside the class.

