function findRotatedIndex(arr, num) {

     var pivot = findPivot(arr);

     // Determine the search range based on the pivot.
     if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
          // If 'num' may be in the left half, perform binary search on the left half.
          return binarySearch(arr, num, 0, pivot - 1);
     } else {
          // If 'num' may be in the right half, perform binary search on the right half.
          return binarySearch(arr, num, pivot, arr.length - 1);
     }
}

function binarySearch(arr, num, start, end) {
     // Handle edge cases where 'num' is out of bounds.
     if (arr.length === 0 || num < arr[start] || num > arr[end]) return -1;

     // Perform binary search within the specified range.
     while (start <= end) {
          var mid = Math.floor((start + end) / 2);
          if (arr[mid] === num) {
               // If 'num' is found, return its index.
               return mid;
          } else if (num < arr[mid]) {
               // If 'num' is less than the middle element, search the left half.
               end = mid - 1;
          } else {
               // If 'num' is greater than the middle element, search the right half.
               start = mid + 1;
          }
     }

     // 'num' was not found in the array, return -1.
     return -1;
}

function findPivot(arr) {
     // Handle the cases where the array has no rotation or only contains one element.
     if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;

     // Find the pivot point using binary search.
     var start = 0;
     var end = arr.length - 1;
     while (start <= end) {
          var mid = Math.floor((start + end) / 2);
          if (arr[mid] > arr[mid + 1]) {
               // If the element at 'mid' is greater than the one on its right, 'mid' is the pivot.
               return mid + 1;
          } else if (arr[start] <= arr[mid]) {
               // If the left half is sorted, search the right half for the pivot.
               start = mid + 1;
          } else {
               // If the right half is sorted, search the left half for the pivot.
               end = mid - 1;
          }
     }
}

module.exports = findRotatedIndex