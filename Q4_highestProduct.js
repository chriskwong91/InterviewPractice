/*
Given an arrayOfInts, find the highestProduct you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
*/
function highestProduct(listInt) {
    if (listInt.length === 3) { 
        return listInt.reduce((acc, int) => { return acc * int }, 1);
    }
    var max = 0;
    var mid = 0;
    var min = 0;
    var nmax, nmin;
    
    listInt.forEach((int) => {
       if (int < 0) {
         if (!nmax ||int < nmax) {
             nmin = nmax;
             nmax = int
         } else if (!nmin || int < nmin) {
             nmin = int
         }
       } else {
           if (int > max) {
                min = mid;
                mid = max;
                max = int;
           } else if (int > mid) {
               min = mid;
               mid = int;
           } else if (int > min) {
               min = int;
           }
       }
    });
    
    var pos = max * mid * min;
    var neg = nmax && nmin ? nmax * nmin * max : 0;
    return pos > neg ? pos : neg;
    
}

console.log(highestProduct([2, 6, 1, 7, 3]));
console.log(highestProduct([-10, -10, 1, 3, 2]));
console.log(highestProduct([-10, -20, -10, -1, 1, 3, 5]));