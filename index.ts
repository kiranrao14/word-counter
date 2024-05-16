#! /usr/bin/env/ node

import inquirer from "inquirer";
import chalk from "chalk";

// Declare a constant "answer" and assign it to inquirer.prompt function

const answers:{
    Sentence: string
} = await inquirer.prompt([
{
    name:"Sentence",
    type:"input",
    message:"Enter your sentence to count the word: "
}

])
const words = answers.Sentence.trim().split(" ")

// print the array of words to the console
console.log(words)

// print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`)