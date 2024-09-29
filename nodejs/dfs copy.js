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

function reverseTree (root) {
    
}