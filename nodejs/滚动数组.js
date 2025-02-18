let d = []
d[0] = 1;
d[1] = 1;
for(i = 2; i < 6; i++) {
    d[i] = d[i - 1] + d[i - 2];
}
console.log(d[2], d[3], d[4], d[5])