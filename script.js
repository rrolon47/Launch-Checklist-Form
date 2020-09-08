// Write your JavaScript code here!
window.addEventListener("load", function(){
   console.log("Page Loaded");
   let submit= document.getElementById('formSubmit');
   
   let pilot = document.getElementById("pilotName");
   let copilot = document.querySelector("input[name='copilotName']");
   let fuel = document.querySelector("input[name='fuelLevel']");
   let cargo = document.querySelector("input[name='cargoMass']");
   
   let pilotStatus = document.getElementById('pilotStatus')
   let copilotStatus = document.getElementById('copilotStatus')
   let fuelStatus = document.getElementById('fuelStatus')
   let cargoStatus = document.getElementById('cargoStatus')
   let launchStatus = document.getElementById("launchStatus")
   let faultyItems = document.getElementById("faultyItems");

   submit.addEventListener('click', function(event){
      console.log("button clicked");
      console.log('name value--' + pilot.value +'--');
   
      let alert = "";
      if (pilot.value === '' || copilot.value === '' || fuel.value === '' || cargo.value === '' ) {
         alert += "\nAll feilds are requierd.";
      } 
      if ( !isNaN(Number(pilot.value)) ||  !isNaN(Number(copilot.value)) ) {
         alert += "\nPilot and Co-Pilot Names cannot be numbers";
      } 
      if (  isNaN(Number(fuel.value)) ||  isNaN(Number(cargo.value)) ) {
         alert += "\nFuel level and Cargo Mass must be numerical values";
      } 
      if (alert !== "") {
         window.alert(alert);
         event.preventDefault();
      }  
      else {
      pilotStatus.innerHTML = `Pilot ${pilot.value} is ready.`;
      copilotStatus.innerHTML = `Co-pilot  ${copilot.value} is ready.`;
      fuel.value < 10000 ? fuelStatus.innerHTML = "Not enough fuel for the journey" : fuelStatus.innerHTML;
      cargo.value > 10000 ? cargoStatus.innerHTML = "Too much mass for the shuttle to take off" : cargoStatus.innerHTML;
      fuel.value < 10000 || cargo.value > 10000 ? launchStatus.innerHTML = "Shuttle not ready for launch" : launchStatus.innerHTML = "Shuttle is ready for launch";
      fuel.value < 10000 || cargo.value > 10000 ? launchStatus.style.color = "red" : launchStatus.style.color = "green";
      fuel.value < 10000 || cargo.value > 10000 ? faultyItems.style.visibility = 'visible' : faultyItems.style.visibility;
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
