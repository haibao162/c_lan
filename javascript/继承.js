// 1 原型继承，子类的显式原型等于父类的实例对象
// function ParentPrototype() {
//     this.name = 'parent'
//     this.arr = ['arr']
// }
// ParentPrototype.prototype.say = function () {
//     return this.name
// }

// function ChildPrototype() {
//     this.age = 30
//     this.name = 'child'
// }

// ChildPrototype.prototype = new ParentPrototype()

// const child = new ChildPrototype()
// console.log(child.say()) // child
// console.log(child.constructor) // ParentPrototype
// console.log(child.__proto__) // ParentPrototype

// 2 构造函数继承，子类的构造函数中调用父类的构造函数 ，并传入子类的this
// function ParentCall(name) {
//     this.arr = [1, 2]
//     this.name = name
// }

// ParentCall.prototype.say = function () {
//     return this.name
// }

// function ChildCall(name) {
//     this.name = name + '123132' // 子类自己的属性要放在call后面，否则会被覆盖
//     ParentCall.call(this, name)
//     this.age = 30
// }

// const child = new ChildCall('child')
// console.log(child.say) // undefined 未继承prototype上的方法
// console.log(child.arr) //   [1, 2]
// console.log(child.name) // child

// const child2 = new ChildCall('child2')
// child2.arr.push(3)
// console.log(child2.arr) // [1, 2, 3] 每个实例对象都是独立的
// console.log(child.arr) // [1, 2]

// 3 组合继承，构造函数继承 + 原型继承。会调用两次父类的构造函数
// function ParentType (name) {
//     this.arr = [1, 2]
//     this.name = name
// }

// ParentType.prototype.say = function () {
//     return this.name
// }

// function ChildType (name) {
//     ParentType.call(this, name) // 继承属性
// }
// ChildType.prototype = new ParentType() // 继承方法
// ChildType.prototype.constructor = ChildType // 修复constructor指向

// const child = new ChildType('child')
// child.arr.push(3)
// console.log(child.arr) // [1, 2, 3]
// console.log(child.name) // child
// const child2 = new ChildType('child2')
// console.log(child2.arr) // [1, 2]
// console.log(child.constructor)

// ****************
// 组合继承优化，将原型链继承和借用构造函数继承组合在一起
// function parentType(name) {
//     this.attr = [1, 2]
//     this.name = name
// }

// parentType.prototype.getAttr = function () {
//     return this.attr
// }

// function childType(name) {
//     // 定义子类
//     parentType.call(this, name)
// }

// obj = new childType('Nicholas')
// obj.__proto__ = parentType.prototype // 修改隐式原型，可以继承prototype属性
// console.log(obj)
// ****************

// 4 原型式继承
// Object.create()方法
// function object(o) {
//     function F() {} // 先创建一个临时的构造函数
//     F.prototype = o // 将传入的对象作为这个构造函数的原型
//     return new F() // 返回这个临时对象的实例
// }

// let person = {
//     name: 'Nicholas',
//     friends: ['Shelby', 'Court', 'Van']
// }

// let p1 = object(person)
// p1.name = 'Greg'
// p1.friends.push('Rob')

// let p2 = object(person)
// p2.name = 'Linda'
// p2.friends.push('Barbie')

// console.log(person.friends) // "Shelby,Court,Van,Rob,Barbie"
// console.log(person)
// {
//     name: 'Nicholas',
//     friends: [ 'Shelby', 'Court', 'Van', 'Rob', 'Barbie' ]
//  }

// 5 寄生式继承
// function object(o) {
//     function F() {} // 先创建一个临时的构造函数
//     F.prototype = o // 将传入的对象作为这个构造函数的原型
//     return new F() // 返回这个临时对象的实例
// }

// function createPerson(original) {
//     let clone = object(original)
//     clone.getName = function () {
//         return this.name
//     }
//     return clone
// }

// let person = {
//     name: 'Nicholas',
//     friends: ['Shelby', 'Court', 'Van']
// }
// let instance = createPerson(person)
// console.log(instance.getName()) // "Nicholas"

// 6 寄生组合式继承
function parentType(name) {
    this.attr = [1, 2]
    this.name = name
}

parentType.prototype.getAttr = function () {
    return this.attr
}

function childType(name) {
    // 定义子类
    parentType.call(this, name)
}

// x = Object.create创建一个新对象，并指定其原型，x.__proto__等于传入的对象

// parentType.prototype.__proto__ === Object.prototype

let prototype = Object.create(parentType.prototype)
// console.log(prototype)
prototype.constructor = childType // 修改原型对象的构造函数指向子类,否则指向父类
childType.prototype = prototype
let man1 = new childType('man1') // 执行了构造函数
console.log(man1)
man1.attr.push(3)
let man2 = new childType('man2')
console.log(man1.attr, man2.attr) // 没有共享

// 可以子类向父类传参
// 引用类型不共享
// 函数复用
// 父类构造函数只执行一次


// ES6的继承实现方法，实质上是 JavaScript 现有基于原型继承的语法糖，
// 其内部其实也是ES5寄生组合继承的方式，通过call构造函数，在子类中继承父类的属性，通过原型链来继承父类的方法

// ES6的继承实现方法，实质上是 JavaScript 现有基于原型继承的语法糖，其内部其实也是ES5寄生组合继承的方式
// 相比ES5的继承中，子类的__proto__属性指向的对应的构造函数的原型。ES6的Class定义的子类同时有prototype属性和__proto__属性















