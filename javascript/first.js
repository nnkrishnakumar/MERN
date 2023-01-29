console.log("hello world");

/* 
JavaScript Basics:
1. Keywords
2. Identifier
3. DataTypes
4. Variables
5. Constants
6. Tokens
7. Input/Output
8. Operators.


Identifyer: Name of any variable.
Name of programming entity like variable, functions, objects, class, module etc.

Data Types:
1.Boolean: true false
2. Number : anu mi,ner 10, +23, -34, 12.54 -43.23
3. String : collection of characters like "sample" 'sample'
4. Array
5. Object
6. null
7. undefined 
8. bigint

Data Representation:
    1. Variable: used when information is not fixed
        name of memory location in RAM which contains some 
        information 
        or 
        variable is placeholder of data in RAM

        Syntex:
            var variableName =value;
        eg. var age=30;
        Note: ; is optional is JS
        
    2. Constant: used when information is fixed
    
    Ude

*/

var a=10;
var b=20.93;
var c=false;
var d=true;
var e="String";
var f='string';
var g=null;
var h=undefined;
var i=122134234343434343434n;

console.log(a,typeof(a));
console.log(b,typeof(b));
console.log(c,typeof(c))
console.log(d,typeof(d))
console.log(e,typeof(e))
console.log(f,typeof(f))
console.log(g,typeof(g))
console.log(h,typeof(h))
console.log(i,typeof(i))

// japascript is a object orient programming language so bydefault every thing is object in javascript

/*
Tokens: smallest entity of any program which can't further divided into parts by compiler/interpreter

so keywords, identifiers, constants, operator, punctuators are tokens

statement: var a=10;
token    : var=>keyword
         : a =>Identifier(variable)
        =   => operator
        10  => Constant
        ;   => Punctuator

*/

var a=10;
var b=20;
var sum=a+b;
console.log(sum);
console.log("sum =",sum);
console.log(a," + ",b," = ",sum);    //it will waste so much mamory beacuse we are using five argument inside the console.log() and hence it will use five memory location.
console.log(`${a}+${b} = ${sum}`);  // it is memory efficent 

// write a program to calculate simple intrest?

var P=10
var R=2
var T=2
var result=(P*R*T)/100
console.log(result);
// write a program to calculate area of rectangle?
var a=10;
var b=20;
var result=a*b;
console.log("area of rectangle :",result);
// write a program to calculate area of cuboid?

// write a program to calculate area of cone?
// write a program to calculate area of square?
// write a program to calculate area of right angle triangle?
// write a program to convert temperature in celcius from farenheight?
// write a program to swap values of two variable?

/*
Category on Basis of Operands:
1. Unary    : Required only one operand
2. Binary   : Required two operands
3. Ternary  : Required three Operands

Types:
1. Arithmetic Operators
2. Assignement Operators
3.  Composite/ Compound/Short Hand Operators
4. Relational Operator
5. Logical Operators
6. Bitwise Operators
7. Conditional Opeartor
8. Increment Operator
9. Decrement Operator
10. Miscallanious Operator
*/

/*
Arithemeti Opeartors:
+ Addition
- Subtraction
* Multiplication
/ Division(Quotient)
% Division(Reminder)
** Power

Type: Binary
Precedence: L to R
Priority:
            1. Brackets
            2. **
            3. * / %
            4. + -
*/

// Conditional Operator  or Ternary Operator(?:): used when we have to execute a statement out of two statements according to a condition
// Syntex:
// condition?Statement1:Statement2;
//             True        false
var a=30;
a%2==0? console.log("Even"): console.log("Odd")