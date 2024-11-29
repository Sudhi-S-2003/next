const FirstPromise = (status) => {
    return new Promise((resolve, reject) => {
        if (status === "success") {
            resolve("FirstPromise resolved successfully...");
        } else {
            reject("FirstPromise rejected...");
        }
    });
};

const SecondPromise = (status) => {
    return new Promise((resolve, reject) => {
        if (status === "success") {
            resolve("SecondPromise resolved successfully...");
        } else {
            reject("SecondPromise rejected...");
        }
    });
};
module.exports= { FirstPromise, SecondPromise };