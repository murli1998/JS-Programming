// creating an object variable in javascript 
const product ={
    title : "Ball pen",
    rating : 4,
    offer : 5,
    price : 270
};

console.log(product);

// creating another object ..... profile 

const profile ={
    username : "Shradha khapra",
    isFollow : false,
    followers : 123,
    following : 1234
};

console.log(typeof profile["isFollow"]);
console.log(typeof profile["username"]);
console.log(profile.username);


// // Operators in Javascript-- operators used to perform some operation on data.

// -- Arithmetic 
// -- Modulas 
// -- Exponentiaition
// -- Increement
// -- Decrement

let a = 10;
let b = 5;
console.log("a = ",a,"& b = ",b)
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a + b =",a*b);
console.log("a + b =",a/b);
console.log("a % b =",a%b);
console.log("a ** b =",a**b);
console.log("a + 1 =",++a);
console.log("a - 1 =",--a);


// assignment operators in javascript
// = , += ,-= ,*=, /=, %=, **=

console.log("a + 4 = ",a+=4);
console.log("a - 4 = ",a-=4);
console.log("a * 4 = ",a*=4);
console.log("a / 4 = ",a/=4);
console.log("a % 4 = ",a%=4);
console.log("a ** 4 = ",a**=4);


// comparison operators
// == , != , === , !== , < , > , <= , >=

let x = 5;
let y = 2;

let w = 4;
let z = "6";
console.log(x==y);
console.log(w==z);
console.log(w===z);
console.log(w>z);
console.log(w<z);


// logical operators 
// && -- and 
// || -- or
// !  -- not
let cond1 = a>b;
let cond2 = w>z;
console.log(cond1 && cond2);
console.log(cond1 || cond2);

