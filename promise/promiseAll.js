const promese1 = Promise.resolve(`Promise 1 resolve`);


const promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(`Promese 2 resolve`);
    }, 2000)
});

// promese1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

Promise.all([promese1, promise2]).then((res) => console.log(res));