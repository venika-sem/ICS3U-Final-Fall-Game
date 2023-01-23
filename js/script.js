/* Created by: Venika Sem
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

'use strict'
/**
 * This function contains all fall game movements
 */

var character = document.getElementById("character")

// move left function
function moveLeft() {
    var left =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left = left + 2 + "px";
}

// move right function
function moveRight() {
    var left =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left = left - 2 + "px";
}
