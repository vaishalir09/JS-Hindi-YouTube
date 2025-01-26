const accountId = 144553;
let accountEmail= "hitesh@google.com";
var accountPassword ="12345";//var is not a recommended to use
accountCity="Jaipur";
let accountState;
//accountId=2;//not allowed 
accountEmail="hc@hc.com";
accountPassword="21212121";
accountCity="Bengaluru";
 console.log(accountId);



 /*
 prefer not to use var
 because of issue in block scope and functional scope
  */




 console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);  