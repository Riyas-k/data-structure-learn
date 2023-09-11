function Palindrome(str) {
  str = str.toLowerCase();
//   let reversed = str.split("").reverse().join("");
//   if (reversed == str) {
//     return true;
//   } else {
//     return false;
//   }
 
  return ( str  === str.split('').reverse().join(''))
}
let str = "Mom";
console.log(Palindrome(str));

//Time = O (n)