What is prompt in Node.js?
Unlike the browser (where prompt() is built-in), Node.js doesn't have prompt() by default. But we can bring similar functionality using the prompt-sync package.

**It lets you take input from the user in a synchronous (easy) way, like:**

const name = prompt("Enter your name: ");
**✅ How to Use prompt-sync in Node.js**
🛠️ Step 1: Install it
You need to install prompt-sync using npm (only once per project):
**npm install prompt-sync**

**🧪 Step 2: Use it in your JS file**

/*const prompt = require('prompt-sync')(); // load prompt-sync

const name = prompt("What's your name? ");
console.log(`Hello, ${name}!`);*/
