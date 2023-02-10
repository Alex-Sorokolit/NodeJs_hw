const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout,
});

const enterText = () => {
  rl.question("Whot is you name?", (answer) => {
    console.log(`Nice to meet you ${answer}`);
  });
};

// enterText();

rl.question("Whot is you name?", (answer) => {
  console.log(`Nice to meet you ${answer}`);
});
