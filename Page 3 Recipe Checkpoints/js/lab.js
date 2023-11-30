// index.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
// Author: Hannah Nielsen
// Date: 11/17/23

//the code below is a combination of the code in the lab page and from ChatGPT.

// Sorts the characters of a string in alphabetical order.
const recipes = ["../Page 3 Recipes/Todu Scramble/index.html", ]

function recipePicking() {
    if (document.getElementById("vegan").checked){
        window.open(recipes[0]);
    }
}