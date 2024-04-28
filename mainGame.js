<!-- ------------ main javascript ------------ -->

// Get the roundsValue element
var roundsValueElement = document.getElementById('roundsValue');

// Get the next round button
var nextRoundButton = document.getElementById('nextRoundButton');

// Add click event listener to the button
nextRoundButton.addEventListener('click', function() {
    // Get the current round value and parse it as an integer
    var currentRound = parseInt(roundsValueElement.textContent);

    // Increment the round value
    var nextRound = currentRound + 1;

    // Update the round value in the DOM
    roundsValueElement.textContent = nextRound;
});

// Function to update and store value in localStorage
function updateAndStoreValue(elementId) {
    // Get the value from the element
    let value = document.getElementById(elementId).textContent;
    // Store the value in localStorage
    localStorage.setItem(elementId, value);
}
// Function to retrieve and update value from localStorage
function retrieveAndUpdateValue(elementId) {
    // Retrieve the value from localStorage
    let storedValue = localStorage.getItem(elementId);
    if (storedValue !== null) {
        // Update the value in the element
        document.getElementById(elementId).textContent = storedValue;
        // Update styles if necessary (assuming NumberStyler is defined)
        const styler = new NumberStyler(elementId);
        styler.updateStyles();
    }
}
// Call retrieveAndUpdateValue for each element you want to initialize on page load
$(document).ready(function() {
    retrieveAndUpdateValue('walletValue');
    retrieveAndUpdateValue('totalAssetsValue');
    retrieveAndUpdateValue('totalCustomers')
    retrieveAndUpdateValue('roundsValue')

    // Call additional functions as needed
});
// Update and store values when they change
$(document).ready(function() {
    // Example for updating and storing wallet value
    let wallet = $('#walletValue').text(); // Get current wallet value
    $('#walletValue').text(wallet); // Update wallet value
    updateAndStoreValue('walletValue'); // Store wallet value

    let customers = $('#totalCustomers').text(); // Get current wallet value
    $('#totalCustomers').text(customers); // Update wallet value
    updateAndStoreValue('totalCustomers'); // Store wallet value

    let rounds = $('#roundsValue').text(); // Get current wallet value
    $('#roundsValue').text(rounds); // Update wallet value
    updateAndStoreValue('roundsValue'); // Store wallet value


    // Similarly update and store other values as needed
});



// number script
class NumberStyler {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.updateStyles();
    }

    updateStyles() {
        // Check if the element has the class 'navbar-text'
        if (!this.element.parentElement.classList.contains('navbar-text')) {
            const value = parseInt(this.element.textContent);
            if (value > 0) {
                this.element.classList.add('positive');
                this.element.classList.remove('negative', 'zero');
            } else if (value < 0) {
                this.element.classList.add('negative');
                this.element.classList.remove('positive', 'zero');
            } else {
                this.element.classList.add('zero');
                this.element.classList.remove('positive', 'negative');
            }
        }
    }
}



// popup script
$(document).ready(function() {
    // Retrieve and update company name on page load
    let companyName = localStorage.getItem('companyName');
    if (companyName) {
        $('.companyName').text(companyName);
    }

    // Check if popups have been shown before
    let popupsShown = localStorage.getItem('popupsShown');
    if (!popupsShown) {
        // Show first popup on page load if not shown before
        $('.firstPopup').modal('show');
    }

    // Event handler for saving company name and showing second popup
    $('#saveCompanyName').click(function() {
        let newName = $('#companyNameInput').val();
        if (newName) {
            $('.companyName').text(newName); // Set company name in the span
            localStorage.setItem('companyName', newName); // Save company name in localStorage
        }
        $('.firstPopup').modal('hide'); // Close first popup
        $('.secondPopup').modal('show'); // Show second popup
    });

    // Event handler for updating values based on selected difficulty
    $('.secondPopup .btn').click(function() {
        let level = $(this).siblings('h5').text().trim(); // Get the difficulty level
        let wallet = $(this).siblings('p').eq(0).text().split(': ')[1].trim(); // Get wallet value
        let customers = $(this).siblings('p').eq(2).text().split(': ')[1].trim(); // Get customers value
        $('#walletValue').text(wallet); // Update wallet value
        $('#totalCustomers').text(customers); // Update customers value
        // Update styles for totalCustomers (assuming NumberStyler is defined)
        const totalCustomersStyler = new NumberStyler('totalCustomers');
        totalCustomersStyler.updateStyles();
        // Update and store values in localStorage
        updateAndStoreValue('walletValue');
        updateAndStoreValue('totalCustomers');
        $('.secondPopup').modal('hide'); // Close second popup
        // Mark popups as shown
        localStorage.setItem('popupsShown', 'true');
    });

    // Event handler for the exit button in popup
    $('.exit-button').click(function() {
        // Reshow the popup
        $('.firstPopup').modal('show');
        // Clear local storage
        clearLocalStorage();
    });

    // Function to clear local storage
    function clearLocalStorage() {
        localStorage.clear();
    }

    // Function to update and store value in localStorage
    function updateAndStoreValue(elementId) {
        let value = $('#' + elementId).text();
        localStorage.setItem(elementId, value);
    }
});



// temp title Maximus script
document.getElementById("buy-button").addEventListener("click", function () {
    // Implement buy functionality here
});

document.getElementById("sell-button").addEventListener("click", function () {
    // Implement sell functionality here
});

document.getElementById("bake-button").addEventListener("click", function () {
    // Implement bake functionality here
});

document.getElementById("market-button").addEventListener("click", function () {
    // Implement market functionality here
});

document
    .getElementById("ingredients-button")
    .addEventListener("click", function () {
        // Implement ingredients functionality here
    });
