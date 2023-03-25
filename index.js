const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "email",
      message: "Please enter your email:",
    },
  ])
  .then(({ email, message }) => {
    console.log(email);

    const pattern = /[a-z0-9_]+@[a-z]+.[a-z]{3}/i;
    const isValid = email.match(pattern);

    console.log("--------------------");

    if (isValid) {
      console.log("Email is valid!");
    } else {
      console.log("Email is invalid");
    }
  });
