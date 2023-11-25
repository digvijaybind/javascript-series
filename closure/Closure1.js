//closure
function add(a, b) {
  var a = 5;
  function addB() {
    var result = a + 5;
    return result;
  }
  return addB;
}
const Final = add();
console.log(Final);
Final();
console.log(Final());
