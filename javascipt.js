
const display = document.getElementById('display');
let firstOperand = null;
let secondOperand = false;
let currentOperation = null;

function appendNumber(number) {
  if (secondOperand) {
    display.value = "";
    secondOperand = false;
  }
  display.value += number;
}

function chooseOperation(operator) {
  if (currentOperation !== null) calculate();
  firstOperand = parseFloat(display.value);
  currentOperation = operator;
  secondOperand = true;
}

function calculate() {
  if (firstOperand === null || currentOperation === null) return;
  const secondValue = parseFloat(display.value);
  let result;

  switch (currentOperation) {
    case '+':
      result = firstOperand + secondValue;
      break;
    case '-':
      result = firstOperand - secondValue;
      break;
    case '*':
      result = firstOperand * secondValue;
      break;
    case '/':
      if (secondValue === 0) {
        alert("0으로 나눌 수 없습니다.");
        clearDisplay();
        return;
      }
      result = firstOperand / secondValue;
      break;
    default:
      return;
  }

  display.value = result.toString();
  firstOperand = null;
  currentOperation = null;
  secondOperand = true;
}

function clearDisplay() {
  display.value = "";
  firstOperand = null;
  currentOperation = null;
  secondOperand = false;
}
}
