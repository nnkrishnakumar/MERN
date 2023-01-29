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

// var a=10;
// var b=20.93;
// var c=false;
// var d=true;
// var e="String";
// var f='string';
// var g=null;
// var h=undefined;
// var i=122134234343434343434n;

// console.log(a,typeof(a));
// console.log(b,typeof(b));
// console.log(c,typeof(c))
// console.log(d,typeof(d))
// console.log(e,typeof(e))
// console.log(f,typeof(f))
// console.log(g,typeof(g))
// console.log(h,typeof(h))
// console.log(i,typeof(i))

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

// var a=10;
// var b=20;
// var sum=a+b;
// console.log(sum);
// console.log("sum =",sum);
// console.log(a," + ",b," = ",sum);    //it will waste so much mamory beacuse we are using five argument inside the console.log() and hence it will use five memory location.
// console.log(`${a}+${b} = ${sum}`);  // it is memory efficent 

// write a program to calculate simple intrest?

// var P=10
// var R=2
// var T=2
// var result=(P*R*T)/100
// console.log(result);
// write a program to calculate area of rectangle?
// var a=10;
// var b=20;
// var result=a*b;
// console.log("area of rectangle :",result);
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

// console.log(15+6)
// console.log(15-6)
// console.log(15*6)
// console.log(15/6)
// console.log(15%6)
// console.log(15**6)

// console.log(15,"Hello world")
// console.log("Hello world"+10)  //Hello world10  -> int 10 convert into string 
// console.log("Hello"+"world")   
// console.log("Hello"-"World")   //NaN  -> it will not subtract one value to other

// console.log("hello"**"world")  // NaN 

// // Note: Only plus is posible
// console.log("hello"*5)    //NaN

/*Assignment Operator(=):use to assign value of RHS to LHS operand

eg. sum=a+b;  // valid 
eg. a+b=sum; // invalid
eg. a=b=c;   //valid

type: Binary
Precedence: R to L
*/

/*
Composite/ Compound/ Short Hand Operators
                combination of Assignement Operator with other operators

    a=a+b       =>      a+=b
    a=a-b       =>      a-=b
    a=a*b       =>      a*=b
    a=a/b       =>      a/=b
    a=a%b       =>      a%=b
    a=a**b      =>      a**=b                
*/
// var a=10;
// var b=20;
// a+=b;
// console.log(a);

/*
Relational Operator:
used to compare two operands
<   Less Than
<=  Less Than Equal
>   Greater Than
>=  Greater Than Equal
!=  not Equal  (check only value)
!== not Identical (check value and data type both)
==  Equal (check value only)
=== Identical (check value and data type both)
*/
// console.log(10<20);    // output: true 
// console.log(10>20);
// console.log(10<=20);
// console.log(10=="10");    // output: true  --> it will only check value not data type 
// console.log(10==="10");  // output: false   --> it check value and data type both

/*
Logical Operators:
used to make a compound condition

operator        symbol  operator                            type                 precedence
Logical And     &&      return true id all                  binary                  L to R
                        conditions are true
                        else return false

Logical Or      ||      return true id atleast one          binary                  L to R 
                        condition is true else return
                        false

Logical Not     !       return true if condition            Unary                   R to L
                        is false and return false 
                        if condition is true
*/

// Note: 0 means false and 1 means true
// console.log(10 && 20);   //true    
// console.log(10 && 0);    //False  ; output 0 means false
// console.log(0 && 20);    //False  ; output 0 means false
// console.log(0 && 10);   //False     output 0 means false
// console.log(0 && 0);    //False     output 0 means false

// console.log(10 || 20);   // true        output 10 means true
// console.log(20|| 0);      //true        output 20 means true
// console.log(0 || 0);        //false   output 0 means false

// console.log(0 || 20 ||30);    // 20 is answer beacuse precedence is Left to Right 

console.log(0|| 20 && 30);   // output 30
console.log(0 && 10 || 20);  // output 20

/*
Bitwise Operator

operators                           Symbols                 Type            Precedence
1. Bitwise And                      &                       Binary          L to R
2. Bitwise OR                       |                       Binary          L to R
3. Bitwise Xor                      ^                       Binary          L to R
4. Bitwise Left shift               <<                      Binary          L to R
5. Bitwise Right Shift              >>                      Binary          L to R
6. Bitwise Negation                 ~,-                     Unary           R to L

a       b       a&b         a|b     a^b(a|b - a&b)
0       0       0           0       0
0       1       0           1       1
1       0       0           1       1
1       1       1           1       0

*/
// var a =25
// var b =45
// var c=a|b
// var d=a&b
// var e=a^b
// console.log(c, d,e)

/*
Bitwise Left Shift and Right Shift

Bitwise Left shift 
            num <<n
            i.e num*2**n
            eg. 25<<10
            eg. 25*2**10
            i.e 25*1024
            i.e 25600
Bitwise Right Shift
            num>>n
            ie. num/2**n
            eg. 2500/2**5
            ie. 2500/32
            ie. 78

*/
//  var a=25
//  var b=a<<5    // Right shift
//  var c=a>>3     // left shift
//  console.log(b,c)


/*
Bitwise Negation Opearator:
            ~
            (-x-1)
    +ve 20                  -ve -30
    -ve -20                 +ve  30
    -1  -1                   -1  -1
    --------------------------------
        -21                      29
            
            -
            (-x)
    +ve 20                  -ve -30
    -ve -20                 +ve  30
    -------------------------------
        -20                      30

*/


// Conditional Operator  or Ternary Operator(?:): used when we have to execute a statement out of two statements according to a condition
// Syntex:
// condition?Statement1:Statement2;
//             True        false
var a=30;
a%2==0? console.log("Even"): console.log("Odd")

/*
Increment(++)       ie x=x+1
Pre-Increment       Post-Increment
(++oprand)          (operand++)
-----------         --------------
First Increment     First Assignement
then Assignement    then Increment 

Decrement(--) ie. x=x-1
Pre-Decrement       Post-Decrement
(--operand)         (operand--)
------------        --------------
First Decrement     First Assignement
then Assignment     then Decrement

*/
var a=10
var b=a++
var c=10
var d=++c
console.log("a",a)
console.log("d",c)