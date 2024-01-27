function convertTemperature() {
    var inputTemperature = document.getElementById("temperature").value;
    var selectedUnit = document.getElementById("unit").value;
    var resultContainer = document.getElementById("result");

    // Validate input as a number
    if (isNaN(inputTemperature) || inputTemperature === "") {
      resultContainer.innerHTML = "Please enter a valid number.";
      return;
    }

    // Perform conversion
    var convertedTemperature;
    if (selectedUnit === "celsius") {
      convertedTemperature = (parseFloat(inputTemperature) * 9 / 5) + 32;
      resultContainer.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} °F`;
    } else if (selectedUnit === "fahrenheit") {
      convertedTemperature = (parseFloat(inputTemperature) - 32) * 5 / 9;
      resultContainer.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
    } else if (selectedUnit === "kelvin") {
      convertedTemperature = parseFloat(inputTemperature) + 273.15;
      resultContainer.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} K`;
    }
  }