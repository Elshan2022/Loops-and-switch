const color = "Green";

switch (color) {
    case "Red":
        console.log("Stop");
        break;

    case "Green":
        console.log("Go");
        break;

    case "Blue":
        console.log("Cool");

    default:
        console.log("Not found color");
}


const matrix = [[2, 4], [3, 5], [6, 8], [20, 30]];

let number = 0;
let item = [];

for (let num of matrix) {
    item = num;

    for (let i = 0; i < item.length; i++) {
        number = item[i];
        console.log(number);
    }
}

const product = {
    name: "HP",
    price: 60,
    inStock: true,
};

for (let item in product) {
    let keys = item;
    let value = product[item];
    console.log(keys + " " + value);
}

const { price, inStock } = product;

if (price > 50 && inStock) {
    console.log("Avaiable");
    return
}

console.log("Unavaiable");

