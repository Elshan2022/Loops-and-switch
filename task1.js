const stocks = [
    {
        price: 250,
        sector: "IT",
        symbol: "MGV",
    },
    {
        price: 60,
        sector: "HR",
        symbol: "KKK",
    },
    {
        price: 320,
        sector: "HR",
        symbol: "GTR",
    },
    {
        price: 100,
        sector: "BS",
        symbol: "MDD",
    },
    {
        price: 100,
        sector: "BS",
        symbol: "MDD",
    },
];

function stockPriceUpdate() {

    const interval = setInterval(() => {
        const random = Math.random();
        const index = Math.floor(random * stocks.length);
        const percentageRandom = (random * 100).toFixed(1);
        const selectedItem = stocks[index];
        let selected = stocks.find((item) => {
            return selectedItem === item;
        });
        let price = selected.price;
        price = price + (percentageRandom * price) / 100;

        console.log("Changing stock", selectedItem.price, selectedItem.symbol);

    }, 2000);



    return setTimeout(() => {
        clearInterval(interval);

    }, 2002);

}

stockPriceUpdate();



const specificStocks = stocks.filter((obj) => {
    const requiredSector = "HR";
    const matchedSector = obj.sector === requiredSector;
    return matchedSector;
});

console.log("Specific stocks", specificStocks);

