# Calculator
# 🧮 JavaScript Scientific Calculator

A fully functional calculator built with **HTML, CSS, and JavaScript**.  
It supports basic arithmetic operations, advanced mathematical functions, constants, and trigonometry — all accessible through a clean button‑based interface.

--------------------------------------------------------------------------------------------------------------------

## 📂 Project Structure
index.html   # Calculator UI (buttons, layout, input field)
calc.css     # Styling for the calculator
calc.js      # JavaScript logic (event listeners, math functions)


--------------------------------------------------------------------------------------------------------------------

## ✨ Features

### 🔢 Basic Operations
- Addition (+), Subtraction (−), Multiplication (×), Division (÷)
- Clear (`C`) and Delete (⌫)
- Parentheses `()` for grouping
- Percentage (`%`) — divides the current number by 100
- Decimal point (`.`)

### 🧮 Advanced Functions
- Square root (`√x`)
- Cube root (`∛x`)
- Square (`x²`)
- Power (`x^y`)
- Reciprocal (`1/x`)
- Absolute value (`|x|`)
- Factorial (`n!`)
- Exponential (`e^x`)

### 📐 Trigonometry (in degrees)
- Sine (`sin`)
- Cosine (`cos`)
- Tangent (`tan`)

### 📊 Logarithms
- Log base 10 (`log(x)`)
- Natural log (`ln(x)`)

### 🔢 Constants
- π (Pi)
- e (Euler’s number, ~2.718, rounded to 4 decimals)

--------------------------------------------------------------------------------------------------------------------

## 🚀 Usage

1. **Numbers & Operators**  
   - Click number buttons (`0–9`) to append values to the input field.  
   - Click operator buttons (`+`, `-`, `*`, `÷`) to append operators.  

2. **Evaluate Expression**  
   - Press the `=` button to evaluate the full expression using JavaScript’s `eval()` function.  

3. **Special Functions**  
   - Click the respective buttons (`√`, `x²`, `sin`, `log`, etc.) to apply the function to the current input value.  

4. **Power Function (x^y)**  
   - Enter an expression in the format `x^y` (e.g., `2^5`).  
   - Press the **x^y** button to calculate the result.  

5. **Clear & Delete**  
   - `C` clears the entire input.  
   - `⌫` deletes the last character.  

--------------------------------------------------------------------------------------------------------------------

## 🛠️ Code Highlights

- **Event Listeners**: Each button is wired with `addEventListener("click", ...)` to perform its action.  
- **String Manipulation**: Input values are appended using `.textContent` and modified with `.slice()`.  
- **Math Functions**: Uses JavaScript’s built‑in `Math` object (`Math.sqrt`, `Math.pow`, `Math.log`, `Math.sin`, etc.).  
- **Validation**: Checks for invalid inputs (e.g., negative numbers for factorial/logarithm).  
- **Trigonometry**: Converts degrees to radians internally before applying `Math.sin`, `Math.cos`, `Math.tan`.  

--------------------------------------------------------------------------------------------------------------------

## ⚠️ Notes

- `eval()` is used for expression evaluation. While fine for a simple calculator, it can be unsafe if arbitrary user input is allowed. Consider replacing with a safer math parser for production.  
- Factorial works only for non‑negative integers.  
- Logarithms and natural logs require positive input values.  
- Trigonometric functions expect input in **degrees**, converted internally to radians.  

--------------------------------------------------------------------------------------------------------------------

## 🎯 Future Improvements

- Add support for nested parentheses and operator precedence without relying on `eval()`.  
- Implement a safe math parser library.  
- Improve UI/UX with responsive design and better button layout.  
- Add memory functions (M+, M−, MR).  
- Support scientific notation and more advanced functions.  

--------------------------------------------------------------------------------------------------------------------

## ▶️ Getting Started

1. Clone or download this repository.  
2. Open `index.html` in any modern browser.  
3. Start calculating!

---
