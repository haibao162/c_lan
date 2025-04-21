const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
void async function () {
    // Write your code here
    while (line = await readline()) {
        stat(line);
    }
}()

function stat(str) {
    const visited = {};
   for(let i=0;i<str.length;i++) {
    const ascii = str[i].charCodeAt(0);
    if (ascii >=0 && ascii <= 127) {
        if(!visited[str[i]]) {
            visited[str[i]] = 1;
        }
    }
   }
   let length = 0;
   for(let j in visited) {
       length++;
   }
   console.log(length);
}


