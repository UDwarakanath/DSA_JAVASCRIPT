
function calculator(a,b,operator) {
  let result;
// Solution 1
//   switch(operator){
//     case "+":
//       result = a + b;
//       break
//     case "-":
//       result = a - b;
//       break
//     case "/":
//       result = a/b;
//       break
//     case "*":
//       result = a * b;
//       break
//     default:
//       throw new Error("Invalid Operator")
//   }

  
// Solution 2

// Use if/else if/else statements to determine which operation to perform

if (operator === '+') {
  result = a + b;
  
} else if (operator === '-') {
  result = a - b;
} else if (operator === '*') {
  result = a * b;
} else if (operator === '/') {
  result = a / b;
} else {
  // If the operator is not one of the above, throw an error
  throw new Error('Invalid operator');
}
console.log(result)
  return result
}



module.exports = calculator;
