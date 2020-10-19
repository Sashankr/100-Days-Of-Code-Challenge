// The purpose of this code is to print out specific messages based on the type of users.

/* Types of users
admin - Has all access
superadmin - Can create and delete courses
testprep - Can create and delete tests
user- Can view content on website
trial - User with restricted access
*/

var getUserRole = function (name, role) {

  switch (role) {
    case "admin":
      return `${name} is an admin and has all access`;

    case "subadmin":
      return `${name} is a subadmin and create/delete courses`;

    case "testprep":
      return `${name} is a test preparation user and create/delete tests`;
    case "user":
      return `${name} is a user and can view courses`;

    default:
      return `${name} is a trial user`;
  }

}

console.log(getUserRole("Sashank","admin"));