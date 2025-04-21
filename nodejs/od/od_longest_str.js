const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 最长回文子串（子串是连续的）
void async function () {
    // Write your code here
    while (line = await readline()) {
        // evalExpression(line);
        Nike(line);
    }
}()

function Nike(str) {
    let max = "";
    for (let i = 0; i < str.length; i++) {
        let odd = search(str, i - 1, i + 1); // 基数回文
        let even = search(str, i, i + 1); // 偶数回文
        const current = odd.length > even.length ? odd : even;
        max = max.length > current.length ? max : current;
    }
    console.log(max.length);
}

function search(str, left, right) {
    let _left = left;
    let _right = right;
    while (_left >= 0 && _right <= str.length - 1 && str[_left] == str[_right]) {
        _left--;
        _right++;
    }
    return str.substring(_left + 1, _right);
}


