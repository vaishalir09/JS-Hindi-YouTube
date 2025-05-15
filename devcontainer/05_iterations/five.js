//forEach
const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( function (val) {
    console.log(val);
})

coding.forEach( (item) => {
    console.log(item);
})

function printitem(item) {
    console.log(item);
    
}
coding.forEach(printitem)

coding.forEach((item, index, arr)=> {
    console.log(item, index, arr);  
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "JAVA",
        languageFileName: "JAVA"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    
]
myCoding.forEach((item) =>{
   console.log(item.languageName);
    
})