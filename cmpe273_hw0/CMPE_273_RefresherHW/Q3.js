"use strict";

//import inquirier and Recipe.js
const inquiry = require('inquirer');
const recipe = require('./Drink.js');

async function FusionCafe() {

const question = [
    {
    type: 'input',
    name: 'drink',
    message: "Would you like a Boba or Smoothie?"   
    }
];

await inquiry.prompt(question).then(props => {
    console.log(recipe.makeDrink(props['drink']));
});

}

FusionCafe();