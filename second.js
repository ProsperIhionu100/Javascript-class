var number = 5;// inline comment

/* this is a 
muliti line comment
wdewf
sjvjsnf
*/

// number = 9;

// var myName = "Prosper";

// myName =8;

// let ourName = "FreeCodeCamp"; 

// const pi =  3.14;

// var a;
// var b =2;
// console.log(a)
// a = 7;

// b =a

// console.log(a)

// number variable
// var a = 5;
// var b = 10;
// var c = "I am a ";

// a = a + 1;
// b = b + 5;
// c = c + " String";

// console.log(a)
// console.log(b)
// console.log(c)

// var sum = 10 + 10;
// console.log(sum);
// var difference = 45 -33;
// console.log(difference)
// var product = 8 *10;
// console.log(product)
// var quotient  = 66 / 33;
// console.log(quotient)

// var  myvar = 11
// myvar--
// console.log(myvar)

// var product = 2.0 * 2.5
// console.log(product)

// var reminder;
// reminder = 11 % 3;
// console.log(reminder)

// var d = 4;
// var e = 42;
// var f = 2;

// d /= 2;
// e /= 7;
// f /= 2;

// console.log(d);
// console.log(e);
// console.log(f);

// // Sting variables
// var firstname = "prosper";
// var lastname = "Turing";
// console.log(firstname)
// var myFirstname = "Beau";


// var mystr = 'I am a "double qouted" String inside "double quotes"'; 
// console.log(mystr)

/* 
code  Output
\'    single quote
\"    double quote 
\\    backslash
\n    newline
\r    carriage return 
\t    tab
\b    backspace
\f    form feed
*/

// var myst = "Firstline\n\t\\Secondline\nThirdLine";
// console.log(myst);

// var ourstr = "I come first " + "I come second";
// console.log(ourstr);

// var this_str = "This  is the first sentence. ";
// this_str += "This is the second sentence";
// console.log(this_str);

// var Myname = "Beau";
// var mystr = "My name is " + Myname + " and i am well!";
// console.log(mystr)


// var anAdjective = "worthwhile";
// var myStr = "Learning to code is ";

// myStr += anAdjective
// console.log(myStr)

// var firstNameLength =0;
// var firstname = "Lovelace";

// firstNameLength = firstname.length;

// console.log(firstNameLength);

// firstLetter = firstname[0]
// console.log(firstLetter)

// lastLetter = firstname[firstname.length - 3]
// console.log(lastLetter)

// function wordBlanks(Noun, Adjective, verb, Adverb){
//     var result ="My "+ Noun + " is a "+ Adjective + " dog who " + verb + " in the dogs competition "+  Adverb;
//     return result;
// }  

// console.log(wordBlanks("dog","big","ran", "quickly"))

// Array
// var ourArray = ["John", 23];

// var myArray = ["Quincy", 1];

// // Nested Array

// var ourArray1 = [["the universe", 42],["everything",101010]];

// var myArray1 = [["Bulls", 23], ["White Sox", 45]];

// var myArray2 = [50, 60, 70];

// var myData = myArray2[0];
// myArray2[0] = 45;
// console.log(myArray2) ;

// // Acessing multidimensional Arrays
// var The_Array = [[1, 2, 3],[4, 5, 6],[7, 8, 9],[[10,11,12], 13, 14]];

// var myData1 =The_Array[2][1];
// console.log(myData1);

// var myArray3 = [["John", 23], ["dog", 3]]

//myArray3.push(["happy","joy"]);
// var removedFromMyArray; //= myArray3.pop();
// removedFromMyArray = myArray3.shift();
// myArray3.unshift(["Paul", 35])
// console.log(myArray3)

// // Shopping List
// var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice",2],["eggs", 12]]

//  Functions

// function reusableFunction(){
//     console.log("Hi World");
// }

//  reusableFunction(); 

// function functionWithArgs(a, b) {
//     console.log(a + b);
// }

// functionWithArgs(10,5);  

// // Global scope variable
// var myGolbal = 10;

// function fun1(){

//     oopsGlobal = 5;
// }

// function fun2(){
//     var output = ""
//     if (typeof myGolbal != undefined){
//         output += "Global: " + myGolbal
//         console.log(output)
//     }
//     // if (typeof oopsGlobal != undefined) {
//     //     output += "Global: " + oopsGlobal
//     // }
// }
// fun2()

// function myLocalScope(){
//     // Local scope variable
//     var myVar = 5;
//     console.log(myVar);
// }

// myLocalScope();


// // var cake = document.getElementById("cake")
// // js dom

// function timesFive(num){
//     return num * 5;
// }

// console.log(timesFive(5));

// var sum = 12;
// function addFive(){
//     sum += 5;
// } 
// console.log(addFive())

// var changed = 0;
// function change(num){
//     return (num + 5) / 3;
// }

// changed = change(10);
// console.log(changed);

// function ArrShift(arr, item){
//     arr.push(item)
//     return arr.shift();
// }

// var testArr = [1, 2, 3, 4,5];

// console.log("Before " + JSON.stringify(testArr));
// console.log(ArrShift(testArr , 6));
// console.log("After: " + JSON.stringify(testArr))

// function WelcomeBooleans(){
//     return true;
// }

// console.log(WelcomeBooleans())

// function trueOrFalse(wasThatTrue){
//     if (wasThatTrue) {
//         return "yes that was true";
//     }
//     return "No, that was false";

// }
// console.log(trueOrFalse(true)) 

// // Comparison Operator
// function testequal(val){
//     if (val == 12){
//         return "Equal"
//     }
//     return "Not Equal"
// }

// console.log(testequal(12))

// function testStrict(val){
//     if (val === 12){
//         return "Equal"
//     }
//     return "Not Equal"
// }

// console.log(testStrict('12'))

// function testStrictab(a,b){
//     if (a===b){
//         return "Equal"
//     }
//     return "Not Equal"
// }

// console.log(testStrictab(12 ,'12'))

// function testStrict1(val){
//     if (val != 12){
//         return "Not Equal"
//     }
//     return "Equal"
// }

// console.log(testStrict1(22))

// function testStrictval(val){
//     if (val !== 12){
//         return "Not Equal"
//     }
//     return "Equal" 
// }

// console.log(testStrictval(22))

// function testGreaterThan(val){
//     if (val > 100){
//         return "Over 100"
//     }
//     if (val > 10){
//         return "Over 10"
//     }
//     return "10 or under"
// }

// console.log(testGreaterThan(1))

// function testGreaterOrEqual(val){
//     if (val >= 20){
//         return "20 or Over"
//     }
//     if (val >= 10){
//         return "10 or Over"
//     }
//     return "Less than 10"
// }

// console.log(testGreaterOrEqual(1))

// function testLessthan(val){
//     if (val < 25){
//         return "Under 25"
//     }
//     if (val < 55){
//         return "Under 55"
//     }
//     return "55 or Over"
// }

// console.log(testLessthan(30))

// function testLessOrEqual(val){
//     if (val <=12){
//         return "Smaller Than or Equal to 12"
//     }
//     if (val <= 24){
//         return "Smaller Than or Equal to 24" 
//     }
//     return "More Than 24"
// }

// console.log(testLessOrEqual(21)) 

// function testLogicalAnd(val){
//     if (val <= 50 && val >= 25){
//         return "Yes"
//     }
//     return "No"
// }

// console.log(testLogicalAnd(20)) 

function testLogicalOr(val){
    if (val < 10 || val > 20){
        return "OutSide"
    }
    return "Inside"
}

console.log(testLogicalOr(90)) 

// function testElse(val){
    
// }

// var score = prompt("Enter a number");

// if (score >= 0.9 && score <10.0) {
//     console.log("A")
// }
// else if (score >=0.8 && score <0.9) {
//     console.log("B")
// }
// else if (score >=0.7 && score <0.8) {
//     console.log("c")
// }
// else if (score >=0.6 && score <0.7) {
//     console.log("d")
// }
// else if (score <=0.6) {
//     console.log("F")
// }
// else{
//     console.log("Bad score")
// }

// pdp = prompt("Enter total vote");
// apc = prompt("Enter total vote");
// lp = prompt("Enter total vote");

// pdp_cand ="Atiku Abubakar"
// apc_cand = "Bola tinubu"
// lp_cand = "Mr Peter Obi"

// if (pdp > apc && pdp >lp) {
//         console.log(pdp_cand +" won the election with " + pdp  +" votes when compared to "+ apc_cand +" with " + apc +" and "+ lp_cand + " with "+lp );
// }


// else if (apc > pdp && apc>lp) {
//         console.log(apc_cand +" won the election with " + apc  +" votes when compare to "+ pdp_cand+ " with "+pdp +" and "+ lp_cand +" with "+lp);
// }
// else if (lp > pdp && lp>apc) {
//         console.log(lp_cand +" won the election with " + lp  +" votes when compared to "+ pdp_cand +" with "+pdp+" and " +apc_cand+ " with " +apc);
// }

// else{
//     console.log("The election was rigged")
// }

