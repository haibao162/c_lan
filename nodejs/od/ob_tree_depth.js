//          1
//       2   3   4
//     5    6 7   8
//   9    10
const tree = {
    data: 1,
    next: [{
        data: 2,
        next: [{
            data: 5,
            next: [{
                data: 9,
                next: null
            }]
        }]
    },
    {
        data: 3,
        next: [{
            data: 6,
            next: [{
                data: 10,
                next: null
            }],
        }, {
            data: 7,
            next: null
        }]
    },
    {
        data: 4,
        next: [null, {
            data: 8,
            next: null
        }]
    }
    ]
}

function depth(tree) {
    if (!tree.next) {
        return 1;
    } else {
        let max = depth(tree.next[0]);
        for (let i = 0; i < tree.next.length; i++) {
            max = Math.max(max, depth(tree.next[0]));
        }
        return max + 1;
    }
}
console.log("depth", depth(tree));