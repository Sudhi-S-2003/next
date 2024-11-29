// const FirstPromise = (status) => {
//     return new Promise((resolve, reject) => {
//         if (status === "success") {
//             resolve("FirstPromise resolved successfully...");
//         } else {
//             reject("FirstPromise rejected...");
//         }
//     });
// };

const { FirstPromise, SecondPromise } = require("./Promises");


// const SecondPromise = (status) => {
//     return new Promise((resolve, reject) => {
//         if (status === "success") {
//             resolve("SecondPromise resolved successfully...");
//         } else {
//             reject("SecondPromise rejected...");
//         }
//     });
// };

// Call the promises with appropriate status and pass them to Promise.all
Promise.all([FirstPromise("success"), SecondPromise("success")])
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.log("One of the promises failed:", error);
    });
Promise.all([FirstPromise("success"), SecondPromise("error")])
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.log("One of the promises failed:", error);
    });

Promise.all([FirstPromise("error"), SecondPromise("error")])
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.log("One of the promises failed:", error);
    });
