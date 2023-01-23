/* Created by: Venika Sem
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

'use strict'
/**
 * This function contains all fall game movements
 */

var character = document.getElementById("character");
var interval;
var both = 0;

// move left function
function moveLeft(){
  var left =
  parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  if(left>0){
      character.style.left = left - 2 + "px";
  }
}

// move right function
function moveRight(){
  var left =
  parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  if(left<380){
      character.style.left = left + 2 + "px";
  }
}

document.addEventListener("keydown", event => {
  if(both==0){
      both++;
      if(event.key==="ArrowLeft"){
          interval = setInterval(moveLeft, 1);
      }
      if(event.key==="ArrowRight"){
          interval = setInterval(moveRight, 1);
      }
  }
});

document.addEventListener("keyup", event => {
  clearInterval(interval);
  both=0;
});
