function powerOfTwo(num){
    if(num<1){
        return false
    }
    while(num>1){
        if(num%2 !==0){
            return false
        }
        num = num/2
    }
    return true
}
console.log(powerOfTwo(2));

//complexity o(log n)

