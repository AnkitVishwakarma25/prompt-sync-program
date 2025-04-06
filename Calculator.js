const prompt = require('prompt-sync')(); 
console.log("You can use this program up to 10 times.");

let count = 0;

function calculator() {
  while (count < 10) {
    const a = parseFloat(prompt("Enter first number: "));
    const operator = prompt("Enter operator (+, -, *, /): ");
    const b = parseFloat(prompt("Enter second number: "));

    let result;

    switch (operator) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = b !== 0 ? a / b : "Cannot divide by zero"; break;
      default: result = "Invalid operator";
    }

    console.log(`Result: ${result}`);
    count++;
    console.log(`You have used the calculator ${count} time(s).`);

    // Ask if user wants to continue
    const answer = prompt("Do you want to continue? (yes/no): ").toLowerCase();
    if (answer !== 'yes') {
      console.log("You chose to exit. Goodbye!");
      break;
    }
  }

  if (count >= 10) {
    console.log("You have reached the 10-use limit. Program ended.");
  }
}

calculator();
