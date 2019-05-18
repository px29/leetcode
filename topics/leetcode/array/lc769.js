var maxChunksToSorted = function(arr) {
    // cut and sort the chunks
    // greedy
    // 如果是排好序的，就cut，如果没排好，就尽量包含,
    // 因为是permutation， 所以坐标和值有关。坐标不在值上的就要包含
    // 我能走到的最远的index 是多少
    let r = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        if (i >= max) {
            r++;
        }
        
    }
    return r;
};

function call (){
    console.log(maxChunksToSorted([0,3,5,2,4,6,1]));
}

module.exports = call;