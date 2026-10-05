export {}

// Staattisesti tyypitetyt muuttujat
const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const operationSelect = document.getElementById("operation") as HTMLSelectElement;
const calcButton = document.getElementById("calcButton") as HTMLButtonElement;
const resultDiv = document.getElementById("resultDiv") as HTMLDivElement;
const resultValue = document.getElementById("resultValue") as HTMLDivElement;

// Summa-funktio
function add(a: number, b: number): number {
    return a + b;
}

// Erotus-funktio
function subtract(a: number, b: number): number {
    return a - b;
}

// Kertolasku-funktio
function multiply(a: number, b: number): number {
    return a * b;
}

// Jakolasku-funktio
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Nollalla jakaminen ei ole mahdollista!");
    }
    return a / b;
}

// Pääfunktio laskemiseen
function calculate(): void {
    try {
        // Muunna stringit numeroiksi
        const num1: number = Number(num1Input.value);
        const num2: number = Number(num2Input.value);
        const operation: string = operationSelect.value;
        
        // Validoi syötteet
        if (isNaN(num1) || isNaN(num2)) {
            alert("Syötä kelvolliset numerot!");
            return;
        }
        
        // Valitse operaatio ja laske tulos
        let result: number;
        
        if (operation === "add") {
            result = add(num1, num2);
        } else if (operation === "subtract") {
            result = subtract(num1, num2);
        } else if (operation === "multiply") {
            result = multiply(num1, num2);
        } else if (operation === "divide") {
            result = divide(num1, num2);
        } else {
            throw new Error("Tuntematon operaatio!");
        }
        
        // Muunna tulos stringiksi ja näytä tulos
        resultValue.innerHTML = result.toString();
        resultDiv.style.display = "block";
        
    } catch (error) {
        if (error instanceof Error) {
            alert(error.message);
        } else {
            alert("Laskemisessa tapahtui virhe!");
        }
        resultDiv.style.display = "none";
    }
}

// Lisää click-tapahtumankäsittelijä nappiin
calcButton.addEventListener("click", calculate);

// Mahdollistaa laskemisen painamalla Enter-näppäintä
num2Input.addEventListener("keypress", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
        calculate();
    }
});
