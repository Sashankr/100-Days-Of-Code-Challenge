/*

Here we will be using the switch case to execute code based on the passed arguement value.

switch(value){
  case value1 : code;
          break;
            case value2: code;
          break;
            case value3 : code;
          break;

  default : cosole.log("Default value");
            break;
}

*/

// Lets build an app with different users, each user has a different permission

//admin - has all access
//subadmin- has access to create/delete courses
//testmaster - has accesss to create tests
//user - has access to view content

var userType = "admin";

switch(userType){
  case "admin": console.log("has all access");
                break;
  case "subadmin": console.log("has access to create/delete courses");
  break;
  case "testmaster": console.log("has accesss to create tests");
  break;
  case "user": console.log(" has access to view content");
  break;              

   default : console.log("Trial User"); 
}



