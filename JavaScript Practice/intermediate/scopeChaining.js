var name = "Sashank";
console.log(`Global Scope value for name is used : ${name}`);

function say_My_Name(){
  var name = "Joe"; /* If we would have commented out the name variable 
  inside this function, the name will be taken from the global scope 
  which would be Sashank*/
  console.log(`Name from function say_My_Name is ${name} `); /*Joe is printed */ 

  function say_This_Name(){
    console.log(`Name from function say_This_Name is ${name} `); 
  }

  say_This_Name();/*Joe is printed 
  because there is no name variable in the say_This_Name function,
  if the outer function say_My_Name wouldn't have had a name variable,
  the value would be taken from the Global scope name variable.
  */
}
say_My_Name();