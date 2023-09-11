function Fibonacci(num) {
  if (num < 2) {
    return num;
  }
  return Fibonacci(num - 1) + Fibonacci(num - 2);
}
console.log(Fibonacci(6));

//Big o is O(2^n)
