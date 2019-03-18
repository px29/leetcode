function swap(nums, start ,end) {
    const t = nums[start];
    nums[start] = nums[end];
    nums[end] = t;
}

function select (nums, start, end) {
    let i = start;
    const pivot = nums[end];
    for (let j = start; j < end - 1; j++) {
        if (nums[j] <= pivot) {
            swap(nums, i, j);
            i++;
        }
    } 
    swap(nums, i, end);
    return i;
}


function partition(nums, k, start, end) {
    if (start >= end) {
        return nums[start];
    }
    const position = select(nums, start, end);
    if (position + 1 === k) {
        return nums[position];
    } else if (position + 1 < k) {
        return partition(nums, position + 1, end);
    } else{
        return partition(nums, start, position - 1); 
    }
}

function call(){
   console.log(partition([7,2,1,8,6,3,5,4], 1, 0, 7));
}

module.exports = call;