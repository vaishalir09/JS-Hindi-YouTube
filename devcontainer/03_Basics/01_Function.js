console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");

function sayMyName(){
  console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}  

//sayMyName()

//function addTwoNumbers(number1, Number2){
  //console.log(number1 + Number2);
  
//}

function addTwoNumbers(number1, number2){
  //let result = number1 + Number2;
  //return result
  return number1+number2
}

const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);


addTwoNumbers(3, "4")// null,"a"

function loginUserMessage(username){
  if(username === undefined){
    console.log("Please enter a username");
    return 
  }
  return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());// if we do not pass any value so print is "undefined"

 function calculateCartPrice(...num1){
    return num1
 }

 //console.log(calculateCartPrice(200, 400, 500, 2000));
 
const user = {
  username: "hitesh",
  price: 199
} 

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  
}

//handleObject(user )
handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}