var mathLib = require('./myMath');

function init() {
    console.log('Hello World!');

    let age = 90;
    console.log(age);

    let name = "Sergio Inzunza";
    console.log("My name is: " + name);

    mathLib.sayHello(); // exec the fn on the module
}

init();