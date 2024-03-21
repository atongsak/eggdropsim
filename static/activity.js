document.addEventListener("DOMContentLoaded", function() {
    fetch("/getData")
        .then(response => response.json())
        .then(data => {
            var simulation = document.getElementById("eggvideo");
            var displayConditions = document.getElementById("display-conditions"); 
            var displayResults = document.getElementById("display-results");
            var equation = document.getElementById("equation");
            var survival = document.getElementById("egg-survival");

            simulation.src = "/simulations/" + data.simulation;
            console.log(data.simulation)

            equation.innerHTML = "F = (m * △v)/t = (" + data.mass + " kg) * (" + data.delta_v + " m/s)/(" + data.time + " s) = " + data.final_force + " N"; 

            displayConditions.innerHTML = "Mass: " + data.mass + " kg<br>Drop Height: " + data.height + " m<br>Landing Surface: " + data.surface; 

            displayResults.innerHTML = "Change in velocity: " + data.delta_v + " m/s<br>Time: " + data.time + " s<br>Resulting Force: " + data.final_force + " N";
            
            if(data.survived){
                survival.innerHTML = "The egg is SAFE.";
            } else{
                survival.innerHTML = "The egg is BROKEN.";
            }
        })
        .catch(error => console.error("Error fetching data:", error));
});

document.getElementById('back-button').addEventListener('click', function(){
    console.log("button has been pressed");
  
    window.location.href = '/setup';
});