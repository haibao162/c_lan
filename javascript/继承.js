// 原型继承，子类的显式原型等于父类的实例对象
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

// 构造函数继承，子类的构造函数中调用父类的构造函数 ，并传入子类的this
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

// 组合继承，构造函数继承 + 原型继承。会调用两次父类的构造函数
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

// 原型式继承
function object(o) {
    function F() {} // 先创建一个临时的构造函数
    F.prototype = o // 将传入的对象作为这个构造函数的原型
    return new F() // 返回这个临时对象的实例
}








