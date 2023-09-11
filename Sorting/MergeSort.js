function MergeSort(arr1, arr2) {
    let p1 = 0;
    let p2 = 0;
    let res = [];
    while (p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] < arr2[p2]) {
        res.push(arr1[p1]);
        p1++;
      } else {
        res.push(arr2[p2]);
        p2++;
      }
    }
    while (p1 < arr1.length) {
      res.push(arr1[p1]);
      p1++;
    } 
    while (p2 < arr2.length) {
      res.push(arr2[p2]);
      p2++;
    }
    return res;
  }
  
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return MergeSort(mergeSort(left), mergeSort(right));
  }
  
  const sortedArray = mergeSort([1, 3, 2, 4, 8, 9, 7, 6]);
  console.log(sortedArray);
  
  //Big o = O(m+n)