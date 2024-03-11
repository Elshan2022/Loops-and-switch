const createDelay = (message, delay) => {
    // 2 parametr gonderririk bunlardan biri message digeri ise delay - dir.
    // message bosdursa eger reject, bos deyilse ise resolve isleyecek.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (message.length === 0) {
                reject("Delay failed");
            } else {
                resolve(message);
            }

        }, delay);
    });
};




const p1 = () => createDelay("Delay start", 500).then((value) => {
    console.log(value);
    return value;
}).catch((error) => {
    console.log(error);
    return error;
});





const p2 = () => createDelay("Delay is in progress", 1000).then((value) => {
    console.log(value);
    return value;
}).catch((error) => {
    console.log(error);
    return error;
});


const p3 = () => createDelay("Delay completed", 1500).then((value) => {
    console.log(value);
    return value;
}).catch((error) => {
    console.log(error);
    return error;
});




const promises = [p1(), p2(), p3()];

// promise.all icerisinde promisler olan bir array teleb edir ve bir array return edir

Promise.all(promises).
    then((value) => {
        console.log("Promise all then", value);
        console.log("Promise all then", value);
        console.log("Promise all then", value);
    });










