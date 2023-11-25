//pure function  && side effect
//mutability and Immuntabitity

const x = 5;
const xSquared = x * x;

let isEven;

if (xSquared % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}
console.log(isEven);

//Declarative

const isSquareEven = (x) => ((x * x) % 2 === 0 ? true : false);
console.log(isSquareEven(5));
