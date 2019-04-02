
function helper (str, r, temp, start) {
    if (temp.length > 0) {
        r.push(temp.slice().join(''));      
    }
    for (let i = start; i < str.length; i++) {
        temp.push(str[i]);
        helper(str, r, temp, i + 1);
        temp.pop();
    }

}

function permutation(str) {
    let r = [];
    helper(str, r, [], 0);
    return r;
}

function call() {
    console.log(permutation('abc'));
}

module.exports = call;