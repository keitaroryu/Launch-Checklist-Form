// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(){
      let pilotNameText = document.querySelector("input[name=pilotName]");
      let copilotNameText = document.querySelector("input[name=copilotName]");
      let fuelLevelText = document.querySelector("input[name=fuelLevel]");
      let cargoMassText = document.querySelector("input[name=cargoMass]");

      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");
      let faultyItems = document.getElementById("faultyItems");

      if(pilotNameText.value === "" || copilotNameText.value === "" || fuelLevelText.value === "" || 
      cargoMassText.value === ""){
         alert('All fields are required.');
         event.preventDefault();

      } else if(isNaN(fuelLevelText.value) || isNaN(cargoMassText.value)){
         alert('Make sure to enter valid information for each field!');
         event.preventDefault();

      } else {
         pilotStatus.innerHTML = `Pilot ${pilotNameText.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotNameText.value} is ready for launch`;
   
         if(fuelLevelText.value < 10000){
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            event.preventDefault();
         } else {
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
         }

         if(cargoMassText.value >10000){
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = `Cargo mass too high for launch`;
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            event.preventDefault();
         } else {
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
         }

         if(fuelLevelText.value >= 10000 && cargoMassText.value <=10000){
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";

            fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
               response.json().then(function(json){
                  const missionTarget = document.getElementById("missionTarget");
                  let index = Math.floor(Math.random()*6); //Bonus: Added Randomizer to Planet Fetch

                  missionTarget.innerHTML = `
                     <h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${json[index].name}</li>
                        <li>Diameter: ${json[index].diameter}</li>
                        <li>Star: ${json[index].star}</li>
                        <li>Distance from Earth: ${json[index].distance}</li>
                        <li>Number of Moons: ${json[index].moons}</li>
                     </ol>
                     <img src="${json[index].image}">
                  `;
               });
            });

            event.preventDefault();
         }
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
