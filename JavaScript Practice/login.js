//Here we will allow user to view the course if he has logged in from:
//email
//google
//facebook

var email = false;
var google = true;
var facebook = false;

/* LONG WAY
if(email){
  console.log("Login success through email, you can view our courses now");
}

if(google){
  console.log("Login success through google, you can view our course now");
}

if(facebook){
  console.log("Login success through facebook, you can view our courses now");
}
*/

//SHORT WAY
if(email || facebook || google){
  console.log("Login success, you can view our courses now");
}