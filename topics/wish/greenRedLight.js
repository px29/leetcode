function implementation (arr) {
   let maxSoFar = Number.MIN_SAFE_INTEGER;
   const dp = new Array(arr.length);
   dp[0] = arr[0]; // i 的max
   let max = arr[0];
   let l = 0;
   let r = 0;
   let start = 0;
   let end = 0;
   for (let i = 1; i < arr.length; i++) {
       dp[i] = arr[i] + (dp[i - 1] < 0 ? 0 : dp[i - 1]);
       if (dp[i] === arr[i]) {
           start = i;
           end = start;
       } else {
           end++;
       }
       if (dp[i] > max) {
           l = start;
           r = end;
       }
   }
   return [l, r];
}

function call() {
    console.log(implementation([-1,-1,1,1,-1,1,-1,-1]));
}

module.exports = call;