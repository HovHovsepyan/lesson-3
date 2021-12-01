let a = 10, b = 3;

//version 1
let c;
c = a;
a = b;
b = c;

console.log(a);
console.log(b);


//version 2 
debugger;
let x = 5, y = 12;
x = x + y;
y = x - y;
x = x - y; 

console.log(x);
console.log(y);
