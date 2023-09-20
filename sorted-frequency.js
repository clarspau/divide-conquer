function sortedFrequency(arr, num) {

     let firstIdx = findFirstIdx(arr, num);
     if (firstIdx === -1) return firstIdx;
     let lastIdx = findLastIdx(arr, num);

     // Calculate the frequency of 'num' by finding the difference between the last and first occurrence indices, plus 1.
     return lastIdx - firstIdx + 1;
}

function findFirstIdx(arr, num, lowIdx = 0, highIdx = arr.length - 1) {

     while (highIdx >= lowIdx) {
          let mid = Math.floor((lowIdx + highIdx) / 2);

          // Check if 'num' is the first occurrence in 'arr'.
          if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
               return mid;
          } else if (num > arr[mid]) {
               // If 'num' is greater, search the right half of 'arr'.
               lowIdx = mid + 1;
          } else {
               // Otherwise, search the left half of 'arr'.
               highIdx = mid - 1;
          }
     }

     // 'num' was not found in 'arr', return -1.
     return -1;
}

function findLastIdx(arr, num, lowIdx = 0, highIdx = arr.length - 1) {

     while (highIdx >= lowIdx) {
          let mid = Math.floor((lowIdx + highIdx) / 2);

          // Check if 'num' is the last occurrence in 'arr'.
          if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
               return mid;
          } else if (num < arr[mid]) {
               // If 'num' is smaller, search the left half of 'arr'.
               highIdx = mid - 1;
          } else {
               // Otherwise, search the right half of 'arr'.
               lowIdx = mid + 1;
          }
     }

     // 'num' was not found in 'arr', return -1.
     return -1;
}

module.exports = sortedFrequency