// function scopr
//its become function  scope

// for(var i=0;i<=5;i++){
//     setTimeout(function log(){
//         console.log(i)

//     },1000)
// }

// another solution 2
//  for(let i=0;i<=5;i++){
//     setTimeout(function log(){
//         console.log(i)
//     },1000)
//  }

//another solution 3

for (var i = 0; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(function log() {
      console.log(j);
    }, 1000);
  })();
}
