# Accidental Global Variable Declaration in JavaScript

This repository demonstrates a common yet easily overlooked error in JavaScript: accidental global variable declarations.  The bug arises from omitting the `var`, `let`, or `const` keywords when declaring variables, inadvertently creating global variables.  This can cause unexpected behavior and difficult-to-track bugs, especially in larger projects.

## Bug Description
The `bug.js` file contains functions that unintentionally create global variables. The solution (`bugSolution.js`) demonstrates the correct way to declare variables using `let` or `const` to prevent this issue.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and examine the code.
3. Observe the unexpected behavior.
4. Compare with the corrected code in `bugSolution.js`.

## Solution
Always declare variables using `let` or `const` to ensure they are scoped correctly and prevent accidental global variable creation.  Avoid using `var` in modern JavaScript to improve code clarity and maintainability.