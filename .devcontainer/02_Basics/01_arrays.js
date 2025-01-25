// array // in js array while performing copy operations then always make a shallow copy 
// Shallow copies:A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
// Deep copies:A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9)
console.log(myArr)
myArr.shift()
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();//join is bind a data and also converted into string format 

console.log(myArr);
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("c ", myArr);
console.log(myn2);