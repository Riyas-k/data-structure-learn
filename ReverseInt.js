function reverseInt(num){
  let reversed = num.toString().split('').reverse().join('') 
  console.log(reversed); 
}
let num = 133;
console.log(reverseInt(num));