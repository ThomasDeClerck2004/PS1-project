// <!-- ------------ main javascript ------------ -->

$(document).ready(function() {
    // Call retrieveAndUpdateValue for roundsValue to initialize on page load
    retrieveAndUpdateValue('roundsValue');

    // Increment roundsValue and update when button is clicked
    $('#nextRoundButton').click(function() {
        let rounds = parseInt($('#roundsValue').text()); // Get current rounds value
        rounds++; // Increment rounds
        $('#roundsValue').text(rounds); // Update rounds value
        updateAndStoreValue('roundsValue'); // Store updated rounds value
    });
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

  // Call additional functions as needed
});
// Update and store values when they change
$(document).ready(function () {
  // Example for updating and storing wallet value
  let wallet = $("#walletValue").text(); // Get current wallet value
  $("#walletValue").text(wallet); // Update wallet value
  updateAndStoreValue("walletValue"); // Store wallet value


    let customers = $('#totalCustomers').text(); // Get current wallet value
    $('#totalCustomers').text(customers); // Update wallet value
    updateAndStoreValue('totalCustomers'); // Store wallet value


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
    if (!this.element.parentElement.classList.contains("navbar-text")) {
      const value = parseInt(this.element.textContent);
      if (value > 0) {
        this.element.classList.add("positive");
        this.element.classList.remove("negative", "zero");
      } else if (value < 0) {
        this.element.classList.add("negative");
        this.element.classList.remove("positive", "zero");
      } else {
        this.element.classList.add("zero");
        this.element.classList.remove("positive", "negative");
      }
    }
  }
}

// popup script
$(document).ready(function () {
  // Retrieve and update company name on page load
  let companyName = localStorage.getItem("companyName");
  if (companyName) {
    $(".companyName").text(companyName);
  }

  // Check if popups have been shown before
  let popupsShown = localStorage.getItem("popupsShown");
  if (!popupsShown) {
    // Show first popup on page load if not shown before
    $(".firstPopup").modal("show");
  }

  // Event handler for saving company name and showing second popup
  $("#saveCompanyName").click(function () {
    let newName = $("#companyNameInput").val();
    if (newName) {
      $(".companyName").text(newName); // Set company name in the span
      localStorage.setItem("companyName", newName); // Save company name in localStorage
    }
    $(".firstPopup").modal("hide"); // Close first popup
    $(".secondPopup").modal("show"); // Show second popup
  });

  // Event handler for updating values based on selected difficulty
  $(".secondPopup .btn").click(function () {
    let level = $(this).siblings("h5").text().trim(); // Get the difficulty level
    let wallet = $(this).siblings("p").eq(0).text().split(": ")[1].trim(); // Get wallet value
    let customers = $(this).siblings("p").eq(2).text().split(": ")[1].trim(); // Get customers value
    $("#walletValue").text(wallet); // Update wallet value
    $("#totalCustomers").text(customers); // Update customers value
    // Update styles for totalCustomers (assuming NumberStyler is defined)
    const totalCustomersStyler = new NumberStyler("totalCustomers");
    totalCustomersStyler.updateStyles();
    // Update and store values in localStorage
    updateAndStoreValue("walletValue");
    updateAndStoreValue("totalCustomers");
    $(".secondPopup").modal("hide"); // Close second popup
    // Mark popups as shown
    localStorage.setItem("popupsShown", "true");
  });

  // Event handler for the exit button in popup
  $(".exit-button").click(function () {
    // Reshow the popup
    $(".firstPopup").modal("show");
    // Clear local storage
    clearLocalStorage();
  });

  // Function to clear local storage
  function clearLocalStorage() {
    localStorage.clear();
  }

  // Function to update and store value in localStorage
  function updateAndStoreValue(elementId) {
    let value = $("#" + elementId).text();
    localStorage.setItem(elementId, value);
  }
});

// this is code for maximus javascript

// Add event listeners to buttons
document.getElementById("buy-button").addEventListener("click", buyIngredients);
document
  .getElementById("sell-button")
  .addEventListener("click", sellIngredients);
document.getElementById("bake-button").addEventListener("click", bakeProducts);
document
  .getElementById("ingredients-button")
  .addEventListener("click", showIngredientsModal);

// Function to handle buying ingredients
function buyIngredients() {
  // Increase quantity of various ingredients
  increaseIngredient("flour-value");
  increaseIngredient("salt-value");
  increaseIngredient("sugar-value");
  increaseIngredient("milk-value");
}

// Function to handle selling products and decreasing ingredients
function sellIngredients() {
  // Sell random amounts of pastry and bread, then decrease ingredient quantities
  sellRandomAmount("pastry-value");
  sellRandomAmount("bread-value");
  decreaseIngredient("flour-value");
  decreaseIngredient("salt-value");
  decreaseIngredient("sugar-value");
  decreaseIngredient("milk-value");

  // Increase customers gained and left by 1
  increaseCustomer("customersGained");
  increaseCustomer("customersLeft");
}

// Function to increase the amount of customers gained and left
function increaseCustomer(elementId) {
  // Increase the quantity of the specified customer by 1 and update the HTML element
  let currentValue = parseInt(document.getElementById(elementId).textContent);
  let newValue = currentValue + 1;
  document.getElementById(elementId).textContent = newValue;
}

// Function to handle baking products
function bakeProducts() {
  // Check if there are enough ingredients
  if (checkIngredients()) {
    // Decrease ingredient quantities for baking, then increase pastry and bread values
    decreaseIngredientByTwo("flour-value");
    decreaseIngredientByTwo("salt-value");
    decreaseIngredientByTwo("sugar-value");
    decreaseIngredientByTwo("milk-value");
    increaseAndStore("pastry-value");
    increaseAndStore("bread-value");
  } else {
    // Show modal popup if there are not enough ingredients
    $("#notEnoughIngredientsModal").modal("show");
  }
}

// Function to show ingredients modal
function showIngredientsModal() {
  // Show the ingredients modal popup
  $("#ingredientsModal").modal("show");
}

// Function to increase ingredient quantity by 1
function increaseIngredient(elementId) {
  // Increase the quantity of the specified ingredient by 1 and update localStorage
  let newValue = parseInt(document.getElementById(elementId).textContent) + 3;
  document.getElementById(elementId).textContent = newValue;
  updateAndStoreValue(elementId);
}

// Function to decrease ingredient quantity by 1
function decreaseIngredient(elementId) {
  // Decrease the quantity of the specified ingredient by 1, if it's greater than 0
  let currentQuantity = parseInt(
    document.getElementById(elementId).textContent
  );
  if (currentQuantity > 0) {
    let newQuantity = currentQuantity - 1;
    document.getElementById(elementId).textContent = newQuantity;
    updateAndStoreValue(elementId, newQuantity);
  }
}

// Function to decrease ingredient quantity by 2
function decreaseIngredientByTwo(elementId) {
  // Decrease the quantity of the specified ingredient by 2, ensuring it doesn't go below 0, and update localStorage
  let currentQuantity = parseInt(
    document.getElementById(elementId).textContent
  );
  let newQuantity = Math.max(currentQuantity - 2, 0);
  document.getElementById(elementId).textContent = newQuantity;
  updateAndStoreValue(elementId, newQuantity);
}

// Function to increase product quantity by 1 and store in localStorage
function increaseAndStore(elementId) {
  // Increase the quantity of the specified product by 1 and update localStorage
  let newValue = parseInt(document.getElementById(elementId).textContent) + 1;
  document.getElementById(elementId).textContent = newValue;
  updateAndStoreValue(elementId, newValue);
}

// Function to check if there are enough ingredients
function checkIngredients() {
  // Check if all ingredients have at least 2 units
  let ingredients = ["flour-value", "salt-value", "sugar-value", "milk-value"];
  for (let i = 0; i < ingredients.length; i++) {
    if (parseInt(document.getElementById(ingredients[i]).textContent) < 2) {
      return false;
    }
  }
  return true;
}

// Function to sell a random amount of a product
function sellRandomAmount(elementId) {
  // Sell a random amount of the specified product, then update localStorage
  let currentValue = parseInt(document.getElementById(elementId).textContent);
  if (currentValue > 0) {
    let sellAmount = Math.floor(Math.random() * currentValue) + 1;
    let newValue = currentValue - sellAmount;
    document.getElementById(elementId).textContent = newValue;
    updateAndStoreValue(elementId, newValue);
  }
}
