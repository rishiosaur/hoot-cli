const {makeSubject} = require("../subjects/makeSubject")
const {makeAssignment} = require("../assignments/makeAssignment")
const {makeUnit} = require("../units/makeUnit")

function validateItem(item) {
    let lowercaseItem = item.toLowerCase();
    let arrayToMatch = [];
    arrayToMatch.push("a", "assignment")
    arrayToMatch.push("u", "unit")
    arrayToMatch.push("s", "subject")
    if (arrayToMatch.includes(lowercaseItem)) {
      return true
    } else {
      console.log(
        chalk.red("ERROR: ") +
          chalk.blue(
            "Invalid input for " +
              chalk.green("hoot new\n") +
              chalk.blue("Try running ") +
              chalk.green("hoot new assignment sample")
          )
      );
      shell.exit(1);
    }
  }

async function newItem (item, name){
    validateItem(item)
    switch(item){
        case "a":
        case "assignment":
            console.log("hi")
            await makeAssignment(name)
            break
        case "s":
        case "subject":
            await makeSubject(name)
            break
        case "u":
        case "unit":
            await makeUnit(name)
            break
    }
}

module.exports = {
    newItem: newItem
}