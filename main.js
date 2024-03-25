import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessnumber",
        type: "number",
        message: "Please guess a number between 1 to 10",
    },
]);
if (answer.userGuessnumber === randomNumber) {
    console.log("Congratulations you guessed right!");
}
else {
    console.log("you guessed wrong number!");
}
