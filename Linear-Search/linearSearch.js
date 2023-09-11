let arr = [11, 22, 34, 40, 50];

function linearSearch(arr,tar){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==tar){
            return i
        }
    }
    return -1
}
console.log(linearSearch(arr,60));

//Big o is O(n)