const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 找出第一个只出现一次的字符
void async function () {
    // Write your code here
    while (line = await readline()) {
        // evalExpression(line);
        first(line);
    }
}()

function first(str) {
    const obj = {};
    let order = 1;
    for(let i=0;i<str.length;i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = {
                num: 1,
                order: order,
            };
            order++;
        } else {
            obj[str[i]].num++;
        }
    }
    let result = -1;
    let minOrder = -1;
    for(let k in obj) {
        if (obj[k].num == 1) {
            if(minOrder == -1) {
                minOrder = obj[k].order;
                result = k;
            } else if(obj[k].order < minOrder) {
                minOrder = obj[k].order;
                result = k;
            }
        }
    }
    console.log(result);
}


