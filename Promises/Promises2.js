let p1 = new Promise(function (resolve, reject) {
  resolve("Promise 1 is resolved");
});

let p2 = new Promise(function (resolve, reject) {
  resolve("p2 is resolve");
});

let p3 = new Promise(function (resolve, reject) {
  resolve("p3 is reject");
});

let promiseAll = Promise.all([p1, p2, p3]);
promiseAll
  .then((PromiseArr) => {
    console.log(PromiseArr);
  })
  .catch((err) => {
    console.log(err);
  });
