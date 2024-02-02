let greet = (greeting = "Hello") => greeting;

console.log(greet("Hello World"));

//////////////////////////////////

let factorial = (n) => {

    if (n <= 0) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
};

console.log("Factorial of number", factorial(3));

/////////////////////////////////////

let sumAll = (...rest) => {
    let sum = 0;
    for (let i = 0; i < rest.length; i++) {

        sum += rest[i];

    }

    return sum;
};

console.log("Sum of numbers", sumAll(2, 4, 6));


////////////////////////////////////


function f1() {
    console.log("I'm F1 function");
}
function f2() {
    console.log("I'm F2 function");

}
function f3() {
    console.log("I'm F3 function");

}
function f4() {
    console.log("I'm F4 function");
    f5();

}
function f5() {
    console.log("I'm F5 function");

}

function callAllFunction() {
    console.log("I'am common function");
    f1();
    f3();
    f4();
    
}

callAllFunction();

