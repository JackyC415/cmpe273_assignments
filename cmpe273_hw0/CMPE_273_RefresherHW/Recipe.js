"use strict";

module.exports = class Recipe {
    static makeDrink(option = "") {

        var response = "";
        if(option.match(/boba/gi)) {
            response = "Boba on the way!";
        } else if (option.match(/smoothie/gi)) {
            response = "Smoothie on the way!";
        } else {
            response = "Sorry, we do not serve this drink.";
        }

        return response;

    }
}