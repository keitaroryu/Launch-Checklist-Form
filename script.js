// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(){
      let pilotNameText = document.querySelector("input[name=pilotName]");
      let copilotNameText = document.querySelector("input[name=copilotName]");
      let fuelLevelText = document.querySelector("input[name=fuelLevel]");
      let cargoMassText = document.querySelector("input[name=cargoMass]");

      if(pilotNameText.value === "" || copilotNameText.value === "" || fuelLevelText.value === "" || 
      cargoMassText.value === "" || isNaN(fuelLevelText.value) || isNaN(cargoMassText.value)){
         alert('All fields required. Only numbers in "Fuel Level" and "Cargo Mass" fields.');
         event.preventDefault();
      }   
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
