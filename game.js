// $(document).ready(function() {
// $("button").click(function () {
// alert("Locked and Loaded!");
// });

let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
});

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  // $("#" + randomChosenColor).fadeTo(100, 0.3, function () {
  // $(this).fadeTo(500, 1.0);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100); // Make button flicker depending on random color
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3"); // Make audio depending on random color
  audio.play();
  
  
}
console.log(userClickedPattern);