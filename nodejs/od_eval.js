const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 表达式求值顺序：先乘除，后加减，先左边，后右边，先括号内，后括号外
// 使用两个栈的方式，一个寄存运算符称为A，一个寄存数据称为B。
// ch不是运算符，则压入B，读入下一个字符。
// ch是运算符，比较A中栈顶元素和ch优先级，ch优先级高的话，ch压入A栈，继续遍历。栈顶优先级高的话，就取出栈顶和B中两个数据计算，得到的结果压入B栈。
// 然后继续循环从A栈顶去运算符和ch比较。
// 当ch为)时且遇到栈顶为(,则从A中弹出左括号，ch也不做操作，相当于(x)换成x，这一步是存在的，因为ch为)时，优先级总是最小的，所以会把()里面的都处理完。
// 即在上一步的循环中就会循环到A栈顶为(的情况。
// 按照数据结构上描述，当遍历整个表达式结束以后，此时还没计算结束，但此时右边的优先级都高于左边，所以需要while循环重复从栈里取数字和运算符，直到运算符栈为空
// 而为了统一，需要在一开始就给表达式加上前缀(后缀),尤其是末尾加上)作用很明显,因为可能到最后了右边都是高优先级,加上),它们都比）优先级高就可以一直循环直到运算符栈为空
// 例如2+3*5，+比*优先级低，优先级函数priority不好复用，改成(2+3*5)，遍历到最后的）时，*比）高，计算得（2+15），此时+又比）优先级高计算得(17),然后（出栈，运算符栈为空计算结束。
// 这就不难理解课本的循环是while(ch != "#" || getTop(OPTR) != "#")，当然课本上前后加了#也是为了在末尾加一个低优先级的。
// 当然可以for循环表达式，给表达式加上(),for循环到最后一个字符)时,通过while循环把剩下的计算处理了。
// 运算符栈为空时，此时数据栈的数值就是计算结果。
void async function () {
    // Write your code here
    while (line = await readline()) {
        evalExpression(line);
    }
}()
// 传入表达式
function evalExpression(str) {
    let numbers = []; // 存数字
    let opts = []; // 存运算符
    let newStr = str;
    if(str[0] != "(") {
        newStr = "(" + str + ")";
    }
    opts.push(newStr[0]); // 第一个左括号直接入栈，且优先级最低
    let flag = false; // 表示是否符号是否是正负号，如-1*(-1-1)。出现一次运算符以后置为true，下一次还是运算符的话看做是正负号，走处理数字的分支。
    for (let i = 0; i < newStr.length; i++) {
        let data = newStr[i];

        if (/^\d+$/.test(data) || flag) {
            let j = i + 1;

            while(/^\d+$/.test(newStr[j])) {
                data += newStr[j];
                j++;
            };
            numbers.push(data); // 数字入栈
            i = j - 1;
            flag = false;
        } else {
            // 获取栈顶，和当前字符比较优先级，考虑2*(3+4*5)，会循环两次，第一次计算4*5得到2*(3+20)，这时候3+20优先级高于），在计算一次得2*(23)
            while(priority(opts.slice(-1)[0], data)) {
                compute(numbers, opts); // 优先级较高就先计算前面的，如果是2*3+1,只会循环一次得6+1，但不会去计算得到7，因为1后面可能是左括号或者*/。
            }
            if (opts.slice(-1)[0] == "(" && data == ")") {
                opts.pop(); // 去掉运算符栈顶的(，继续遍历，如3*(2+1)计算得到3*(3)以后，左括号出栈，有括号也没必要入栈，继续遍历。
            } else {
                opts.push(data); // 如2+3*4，*优先级更高，不能计算2+3，因此*入栈即可，然后继续遍历
            }
            if (data == "(") {
                flag = true;
            }
        }
    }
    console.log(numbers[0]);
}

// 定义运算符优先级，m是栈顶元素，n是取出来的字符ch。上一个运算符优先级高的话，就要先计算，这也符合实际场景。
function priority(m, n) {
    // n="("时，优先级总是大于m。m="("时，优先级又总是最低的。
    if (m == "(") {
        return false;
    } else if (m == "+" || m == "-") {
        if (n == "*" || n == "/" || n == "(") {
            return false;
        }
    } else if (m == "*" || m == "/") {
        if (n == "(") {
            return false;
        }
    }
    // n为空时，遍历结束。这时认为是m优先级更高，执行计算的操作。直到m也是空。
    return true;
}
// 使用数组模拟栈,计算时从arr1取出两个数字，从arr2取出运算符，计算结果添加到arr1中
function compute(arr1, arr2) {
    const a2 = Number(arr1.pop());
    const a1 = Number(arr1.pop());
    const operate = arr2.pop();
    let result;
    if (operate == "+") {
        result = a1 + a2;
    }
    if (operate == "-") {
        result = a1 - a2;
    }
    if (operate == "*") {
        result = a1 * a2;
    }
    if (operate == "/") {
        result = a1 / a2;
    }
    arr1.push(result);
}