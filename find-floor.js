function findFloor(arr, num, lowIdx = 0, highIdx = arr.length - 1) {
     // Check for base cases
     if (lowIdx > highIdx) {
          // If 'num' is smaller than the smallest element in the array, return -1
          return -1;
     }

     if (num >= arr[highIdx]) {
          // If 'num' is greater than or equal to the largest element in the array, return the largest element
          return arr[highIdx];
     }

     // Calculate the middle index
     let mid = Math.floor((lowIdx + highIdx) / 2);

     if (arr[mid] === num) {
          // If 'num' is equal to an element in the array, return that element
          return arr[mid];
     }

     if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
          // If 'num' falls between two adjacent elements in the array, return the smaller of the two
          return arr[mid - 1];
     }

     if (num < arr[mid]) {
          // If 'num' is smaller than the middle element, search in the left half of the array
          return findFloor(arr, num, lowIdx, mid - 1);
     }

     // If 'num' is greater than the middle element, search in the right half of the array
     return findFloor(arr, num, mid + 1, highIdx);
}

module.exports = findFloor