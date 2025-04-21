const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// n个数选择k个最小的数
let n = -1,k;
void async function () {
    // Write your code here
    while (line = await readline()) {
        // evalExpression(line);
        if(n == -1) {
            n = line.split(" ")[0];
            k = line.split(" ")[1];
        } else {
            const arr = line.split(" ").map(i => Number(i)).sort((a,b) => a - b);
            console.log(arr.slice(0,k).join(" "));
        }
    }
}()




