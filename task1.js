const text = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";

const getAllSpain = (str, regX) => {
    return str.match(regX);
};

console.log(getAllSpain(text, /Spain/gi));


const getAllRain = (str, regX) => {
    return [...str.matchAll(regX)]
};

console.log(getAllRain(text, /rain/gi));



const replaceWith = (str, searchValue, replaceValue) => {
    return str.replace(searchValue, replaceValue);
};

console.log(replaceWith(text, "Spain", "France"));

const replaceAllWith = (str, searchValue, replaceValue) => {
    return str.replaceAll(searchValue, replaceValue);
};

console.log(replaceAllWith(text, /rain/gi, "Sun"));


const searchWord = (str, searcher) => {
    return str.search(searcher);
};


console.log(searchWord(text, "plain"));
