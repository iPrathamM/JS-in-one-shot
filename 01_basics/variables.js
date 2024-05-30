const accountId = 144553
let accountEmail = "PM@google.com"
var accountPassword = "12345"
accountCity = "Bombay"

let accountState;


//accountId = 2 // Not allowed

accountEmail = "PM@pm.com"
accountPassword = "01"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])