
const promese1 =new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 1 resolve`);
    }, 5000);
})



const promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(`Promese 2 resolve`);
    }, 2000)
});

// promese1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

Promise.race([promese1, promise2]).then((res) => console.log(res));