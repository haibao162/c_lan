function curry() {
    const args = Array.prototype.slice.call(arguments)
    console.log(args)
    const fn = function () {
        const arguments2 = Array.prototype.slice.call(arguments)
        console.log(arguments2, 'a22')
        args.push(...arguments2)
        return fn
    }
    fn.args = args
    return fn

}

// a = curry(1, 2)
// console.log(a)
a = curry(1, 2)(3)(4,5)
console.log(a)
console.log(a.args)

