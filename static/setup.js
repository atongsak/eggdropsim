var selectedConditions = {
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
    localStorage.setItem('selectedConditions', JSON.stringify(selectedConditions));
    window.location.href = '/activity';
});

selectButtonById("small-egg")
selectButtonById("meter")
selectButtonById("hard")

console.log(selectedConditions);

function buttonClickHandler(event) {
    console.log("== The button was clicked");
    // console.log(" -- event.target:", event.target);

    var clickedButton = event.target;
    var box = clickedButton.parentNode;

    // Store the selected button's id and category in variables or data attributes
    var selectedCategory = box.getAttribute("category");
    var selectedButtonId = clickedButton.id;

    // var isSelected = clickedButton.classList.contains("selected");

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
            selectedConditions.size = selectedButtonId;
        } else if(selectedCategory == "height"){
            selectedConditions.height = selectedButtonId;
        } else if(selectedCategory == "surface") {
            selectedConditions.surface = selectedButtonId;
        }

        console.log(selectedConditions);
    }

    event.stopPropagation();
}

function selectButtonById(buttonId){
    var button = document.getElementById(buttonId);
    if(button) {
        button.classList.toggle("selected")
    }
}

