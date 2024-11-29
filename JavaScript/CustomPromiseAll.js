const CustomPromiseAll = (promises) => {
    return new Promise((res, rej) => {
        let results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            promise
                .then((result) => {
                    results[index] = result; 
                    completed++;

                    if (completed === promises.length) {
                        res(results);
                        
                    }
                })
                .catch((error) => {
                    rej(error);
                });
        });
    });
};

// Example usage
const { FirstPromise, SecondPromise } = require("./Promises");

CustomPromiseAll([FirstPromise("success"), SecondPromise("error")])
    .then((result) => {
        console.log("resolve:", result);
    })
    .catch((error) => {
        console.log("reject:", error);
    });
