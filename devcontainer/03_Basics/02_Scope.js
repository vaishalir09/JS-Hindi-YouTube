//var c = 300

let a =300


if(true){
  let a = 10
  const b = 20
  console.log("INNER");
  function addnum(){

  }
 
}
 

console.log(a); 
//console.log(b);   
//console.log(c);


function one(){
  const username = "hitesh"

  function two(){
    const website = "youtube"
    console.log(username);
    
  }
  //console.log(website);
   
  two()
}

//one()

if(true){
  const username = "hitesh"
  if(username === "hitesh"){
    const website = " youtube"
    console.log(username + website);
    
  }
  // console.log(website);
   

}

//console.log(username);


// ++++++++++++++++ intersting ++++++++++++++++++++++++


addone(5)


function addone(num){
  return num + 1
}


addTwo(5)// in this case gives a error because function hold in a variable

const addTwo = function(num){
  return num + 2
}