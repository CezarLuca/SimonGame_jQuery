$(document).ready(function () {
  // $("button").click(function () {
  // alert("Locked and Loaded!");
  // });

  let buttonColors = ["red", "blue", "green", "yellow"];
  let gamePattern = [];
  let userClickedPattern = [];
  let gameStart = false;
  let level = 0;
  $(document).on("keydown mousedown touchstart", function () {
    if (!gameStart) {
      gameStart = true;
      nextSequence();
    }
  });

  $(".btn").click(function () {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    let lastIndex = userClickedPattern.lastIndexOf(
      userClickedPattern[userClickedPattern.length - 1]
    );
    checkAnswer(lastIndex);
    // $("#" + userChosenColor).fadeTo(100, 0.3, function () {
    //   $(this).fadeTo(100, 1.0);
    // });
  });

  function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    level++;
    $("#level-title").text("Level " + level);
    setTimeout(function () {
      $("#" + randomChosenColor).fadeTo(100, 0.3, function () {
        $(this).fadeTo(100, 1.0);
      });
      playSound(randomChosenColor);
      animatePress(randomChosenColor);
      userClickedPattern = []; // reset the user clicked pattern array

      // $("#" + randomChosenColor).fadeIn(1000).fadeOut(1000).fadeIn(1000); // Make button flicker depending on random color
      // let audio = new Audio("sounds/" + randomChosenColor + ".mp3"); // Make audio depending on random color
      // audio.play();
    }, 1000);
  }

  function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (gamePattern.length === userClickedPattern.length) {
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      // let audioWrong = new Audio("sounds/wrong.mp3");
      // audioWrong.play();
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 1000);
      // console.log("fail");
      $("#level-title").text("Game Over, Press Here to Restart");
      startOver();
    }
  }

  // function checkAnswer() {
  // if (JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)) {
  // console.log("success");
  // } else {
  // console.log("wrong");
  // }
  // } This gets ridd of currentLevel but needs JSON because JS is speshal

  function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  // console.log(userClickedPattern);

  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

  function startOver() {
    level = 0;
    gamePattern = [];
    gameStart = false;
  }
});
