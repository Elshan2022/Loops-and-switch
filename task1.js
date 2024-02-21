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


//phone email password age name validation

const phoneRegX = /^\+\d{1,3}\d{9}$/;
const emailRegX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const nameRegX = /^[a-zA-Z]{2,}$/;
const passwordRegX = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
const ageRegX = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/





const validatePhone = (phoneNumber) => {
    if (phoneRegX.test(phoneNumber)) {
        return `${phoneNumber.replace(/(\+\d{3})(\d{2})\d{4}(\d{2})/, '$1$2****$3')}`;
    } else {
        return "Please enter phone number correctly";
    }
};

console.log(validatePhone("+994553988739"));

const validateEmail = (email) => {
    if (emailRegX.test(email)) {
        return email;
    } else {
        return "Please enter email correctly";
    }
};


console.log(validateEmail("elsen@gmail.com"));


const validateName = (name) => {
    if (nameRegX.test(name)) {
        return name;
    } else {
        return "Please enter name correctly";
    }
};


console.log(validateName("Else"));

const validatePassword = (password) => {
    if (passwordRegX.test(password)) {
        return password;
    } else {
        return "Password must be at least 1 uppercase letter,1 number and min 8 character";
    }
};


console.log(validatePassword("Home5697"));


const validateAge = (age) => {
    if (ageRegX.test(age)) {
        return age;
    } else {
        return "Please enter age correctly";
    }
};

console.log(validateAge(23));
