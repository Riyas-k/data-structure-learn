function binarySearch(arr, num) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (num === arr[middleIndex]) {
      return middleIndex;
    }
    if (num < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
let arr = [10, 23, 44, 56, 78, 88];
console.log(binarySearch(arr, 44));

//Big o is O(log n)
