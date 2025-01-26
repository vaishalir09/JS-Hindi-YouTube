// Singleton 
// Object.create 

// Object literals

const mySym = Symbol("key1 ")
const JsUser = {
   name: "Vaishali",
   "full name": "Vaishali Rathod",
   [mySym]: "mykey1",//this syntax refers to Symbol use in objects as a keys format
   age: +19,
   location: "Jaipur",
   email: "vaishalir888@gmail.com",
   isLoggedIn: false,
   lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])//Print Symbol
console.log(typeof JsUser.mySym)

JsUser.email = "sonamr2309@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "sonamr888@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
   console.log("Hello Js User")
}

JsUser.greetingtwo = function(){
   console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
