function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true
      }
    }
  } while (swapped);

  console.log(arr);
}
let arr = [1, -4, 2, 8, 7];
bubbleSort(arr);
//Big o is O(n^2)