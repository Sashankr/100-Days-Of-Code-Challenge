//An example of global context at work

sayHello(); //The global context has kept track of the function sayHello which is why we are able to access it.

function sayHello(){
  console.log("Hello");
}

//Example 2 for global context

console.log(name); //->Undefined
var name = "Sashank"; /*Here we see that the global context has 
scanned the variable and assigned it a value undefined*/


//Example of execution context at work

// tip(100); //As you can see if we declare a function with a variable, the execution context has set the variable to undefined due to which we get an error saying {tip is not a function}

var tip = function(billAmount){
  console.log(`Total bill with tip of 5 dollars is `+(billAmount+5));
}

tip(100);


//An example with a mix of global and execution context.

console.log(name); //->Undefined in global context
var name = "Sashank";

function sayName(){
  var name = "Joe";
  console.log(`Hello ${name}`);
}
sayName(); /* Here the execution context comes in and executes 
the sayName function and prints the name Joe.
 */

console.log(name); /* -> Sashank because now the global context 
has assigned name with value of Sashank*/