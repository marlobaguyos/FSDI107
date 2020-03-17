var mathLib = require('./myMath');

function homework() {
    //print the first 20 even numbers
    for (i = 0; i < 40; i++) {
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

/*
function init() {
    console.log('Hello World!');

    let age = 90;
    console.log(age);

    let name = "Sergio Inzunza";
    console.log("My name is: " + name);

    mathLib.sayHello("a parameter val"); // exec the fn on the module
    var res = mathLib.sum(21, 21);
    console.log(res);

    var greater = mathLib.greater(897123, 8914423);
    console.log(greater);

    console.log(mathLib.greater(-1, -2));

    console.log("Is even: " + mathLib.isEven(42));
    console.log("Is even: " + mathLib.isEven(333));
    console.log("Is even: " + mathLib.isEven(0));
}

init();
*/
homework();