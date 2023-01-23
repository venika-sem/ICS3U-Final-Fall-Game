/* Created by: Venika Sem
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

'use strict'
/**
 * This function contains all fall game movements
 */

var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
var both = 0;
var counter = 0;

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

// Creating blocks and holes
setInterval(function () {
  var block = document.createElement("div");
  var hole = document.createElement("div");
  block.setAttribute("class", "block");
  hole.setAttribute("class", "hole");
  block.setAttribute("id", "block"+counter);
  hole.setAttribute("id", "hole"+counter);

  var random = Math.floor(Math.random() * 360);
  hole.style.left = random + "px";
  game.appendChild(block);
  game.appendChild(hole);
  counter++;
}, 1);
