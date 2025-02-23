// Immediately Invoked Function Expressions (IIFE)

// Global scope ke pollution se problem hoti he kyi br to us global scope ke jo variables he ya declarations he unko htane ke liye hmne IIFE ka use kiya
(function chai(){
    console.log(`DB CONNECED`);
    
  })();
  //in this case ';' is compulsory
  
  ((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
  })('hitesh')
      