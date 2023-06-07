// Get the input elements
const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("Fahrenheit");
const kelvinInput = document.getElementById("Kelvin");

// Add event listeners to the input elements
celciusInput.addEventListener("input", convertFromCelcius);
fahrenheitInput.addEventListener("input", convertFromFahrenheit);
kelvinInput.addEventListener("input", convertFromKelvin);

// Convert from Celsius to Fahrenheit and Kelvin
function convertFromCelcius() {
    const celciusValue = parseFloat(celciusInput.value);

    if (!isNaN(celciusValue)) {
        const fahrenheitValue = (celciusValue * 9/5) + 32;
        const kelvinValue = celciusValue + 273.15;

        fahrenheitInput.value = fahrenheitValue.toFixed(2);
        kelvinInput.value = kelvinValue.toFixed(2);
    } else {
        fahrenheitInput.value = "";
        kelvinInput.value = "";
    }
}

// Convert from Fahrenheit to Celsius and Kelvin
function convertFromFahrenheit() {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (!isNaN(fahrenheitValue)) {
        const celciusValue = (fahrenheitValue - 32) * 5/9;
        const kelvinValue = (fahrenheitValue + 459.67) * 5/9;

        celciusInput.value = celciusValue.toFixed(2) + "°C";
        kelvinInput.value = kelvinValue.toFixed(2) + "K";
    } else {
        celciusInput.value = "";
        kelvinInput.value = "";
    }
}

// Convert from Kelvin to Celsius and Fahrenheit
function convertFromKelvin() {
    const kelvinValue = parseFloat(kelvinInput.value);

    if (!isNaN(kelvinValue)) {
        const celciusValue = kelvinValue - 273.15;
        const fahrenheitValue = (kelvinValue * 9/5) - 459.67;

        celciusInput.value = celciusValue.toFixed(2) + "°C";
        fahrenheitInput.value = fahrenheitValue.toFixed(2) + "°F";
    } else {
        celciusInput.value = "";
        fahrenheitInput.value = "";
    }
}

// Clear all input values
function clearAll() {
    celciusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
}

// Get the clear button element and add click event listener
const clearButton = document.querySelector(".button button");
clearButton.addEventListener("click", clearAll);
