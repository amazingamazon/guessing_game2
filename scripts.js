var Game = function(name){
  this.name = name;
  this.answer = 7;

  var guess = parseInt(prompt("Hi " + this.name + "! How many ingredients are in my french toast recipe? If you get it right, I'll give you the recipe."));

  this.play = function play() {
    if (guess === this.answer) {
      alert("That's right! Let's have breakfast, " + this.name + ".");
      message = "The ingredients are: 1 egg, 1 tsp vanilla, 1/2 tsp cinnamon, 1/4 cup milk, 4 slices of bread, butter, syrup. ";
      message+= "Beat egg, vanilla and cinnamon in a bowl. Pour in milk. Dip bread in mixture and cook on medium heat until brown on both sides. ";
      message+= "Top with butter and syrup, and enjoy, " + this.name + ".";
      recipe = document.getElementById("recipe");
      recipe.textContent = message;
    } else if (guess > this.answer) {
      alert("Too high! Guess a lower number, " + this.name + ".");
    } else {
      alert("Too low! Guess a higher number, " + this.name + ".");
    }
  };
};

var game = new Game("Jeff");

game.play();
