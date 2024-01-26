const dayOfWeek = "Sunday";
let activity;

switch (dayOfWeek) {
    case "Monday":
    case "Wednesday":
    case "Friday":
        activity = "It's course day"
        break;
    case "Tuesday":
    case "Thursday":
    case "Saturday":
        activity = "You should go to gym";
        break;
    default:
        activity = "It's weekend"
}

console.log(activity);


const numbers = [2, 4, 6, 8, 10];
let total = 0;

for (let number of numbers) {
    total += number;
    console.log(number);
    console.log(total);
}

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
    console.log(total);
    console.log(numbers[i]);
}


const fruits = ["Apple", "Banana", "Cherry", "Lemon", "Grape"];

let fruitName = "";

for (let fruit of fruits) {
    fruitName = fruit;
    let length = fruit.length;
    console.log(fruitName + ' ' + length);
}


const student = {
    myName: "Elshan",
    grade: 70,
};

const { myName, grade } = student;

if (grade >= 60) {
    console.log("You passed exam");
    return;
}

console.log("You failed exam");



