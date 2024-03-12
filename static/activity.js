document.addEventListener("DOMContentLoaded", function() {
    fetch("/getData")
        .then(response => response.json())
        .then(data => {
            console.log("Survived:", data.survived);
            console.log("Delta V:", data.delta_v);
            console.log("Time:", data.time);
            console.log("Final Force:", data.final_force);
            console.log("Mass:", data.mass);
            console.log("Height:", data.height);
            console.log("Surface:", data.surface);

            var displaySizeElement = document.getElementById("display-size");
            var displayHeightElement = document.getElementById("display-height");
            var displaySurfaceElement = document.getElementById("display-surface");
            var equation = document.getElementById("equation");
            var survival = document.getElementById("egg-survival");
        
            displaySizeElement.innerHTML = "Selected Size: " + data.mass + " kg";
            displayHeightElement.innerHTML = "Selected Height: " + data.height + " m";
            displaySurfaceElement.innerHTML = "Selected Surface: " + data.surface;
            equation.innerHTML = "F = (m * △v)/t = (" + data.mass + " kg) * (" + data.delta_v + " m/s)/(" + data.time + " s) = " + data.final_force + " N"; 
            
            if(data.survived){
                survival.innerHTML = "The egg is SAFE.";
            } else{
                survival.innerHTML = "The egg is BROKEN.";
            }
            
        })
        .catch(error => console.error("Error fetching data:", error));
});