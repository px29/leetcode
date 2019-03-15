function generateDiamond1 (n) {
    if (n % 2 === 0) {
        return;
    }
    let prev = '';
    for (let i = 1; i <= n; i++) {
        if (!prev) {
            prev = '*';
        } else {
            if (i <= parseInt(n / 2) + 1) {
                prev = `*${prev}*`;
            } else {
                prev = prev.substring(1, prev.length - 1);
            }
        }
        console.log(prev);
    }
}

function helper(cur, i, n) {
    if (i === n) {
        return;
    }
    if (i === 0) {
        cur = '*'    
    } else if (i <= parseInt(n / 2)) {
        cur = `*${cur}*`;
    } else {
        cur = cur.substring(1, cur.length - 1);
    }
    
    console.log(cur);
    helper(cur, ++i, n);
}

function generateDiamond(n) {
    if (n % 2 === 0) {
        return;
    }
    helper('', 0, n);
}

function call() {
    console.log(generateDiamond(5));
}

module.exports = call;