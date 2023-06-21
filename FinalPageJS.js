document.addEventListener("DOMContentLoaded", function () {
   let checkButton = document.getElementById("button1") ;
   checkButton.addEventListener("click", function () {
       let message1 = document.getElementById("message1")
       let selectedOption = document.querySelector("input[name='option']:checked");
       if(selectedOption && selectedOption.value === "2")
       {
            message1.innerHTML = "Точен одговор! <br> Ја доби првата буква од зборот: <div class='letter'>P</div>"
       }
       else
       {
           message1.textContent = `Неточен одговор. Обиди се повторно.`
       }
   });

    let checkButton2 = document.getElementById("button2") ;
    checkButton2.addEventListener("click", function () {
        let message2 = document.getElementById("message2")
        let selectedOption = document.querySelector("input[name='option']:checked");
        if(selectedOption && selectedOption.value === "3")
        {
            message2.innerHTML = "Точен одговор! <br> Ја доби втората буква од зборот: <div class='letter'>Y</div>"
        }
        else
        {
            message2.textContent = `Неточен одговор. Обиди се повторно.`
        }
    });

    let checkButton3 = document.getElementById("button3") ;
    checkButton3.addEventListener("click", function () {
        let message3 = document.getElementById("message3")
        let selectedOption = document.querySelector("input[name='option']:checked");
        if(selectedOption && selectedOption.value === "3")
        {
            message3.innerHTML = "Точен одговор! <br> Ја доби третата буква од зборот: <div class='letter'>S</div>"
        }
        else
        {
            message3.textContent = `Неточен одговор. Обиди се повторно.`
        }
    });

    let button4 = document.getElementById("button4");
    button4.addEventListener("click", function () {
        let inputFour = document.getElementById("inputFour");
        let message4 = document.getElementById("message4");
        let value4 = inputFour.value.replace(/\s+/g, "").toLowerCase();
        if(value4 === 'fruits[0]="kiwi"' || value4 === "fruits[0]='kiwi'")
        {
            message4.innerHTML = "Точен одговор! <br> Ја доби четвртата буква од зборот: <div class='letter'>T</div>"
        }
        else
        {
            message4.textContent = `Неточен одговор. Обиди се повторно.`
        }

    });

    let button5 = document.getElementById("button5");
    button5.addEventListener("click", function () {
        let inputFive = document.getElementById("inputFive");
        let message5 = document.getElementById("message5");
        let value5 = inputFive.value;
        if(value5 === 'my_function()')
        {
            message5.innerHTML = "Точен одговор! <br> Ја доби петтата буква од зборот: <div class='letter'>A</div>"
        }
        else
        {
            message5.textContent = `Неточен одговор. Обиди се повторно.`
        }

    });

    let button6 = document.getElementById("button6");
    button6.addEventListener("click", function () {
        let ifInput = document.getElementById("ifInput");
        let notEqualInput = document.getElementById("notEqualInput");
        let dotInput = document.getElementById("dotInput");
        let message6 = document.getElementById("message6");
        let value6 = ifInput.value;
        let value7 = notEqualInput.value;
        let value8 = dotInput.value;
        if(value6 === 'if' && value7 === '!=' && value8 === ':')
        {
            message6.innerHTML = "Точен одговор! <br> Ја доби шестата буква од зборот: <div class='letter'>I</div>"
        }
        else
        {
            message6.textContent = `Неточен одговор. Обиди се повторно.`
        }
    });

    let button7 = document.getElementById("button7");
    button7.addEventListener("click", function () {
        let inputSeven = document.getElementById("inputSeven");
        let message7 = document.getElementById("message7");
        let value7 = inputSeven.value;
        if(value7 === 'len(fruits)')
        {
            message7.innerHTML = "Точен одговор! <br> Ја доби седмата буква од зборот: <div class='letter'>R</div>"
        }
        else
        {
            message7.textContent = `Неточен одговор. Обиди се повторно.`
        }

    });

    let button8 = document.getElementById("button8");
    button8.addEventListener("click", function () {
        let message8 = document.getElementById("message8");
        message8.innerHTML = "<br> Ја доби последната буква од зборот: <div class='letter'>S</div>"
    });
});

const secretWord = "PYSTAIRS";
const wordLength = secretWord.length;

// Create the squares for the letters
const squaresDiv = document.getElementById("squares");
for (let i = 0; i < wordLength; i++) {
    const square = document.createElement("div");
    square.className = "square";
    squaresDiv.appendChild(square);
}

let squares = document.getElementsByClassName("square");
let guessInput = document.getElementById("guessInput");
let message = document.getElementById("message");

// Function to check the user's guess
function checkGuess() {
    const guess = guessInput.value.toUpperCase();

    if (guess.length !== wordLength) {
        message.innerText = "Те молам внеси збор со " + wordLength + " букви.";
        return;
    }

    let isGuessCorrect = true; // Variable to track if the guess is correct

    // Check each letter of the guess
    for (let i = 0; i < wordLength; i++) {
        const square = squares[i];
        square.innerText = guess[i];

        if (guess[i] === secretWord[i]) {
            square.classList.remove("red");
            square.classList.add("green");
        } else {
            square.classList.remove("green");
            square.classList.add("red");
            isGuessCorrect = false; // Set isGuessCorrect to false if any letter is incorrect
        }
    }

    if (isGuessCorrect) {
        message.innerText = "Честитки!! Го погоди тајниот збор!";
    } else {
        message.innerText = "Пробај повторно!";
    }
}


$(document).ready(function() {
    $( "#popup" ).dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Ok: function(){
                $( "#popup" ).dialog("close");
            }
        }
    });

    $("#pop").click(function(){
        $( "#popup" ).dialog("open");
    });
});



