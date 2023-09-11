function BinarySearch(arr,val){
   let left = 0;
   let right = arr.length-1
   while(left<=right){
    let middle = Math.floor((left+right)/2)
    if(val==arr[middle]){
        return middle
    }else if(left<arr[middle]){
        left = middle +1
    }else if(right<arr[middle]){
        right = middle -1
    }
   }
   return false
}
let arr = [1,2,3,4,5,34]
console.log(BinarySearch(arr,3));

//Big o is O (n) only work on sorted arrays