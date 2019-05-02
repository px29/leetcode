var minIncrementForUnique = function(A) {
    // 每次只能增加1
    // 统计
    // [[1: 1], [2: 2]] => move 2, 因为count > 1, 使得统计变为[[1,1], [2, 1], [3, 1]] Done
    /*
    [[1: 2], [2: 2], [3: 1], [7: 1]] => move 1 (count = 1) 
    => [[1: 1], [2: 3], [3: 1], [7: 1]] => move 2 (count = 2) 
    => [[1: 1], [2: 1], [3: 3], [7: 1]] => move 3 (count = 2)
    => [[1: 1], [2: 1], [3: 1], [4: 2], [7: 1]] => move 4 (count = 1)
    => [[1: 1], [2: 1], [3: 1], [4: 1], [5: 1], [7: 1]] => move 5 (count = 6: answer)
    */
   A.sort((a, b) => a - b);
   let count = 0;
   let t = 0;
   for (let i = 1; i < A.length; i++) {
       if (A[i] === A[i - 1] || A[i] - 1 === A[i - 1]) {
           if ( A[i] - 1 === A[i - 1]) {
               t++;  
           }
           count++;
       } 
   }
   return count + t;
};


function call () {
    console.log(minIncrementForUnique([1,2,2]));
}

module.exports = call;