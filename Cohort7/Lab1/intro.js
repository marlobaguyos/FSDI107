var mathLib = require('./myMath');

function init() {
console.log('Hello World!');

let age = 90;
console.log(age);

let name = "Marlo Baguyos";
console.log("My name is: " + name);

mathLib.sayHello("a parameter value"); // exec the fn on the module

var res = mathLib.sum(21,21);
console.log(res);

var g=mathLib.greater(897123, 89123);
console.log(g);

console.log(mathLib.greater(-1, -1));

console.log(mathLib.isEven(4));

console.log(mathLib.min(5, 2));
}

init();