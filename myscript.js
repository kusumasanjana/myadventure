// JavaScript File (script.js)
const storyStages = {
  start: {
    text: "You are in a forest to find the treasure , choose the options so that it will help you to navigate into the forest to find the treasure!!!. If you want to head back  choose that option so that it will help you to navigate. You may encounter various creatures on your way as you navigate further.Choose the directions carefully such that i will not land you in trouble. lest start the adventure with any of the options that are given.",
    choices: [
      { text: "Explore deeper into the forest", consequence: "forestDeeper" },
      { text: "Head back the way you came", consequence: "headBack" }
    ],
  image: "forest.jpg"
  },
  forestDeeper: {
    text: "As you move deep into the forest you will encounter various creatures!!! Do you want to comunicate with the creatures ?? If so navigate accordingly... Else if you want to sneak pass by the creature be carefulll it may get upset and chase youuu!!!!!! Get ready to runnnnnn if the creature chases youuu..... ",
    choices: [
      { text: "Try to communicate with the creature", consequence: "communicate" },
      { text: "Attempt to sneak past it", consequence: "sneakPast" }
    ],
    image: "magicalCreature.jpg"
  },
  communicate: {
    text: "The creature is happy to see you !!!!!!!!!  It will help youu to find the treasure so thats the endddd of your hunt!!!!congrats it will help you to find the treasure ........ you win!!!!!!!!!!!",
    choices: [],
    image: "treasure.jpg"
  },
  sneakPast: {
    text: "Your attempt to communicate failss... The creature did not like youuuu runnnnnnn awayyyyy its starts chasing youuuu!!!!!!",
    choices: [],
    image: "chase.jpg"
  },
  headBack: {
    text: "You decide to head back to the position you startt  its seems like something is wrong sooo choose the otion to go backkkk. so that you will be reaching the start point of your hunt",
    choices: [
      { text: "Take the left path", consequence: "leftPath" },
      { text: "Take the right path", consequence: "rightPath" }
    ],
    image: "changedForest.jpg"
  },
  leftPath: {
    text: "HOOO you are headed to left sideee  you will find a beautiful garden .. enjoy the beautiful nature !!!!!!",
    choices: [],
    image: "garden.jpg"
  },
  rightPath: {
    text: "It seems like your are headed towards your right .... here you are in front of the cave  .. Do you want to enter the cave or choose to stay out of the cave... If you want to enter the cave gooo ahead",
    choices: [
      { text: "Enter the cave", consequence: "enterCave" },
      { text: "Stay outside and explore around the cave", consequence: "exploreAroundCave" }
    ],
    image: "darkCave.jpg"
  },
  enterCave: {
    text: "Heyyyy you entered the cave .. There is a dragon right infront of youuuu Gameeee overr your are out of the treasure huntttt!!!!!",
    choices: [],
    image: "dragon.jpg"
  },
  exploreAroundCave: {
    text: "You are out of the cavee and a the sideee there is treasurechesttt..... Congrats you found the treasure!!!!!!",
    choices: [],
    image: "treasureChest.jpg"
  }
};

let currentStage = "start";

function startGame() {
  currentStage = "start";
  updatePage();
}

function updatePage() {
  const stage = storyStages[currentStage];

  document.getElementById("story-text").textContent = stage.text;
  const additionalInfoElement = document.getElementById("additional-info");
    additionalInfoElement.innerHTML = "";
    if (stage.additionalInfo) {
        const paraElement = document.createElement("p");
        paraElement.textContent = stage.additionalInfo;
        additionalInfoElement.appendChild(paraElement);
    }
  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = "";

  stage.choices.forEach((choice, index) => {
    const choiceButton = document.createElement("button");
    choiceButton.classList.add("choice-button");
    choiceButton.textContent = choice.text;
    choiceButton.addEventListener("click", () => makeChoice(index));
    choicesContainer.appendChild(choiceButton);
  });

  // Display the image
  const storyContainer = document.getElementById("story-container");
  storyContainer.style.backgroundImage = `url(${stage.image})`;
}

function makeChoice(choiceIndex) {
  const stage = storyStages[currentStage];
  const choice = stage.choices[choiceIndex];
  currentStage = choice.consequence;
  updatePage();
}

// Initial setup
startGame();
// Add this function to your script.js file

function endGame(outcome) {
    const stage = storyStages[outcome];
    
    // Update the paragraph text
    const storyTextElement = document.getElementById("story-text");
    storyTextElement.textContent = stage.text;

    // Remove any buttons from the choices area
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";

    // Display a relevant image related to how the game ended
    const storyContainer = document.getElementById("story-container");
    storyContainer.style.backgroundImage = `url(${stage.image})`;
}

