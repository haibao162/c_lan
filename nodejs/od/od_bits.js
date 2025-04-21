const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const result = Number(line).toString(2);
    let maxLength = 0;
    for(let i=0;i<result.length;i++) {
        let len = 0;
        if (result[i] == "0") {
            continue;
        } else {
            while(result[i] == "1") {
                len++;
                i++;
            }
            i = i - 1;
            maxLength = Math.max(maxLength, len);
        }
    }
    console.log(maxLength);
});
