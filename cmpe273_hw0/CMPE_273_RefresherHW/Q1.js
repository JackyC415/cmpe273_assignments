"use strict";

const priceSuggest = (budget) => {

//raw json data stored in server
var serverData = [
    '{"type": "daily", "price": 8}',
    '{"type": "weekly", "price": 40}',
    '{"type": "monthly", "price": 80}',
    '{"type": "semester", "price": 200}'
];

console.log("Your Budget: $" + budget);

//parse permit prices from json data
const permitPrices = [];
parsePermitPrices(serverData,permitPrices);

//convert objects to strings to list price range
var permitPriceRange = [];
getPermitPriceRange(permitPrices,permitPriceRange);

var positionOfBudget = permitPrices.findIndex(p => p.price === budget);
if(permitPriceRange.includes(budget.toString())) {
    console.log("BINGO! Price match for your budget: " + JSON.stringify(permitPrices.splice(positionOfBudget, 1))); 
}

displayOptions(permitPrices, positionOfBudget, budget);

}

function parsePermitPrices(arr, arr1) {
    //parse data from server (array)
    for(var i = 0; i < arr.length; i++) {
        arr1.push(JSON.parse(arr[i]));
    }
}

function getPermitPriceRange(arr, arr1) {
    //ensure data are valid, convert them to string for processing
    for(var i = 0; i < arr.length; i++) {
        if(typeof arr[i] !== "undefined") {
            arr1.push(JSON.stringify(arr[i].price));
        }
    }
    console.log("Permit prices range: " + arr1);
}

function displayOptions(arr, pos, bud) {

    if(bud <= 8) {
        console.log("Sorry, our cheapest permit costs $8.");
    } else {
    console.log("Please consider these option(s) (based on your budget): ");
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].price < bud.toString()) {
            pos = i;
        }
    }
    console.log(arr.slice(0,pos+1));
    }
}

priceSuggest(40);