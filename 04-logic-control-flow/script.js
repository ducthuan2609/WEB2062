// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

if(" "){
    console.log("true");
}else{
    console.log("false");
}

// using ternary-operator
const age = 17;

// Using an if statement
if (age >= 18) {
  console.log('Di hoc dai hoc');
} else {
  console.log('Chua duoc di hoc dai hoc');
}

// Using a ternary operator
const doSomething = age >= 18 ? 'Di hoc dai hoc' : 'Chua duoc di hoc dai hoc';
console.log(doSomething);