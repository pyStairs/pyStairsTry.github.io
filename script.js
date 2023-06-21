function toggleDropdown(section) {
  const dropdown = document.getElementById(section + "Dropdown");
  dropdown.classList.toggle("show");
}
function checkEnterKey(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    extractAndDisplayText();
  }
}


function extractText(input) {
  var regex = /['+"]([^'"]+)['+"]/ // Regular expression to match text within quotes
  var match = regex.exec(input);

  if (match && match[1]) {
    var extractedText = match[1].toLowerCase();
    if (extractedText === "замок" || extractedText === "zamok") {
      return match[1] + "\nБраво, го најде клучот!Сега можеш да ги истражуваш мистериите во замокот."; // Return success message
    } else {
      return "Тоа не е магичниот збор.Пробај пак!"; // Return incorrect message
    }
  } else {
    return "Не ти е правилно внесена print функцијата"; // Return default message

  }

}
function extractAndDisplayText() {
  var userInput = document.getElementById("userInput").value;
  var extractedText = extractText(userInput);
  document.getElementById("displayArea").innerText = extractedText;
}

window.addEventListener('DOMContentLoaded', (event) => {
  var secretNumber = Math.floor(Math.random() * 10) + 1;
  var attempt = 1;

  var guessInput = document.getElementById("guess");
  var submitBtn = document.getElementById("submitBtn");
  var gameElement = document.getElementById("listsDropdown");

  submitBtn.addEventListener("click", checkGuess);

  function checkGuess() {
    var guess = parseInt(guessInput.value);

    var messageElement = document.createElement("p");

    // ...

    if (guess === secretNumber) {
      messageElement.textContent = "Браво, го пронајде вистинскиот ковчег!";
      messageElement.style.color = "green";
      gameElement.innerHTML = "";
      gameElement.appendChild(submitBtn);
      gameElement.appendChild(guessInput);
      gameElement.appendChild(messageElement);
      guessInput.disabled = true;
      submitBtn.disabled = true;
      var additionalHTML = `
        <p>Клучот е во ковчегот.<br>Сега за да го отвориш ковчегот треба да ја решиш загатката, со тоа што сам ќе ја употребиш print() функцијата.</p>
        <p>За да ја решиш загатката, мораш да го напишеш магичниот збор.<br>
          Hint: магичниот збор е претставен во насловот! (и има 5 букви)</p>
        <input type="text" id="userInput" onkeydown="checkEnterKey(event)">
        <p id="displayArea"></p>
      `;

      gameElement.innerHTML += additionalHTML;

      // Update the display property of the elements to "block"
      var additionalElements = document.querySelectorAll("#listsDropdown .hidden");
      additionalElements.forEach(function (element) {
        element.style.display = "block";
      });
    }

    // ...

    else if (guess < secretNumber) {
      messageElement.textContent = "Многу е мал ковчегот, пробај поголем";
      messageElement.style.color = "red";
      gameElement.appendChild(messageElement);
      attempt++;
    } else {
      messageElement.textContent = "Многу е голем ковчегот, пробај помал.";
      messageElement.style.color = "red";
      gameElement.appendChild(messageElement);
      attempt++;
    }

    if (attempt === 5) {
      messageElement.textContent = "Немаш повеќе обиди. Клучот се наоѓаше во ковчегот број " + secretNumber + ".За повторен обид направи refresh на страната.";
      messageElement.style.color = "red";
      gameElement.innerHTML = "";
      gameElement.appendChild(submitBtn);
      gameElement.appendChild(guessInput);
      gameElement.appendChild(messageElement);
      guessInput.disabled = true;
      submitBtn.disabled = true;
    }

    guessInput.value = "";
    document.getElementById("attempt").textContent = attempt;
  }
});
