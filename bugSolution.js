function foo(a, b) {
  return a + b;
}

function bar(a, b) {
  return a - b;
}

let globalVariable = 10; // Corrected: Declared using 'let'

console.log(foo(1, 2)); // 3
console.log(bar(1, 2)); // -1
console.log(globalVariable); // 10

//This is the correct way to declare variables and prevent accidental global variable creation.
//Using 'let' or 'const' ensures variables are properly scoped to the block or function where they are defined.