// creating an object variable in javascript 
// const product ={
//     title : "Ball pen",
//     rating : 4,
//     offer : 5,
//     price : 270
// };

// console.log(product);

// creating another object ..... profile 

// const profile ={
//     username : "Shradha khapra",
//     isFollow : false,
//     followers : 123,
//     following : 1234
// };

// console.log(typeof profile["isFollow"]);
// console.log(typeof profile["username"]);
// console.log(profile.username);


// // Operators in Javascript-- operators used to perform some operation on data.

// -- Arithmetic 
// -- Modulas 
// -- Exponentiaition
// -- Increement
// -- Decrement

// let a = 10;
// let b = 5;
// console.log("a = ",a,"& b = ",b)
// console.log("a + b =",a+b);
// console.log("a - b =",a-b);
// console.log("a + b =",a*b);
// console.log("a + b =",a/b);
// console.log("a % b =",a%b);
// console.log("a ** b =",a**b);
// console.log("a + 1 =",++a);
// console.log("a - 1 =",--a);


// assignment operators in javascript
// = , += ,-= ,*=, /=, %=, **=

// console.log("a + 4 = ",a+=4);
// console.log("a - 4 = ",a-=4);
// console.log("a * 4 = ",a*=4);
// console.log("a / 4 = ",a/=4);
// console.log("a % 4 = ",a%=4);
// console.log("a ** 4 = ",a**=4);


// comparison operators
// == , != , === , !== , < , > , <= , >=

// let x = 5;
// let y = 2;

// let w = 4;
// let z = "6";
// console.log(x==y);
// console.log(w==z);
// console.log(w===z);
// console.log(w>z);
// console.log(w<z);


// logical operators 
// && -- and 
// || -- or
// !  -- not
// let cond1 = a>b;
// let cond2 = w>z;
// console.log(cond1 && cond2);
// console.log(cond1 || cond2);

// conditional statements 

// let age = 17;
// if(age>=18){
//     console.log("You can vote !");
// }else
// {
//     console.log("You can not vote !");
// }


// if(cond1...){
//     -------------
//     -------------
// }else if(cond2){
//     -------------
//     -------------
// }else if(cond3){
//     -------------
//     --------------
// }else if(cond4){
//     --------------
//     --------------
// }else{
//     -------------
//     -------------
// }

// let age2 = 58;
// if(age2<=18){
//     console.log("junior");
// }else if(age2>=60){
//     console.log("senior");
// }else{
//     console.log("middle");
// }

// switch statements

// let fruit = "mango";
// switch(fruit){
//     case  "apple":
//         console.log("apple");
//         break;
//     case "banana":
//         console.log("his is banana");
//         break;
//     case "papaya":
//         console.log("This is papaya");
//         break;
//     case "mango":
//         console.log("This is mango");
//         break;
//     default:                                   //if none of the case matches with the expression then this default case will execute.
//         console.log("No fruit found");
//         break;   
// }



// how we can get user input in javascript --------------- this will be done with the help of keyword -- prompt("enter your name");
// prompt("what do you want to enter");

// alert("hello");
// let myName=prompt("Enter your name");
// console.log(myName);

// loops in java script-----------
// why we use loops ? 
// to do some sort of repetitive task.

// for-loop 
// for(let i=1;i<=108;i++){
//     console.log("Jai Shree Ram");
//     }
// console.log("loop ended");

// // calculate sum of numbers from start to end

// let startNumber = Number(prompt());
// let  sum = startNumber;
// let end = prompt("enter ending number : ");
// for(let i=startNumber;i<=end;i++){
//     sum+=i;
// }
// console.log(`Sum of all the numbers from ${startNumber} to ${end} is ${sum}.`);  //template literals ---- `template literals` symbol is known as back tick.



// generate username problem

// let fullName = prompt("Enter your name : ");
// let nameLength = fullName.length;
// let username = `@${fullName}${nameLength}`;
// console.log(username);


// arrays in javascript

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(mark of marks){
//     sum +=mark;
// }
// console.log("The average mark of the class is :",sum/marks.length);

// problem 2 in arrays

// let price = [250,645, 300, 900,50]
// let i=0;
// for(let val of price){
//     val = val-(val*10/100);
//     price[i]=val;
//     console.log(`Value after after giving 10% discount is :${price[i]}`);
//     i++;
// }

// slice and splice over an array

// let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// console.log(company.splice(0,1));     //remove first element from array

// console.log(company.splice(1,1,"OLA"));  //replace uber with ola

// console.log(company.splice(5,0,"Amazon"));  //add an element at the end


// functions in javascript

//basic functons

// functionName(parameterA,parameterB){
//     do some Worker
//     --------------
//     --------------
//     --------------
// }


// arrow function (=>)------------ in mordern javascript we usually use arrow functions

// const functionName = (parameterA,parameterB) => {
//     do some Worker
//     --------------
//     --------------
//     --------------
// }


// define multiplication function as an arrow function 

// const mul = (x,y)=>{
//     return x*y;
// }



//count vowels in string
// const countVowels = (s) => {
//   let count = 0;
//   for (const char of s) {
//     if (
//       char == "A" ||
//       char == "E" ||
//       char == "I" ||
//       char == "O" ||
//       char == "U" ||
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };


// square of all numbers in an array

// let arr = [1,2,3,4];
// arr.forEach((val)=>{
//     console.log(val*val);
// })

// FILTER Method in an array

// let marks = [23,90,45,97,89,96,99];

// let topppers=marks.filter((val)=>{
//     return val>90;
// });

// console.log(topppers);


//use of reduce method

// let n=prompt()
// let arr = [];

// for(let i=1;i<=n;i++){
//     arr[i-1] = i;

// }

// let sum = arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(arr);
// console.log(sum);

// let product = arr.reduce((prod,curr)=>{
//     return prod*curr;
// });
// console.log(arr);
// console.log(product);


// let newBtn = document.createElement("button");
// newBtn.innerText="Click me!";
// newBtn.style.color="white";
// newBtn.style.backgroundColor = "red";
// document.querySelector("body").prepend(newBtn);
// let para = document.querySelector("p");


let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let currentMode="light";
btn.addEventListener("click",() => {
    if(currentMode==="light"){
        currentMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
        // body.style.backgroundColor="black";
        // body.style.backgroundColor="black";

        
    }else{
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        // body.style.backgroundColor="white";
    }
    console.log(currentMode);
});



