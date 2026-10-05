console.log("script loaded");
function calculate(): void {
    const input1 = document.getElementById("num1") as HTMLInputElement;
    const input2 = document.getElementById("num2") as HTMLInputElement;
    const operation = document.getElementById("operation") as HTMLSelectElement;
    const resultElement = document.getElementById("result") as HTMLElement;

    const num1: number = Number(input1.value);
    const num2: number = Number(input2.value);

    let result: number;

    if (operation.value === "add") {
        result = num1 + num2;
    } else if (operation.value === "subtract") {
        result = num1 - num2;
    } else if (operation.value === "multiply") {
        result = num1 * num2;
    } else if (operation.value === "divide") {
        result = num1 / num2;
    } else {
        result = 0;
    }

    resultElement.innerHTML = result.toString();
}