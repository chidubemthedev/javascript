const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calcType) {
  const enteredNumber = getUserNumberInput();

  if (
    calcType !== "ADD" &&
    calcType !== "SUBTRACT" &&
    calcType !== "MULTIPLY" &&
    calcType !== "DIVIDE" ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOPerator;

  if (calcType === "ADD") {
    currentResult += enteredNumber;
    mathOPerator = "+";
  } else if (calcType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOPerator = "-";
  } else if (calcType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOPerator = "/";
  } else if (calcType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOPerator = "*";
  }


  createAndWriteOutput(mathOPerator, initialResult, enteredNumber);
  writeToLog(mathOPerator, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
