var newData = {
    size: "small-egg",
    height: "meter",
    surface: "hard"
};

var buttons = document.getElementsByClassName("size-buttons")
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', buttonClickHandler)  
}

document.getElementById('runtrial').addEventListener('click', function(){
    console.log("run trial");

    // Make a request to the server to update selectedConditions
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/setup', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // Server response, if needed
                var response = JSON.parse(xhr.responseText);
                console.log("Server response:", response.message);
            } else {
                console.error("Error:", xhr.status, xhr.statusText);
            }
        }
    };

    // Send the updated data to the server
    xhr.send(JSON.stringify({ newData }));

    // Redirect to '/activity' 
    setTimeout(function(){    
        window.location.href = '/activity';
    }, 4000);
});

selectButtonById("small-egg")
selectButtonById("meter")
selectButtonById("hard")

console.log(newData);

function buttonClickHandler(event) {
    console.log("== The button was clicked");

    var clickedButton = event.target;
    var box = clickedButton.parentNode;

    // Store the selected button's id and category in variables or data attributes
    var selectedCategory = box.getAttribute("category");
    var selectedButtonId = clickedButton.id;

    if(!clickedButton.classList.contains("selected") && selectedCategory != null){
        clickedButton.classList.toggle("selected");

        var otherButtons = box.getElementsByTagName("button");
        for (var j = 0; j < otherButtons.length; j++) {
            if (otherButtons[j] != clickedButton) {
                otherButtons[j].classList.remove("selected");
            }
        }

        console.log(" -- Selected Button Id:", selectedButtonId);
        console.log(" -- Selected Category:", selectedCategory);

        if(selectedCategory == "size"){
            newData.size = selectedButtonId;
        } else if(selectedCategory == "height"){
            newData.height = selectedButtonId;
        } else if(selectedCategory == "surface") {
            newData.surface = selectedButtonId;
        }

        console.log(newData);
    }

    event.stopPropagation();
}

function selectButtonById(buttonId){
    var button = document.getElementById(buttonId);
    if(button) {
        button.classList.toggle("selected")
    }
}

