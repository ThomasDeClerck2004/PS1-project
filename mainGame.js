<!-- ------------ main javascript ------------ -->

// Function to update and store value in localStorage
function updateAndStoreValue(elementId) {
    // Get the value from the element
    var value = document.getElementById(elementId).textContent;
    // Store the value in localStorage
    localStorage.setItem(elementId, value);
}
// Function to retrieve and update value from localStorage
function retrieveAndUpdateValue(elementId) {
    // Retrieve the value from localStorage
    var storedValue = localStorage.getItem(elementId);
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
    retrieveAndUpdateValue('roundsValue');

    // Call additional functions as needed
});
// Update and store values when they change
$(document).ready(function() {
    // Example for updating and storing wallet value
    var wallet = $('#walletValue').text(); // Get current wallet value
    $('#walletValue').text(wallet); // Update wallet value
    updateAndStoreValue('walletValue'); // Store wallet value

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
// Function to clear local storage
function clearLocalStorage() {
    localStorage.clear();
}
$(document).ready(function() {
    // Retrieve and update company name on page load
    var companyName = localStorage.getItem('companyName');
    if (companyName) {
        $('.companyName').text(companyName);
    }

    // Check if popups have been shown before
    var popupsShown = localStorage.getItem('popupsShown');
    if (!popupsShown) {
        // Show first popup on page load if not shown before
        $('.firstPopup').modal('show');
    }

    // Event handler for saving company name and showing second popup
    $('#saveCompanyName').click(function() {
        var newName = $('#companyNameInput').val();
        if (newName) {
            $('.companyName').text(newName); // Set company name in the span
            localStorage.setItem('companyName', newName); // Save company name in localStorage
        }
        $('.firstPopup').modal('hide'); // Close first popup
        $('.secondPopup').modal('show'); // Show second popup
    });

    // Event handler for updating values based on selected difficulty
    $('.secondPopup .btn').click(function() {
        var level = $(this).siblings('h5').text().trim(); // Get the difficulty level
        var wallet = $(this).siblings('p').eq(0).text().split(': ')[1].trim(); // Get wallet value
        var customers = $(this).siblings('p').eq(2).text().split(': ')[1].trim(); // Get customers value
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
        var value = $('#' + elementId).text();
        localStorage.setItem(elementId, value);
    }
});




