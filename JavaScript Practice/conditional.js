var temperature = 20;

if(temperature<=20){
  console.log(`
      It really cold outside
      The temperature is ${temperature} degrees
  `);
}
else{
  console.log(`
      It is not cold outside;
  `); 
}

var isLoggedIn = true;
var isEmailVerified = true;
var paymentInfo = true;

if(isLoggedIn && isEmailVerified && paymentInfo){
  console.log(`
      Course purchase succesfull
  `)
}

else{

  if(isEmailVerified ==false){
    console.log(`
      Course purchase failed as your email is not verified 
  `);
  }

if(isLoggedIn ==false){
  console.log(`
    Course purchase failed as you are not logged in 
`);
}
if(paymentInfo ==false){
  console.log(`
    Course purchase failed as your payment info is invalid 
`);
}

}
