// this is a script running server-side ts-node - adding variables in .env file
//to system's environment variables. Next

console.log("Set-env");

require('dotenv').config();

//delet this
console.log(process.env);