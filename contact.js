
const program = require("commander");
const {addContact , getContact} = require("./contacts_model");

program
    .version("0.0.1")
    .description("Contact Management System")

program 
    .command("new <firstname> <lastname> <phone> <email>")
    .alias("n")
    .description("Add new Contact")
    .action((firstname,lastname,phone,email) => {
        addContact({firstname,lastname,phone,email})
    });


program
    .command("list <name>")
    .alias("l")
    .description(" List Contacts ")
    .action(name => getContact(name));

program.parse(process.argv);
