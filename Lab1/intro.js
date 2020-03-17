var mathLib = require('./myMath');

function init() {
    console.log('Hello World!');

    let age = 90;
    console.log(age);

    let name = "Sergio Inzunza";
    console.log("My name is: " + name);

    mathLib.sayHello("a parameter val"); // exec the fn on the module
    var res = mathLib.sum(21, 21);
    console.log(res);
}

init();