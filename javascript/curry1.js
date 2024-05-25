function add(a, b, c) {
    return a + b + c;
}

function curry() {
    const fn = arguments["0"];
    console.log("arguments", arguments);
    const args = Array.prototype.slice.call(arguments, 1); // 类数组， instanceof Array
    if (args.length === fn.length) { // fn.length 等于形参的参数
        return fn.apply(this, args);
    }
    function _curry() {
        args.push(...arguments);
        if (args.length === fn.length) {
            return fn.apply(this, args);
        } else {
            return _curry;
        }
    }
    return _curry;
}

a = curry(add, 1)(12)(3);
b = curry(add)(1)(2)(3);
c = curry(add,1,2,3);
d = curry(add,1)(2,3);
console.log("a",a);


