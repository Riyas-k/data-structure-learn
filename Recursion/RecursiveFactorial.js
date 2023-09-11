function Factorial(num) {
  if (num == 0) {
    return 1;
  }
  return num * Factorial(num - 1);
}
console.log(Factorial(5));

//Big o is O(n)