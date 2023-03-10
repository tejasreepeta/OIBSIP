function convertKelvin() {
    const kelvinInput = document.getElementById("kelvin").value;
    const celsiusOutput = (kelvinInput - 273.15).toFixed(2);
    const fahrenheitOutput = ((kelvinInput - 273.15) * 9 / 5 + 32).toFixed(2);
    document.getElementById("celsius").value = celsiusOutput;
    document.getElementById("fahrenheit").value = fahrenheitOutput;
  }
  
  function convertCelsius() {
    const celsiusInput = document.getElementById("celsius").value;
    const kelvinOutput = (parseFloat(celsiusInput) + 273.15).toFixed(2);
    const fahrenheitOutput = (parseFloat(celsiusInput) * 9 / 5 + 32).toFixed(2);
    document.getElementById("kelvin").value = kelvinOutput;
    document.getElementById("fahrenheit").value = fahrenheitOutput;
  }
  
  function convertFahrenheit() {
    const fahrenheitInput = document.getElementById("fahrenheit").value;
    const celsiusOutput = ((parseFloat(fahrenheitInput) - 32) * 5 / 9).toFixed(2);
    const kelvinOutput = ((parseFloat(fahrenheitInput) + 459.67) * 5 / 9).toFixed(2);
    document.getElementById("celsius").value = celsiusOutput;
    document.getElementById("kelvin").value = kelvinOutput;
  }
  
  function toggleTemp() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
  
    if (celsiusInput.readOnly == false) {
      celsiusInput.readOnly = true;
      fahrenheitInput.readOnly = false;
      document.getElementById("kelvin").addEventListener("input", convertFahrenheit);
    } else {
      celsiusInput.readOnly = false;
      fahrenheitInput.readOnly = true;
      document.getElementById("kelvin").addEventListener("input", convertCelsius);
    }
  }
  
  function clearData() {
    document.getElementById("kelvin").value = "";
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
  }
  