// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.getElementById('launchForm');
   let submit= document.getElementById('formSubmit');
   submit.addEventListener('click', function(){
      let pilot = document.getElementById("pilotName");
      let copilot = document.querySelector("input[name='copilotName']");
      let fuel = document.querySelector("input[name='fuelLevel']");
      let cargo = document.querySelector("input[name='cargoMass']");
     
      let alert = "";
      if (pilot.value === '' || copilot.value === '' || fuel.value === '' || cargo.value === '' ) {
         alert += "\nAll feilds are requierd."
      }
      if (typeof pilot.value !== "string" || typeof copilot.value !==  "string") {
         console.log(pilot.value)
         console.log(typeof pilot.value)
         console.log(copilot.value)
         console.log(typeof copilot.value)
         alert += "\nPilot and Co-Pilot Names cannot be numbers"
      } 
      if (  isNaN(Number(fuel.value)) ||  isNaN(Number(cargo.value)) ) {
         alert += "\nFuel level and Cargo Mass must be numerical values"
      } 
      if (alert !== "") {
         window.alert(alert)
         event.preventDefault();
      }
      else {
      let pilotStatus = document.getElementById('pilotStatus')
      let copilotStatus = document.getElementById('copilotStatus')
      pilotStatus.innerHTML += `: ${pilot}`
      copilotStatus.innerHTML += `: ${copilot}`
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
