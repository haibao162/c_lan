a = [2,2,3,4,5, 6]

for(let i = 0;i < a.length;i++) {

    console.log(i, a[i],'111')
    if(a[i] == 3) {
        a.splice(0,2)
        // i = i - 1
    }

}