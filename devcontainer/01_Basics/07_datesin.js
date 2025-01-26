// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate);//object 

let myCreatedDate = new Date(2023, 0, 23)//month started with 0 in javascript
console.log(myCreatedDate.toDateString())
let mdate = new Date(2023, 0, 23, 5,3)
console.log(mdate.toDateString())
let tdate = new Date("01-14-2025")
console.log(tdate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(tdate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = newDate()
console.log(newDate)
console.log(newDate.getMonth() + 1 )
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    
})