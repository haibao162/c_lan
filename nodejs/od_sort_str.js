const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

let num = -1;
let arr = [];
void async function () {
    // Write your code here
    while (line = await readline()) {
        // evalExpression(line);
        if (num == -1) {
            num = Number(line); 
        } else {
            arr.push(line);
            if(arr.length == num) {
                const res = arr.sort();
                for(let i = 0;i<res.length;i++){
                    console.log(res[i]);
                }
            }
        }
    }
}()




