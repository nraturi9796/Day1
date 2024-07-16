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


//                                        what is function in js

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

//                                   what is arrow function

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

//                                   recursive function 

// A recursive function is a function that calls itself somewhere within the body of the function

// function factorial(n) {
//     // Base case: if n is 0, the factorial is 1
//     if (n === 0) {
//         return 1;
//     }else{
//     // Recursive case: n * factorial of (n-1)
//     return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5));

//                                       Function Scope
// Declare a variable inside a function and try accessing it outside the function 


// function Scope (){
// var a="Amit"
// console.log(a);
// }
// Scope()

//          Immediately Invoked Function Expression(IIFE)

// Those function which is execute immediate ,is known as IIFE
// IIFE are used to 'Avoid polluting the global namespace'

// (function chai(){
//     let a="Chai ready hai"
//     console.log(a);
// })
// () ;


                                // Solving Global Scope Problems
// Encapsulation: By wrapping code in an IIFE, you create a local scope for variables defined within the IIFE. 
//This means that these variables won't be accessible outside the IIFE, thus avoiding potential conflicts with other scripts.

// javascript
// Copy code
// (function() {
//     var localVar = "I am local";
//     console.log(localVar); // "I am local"
// })();

// console.log(localVar); // Uncaught ReferenceError: localVar is not defined


// (function greedy(){
//     console.log('Kya chai ready hai');
// }
// )();
// (()=>{
//     console.log('ha chai ready hai');
// })()
 
 //                                     Call Back Function

//  A callback is a function passed as an argument to another function, which gets invoked after the main function completes its execution. 
//  You pass the callback function to the main function as an argument, and once the main function finishes its task, 
//it calls the callback function to deliver a result.

// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   myFirst();
//   mySecond();

                //                          currying function

//It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence.                

// function calculateVolume(length) {
// 	return function (breadth) {
// 		return function (height) {
// 			return length * breadth * height;
// 		}
// 	}
// }
// console.log(calculateVolume(4)(5)(6));

// function Calculate(a){
// return function(b){
//     return function (c){
//         return a+b+c
//     }
// }
// }
// console.log(Calculate(2)(23)(45));

// function SendEmail(Email) {
//     return function(Subject) {
//         return function(Name) {
//             console.log(`Sending Email to ${Email} with subject ${Subject} And name is ${Name}`);
//         }
//     }
// }

// let step1 = SendEmail('nraturi246@gmail.com');
// let step2 = step1("Email pass");
// step2("John Doe"); // You need to call step2 with the third argument


//                             Function Composition

//In functional programming, function composition is a powerful technique
// that allows developers to combine multiple functions into a single function.

// function add(a,b){
//     return a+b;
// }
// function subtraction(a,b){
//     return a-b;
// }
// function compostwofunction (fn1,fn2){
// return function(a,b){
//  return fn2(fn1(a,b))

// };

// }
// const task=compostwofunction(add,subtraction);

// console.log(task(2,3));

// const add5 = (x) => x + 5;
// const multiplyBy3 = (x) => x * 3;
// const subtract10 = (x) => x - 10;
// function compose(fn1,fn2){
//     return function(a,b){
//      return fn2(fn1(a,b))
    
//     };
    
//     }

// const composedFunction = compose(subtract10, multiplyBy3, add5);
// const result = composedFunction(7);

// console.log(result);

//                                         Memoization
//Memoization is an optimaization technique that can be used to reduce time concuming calculation by saving privious input 
//to something called cache and returning result from it.

// function memoize(fn) {
//     const cache = {};
//     return function(...args) {
//       const key = JSON.stringify(args);
//       if (cache[key] !== undefined) {
//         return cache[key];
//       }
//       const result = fn(...args);
//       cache[key] = result;
//       return result;
//     };
//   }
  
//   const add = (a, b) => a + b;
//   const memoizedAdd = memoize(add);
  
//   console.log(memoizedAdd(1, 2)); // Outputs: 3
//   console.log(memoizedAdd(1, 2)); // Outputs: 3 (cached result)
//   console.log(memoizedAdd(2, 3)); // Outputs: 5
   
//                                             Exception Handling

//Exception handling in JavaScript is a way to handle errors gracefully, allowing the program to continue running or provide meaningful error messages to users. 
//JavaScript uses the try...catch statement for exception handling.

// try{
//     console.log(age);
// }
// catch(err){
//     console.log(err.name);
//     console.log(err.message);
// }
// const a=2+8;
// console.log("Important",a);

//                                    Object 
//In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair. 
//Objects can be used to store various kinds of data and more complex entities
//Properties of an Object
//Key (or Property Name): A string (or Symbol) that identifies the property.
//Value: Any valid JavaScript value, including other objects, arrays, functions, and primitives (strings, numbers, booleans, etc.).

//Object Literal Syntax:
// let object={
//     name: "Anjali",
//     add: "Ghar"
// }
// console.log(object);
// object.add="Nitesh"
// console.log(object);
// object.name="Nitesh"
// object.age=14
// console.log(object);
// let obj={
// name:"Anjali",
// age:23
// }
// console.log(obj);
// obj.add="Ghar"
// console.log(obj);
// obj.name="Nitesh"
// console.log(obj);

// let objwithABC=new Object()
//     console.log(objwithABC)
//     output is {}---> it is a empty object or  singleton object


// let obj={}
// console.log(obj);
// output is {}---> it is a empty object or non singleton object
 
                                  // Using the new Object() Syntax:

// let obj =new Object({name:"Ankit",age:21,add:"Pali"})
// console.log(obj);
// obj.mobile=3340004
// obj.city="Noida"
// obj.name="Aman"
// console.log(obj);


                                       // object with constructor function

// function constructor(name,age,add,mobile){
// this.name=name;
// this.age=age;
// this.add=add;
// this.mobile=mobile;
// }
// let consjt=constructor("Tinku",54,"Mirzapur",84766445)
// console.log(constructor.name);

//function student(name,address,mobile){
// return {
//     name:name,
//     address:address,
//     mobile:mobile
// }
//     }
//     let student1=student("guddu","Mirzapur",884746664)
//     let studen=student("bablu,guddu","Mirzapur",868699764)
//       console.log(student1);
//       console.log(studen);
   
    //                                   creating obj using class

    // class Person {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    
    //     greet() {
    //         console.log('Hello!');
    //     }
    // }
    
    // let jane = new Person('Jane', 25);
    // console.log(jane.name); // Output: Jane
    // jane.greet(); // Output: Hello!
    
 //                                     Nested Obj
 let country={
    name:"India",
    State:{
        name:"Uttarakhand",
        dis:{
        name:"Tehri"
        }
    }
 }
 console.log(country.State.dis.name);
