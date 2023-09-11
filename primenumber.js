function checkPrime(num) {
  if ( num<2) {
    return false;
  }
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i==0){
        return false
    }
  }
  return true;
}
console.log(checkPrime(5));

//Time complexity is O(sqrt(n))