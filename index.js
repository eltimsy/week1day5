var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World") + chalk.underline("people") + chalk.bgGreen("FUN");
console.log(message);
