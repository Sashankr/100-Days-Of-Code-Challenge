const uid = "x14411";
var firstname = "John";
var lastname = "D";
var email = "Jd@gmail.com";
var password = "12221111";
var country= "India";
var state = "TN";
var coursecount = 0;
var isLoggedInFromGoogle = true;
var isLoggedInFromFacebook = false;

console.log(`

      User ID is : ${uid}
      Firstname is : ${firstname}
      Lastname is : ${lastname}
      Email is : ${email}
      Password is : ${password}
      Lives in : ${country}, ${state}
      Number of courses taken : ${coursecount}
      Is logged in from Google :  ${isLoggedInFromGoogle}
      Is logged in from Facebook : ${isLoggedInFromFacebook}
`)

var listPrice = 799;
var sellingPrice = 199;
var discountPercentage = Math.round(((listPrice-sellingPrice)/listPrice)*100);

console.log("Discount Percentage : "+ discountPercentage+ "% OFF");