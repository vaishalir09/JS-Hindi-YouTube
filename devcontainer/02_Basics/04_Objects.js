
 //const tinderUser = new Object()//Its a singleton Object
 const tinderUser = {} 
 tinderUser.id = "123abc"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false

 //console.log(tinderUser);

 const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullnmae:{
          firstname: "hitesh",
          lastname: "choudhary"

        } 
    }
 }

 console.log(regularUser.fullname.userfullnmae.firstname);

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}
 const obj4 = {5: "a", 6: "b"}

 //const obj3 = { obj1, obj2 }
 //const obj3 = Object.assign({}, obj1, obj2, obj4)
 const obj3 = {...obj1, ...obj2}
 console.log(obj3);

 const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
 ]

 users[1].email
 console.log(tinderUser);

 console.log(Object.keys(tinderUser));    
 console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
  }
   
  // course.courseInstructor
  
  const {courseInstructor: instructor} = course
  
  //console.log(courseInstructor);
  console.log(instructor);
  
  //{
    //  "name": "hitesh",
    //  "courseName": "js in hindi",
    //  "price": "free"
  //}
  
  [
      {},
      {},
      {}
  ]
   
console.log(tinderUser.hasOwnProperty('isLogged'));


 
 
 