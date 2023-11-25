const a = 10;
const arr = [1, 2, 3, 4, 5, 6, 7];

//How is it possible?
arr.shift();
console.log(arr);

//objects
//key:value
//string,number :valid type

let object = {
  name: "digvijay",
  lastName: "Singh",
  sayHi: function () {
    console.log("Jasbir dsays Hi");
  },
};
object.sayHi();
//loops
for (let key in Object) {
  console.log(key, ":", object[key]);
}

//arrays

let arr1 = [1, 2, 3, 4, 5];
arr.myprop = "Hello";
arr.Print = function () {
  console.log("Hello from array");
};
console.log(arr);

//function

//js -> primitive or object
const Object = {
  LastName: "digvijay",
  FirsttName: "bind",
  Hello: function () {
    console.log(`this is ${LastName} and ${FirstName}`);
  },
};

const a = Object.Hello();
console.log(a);
