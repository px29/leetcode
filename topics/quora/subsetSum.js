function helper(arr, n, sum) {
    if (arr)

}


function subsetSum(arr, sum) {
    if (!arr || arr.length === 0) {
        return false;
    }
    // 取arr[i] 或者不取arr[i]
    return helper (arr, 0, sum);
}