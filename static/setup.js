var buttons = document.getElementsByClassName("size-buttons")
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", buttonClickHandler)  
}

selectButtonById("small-egg")
selectButtonById("meter")
selectButtonById("hard")

function buttonClickHandler(event) {
    console.log("== The button was clicked");
    console.log(" -- event.target:", event.target);

    var clickedButton = event.target;
    var box = clickedButton.parentNode;

    // var isSelected = clickedButton.classList.contains("selected");

    if(!clickedButton.classList.contains("selected")){
        clickedButton.classList.toggle("selected");

        var otherButtons = box.getElementsByTagName("button");
        for (var j = 0; j < otherButtons.length; j++) {
            if (otherButtons[j] != clickedButton) {
                otherButtons[j].classList.remove("selected");
            }
        }
    }

    // Store the selected button's id and category in variables or data attributes
    var selectedButtonId = clickedButton.id;
    var selectedCategory = box.getAttribute("category");
    
    console.log(" -- Selected Button Id:", selectedButtonId);
    console.log(" -- Selected Category:", selectedCategory);

    event.stopPropagation();
}

function selectButtonById(buttonId){
    var button = document.getElementById(buttonId);
    if(button) {
        button.classList.toggle("selected")
    }
}