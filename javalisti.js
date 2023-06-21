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

function extractAndDisplayText() {
    var userInput = document.getElementById("userInput").value;
    var extractedText = extractText(userInput);
    document.getElementById("displayArea").innerText = extractedText;
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
        return "Не ти е правилно внесена print функцијата"; // Return default message if no text is found
    }
}
function extractAndDisplayText() {
    var userInput = document.getElementById("userInput").value;
    var extractedText = extractText(userInput);
    document.getElementById("displayArea").innerText = extractedText;
}
// Get elements
const categorySelect = document.getElementById('categorySelect');
const inputArea = document.getElementById('inputArea');
const categoryName = document.getElementById('categoryName');
const listItemInput = document.getElementById('listItemInput');
const printBtn = document.getElementById('printBtn');
const listItems = document.getElementById('listItems');

// Categories and corresponding items
const categories = {
    fruits: 'Овошје',
    clothes: 'Облека',
    drink: 'Пијалок'
};

const items = {
    fruits: [],
    clothes: [],
    drink: []
};

// Function to display the input area for the selected category
function selectCategory() {
    const selectedCategory = categorySelect.value;
    if (selectedCategory) {
        inputArea.style.display = 'block';
        categoryName.textContent = categories[selectedCategory];
        listItemInput.value = '';
        listItemInput.focus();
    } else {
        inputArea.style.display = 'none';
    }
    printBtn.disabled = true;
    listItems.innerHTML = '';
}

// Function to update the list based on the input
function updateList() {
    const selectedCategory = categorySelect.value;
    const input = listItemInput.value.trim();

    if (input === '') {
        printBtn.disabled = true;
        listItems.innerHTML = '';
        return;
    }

    const regex = /myList\s*=\s*\[([^\]]+)\]/;
    const match = input.match(regex);

    if (match && match[1]) {
        const itemList = match[1].split(',').map(item => item.trim().replace(/"/g, ''));
        if (itemList.length === 5) {
            items[selectedCategory] = itemList;
            printBtn.disabled = false;
            listItems.innerHTML = itemList.map(item => `<li>${item}</li>`).join('');
        } else {
            printBtn.disabled = true;
            listItems.innerHTML = '<li>Те молам внеси точно 5 елементи</li>';
        }
    } else {
        printBtn.disabled = true;
        listItems.innerHTML = '<li>Внеси ги во овој формат "myList = ["item1", "item2", "item3", "item4", "item5"]<br>Имаш помалку од 5 елементи.</li>';
    }
}

