var Game = function(name){
  this.name = name;
  this.answer = 7;

  this.play = function() {

    var guess = parseInt(prompt("Hi " + this.name + "! How many ingredients are in my french toast recipe? If you get it right, I'll give you the recipe."));
    var paragraph = document.getElementsByTagName("p");
    var createParagraph = document.createElement("p");

    if (guess === this.answer) {
      paragraph[0].innerHTML = "That's right, " + this.name + "! Let's have breakfast!";
      document.getElementById("recipe").style.display = "block";

    } else if (guess > this.answer) {
      paragraph[0].innerHTML = "Too high! Guess a lower number, " + this.name + ".";
      paragraph[0].appendChild(createParagraph);
      paragraph[1].textContent = "You guessed " + guess + ". Better luck next time.";
      this.play();

    } else if (guess < this.answer) {
      paragraph[0].innerHTML = "Too low! Guess a higher number, " + this.name + ".";
      paragraph[0].appendChild(createParagraph);
      paragraph[1].textContent = "You guessed " + guess + ". Better luck next time.";
      this.play();

    } else {
      paragraph[0].innerHTML = "C'mon " + this.name + ", that's not a number!";
      paragraph[0].appendChild(createParagraph);
      paragraph[1].textContent = "It's a good thing we're friends."
      this.play();
    }
  };
};

var game = new Game("Dale");

game.play();
