function factorial(num) {
  let sum = 1;
  for (let i = num; i > 0; i--) {
    sum *=  i;
  }
  console.log(sum);
}
factorial(5);

// Big o is o(n) because loop 