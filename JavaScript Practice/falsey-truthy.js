/* FALSEY values
undefined
null
0
''
NaN

Falsey values always evaluate to false
Everything apart from these are truthy.

*/

if(NaN){
  console.log("not exec cause falsey");
}

if("NaN"){
  console.log("exec cause truthy");
}

//Type conversions in JavaScript