



function getSelectedColors() {
    var selectedColors = [];
    var checkboxes = document.getElementsByName("color");

    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i];
        if (checkbox.checked) {
            selectedColors.push(checkbox.value);
        }
    }

    if (selectedColors.length === 4) {
        displaySelectedColors(selectedColors);
        // You can perform further actions with the selected colors here
    } else {
        displayErrorMessage('Те молам избери точно 4 бои!');
    }
}

function displaySelectedColors(colors) {
    var selectedColorsDiv = document.getElementById("selectedColors");
    var candies = "candies = " + JSON.stringify(colors);
    selectedColorsDiv.innerHTML = candies;
}

function displayErrorMessage(message) {
    var selectedColorsDiv = document.getElementById("selectedColors");
    selectedColorsDiv.innerHTML = message;
}

var forInput = document.getElementById("for");
var inInput = document.getElementById("in");
var messageFor = document.getElementById("messageFor");
var messageIn = document.getElementById("messageIn");
forInput.addEventListener("input", function () {
    let value1 = forInput.value;
    if(value1 === 'for' )
    {
        messageFor.textContent = `Браво, точен одговор!`;
    }
    else
    {
        messageFor.textContent = `Имаш грешка некаде во товето решение, обиди се повторно.`
    }
    inInput.addEventListener("input", function () {
        let value2 = inInput.value;
        if(value2 === 'in' )
        {
            messageIn.textContent = `Браво, точен одговор!`;
        }
        else
        {
            messageIn.textContent = `Имаш грешка некаде во товето решение, обиди се повторно.`
        }
    });
});

var rangeInput = document.getElementById("range");
var messageRange = document.getElementById("messageRange")
rangeInput.addEventListener("input", function () {
    let value3 = rangeInput.value;
    if(value3 === 'range(6)' )
    {
        messageRange.textContent = `Браво, точен одговор!`;
    }
    else
    {
        messageRange.textContent = `Имаш грешка некаде во товето решение, обиди се повторно.`
    }
});

var breakInput = document.getElementById("break");
var messageBreak = document.getElementById("messageBreak")
breakInput.addEventListener("input", function () {
    let value4 = breakInput.value;
    if(value4 === 'break' )
    {
        messageBreak.textContent = `Браво, точен одговор!`;
    }
    else
    {
        messageBreak.textContent = `Имаш грешка некаде во товето решение, обиди се повторно.`
    }
});

function redirectToPage() {
    window.location.href = "index.html";
}
