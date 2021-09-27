function yrName() {
  var people = prompt("What is your preferred name?");
  document.getElementById("theNameHere").innerHTML = "Hello " + people +" !";
  alert("The name had been changed to " + people + ". Thank you !");
  console.log("The name has been change to " + people);
}
