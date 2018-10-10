#!/usr/bin/env node

const program = require("commander");
const {addContact , getContact} = require("./contacts_model");

const { prompt } = require('inquirer');
const questions = [
    {
        type:'input',
        name: 'firstname',
        message: 'Enter firstname... '
    },

    {
        type: 'input',
        name: 'lastname',
        message: "Enter lastname ..."
    },

    {
        type: 'input',
        name: 'phone',
        message: "Enter phone number ..."
    },

    {
        type: 'input',
        name: 'email',
        message: "Enter email address ..."
    }
];

const searchName = [{
    type:'input',
    name: 'name',
    message: "Enter first or last name"
}];

program
    .version("0.0.1")
    .description("Contact Management System")

program 
    .command("new")
    .alias("n")
    .description("Add new Contact")
    .action(()=> {
        prompt(questions).then(answers =>
            addContact(answers));
        });

program
    .command("list")
    .alias("l")
    .description(" List Contacts ")
    .action(()=>{
        prompt(searchName).then(answers =>
          getContact(answers.name));
        });
program.parse(process.argv);
