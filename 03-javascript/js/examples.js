(function(){
  addPromptConfirmHandlers();

  // Store button, button clicks, add listener for demo
  var numClicks = 0;
  var button = document.getElementById("click-me");

  button.addEventListener("click", function (e) {
    if (numClicks === 0){
      button.textContent = "Alas! I am clicked!";
      ++numClicks;
    } else if(numClicks === 1) {
      button.textContent = "You continue to click me! Why?";
      ++numClicks;
    } else {
      button.textContent = "Have you no shame?! You clicked me "+
      (numClicks+1)+" times already!";
      ++numClicks;
    }
  });
})();

// Declare a function to assign event handlers on three example links
function addPromptConfirmHandlers(){
  // Get the elements we want to click on for interactivity
  // They have unique IDs, so we can find them easily!
  let alertMe = document.getElementById("alertMe");
  let promptMe = document.getElementById("promptMe");
  let confirmMe = document.getElementById("confirmMe");

  // Listen for clicks on these three elements, then do something
  alertMe.addEventListener("click", function(){
    console.log(alert("Oh hello! I hope you're having a great day!"));
  });

  promptMe.addEventListener("click", function(){
    console.log(prompt("What's the best ice cream flavor?"));
  });

  confirmMe.addEventListener("click", function(){
    console.log(
      confirm("Prompts make me feel like I'm back in the early internet again. Archaic stuff.")
    );
  });
}

function textContentDemo(){
  
}