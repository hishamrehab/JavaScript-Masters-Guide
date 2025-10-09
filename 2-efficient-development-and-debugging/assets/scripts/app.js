
    const defaultResult = 0;
    let currentResult = defaultResult;
    let logEntries = [];


  // Gets input from input field
    function getUserNumberInput() {
    return parseInt(usrInput.value);
    }


// Generates and writes calculation log
  function  createAddWriteOutput(operator, resnultBeforeCalc , calcNumber){
      const calcDescription = `${resnultBeforeCalc} ${operator} ${calcNumber}`;
     outputResult(currentResult,calcDescription); 
    }

  
    function writeToLog(operationIdentifier , prevResult , operationNumber ,  newResult ) {
       const logEntry = {
            operation:operationIdentifier,
            prevResult:   prevResult,
            number: operationNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntry.operation);
        console.log(logEntries);
   }




    // Fuction add the numbers
    function add() {
        const enterdNumber = getUserNumberInput();
         const initialResult = currentResult;
        currentResult +=enterdNumber ;
        createAddWriteOutput("+", initialResult, enterdNumber);
        writeToLog("ADD", initialResult, enterdNumber, currentResult);
    }

 // Fuction subtract the numbers
    function subtract() {
        const enterdNumber = getUserNumberInput();
        const initialResult = currentResult;
        currentResult -=enterdNumber ;
        createAddWriteOutput("-", initialResult, enterdNumber); 
        writeToLog("SUBTRACT", initialResult, enterdNumber, currentResult);

    }
  

    function multiply() {
         const enterdNumber = getUserNumberInput();
        const initialResult = currentResult;
        currentResult *=enterdNumber ;
        writeToLog("MULTIPLY", initialResult, enterdNumber, currentResult);
        typeof("number");
    }

    function divide() {
      const enterdNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enterdNumber ;
    writeToLog("DIVIDE", initialResult, enterdNumber, currentResult);
    }


    addBtn.addEventListener("click", add);
    subtractBtn.addEventListener("click", subtract);
    multiplyBtn.addEventListener("click", multiply);
    divideBtn.addEventListener("click", divide);
