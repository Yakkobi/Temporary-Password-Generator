// prettier-ignore
const colors = [
  "Red", "Tan",
  "Blue", "Pink", "Gold", "Teal", "Navy", "Cyan", "Rose",
  "Rust", "Plum", "Jade", "Ruby", "Aqua",
  "Green", "Black", "White", "Brown", "Coral", "Amber",
  "Olive", "Peach",
  "Purple", "Orange", "Maroon", "Violet", "Indigo", "Silver", "Bronze",
  "Copper", "Cherry", "Golden", "Yellow",
  "Crimson", "Scarlet", "Emerald", "Magenta",
  "Mustard",
];

// prettier-ignore
const adjectives = [
  "Big", "Sly", "Shy", "Wet", "Dry", "Hot", "Icy",
  "Bold", "Calm", "Cool", "Dark", "Fast", "Kind", "Loud", "Mild", "Neat",
  "Pure", "Rare", "Slow", "Soft", "Tall", "Warm", "Wild", "Wise", "Fair",
  "Keen", "Lean", "Sure", "Tidy", "Vast",
  "Brave", "Fresh", "Happy", "Heavy", "Light", "Quiet", "Quick", "Sharp",
  "Sweet", "Tough", "Young", "Eager", "Loyal", "Proud", "Solid", "Sunny",
  "Zesty", "Alert", "Rapid", "Noble", "Hardy", "Brisk",
  "Vivid",
  "Clever", "Gentle", "Bright", "Sturdy", "Steady", "Mighty",
  "Breezy", "Chilly", "Simple", "Honest", "Humble", "Active", "Frozen",
  "Modern",
  "Radiant", "Curious", "Elegant", "Playful", "Genuine", "Serious",
  "Distant", "Amazing", "Careful", "Massive", "Restful",
  "Fearless", "Peaceful", "Cheerful", "Powerful", "Faithful", "Youthful",
  "Talented", "Colorful", "Adorable"
];

// prettier-ignore
const animals = [
  "Cat", "Dog", "Fox", "Owl", "Bee", "Ant", "Cow", "Pig", "Rat", "Bat",
 "Hen", "Ram",
  "Lion", "Wolf", "Bear", "Deer", "Duck", "Frog", "Goat", "Crab", "Fish",
  "Bird", "Hawk", "Mule", "Seal", "Swan", "Lamb", "Mole", "Toad",
  "Puma", "Boar",
  "Tiger", "Zebra", "Horse", "Sheep", "Panda", "Snake", "Whale", "Shark",
  "Eagle", "Otter", "Mouse", "Camel", "Moose", "Skunk", "Raven", "Robin",
  "Rhino", "Gecko", "Crane", "Stork", "Goose",
  "Monkey", "Rabbit", "Turtle", "Beaver", "Donkey", "Falcon",
 "Badger", "Gopher",
  "Bobcat", "Parrot", "Puffin", "Walrus", "Iguana",
  "Ferret", "Toucan", "Osprey", "Magpie", "Condor", "Jackal",
 "Buffalo", "Dolphin", "Penguin",
  "Mustang", "Panther", "Pelican",
  "Sparrow", "Wildcat", "Bulldog", "Catfish",
   "Kangaroo", "Chipmunk", "Flamingo",
  "Hedgehog",   "Reindeer", 
  "Honeybee"
];

// prettier-ignore
const nouns = [
  "Sun", "Sky", "Sea", "Ice", "Ash", "Fog", "Cup", "Box", "Key",
  "Star", "Moon", "Rock", "Tree", "Leaf", "Lake", "Wave", "Wind",
  "Rain", "Snow", "Fire", "Cave", "Hill", "Rope", "Lamp", "Ring",
  "Book", "Door", "Gate", "Bell", "Coin", "Gem", "Song",
  "Cloud", "River", "Ocean", "Beach", "Stone", "Storm", "Flame",
  "Grass", "Field", "Forest", "Bridge", "Tower", "Castle", "Island",
  "Anchor", "Candle", "Feather",  "Garden", "Meadow",
   "Desert", "Valley", "Harbor", "Mirror", "Ribbon",
  "Basket", "Blanket", "Compass", "Diamond", "Fountain", "Journey",
  "Kingdom", "Lantern", "Mountain", "Thunder", "Whisper", "Horizon",
  "Crystal", "Sunset", "Sunrise", "Shadow", "Ember", "Breeze",
  "Pebble", "Marble", "Timber", "Willow",  "Maple",
   "Comet", "Galaxy", "Nebula", "Voyage",
   "Lagoon",  "Volcano",  
   "Summit", "Ridge"
];

const generateButton = document.querySelector(".generateButton");
const generateButton2 = document.querySelector(".generateButton2");
const output = document.querySelector(".output");
const output2 = document.querySelector(".output2");
const copyButton = document.querySelector(".copyButton");
const copyButton2 = document.querySelector(".copyButton2");
let endNumber = "";

//First Generate New Password button.
generateButton.addEventListener("click", function (generateButtonClick) {
  //Decides if the first work should be a color or another adjective.
  function getFirstPasswordParameter() {
    let passwordPartOne = Math.random();
    if (passwordPartOne <= 0.54) return "color";
    else return "adjective";
  }
  const firstPasswordParameter = getFirstPasswordParameter();

  //Decides if if the second work should be an animal or a noun.
  function getSecondPasswordParameter() {
    let passwordPartTwo = Math.random();
    if (passwordPartTwo <= 0.54) return "animal";
    else return "noun";
  }
  const secondPasswordParameter = getSecondPasswordParameter();

  function combineFirstAndSecondWords(
    firstPasswordParameter,
    secondPasswordParameter,
  ) {
    let firstWord;
    let secondWord;
    if (firstPasswordParameter === "color") {
      firstWord = colors[Math.floor(Math.random() * colors.length)];
    } else if (firstPasswordParameter === "adjective") {
      firstWord = adjectives[Math.floor(Math.random() * adjectives.length)];
    }
    if (secondPasswordParameter === "animal") {
      secondWord = animals[Math.floor(Math.random() * animals.length)];
    } else if (secondPasswordParameter === "noun") {
      secondWord = nouns[Math.floor(Math.random() * nouns.length)];
    }
    return firstWord + secondWord;
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  if (includeYear) {
    endNumber = new Date().getFullYear().toString();
  } else {
    const totalEndNumbers = Number(numbersSlider.value);
    endNumber = "";
    for (let i = 0; i < totalEndNumbers; i++) {
      endNumber += getRandomNumber();
    }
  }

  let password =
    combineFirstAndSecondWords(
      firstPasswordParameter,
      secondPasswordParameter,
    ) + endNumber;

  if (replaceA) {
    password = password.replaceAll("a", "@");
    password = password.replaceAll("A", "@");
  }
  if (replaceS) {
    password = password.replaceAll("s", "$");
    password = password.replaceAll("S", "$");
  }

  output.value = password;
});

//First Copy Password button.
copyButton.addEventListener("click", function (copyButtonClick) {
  navigator.clipboard.writeText(output.value);
});

//Second Generate New Password button.
generateButton2.addEventListener("click", function (generateButton2Click) {
  const passwordLength = Number(lengthSlider.value);
  let password2 = "";

  for (let i = 0; i < passwordLength; i++) {
    password2 += getRandomCharacter();
  }

  output2.value = password2;
});

//Second Copy Password button.
copyButton2.addEventListener("click", function (copyButton2Click) {
  navigator.clipboard.writeText(output2.value);
});

//Updates the number underneath the "Length" slider as it moves.
const lengthSlider = document.querySelector(".lengthSlider");
const lengthValue = document.querySelector(".lengthValue");
lengthSlider.addEventListener("input", function () {
  lengthValue.textContent = lengthSlider.value;
});

//Updates the number underneath the "Numbers" slider as it moves.
const numbersSlider = document.querySelector(".numbersSlider");
const numbersSliderValue = document.querySelector(".numbersSliderValue");
numbersSlider.addEventListener("input", function () {
  numbersSliderValue.textContent = numbersSlider.value;
});

//Listeners that see if a box is checked or not and returns the value of true/false depending on the check.
const includeYearCheckbox = document.querySelector("#includeYear");
const replaceACheckbox = document.querySelector("#replaceA");
const replaceSCheckbox = document.querySelector("#replaceS");
const lettersOptionCheckbox = document.querySelector("#lettersOption");
const numbersOptionCheckbox = document.querySelector("#numbersOption");
const symbolsOptionCheckbox = document.querySelector("#symbolsOption");
let includeYear = includeYearCheckbox.checked;
let replaceA = replaceACheckbox.checked;
let replaceS = replaceSCheckbox.checked;
let includeLetters = lettersOptionCheckbox.checked;
let includeNumbers = numbersOptionCheckbox.checked;
let includeSymbols = symbolsOptionCheckbox.checked;
includeYearCheckbox.addEventListener("change", function () {
  includeYear = includeYearCheckbox.checked;
});
replaceACheckbox.addEventListener("change", function () {
  replaceA = replaceACheckbox.checked;
});
replaceSCheckbox.addEventListener("change", function () {
  replaceS = replaceSCheckbox.checked;
});
lettersOptionCheckbox.addEventListener("change", function () {
  includeLetters = lettersOptionCheckbox.checked;
});
numbersOptionCheckbox.addEventListener("change", function () {
  includeNumbers = numbersOptionCheckbox.checked;
});
symbolsOptionCheckbox.addEventListener("change", function () {
  includeSymbols = symbolsOptionCheckbox.checked;
});

//Function for the second password generator. Grabs from a list of all possible characters (characterPool) and outputs them.
function getRandomCharacter() {
  let characterPool = "";

  if (includeLetters) {
    characterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  }
  if (includeNumbers) {
    characterPool += "0123456789";
  }
  if (includeSymbols) {
    characterPool += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }

  const randomIndex = Math.floor(Math.random() * characterPool.length);
  return characterPool.charAt(randomIndex);
}
