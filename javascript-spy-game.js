var first_name = prompt("What is you first name:")
var last_name = prompt("What is you last name:")
var age = prompt("How old are you:")
var height = prompt("How tall are you in centimeters:")
var pet = prompt("What is the name of your pet:")
alert("Thank you for the information!")

if (first_name[0] == last_name[0]  && 20<age<30 &&
height>=170 && pet.slice(-1) === "y") {
  console.log("Hello Spy!");
}
 else {
   console.log("Nothing here to show");
 }
