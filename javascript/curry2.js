function add(a, b, c) {
    return a + b + c;
}

function curry() {
    const args = Array.prototype.slice.call(arguments, 0); // 类数组， instanceof Array

    const _curry = function() {
        args.push(...arguments);
        return _curry;
    }
    _curry.args = args;
    return _curry;
}


a = curry(1)(12)(3);
console.log("a",a.args);


