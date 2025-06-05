#  JavaScript Function Concepts

This project demonstrates fundamental concepts of functions in JavaScript. It includes examples and explanations of:

- Function Statements (Declarations)
- Function Expressions
- Anonymous Functions
- Named Function Expressions
- First-Class Functions

---

##  Concepts and Examples

###  1. Function Statement (a.k.a. Function Declaration)

A **Function Statement** is a standard way to define a function. These functions are **hoisted**, meaning they can be called even before they are defined.

```javascript
function xyz() {
    console.log("Hello1");
}
xyz();
2. Function Expression
A Function Expression is when a function is assigned to a variable. Unlike function statements, function expressions are not hoisted, so they must be defined before use.
var x = function () {
    console.log("Hello2");
};
x();
Difference Between Function Statement & Function Expression
| Feature                     | Function Statement | Function Expression |
| --------------------------- | ------------------ | ------------------- |
| Hoisted                     |   Yes              |     No                |
| Can be used before declared |   Yes              |     No                |
3. Anonymous Function
An Anonymous Function is a function without a name. These are commonly used when functions are passed as values (e.g., in callbacks).
var func = function () {
    console.log("Hello3");
};
func();
4. Named Function Expression
A Named Function Expression is a function expression that includes a name. This name is accessible only within the function’s local scope.
var func2 = function xc() {
    console.log("Hello4");
};
func2();
 5. First-Class Functions
JavaScript supports first-class functions, meaning functions can be:

Assigned to variables

Passed as arguments

Returned from other functions

This makes JavaScript a powerful language for functional programing
