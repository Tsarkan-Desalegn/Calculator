const buttons = document.querySelectorAll(".btn"); 
const input = document.getElementById("input");
const clear = document.getElementById("clear-btn");
const Result = document.querySelector(".calculateResult");
const Delete = document.getElementById("delete-btn");
const Operand = document.querySelectorAll(".operand-btn");
const squareRoot = document.querySelector(".squareRoot-btn");
const cubeRoot = document.querySelector(".cubeRoot-btn");
const Square = document.querySelector(".square-btn");
const Exponent = document.querySelector(".exponentToX");
const eValue = document.querySelector(".eValue");
const PiValue = document.querySelector(".piValue");
const logValue = document.querySelector(".LogValue");
const lnValue = document.querySelector(".lnValue");
const calculateSin = document.querySelector(".calculateSin");
const calculateCos = document.querySelector(".calculateCos");
const calculateTan = document.querySelector(".calculateTan");
const calculateOverNum = document.querySelector(".calculateOverNum");
const absoluteValue = document.querySelector(".absoluteValue");
const calculateFactorial = document.querySelector(".calculateFactorial");
const powerOfNumber = document.querySelector(".powerOfNumber");
const percentage = document.querySelector(".percentage-btn");

// Loop through all number buttons and display their value in the input field
buttons.forEach(button =>{
  button.addEventListener("click", ()=>{
    input.value += button.textContent;  // append button text to input
})
});

// Loop through all operator buttons (+, -, *, /, etc.) and display them in the input field
Operand.forEach(operator =>{
  operator.addEventListener("click",()=>{
    input.value += operator.textContent; // append operator symbol
  })
});

// Clear the entire input field
clear.addEventListener("click", ()=>{
  input.value = " ";
});

// Delete the last character from the input field
Delete.addEventListener("click", ()=>{
            input.value = input.value.slice(0,-1); // remove last character
});

// Evaluate the full expression typed in the input field using eval()
Result.addEventListener("click", ()=>{
           const num =input.value;
           const result = eval(num);
           input.value = result;
});

// calculate percentage
percentage.addEventListener("click", ()=>{
          const num = parseFloat(input.value);
          const percent = num/100;
          input.value = percent;
});

// Calculate square root of the current input
squareRoot.addEventListener("click", ()=>{
          const number = input.value;
          const squareRootResult = Math.sqrt(number);
          input.value = squareRootResult;
});

// Calculate cube root of the current input
cubeRoot.addEventListener("click",()=>{
          const numberof = input.value;
          const cubeRootResult =Math.cbrt(numberof);
          input.value = cubeRootResult;
});

// Calculate square (x²) of the current input
Square.addEventListener("click", ()=>{
         const squareNumber =parseFloat( input.value);
         const square = Math.pow(squareNumber,2);
         input.value = square;
});

// Calculate e^x (exponential function)
Exponent.addEventListener("click", ()=>{
         const exponent = parseFloat(input.value);
         const valueOfExp =Math.exp(exponent);
         input.value = valueOfExp;
});

// Insert π (pi) value into input (rounded to 2 decimals)
PiValue.addEventListener("click",()=>{
         input.value = Math.PI.toFixed(2);
});
// Calculate log base 10
logValue.addEventListener("click", ()=>{
         const logof = parseFloat(input.value);

   if(logof > 0){
         const logcalculate = Math.log10(logof).toFixed(4);
             input.value = logcalculate;}

       else{ 
             input.value ="Invalid input!";}
});

// get e value
eValue.addEventListener("click", ()=>{
         const evalue = Math.E.toFixed(4);
         input.value =evalue
});

// Calculate natural log (ln)
lnValue.addEventListener("click", ()=>{
         const lnOf = parseFloat(input.value);
  if(lnOf > 0){
             const calculateLn = Math.log(lnOf)
               input.value = calculateLn;}
        else{
             input.value =  "Invalid input!"}
});

// Calculate sine (input in degrees)
calculateSin.addEventListener("click", ()=>{
            const degree = parseFloat(input.value);
            const Radian = degree * (Math.PI/180); // convert degrees to radians
            const calcSin = Math.sin(Radian).toFixed(2);
            input.value = calcSin;
});

// Calculate cosine (input in degrees)
calculateCos.addEventListener("click",()=>{
            const degree = parseFloat(input.value);
            const Radian = degree *(Math.PI/180);
            const calcCos =Math.cos(Radian).toFixed(2);
            input.value = calcCos;
});

// Calculate tangent (input in degrees)
calculateTan.addEventListener("click", ()=>{
            const degree = parseFloat(input.value);
            const Radian = degree *(Math.PI/180);
            const calcTan = Math.tan(Radian).toFixed(2);
                 input.value = calcTan;
});

// Calculate reciprocal (1/x)
calculateOverNum.addEventListener("click", ()=>{
            const number = parseFloat(input.value);
            const overValue = 1/number;
                input.value =overValue;
});
// Calculate absolute value
absoluteValue.addEventListener("click", ()=>{
            const absolute = parseFloat(input.value);
            const calcAbsolute = Math.abs(absolute);
                input.value = calcAbsolute;
});

// Calculate factorial (n!)
calculateFactorial.addEventListener("click", ()=>{
           const num = parseFloat(input.value);
  if(num===0 || num===1){
                 input.value = "1"; }

  else if(num>1){
            let result =1;
                for(let i=2; i<=num; ++i){
                        result *=i;}
        input.value = result;}
   else{
        input.value = "Invalid input!";}
});

// Calculate power (x^y) when input is in "x^y" format
powerOfNumber.addEventListener("click",()=>{
  const values = input.value.split("^"); // split base and exponent
  const base = parseFloat(values[0]);
  const exponent = parseFloat(values[1]);

  if(!isNaN(base) && !isNaN(exponent)){
                      const result = Math.pow(base, exponent);
                            input.value =result;}
        else{
             input.value = "Invalid input!"
}
});
