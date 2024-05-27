const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 尼克彻斯定理
void async function () {
    // Write your code here
    while (line = await readline()) {
        // evalExpression(line);
        Add(line);
    }
}()

function Add(m) {
    let length = Number(m);
    let sum = 0;
    for(let a1=0;a1<length;a1++) {
        let an = 2 + a1 * 3;
        sum += an;
    }
    console.log(sum);
}


