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

   submit.addEventListener('click', function(event){
      console.log("button clicked");
      console.log('name value--' + pilot.value +'--')
   
      let alert = "";
      if (pilot.value === '' || copilot.value === '' || fuel.value === '' || cargo.value === '' ) {
         alert += "\nAll feilds are requierd."
      } 
      if ( !isNaN(Number(pilot.value)) ||  !isNaN(Number(copilot.value)) ) {
         alert += "\nPilot and Co-Pilot Names cannot be numbers"
      } 
      if (  isNaN(Number(fuel.value)) ||  isNaN(Number(cargo.value)) ) {
         alert += "\nFuel level and Cargo Mass must be numerical values"
      } 
      if (alert !== "") {
         window.alert(alert)
         event.preventDefault();
      }  
   //    else {
   //    let faultyItems = document.getElementById("faultyItems")
   //    let faultyItemsVisible = faultyItems.style.visibility;
   //    faultyItemsVisible = 'visible';
   //    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready.`;
   //    copilotStatus.innerHTML = `Pilot  ${copilot.value} is ready.`;
   //   }

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
