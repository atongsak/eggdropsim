var selectedConditions = JSON.parse(localStorage.getItem('selectedConditions')) || {
    size: "small-egg",
    height: "meter",
    surface: "hard"
};

var mass, height, surface;

console.log(selectedConditions);

function displaySelectedConditions() {
    if(selectedConditions.size == "small-egg"){
        mass = 0.040;
    } else if(selectedConditions.size == "large-egg"){
        mass = 0.060;
    } else if(selectedConditions.size == "jumbo-egg"){
        mass = 0.080;
    }

    if(selectedConditions.height == "meter"){
        height = 1.0;
    } else if(selectedConditions.height == "fivemeters"){
        height = 5.0;
    } else if(selectedConditions.height == "tenmeters"){
        height = 10.0;
    }

    if(selectedConditions.surface == "hard"){
        surface = "Hard floor";
    } else if(selectedConditions.surface == "inchfoam"){
        surface = "1-inch foam";
    } else if(selectedConditions.surface == "foambox"){
        surface = "Foam box";
    }

    var displaySizeElement = document.getElementById("display-size");
    var displayHeightElement = document.getElementById("display-height");
    var displaySurfaceElement = document.getElementById("display-surface");
    var equation = document.getElementById("equation");

    // displaySizeElement.innerHTML = "Selected Size: " + selectedConditions.size;
    // displayHeightElement.innerHTML = "Selected Height: " + selectedConditions.height;
    // displaySurfaceElement.innerHTML = "Selected Surface: " + selectedConditions.surface;
    displaySizeElement.innerHTML = "Selected Size: " + mass + " kg";
    displayHeightElement.innerHTML = "Selected Height: " + height + " m";
    displaySurfaceElement.innerHTML = "Selected Surface: " + surface;
    equation.innerHTML = "F = (m * △v)/t = (" + mass + " kg) * ([velocity] m/s)/([time] s)"; 
}

displaySelectedConditions();