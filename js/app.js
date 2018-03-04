//Back-end Logic

var throwdice = function() {
  return Math.floor(6 * Math.random()) + 1;
};

function Player(turn) {
  this.roll = 0;
  this.score = 0;
  this.totalscore = 0;
  this.turn = turn;
}
 //If you roll a one, you lose your turn and your score is 0
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.score = 0;
    alert("Whoa, you rolled a 1! Pass the mouse!");
  } else {
    this.score += this.roll;
  }
};
//Hold
Player.prototype.hold = function() {
  this.totalscore += this.score;
  this.score = 0;
  alert("Hand over the mouse!");
};

Player.prototype.winnerCheck = function() {
  if (this.totalscore >= 100) {
    alert("You are the winner!");
  }
}; 
//Starts a New Game
Player.prototype.newGame = function() {
  this.roll = 0;
  this.score = 0;
  this.totalscore = 0;
};

// UI Logic
$(document).ready(function() {

  $("#start").click(function(event) {
  player1 = new Player(true);
  player2 = new Player(false);
  alert("Player 1 starts!");
});
  $("#new-game").click(function(event) {
    player1.newGame();
    player2.newGame();
  });

  $("button1").click(function(event) {
    player1.roll = throwdice();
    $("#player2Score").empty();
    $("#player1Score").text(player1.roll);
    player1.rollone();
    if (player1.roll === 2) {
        alert("You rolled 2!").show();
    } else if (player1.roll === 3) {
      alert("You rolled 3!").show();
    } else if (player1.roll === 4) {
      alert("You rolled 4!").show();
    } else if (player1.roll === 5) {
      alert("You rolled 5!").show();
    } else if (player1.roll === 6) {
      alert("You rolled 6!").show();
    } else if (player1.roll === 1) {
    }
    $("#player1Current").text(player1.score);
  });

  $("button2").click(function(event) {
    player2.roll = throwdice();
    $("#player1Score").empty();
    $("#player2Current").text(player2.roll);
    player2.rollone();
    if (player2.roll === 2) {
      $(alert("You rolled 2!"));
    } else if (player2.roll === 3) {
      $(alert("You rolled 3!"));
    } else if (player2.roll === 4) {
      $(alert("You rolled 4!"));
    } else if (player2.roll === 5) {
      $(alert("You rolled 5!"));
    } else if (player2.roll === 6) {
      $(alert("You rolled 6!"));
    } else if (player2.roll === 1) {
    }
    $("#player2Current").text(player2.score);
    $("#player2").css("background-color", "#83db20");
    $("#player1").css("background-color", "grey");
  });

  $("#hold1").click(function(event) {
    player1.hold();
    $("#player2").css("background-color", "#83db20");
    $("#player1").css("background-color", "grey");
    $("#player1Score").text(player1.totalscore);
    //    $("#player1Current").empty();
    $("#player1Score").empty();
    player1.winnerCheck();
  });

  $("#hold2").click(function(event) {
    player2.hold();
    $("#player1").css("background-color", "#83db20");
    $("#player2").css("background-color", "grey");
    $("#player2Score").text(player2.totalscore);
    //    $("#player2Current").empty();
    $("#player2Score").empty();
    player2.winnerCheck();
  });
});
