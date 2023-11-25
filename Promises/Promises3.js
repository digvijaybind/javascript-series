let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise1 is resolve ");
  }, 2000);
});

let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise 2 is resolved ");
  }, 1000);
});

Promise.race([p1, p2]).then((val) => {
  console.log(val);
});
