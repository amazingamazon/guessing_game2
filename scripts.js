var name,
    guess,
    answer,
    message,
    recipe;

name = prompt("What's your name?");

guess = parseInt(prompt("Hi " + name + "! How many ingredients are in my french toast recipe? If you get it right, I'll give you the recipe."));
console.log("The guess is " + guess);

answer = 7;
console.log("The answer is " + answer);

if (guess === answer) {
  alert("That's right! Let's have breakfast, " + name + ".");
  message = "The ingredients are: 1 egg, 1 tsp vanilla, 1/2 tsp cinnamon, 1/4 cup milk, 4 slices of bread, butter, syrup. "
  message+= "Beat egg, vanilla and cinnamon in a bowl. Pour in milk. Dip bread in mixture and cook on medium heat until brown on both sides. "
  message+= "Top with butter and syrup, and enjoy, " + name + ".";
  recipe = document.getElementById("recipe");
  recipe.textContent = message;
} else if (guess > answer) {
  alert("Too high! Guess a lower number, " + name + ".");
} else {
  alert("Too low! Guess a higher number, " + name + ".");
}
