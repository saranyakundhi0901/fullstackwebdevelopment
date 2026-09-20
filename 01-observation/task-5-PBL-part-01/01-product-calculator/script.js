
// DOM references 
const productNameInput = document.getElementById("product-name");
const quantityInput = document.getElementById("quantity");
const priceInput = document.getElementById("price");

const resultProductEl = document.getElementById("result-product");
const totalPriceEl = document.getElementById("total-price");
const errorMessageEl = document.getElementById("error-message");

// Pure calculation logic (no DOM access here) 


function calculateTotal(quantity, price) {
  return quantity * price;
}

/**
 * Validates the raw string inputs and returns parsed numbers,
 * or an error message if the inputs are invalid.
 */
function validateInputs(quantityRaw, priceRaw) {
  const quantity = Number(quantityRaw);
  const price = Number(priceRaw);

  if (quantityRaw.trim() === "" || priceRaw.trim() === "") {
    return { valid: false, error: "" }; // no error shown yet, just no result
  }
  if (Number.isNaN(quantity) || Number.isNaN(price)) {
    return { valid: false, error: "Quantity and price must be valid numbers." };
  }
  if (quantity < 0 || price < 0) {
    return { valid: false, error: "Quantity and price cannot be negative." };
  }
  return { valid: true, quantity, price };
}

//DOM update logic 
function updateCalculator() {
  const productName = productNameInput.value.trim() || "—";
  const validation = validateInputs(quantityInput.value, priceInput.value);

  if (!validation.valid) {
    errorMessageEl.textContent = validation.error;
    totalPriceEl.textContent = "0.00";
    resultProductEl.textContent = productName;
    return;
  }

  errorMessageEl.textContent = "";
  const total = calculateTotal(validation.quantity, validation.price);

  resultProductEl.textContent = productName;
  totalPriceEl.textContent = total.toFixed(2);
}

//Event listener
[productNameInput, quantityInput, priceInput].forEach((input) => {
  input.addEventListener("input", updateCalculator);
});

// Prevent accidental form submission
document.getElementById("calculator-form").addEventListener("submit", (event) => {
  event.preventDefault();
});
