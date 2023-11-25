//closure 4
(function immediateA(a) {
  return (function immediateA(b) {
    console.log(a);
  })(1);
})(0);
