//TASK Fibonacci Sequence
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev1 = 0;
  let prev2 = 1;
  let current = 0;

  for (let i = 2; i <= n; i++){
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }
  return current;
}

console.log(fib(5));
console.log(fib(10));


