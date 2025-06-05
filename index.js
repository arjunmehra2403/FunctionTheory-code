// function statement:- Function statement is basically the way of creating function is known as function statement and function statement is also known as function decleartion
function xyz()
{
    console.log("Hello1");
}
xyz();

// function Expression:- Function expression is basically the ability of a function to be use as an value is known as Function Expression.
var x=function (){
    console.log("Hello2")
}
x();

//Difference between function statement and function expression is function statement a.k.a are hoisted but function expression are not hoisted

// Anynomous function:- Anynomous function is a function without a name is Anynomous function and Anynomous function are used at that place where a function is treated like a varabile

var func=function(){  //This is Anynomous func
    console.log("Hello3");  
}
func();

// Name Function Expression:-

var func2=function xc(){
    console.log("Hello4");
}
func2();

//First Class Function :- First class function is basically the ability of a function to be use as an value and pass them into another function and can return from another function so the ability is known as first class function.