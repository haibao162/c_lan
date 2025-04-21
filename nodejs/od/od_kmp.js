// BMP算法
// 主串 ababcabcacbab
// 子串 abcac
//       abcac 不行，因为和abcac和abcab不等。取出主串的abca和子串的abc比较，由于匹配到第5个字符不等，前面4个字符相等的，
//             所以可以看做是子串abca部分和去掉末尾以后的abc对比，因为abca同时是主串和子串序列。这样转化的好处是需要往前移到哪个字符对比只和子串自身有关。

//       abca 
//        abc 不行，因为c不等于a，这里就已经有规律了，即往前匹配时，先要保证找到的字符等于末尾，即a的前面一个a
//          a 此时只有一个字符a，这样就匹配上了1个字符，避免了还去从第4个字符开始重新匹配。实际上假设前面还有字符，想要匹配上只有可能是c，即ca去和abca的最后两位匹配。
//      这样的例子很容易推导出: 子串等于cabcax，主串为cabcabcax。第一次匹配卡在了主串的第6个字符b时，则前5个字符cabca和ca匹配上。这样由于第4，5位是ca对上了
//      所以下一次匹配是从子串的第三个字符b和主串的第6个字符b对比，当然如果主串的第6个字符不是b，那实际上就从ca开始往前找了，由于c不等于a，找不到相同的部分
//      所以这时就只能从第一个字符c和主串的第6个字符比（例：子串是cabcax，主串是cabcadcabcax，此时主串第6个字符不是b，要从ca往前找）。

// 将子串需要往前移的index下标放在next数组里记录，如abaabc就定义next是6维数组，next[6]表示第6个字符c匹配不上时，要返回的位置。
// 这时候考虑abaab，和ab匹配上，所以next[6]= 3,表示ab不用匹配了，从第三个字符a开始。又比如next[1]表示第一个字符就匹配不上，那只能拿子串的第一个字符重头开始匹配主串的下一个字符。
// next[j]计算思路方式很简单，如果用T表示子串，那么就是往前找到第一个和T[j-1]相等的位置k，然后还需要保证k之前的k-1个字符都和T[j-2]之前的k-1个字符相等。
// 因此next[j+1]=next[101]=k=10，其含义表示：1-10个字和91到100个字相等，即T[j-1]=T[k-1]。求next[j+1]是一个递归的过程，设next[j]=k。如果T[j-1]=T[k]，则带上前面k-1个数就相等。
// 此时next[j+1]= next[j]+1。如果S中第j个数不等于第k个数，就去前面找匹配的字符，这时候去找next[k]= t,这时候如果第j个数T[j-1]= T[t-1]，说明前面t-1个字带上第t个字T[t-1]，一共t个字符是匹配的
// 此时next[j+1] = t + 1。

const str1 = "abaabcac";
// const str = "aba";
function get_next(T) {
    let i = 2;
    let next = [];
    next[1] = 0; // 第一个匹配不上，应该拿子串的第一个字符去匹配主串的下一个字符了。
    j = 0; // 保存next[i]的值。
    while (i <= T.length) {
        if (j == 0) {
            next[i] = j + 1; // 第一次进来的时候next[2] = 1; 子串的第二个字符对不上，表示下一次拿子串的第一个去匹配主串的当前字符。
            i++;
            j++;
        } else if(T[i-2] == T[j-1]) {
            // 求next[i]时，考虑第i-1个数和第next[i-1]=k个数是否相等
            next[i] = j + 1;
            j++;
            i++;
        } else {
            j = next[j];
        }
    }
    // next.shift(); // 去掉第一个即可。不建议去，因为j = next[j]，j=1时就是死循环，而j需要从1变成0。
    return next;
}
console.log(get_next(str1)); // [undefined, 0, 1, 1, 2, 2, 3, 1, 2 ]

const S = "ababcabcacbab";
const T = "abcac";

function Index_KMP(S, T, _pos = 0) {
    let j = 0;
    let i = _pos;
    const next = get_next(T); // 获取next的计算值
    console.log("next:", next);
    while(i < S.length && j < T.length) { // 匹配没结束
        if (S[i] == T[j]) {
            // j = 0意味着也要重新开始匹配
            i++;
            j++;
        } else if(j == 0) {
            i++;
        } else {
            j = next[j];
        }

    }
    if(j == T.length) {
        return i - j + 1;
    } else return -1;
}
console.log(Index_KMP(S,T));