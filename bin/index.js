#!/usr/bin/env node

const program = require("commander");
const { makeAssignment }  = require("./commands/assignments/makeAssignment")
const { makeSchool } = require("./commands/school/makeSchool")
const { makeSubject } = require("./commands/subjects/makeSubject")
const { finishAssignment } = require("./commands/assignments/finishAssignment")

program
  .command("assignment <title>")
  .alias("a")
  .description("Add a new assignment in your current year.")
  .action(makeAssignment);

program
  .command("subject <title>")
  .alias("s")
  .description("Add a new subject")
  .action(makeSubject);

program
  .command("setup")
  .description("Setup hoot")
  .action(makeSchool);

program
  .command("finish <subject> <assignment>")
  .description("Finish an assignment")
  .alias("f")
  .action(finishAssignment)

program.parse(process.argv);
if (process.argv.length < 3) {
  program.help();
}
