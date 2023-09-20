function countZeroes(arr) {
     // Find the index of the first zero using a binary search.
     // If there are no zeroes in the array, return 0.

     let leftIdx = 0;
     let rightIdx = arr.length - 1;
     let firstZero = -1;

     // Perform binary search using a while loop.
     while (rightIdx >= leftIdx) {
          let mid = leftIdx + Math.floor((rightIdx - leftIdx) / 2);

          if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
               firstZero = mid;
               break;
          } else if (arr[mid] === 1) {
               leftIdx = mid + 1;
          } else {
               rightIdx = mid - 1;
          }
     }

     // If there are no zeroes in the array, return 0.
     if (firstZero === -1) {
          return 0;
     }

     // Calculate the count of zeroes by subtracting the index of the first zero
     // from the total length of the array.
     return arr.length - firstZero;
}

module.exports = countZeroes