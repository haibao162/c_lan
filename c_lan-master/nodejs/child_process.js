var ex = require("child_process").spawnSync;
var exec = require("child_process").execSync;

var stdout = ex("cd",["."]).stdout.toString();
// var exexout = exec("dir").toString();
console.log("exexout", stdout);
var a = "a";
if(!parseInt(a)) {
    console.log("sd");
}