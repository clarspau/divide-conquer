function findRotationCount(arr, lowIdx = 0, highIdx = arr.length - 1) {
     // Check for base cases
     if (highIdx < lowIdx) {
          // No rotation, return 0
          return 0;
     }
     if (highIdx === lowIdx) {
          // Single element array, return its index
          return lowIdx;
     }

     // Calculate the middle index
     let mid = Math.floor((lowIdx + highIdx) / 2);

     // Check if the element at mid+1 is the minimum element
     // This handles cases like [3, 4, 5, 1, 2]
     if (mid < highIdx && arr[mid + 1] < arr[mid]) {
          return mid + 1;
     }

     // Check if the element at mid itself is the minimum element
     if (mid > lowIdx && arr[mid] < arr[mid - 1]) {
          return mid;
     }

     // Decide whether to search in the left half or right half
     if (arr[highIdx] > arr[mid]) {
          // If the right half is sorted, search in the left half
          return findRotationCount(arr, lowIdx, mid - 1);
     }

     // If the left half is sorted or both halves have the same value,
     // search in the right half
     return findRotationCount(arr, mid + 1, highIdx);
}

module.exports = findRotationCount