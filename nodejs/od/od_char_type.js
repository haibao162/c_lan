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

function fun(str) {
    let space = 0;
    let num = 0;
    let en = 0;
    let other = 0;
    for(let i = 0;i<str.length;i++) {
        if (/\s/.test(str[i])) {
            space++;
        } else if(/[0-9]/.test(str[i])) {
            num++;
        } else if(/[a-zA-Z]/.test(str[i])) {
            en++;
        } else {
            other++;
        }
    }
    console.log(en);
    console.log(space);
    console.log(num);
    console.log(other);
}



