var peakIndexInMountainArray = function(A) {
    let start = 0;
     let end = A.length - 1;
     while (start <= end) {
         const mid = parseInt((start + end) / 2);
         if (A[mid] < A[mid + 1]) {
             start = mid + 1;
         } else if (A[mid] < A[mid - 1]) {
             end = mid - 1;
         } else {
             return mid;
         }
     }
     return -1;
 };

 function call() {
    console.log(peakIndexInMountainArray([0,1,0]));
 }

 module.exports = call;