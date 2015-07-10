var Game = function(name){
  this.name = name;
  this.answer = 7;

  this.play = function() {

    var guess = parseInt(prompt("Hi " + this.name + "! How many ingredients are in my french toast recipe? If you get it right, I'll give you the recipe."));

    var message,
        recipe;

    if (guess === this.answer) {
      alert("That's right! Let's have breakfast, " + this.name + ".");

      message = "The ingredients are: 1 egg, 1 tsp vanilla, 1/2 tsp cinnamon, 1/4 cup milk, 4 slices of bread, butter, syrup. <br><br>";
      message+= "Beat egg, vanilla and cinnamon in a bowl. Pour in milk. Dip bread in mixture and cook on medium heat until brown on both sides. <br><br>";
      message+= "Top with butter and syrup.";

      recipe = document.getElementById("recipe");
      recipe.innerHTML = message;

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
