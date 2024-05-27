const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
void async function () {
    // Write your code here
    while (line = await readline()) {
        password(line);
    }
}()

function password(str) {
    let score = 0;
    if (str.length >= 8) {
        score += 25;
    } else if (str.length <= 4) {
        score += 5;
    } else {
        score += 10;
    }
    if (/[a-z](.)*[A-Z]/g.test(str) || /[A-Z](.)*[a-z]/g.test(str)) {
        score += 20;// 有大小写加20分
    } else if (/[a-zA-Z]/g.test(str)) {
        score += 10; // 全部大写或全部小写
    }
    if (/[0-9](.)*[0-9]/g.test(str)) {
        score += 20; // 大于1个数字
    } else if (/[0-9]{1}/g.test(str)) {
        score += 10; // 1个数字
    }
    if (/[^0-9a-zA-Z](.)*[^0-9a-zA-Z]/g.test(str)) {
        score += 25; // 大于1个符号
    } else if (/[^0-9a-zA-Z]/g.test(str)) {
        score += 10; // 1个符号
    }
    if (/[^0-9a-zA-Z]/g.test(str) && /[0-9]/g.test(str) && /[a-z]/g.test(str) && /[A-Z]/g.test(str)) {
        score += 5; // 有大小写，字母，数字符号
    } else if (/[^0-9a-zA-Z]/g.test(str) && /[0-9]/g.test(str) && /[a-zA-Z]/g.test(str)) {
        score += 3; // 有字母，数字符号
    } else if (/[0-9]/g.test(str) && /[a-zA-Z]/g.test(str)) {
        score += 2; // 有字母，数字
    }
    let grade = "VERY_WEAK";
    if (score >= 90) {
        grade = "VERY_SECURE";
    }
    else if (score >= 80) {
        grade = "SECURE";
    }
    else if (score >= 70) {
        grade = "VERY_STRONG";
    }
    else if (score >= 60) {
        grade = "STRONG";
    }
    else if (score >= 50) {
        grade = "AVERAGE";
    }
    else if (score >= 25) {
        grade = "WEAK";
    }
    console.log(grade);
}


