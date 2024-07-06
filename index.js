//console.log("hello");

// let a=40;
// let b=40;
// console.log("a =" ,a," & b=",b);
// console.log("a+b =" ,a+b);
// console.log("a-b =",a-b);
// console.log("a*b =" ,a*b);
// console.log("a/b =" ,a/b);

// let x=3;
// let y=6;
// console.log("a =" ,a,"& b =" ,b);
// console.log("a%b =" ,a%b);

// let f=10;
// let g=30;
// console.log("f =",f,"& g = " ,g);
// // console.log(" f+g =",f+g);

// let x=40;
// let y=4;
// console.log("x=",x,"&y=",y);
// console.log("x%y=",x%y);

// let a=2;
// let b=3;
// console.log("a=",a,"& b=",b);
// console.log("a**b=",a**b);

//Unary operator
//for increment

// let a=5;
// console.log("a+1=",a+1);

// //for decrement

// let x=30;
// console.log("x-1=",x-1);

// Equality (==)
// The equality (==) operator checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.

// Try it

// Syntax
// JS
// Copy to Clipboard
// x == y
// Description
// The equality operators (== and !=) provide the IsLooselyEqual semantic. This can be roughly summarized as follows:

// If the operands have the same type, they are compared as follows:
// Object: return true only if both operands reference the same object.
// String: return true only if both operands have the same characters in the same order.
// Number: return true only if both operands have the same value. +0 and -0 are treated as the same value. If either operand is NaN, return false; so, NaN is never equal to NaN.
// Boolean: return true only if operands are both true or both false.
// BigInt: return true only if both operands have the same value.
// Symbol: return true only if both operands reference the same symbol.
// If one of the operands is null or undefined, the other must also be null or undefined to return true. Otherwise return false.
// If one of the operands is an object and the other is a primitive, convert the object to a primitive.
// At this step, both operands are converted to primitives (one of String, Number, Boolean, Symbol, and BigInt). The rest of the conversion is done case-by-case.
// If they are of the same type, compare them using step 1.
// If one of the operands is a Symbol but the other is not, return false.
// If one of the operands is a Boolean but the other is not, convert the boolean to a number: true is converted to 1, and false is converted to 0. Then compare the two operands loosely again.
// Number to String: convert the string to a number. Conversion failure results in NaN, which will guarantee the equality to be false.
// Number to BigInt: compare by their numeric value. If the number is ±Infinity or NaN, return false.
// String to BigInt: convert the string to a BigInt using the same algorithm as the BigInt() constructor. If conversion fails, return false.
// Loose equality is symmetric: A == B always has identical semantics to B == A for any values of A and B (except for the order of applied conversions).

// The most notable difference between this operator and the strict equality (===) operator is that the strict equality operator does not attempt type conversion. Instead, the strict equality operator always considers operands of different types to be different. The strict equality operator essentially carries out only step 1, and then returns false for all other cases.

// There's a "willful violation" of the above algorithm: if one of the operands is document.all, it is treated as if it's undefined. This means that document.all == null is true, but document.all === undefined && document.all === null is false.

// Examples
// Comparison with no type conversion
// JS
// Copy to Clipboard
// 1 == 1; // true
// "hello" == "hello"; // true
// Comparison with type conversion
// JS
// Copy to Clipboard
// "1" == 1; // true
// 1 == "1"; // true
// 0 == false; // true
// 0 == null; // false
// 0 == undefined; // false
// 0 == !!null; // true, look at Logical NOT operator
// 0 == !!undefined; // true, look at Logical NOT operator
// null == undefined; // true

// const number1 = new Number(3);
// const number2 = new Number(3);
// number1 == 3; // true
// number1 == number2; // false
// Comparison of objects
// JS
// Copy to Clipboard
// const object1 = {
//   key: "value",
// };

// const object2 = {
//   key: "value",
// };

// console.log(object1 == object2); // false
// console.log(object1 == object1); // true
// Comparing strings and String objects
// Note that strings constructed using new String() are objects. If you compare one of these with a string literal, the String object will be converted to a string literal and the contents will be compared. However, if both operands are String objects, then they are compared as objects and must reference the same object for comparison to succeed:

// JS
// Copy to Clipboard
// const string1 = "hello";
// const string2 = String("hello");
// const string3 = new String("hello");
// const string4 = new String("hello");

// console.log(string1 == string2); // true
// console.log(string1 == string3); // true
// console.log(string2 == string3); // true
// console.log(string3 == string4); // false
// console.log(string4 == string4); // true

// Not equal (!=)	Returns true if the operands are not equal.


// let x=14;
// let y=43;
// console.log("x!=y",x!=y);

// let a=43;
// let b=43;
// console.log("a!=b",a!=b);

// let x="hello";
// let y="hello";
// console.log("x!=y",x!=y);

// Greater than (>)	Returns true if the left operand is greater than the right operand.

// let x=32;
// let y=43;
// console.log("x>=y",x>=y);

// let x=32;
// let y=32;
// console.log("x<=y",x<=y);

//condition statement
//Executes a block of code if a specified condition is true.

// let x=18;
// let age;
// if(age<=18){
//     console.log("you can vote");
// }
// else{
//     console.log("you can not vote");
// }

// let x = 5;
// let marks;
// if (x >= 50) {
//     marks = "pass";
// } else {
//     marks = "fail";
// }
// console.log(marks);

// let x=34;
// let number;
// if(x>=24){
//     number ="23,45,87,67";
// }
// else{
//     number = "-23,-45,-87,-67";
// }
// console.log(number);


// what is function in js
// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, 
// but for a procedure to qualify as a function.

// function func(hello){
//     console.log(hello);
// }
// func("kya haal hai")

// for return

// function sum(x,y){
//     s=x+y;
//     console.log("addition");
//     return s;
// }
// let v=sum(3,4)
// console.log(v);

// console.log(1,2,3,4);

// function sum(x,y,z,a)
// {
//     s=x+y+z+a;
// console.log("add");
// return s;
// }
// let v=sum(1,2,3,4)
// console.log(v);

//what is arrow function
// Arrow function {()=>} is concise way of writing JavaScript functions in shorter way. 
// Arrow functions were introduced in the ES6 version.
// function sum(a,b){
//     return a+b;
// }
// ((a,b)=>{
// console.log(a+b)})(3,4)

// const add=(num1,num2) =>({username:"Nitesh"})
// console.log(add(2,4));
// // without parenthesis we can not write object

// const add=(num1,num2) =>(num1+num2)
// console.log(add(3,4));

// const Mul=(num1,num2) =>num1*num2
// console.log(Mul(4,6));

// const mul=(num1,num2)=>{
// return num1*num2 
// }
// console.log(mul(6,7));
                                        // High Order Function

// In JavaScript, a higher-order function is a function that can accept other functions as arguments, return functions, or both.
//  They enable abstraction, composition, and the creation of more flexible and reusable code.

// Syntax:

// function higherOrderFunction(callback) {
//     // Perform some operations
//     // Call the callback function
//     callback();
// }
// function callbackFunction() {
//     console.log("Callback function is executed.");
// }
// // Passing the callback function to the higher-order function
// higherOrderFunction(callbackFunction);
 
//                                       Anonymous Function 

// It is a function that does not have any name associated with it. 
// Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, 
// we use only the function keyword without the function name.

// let x = function () {  
//     console.log('It is an anonymous function');  
// };  
// x();  

// let greeet=function (){
//     console.log("Hello!");
// };
// greeet();
