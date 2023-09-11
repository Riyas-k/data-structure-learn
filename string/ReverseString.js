// function ReverseString(str){
//    return str.split('').reverse().join('')
// }
let str = 'Hello'
// console.log(ReverseString(str));
function reverse(str){
    // let res = '';
    // for(let i=0;i<str.length;i++){
    //     let char = str[i]
    //     res = char + res
    // }
    // return res
    return str.split('').reduce((out,char)=>{
        out = char+out
        return out
    },"")
}
console.log(reverse(str));

//Time complexity and space complexity is O(n) 