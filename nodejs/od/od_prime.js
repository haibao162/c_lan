const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 给定一个偶数，查找两个素数，两个素数满足它们的和等于偶数，差又是最小的。
void async function () {
    // Write your code here
    while (line = await readline()) {
        // evalExpression(line);
        fun(line);
    }
}()

function fun(odd) {
    let num = Number(odd);
    let a1, a2;
    for(let i = Math.floor(num/2);i<num;i++) {
        let remain = num - i;
        if (isPrime(i) && isPrime(num - i)) {
            console.log(num - i);
            console.log(i);
            break;
        }
    }
}

function isPrime(num) {
    for(let i =2;i<num/2;i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}



