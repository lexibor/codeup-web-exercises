$(function(){
    "use strict";

    alert('The DOM has finished loading!');



    // Vanilla javascript grabbing text from an html element
// const grabText = document.querySelector("#ChangeWithVS");
// console.log(grabText.textContent);

// JQuery
// const grabContent = $("#ChangeWithVS").text();
// console.log(grabContent);

// Vanilla javascript to change BG color
// const changeBg = document.getElementById("changeBg");
// changeBg.style.background = "red";

// JQuery
// $("#changeBgJQ").css("background", "yellow");

// Vanilla javascript to add an item to the DOM
// const body = document.getElementsByTagName("body");
// const newElem = document.createElement("p");
// newElem.innerHTML = "Hello world I am from vanilla";
// body[0].appendChild(newElem);

// JQuery
// $("<p>") // creates a paragraph tag
//   .text("Hello World I am from jquery!") // adds text to it
//   .appendTo("#parent-div"); // appends it to the parent

// Vanilla Javascript to change text on the screen
// const changeText = document.querySelector("#ChangeWithVS");
// changeText.innerHTML = "I Changed content with Vanilla Javascript";

//JQuery
// $("#ChangeWithJQ").html("I changed with Jquery");

// Events with Vanilla
// const button = document.querySelector("#btn");
// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("button clicked");
// });

// Events with jQuery
// $("#btn").on("click", function () {
//   console.log("button was clicked with JQuery");
// });

// jQuery way of stacking events
// $("#btn").on({
//   click: function () {
//     alert("Button clicked!");
//   },
//   mouseenter: function () {
//     $(this).css("background-color", "green");
//   },
//   mouseleave: function () {
//     $(this).css("background-color", "");
//   },
// });





})