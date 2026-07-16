let operator = "";

function setOperator(op) {
    operator = op;
}

function calculate() {

    
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result;

    switch(operator){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = (num2 !== 0) ? num1 / num2 : "Cannot divide by 0";
            break;
        default:
            result = "Select operator";
    }

    document.getElementById("result").textContent = "Result: " + result;

}

document.getElementById("equalBtn").addEventListener("click", calculate);