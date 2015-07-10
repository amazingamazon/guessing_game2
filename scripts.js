var Game = function(name){
  this.name = name;
  this.answer = 7;

  this.play = function() {

    var guess = parseInt(prompt("Hi " + this.name + "! How many ingredients are in my french toast recipe? If you get it right, I'll give you the recipe."));
    var recipe = document.getElementById("recipe");

    if (guess === this.answer) {
      alert("That's right! Let's have breakfast, " + this.name + ".");
      recipe.style.display = "block";

    } else if (guess > this.answer) {
      alert("Too high! Guess a lower number, " + this.name + ".");
      this.play();

    } else if (guess < this.answer) {
      alert("Too low! Guess a higher number, " + this.name + ".");
      this.play();

    } else {
      alert("C'mon " + this.name + ", that's not a number!");
      this.play();
    }
  };
};

var game = new Game("Jeff");

game.play();
