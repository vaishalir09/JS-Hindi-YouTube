// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2"> 1);// o/p: true  JS already "2" considered as a number 
console.log("02" > 1);// o/p: true  Not a predictable output
console.log(null > 0);// op: False comparison is null considered as a number 
console.log(null == 0);// op: False but in euality check gives false
console.log(null >= 0);// op: true

console.log( undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === its strictly check means also check datatypes of both operand
 
console.log("2" === 2); // o/p: false