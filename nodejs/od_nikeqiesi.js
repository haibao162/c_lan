const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 尼克彻斯定理
void async function () {
    // Write your code here
    while (line = await readline()) {
        // evalExpression(line);
        Nike(line);
    }
}()

function Nike(m) {
    let total = m * m * m;
    for(let a1=0;a1<total;a1++) {
        if (m * (a1 + (m - 1)) == total){
            let arr = [];
            for (let j = 0;j<m;j++) {
                arr.push(a1 +j*2);
            }
            console.log(arr.join("+"));
            return;
        } 
    }
}


