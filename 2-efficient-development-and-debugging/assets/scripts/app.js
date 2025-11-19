
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

        console.log(logEntries);
   }


   function claculate(operation) {
  const enterdNumber = getUserNumberInput();
      const initialResult = currentResult;
    let operator;
     if(operation === "ADD") {
       currentResult +=enterdNumber;
       operator = "+";
     } else if(operation === "SUBTRACT") {
       currentResult -=enterdNumber ;
      operator = "-";  
      } else if(operation === "MULTIPLY") {
      currentResult *=enterdNumber ;
     operator = "*";
     } else if(operation === "DIVIDE") {
     currentResult -=enterdNumber ;
      operator = "-";
     }
     createAddWriteOutput(operator, initialResult, enterdNumber);
      writeToLog(operation, initialResult, enterdNumber, currentResult);
   }

     

    addBtn.addEventListener("click", claculate.bind(this , "ADD"));
    subtractBtn.addEventListener("click",claculate.bind(this , "SUBTRACT"));
    multiplyBtn.addEventListener("click", claculate.bind(this , "MULTYPLY"));
    divideBtn.addEventListener("click", claculate.bind(this , "DIVIDE"));
