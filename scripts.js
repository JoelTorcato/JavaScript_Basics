// Hosting
// var a = undefined;

console.log(a);

var a = 2;

var x = 1; // Function scope
let y = 2; // Block scope
const z = 3 

console.log(`Global: ${x}`);
console.log(`Global: ${y}`);
console.log(`Global: ${z}`);

function myFunc() {
  var x = 10;
  const z = 5;

  {
    var x = 11; // Function scope
    const z = 6; // Block scope

    console.log(`Block: ${x}`);
    console.log(`Block: ${y}`);
    console.log(`Block: ${z}`);
  }

  console.log(`Function: ${x}`);
  console.log(`Function: ${y}`);
  console.log(`Function: ${z}`);
}

myFunc()