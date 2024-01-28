function calculateSum(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;

}

let sum = calculateSum([2, 4, 6, 8, 10])

console.log(sum);


//////////////////////////

let counter = 0;

while (counter < 5) {
    console.log(counter++);
}


/////////////////////////

let cutDown = 5;

do {
    console.log(cutDown--);
} while (cutDown > 0);

/////////////////////

function evaluateGrade(grade) {
    let result = "";
    result = grade > 60 ? "You passed exam" : "You failed exam";
    console.log(result);
}

evaluateGrade(80);