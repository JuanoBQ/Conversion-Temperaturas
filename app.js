const prompt = require('prompt-sync')();


function temperatura() {
    let celsius;

    while (true) {
        let entrada = prompt("Ingrese la temperatura en grados Celsius:");

        if (!isNaN(entrada) && entrada.trim() !== "") {
            celsius = parseFloat(entrada);
            break;
        } else {
            alert("Error: Ingrese un número válido.");
        }
    }

    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    console.log("Grados Celsius:", celsius);
    console.log("Grados Fahrenheit:", fahrenheit);
    console.log("Grados Kelvin:", kelvin);
}

temperatura();
