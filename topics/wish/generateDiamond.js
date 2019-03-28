// function generateDiamond1 (n) {
//     if (n % 2 === 0) {
//         return;
//     }
//     let prev = '';
//     for (let i = 1; i <= n; i++) {
//         if (!prev) {
//             prev = '*';
//         } else {
//             if (i <= parseInt(n / 2) + 1) {
//                 prev = `*${prev}*`;
//             } else {
//                 prev = prev.substring(1, prev.length - 1);
//             }
//         }
//         console.log(prev);
//     }
// }

// function helper(cur, i, n) {
//     if (i === n) {
//         return;
//     }
//     if (i === 0) {
//         cur = '*'    
//     } else if (i <= parseInt(n / 2)) {
//         cur = `*${cur}*`;
//     } else {
//         cur = cur.substring(1, cur.length - 1);
//     }
    
//     console.log(cur);
//     helper(cur, ++i, n);
// }

// function generateDiamond(n) {
//     if (n % 2 === 0) {
//         return;
//     }
//     helper('', 0, n);
// }

// function call() {
//     console.log(generateDiamond(5));
// }

// module.exports = call;

function generateDiamond (n) {
    let r = ''
    for (let i = 0; i < n; i++) {
        if (!r) {
            r += '*';
        } else {
            if (i < parseInt(n / 2) + 1) {
                r = `*${r}*`;
            } else {
                r = r.substring(1, r.length - 1);
            }
        }
        console.log(r);
    }
}

function generateNumber (n) {
    let r = [];
    for (let i = 1; i <= n; i++) {
        let c = [];
        for (let j = 0; j < i; j ++) {
            if (j === 0 || j === i - 1) {
                c.push(1);
            } else {
                c.push(r[i - 2][j] + r[i - 2][j - 1]);
            }
        }
        r.push(c);
    }
    console.log(r);
    return r;
}

function call() {
    generateNumber(3);
}

module.exports = call;