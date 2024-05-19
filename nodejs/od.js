const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

//调用接口方法
rl.question("input: ", function (answer) {
    console.log(answer);
    // 不加close，则不会结束
    rl.close();
})

//close事件监听
rl.on("close", function () {
    // 结束程序
    process.exit(0);
})