//Types of functions ->
//function statement

//define
function sayHello(param) {
  console.log("hello", param);
}
sayHello(10);

//sayHello(10);

let rVal = sayHello(14);
console.log("rVal", rVal);

//function expression
let fnContainer = function () {
  console.log("I am expresssion");
};
fnContainer();
