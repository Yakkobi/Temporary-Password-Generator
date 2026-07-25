// prettier-ignore
const colors = [
  "Red", "Tan", "Jet",
  "Blue", "Pink", "Gold", "Gray", "Grey", "Teal", "Navy", "Cyan", "Rose",
  "Rust", "Plum", "Jade", "Ruby", "Aqua",
  "Green", "Black", "White", "Brown", "Coral", "Amber", "Ivory", "Beige",
  "Khaki", "Olive", "Slate", "Peach", "Lilac", "Mauve",
  "Purple", "Orange", "Maroon", "Violet", "Indigo", "Silver", "Bronze",
  "Copper", "Salmon", "Cherry", "Golden", "Yellow", "Sienna", "Auburn",
  "Cobalt",
  "Crimson", "Scarlet", "Emerald", "Magenta", "Fuchsia", "Apricot",
  "Mustard", "Saffron",
  "Burgundy", "Charcoal", "Lavender", "Mahogany"
];

// prettier-ignore
const adjectives = [
  "Big", "Sly", "Shy", "Wet", "Dry", "Hot", "Icy",
  "Bold", "Calm", "Cool", "Dark", "Fast", "Kind", "Loud", "Mild", "Neat",
  "Pure", "Rare", "Slow", "Soft", "Tall", "Warm", "Wild", "Wise", "Fair",
  "Firm", "Keen", "Lean", "Sure", "Tidy", "Vast",
  "Brave", "Fresh", "Happy", "Heavy", "Light", "Quiet", "Quick", "Sharp",
  "Sweet", "Tough", "Young", "Eager", "Loyal", "Proud", "Solid", "Sunny",
  "Witty", "Zesty", "Alert", "Rapid", "Merry", "Noble", "Hardy", "Brisk",
  "Vivid",
  "Clever", "Gentle", "Bright", "Sturdy", "Steady", "Mighty", "Cheery",
  "Breezy", "Chilly", "Simple", "Honest", "Humble", "Active", "Frozen",
  "Modern",
  "Radiant", "Curious", "Elegant", "Playful", "Genuine", "Serious",
  "Distant", "Amazing", "Awesome", "Careful", "Massive", "Restful",
  "Fearless", "Peaceful", "Cheerful", "Powerful", "Faithful", "Youthful",
  "Talented", "Colorful", "Adorable"
];

// prettier-ignore
const animals = [
  "Cat", "Dog", "Fox", "Owl", "Bee", "Ant", "Cow", "Pig", "Rat", "Bat",
  "Cod", "Hen", "Ram", "Elk", "Doe", "Eel",
  "Lion", "Wolf", "Bear", "Deer", "Duck", "Frog", "Goat", "Crab", "Fish",
  "Bird", "Hawk", "Mule", "Newt", "Seal", "Swan", "Lamb", "Mole", "Toad",
  "Puma", "Lynx", "Boar",
  "Tiger", "Zebra", "Horse", "Sheep", "Panda", "Snake", "Whale", "Shark",
  "Eagle", "Otter", "Mouse", "Camel", "Moose", "Skunk", "Raven", "Robin",
  "Rhino", "Gecko", "Llama", "Heron", "Crane", "Stork", "Goose", "Hyena",
  "Monkey", "Rabbit", "Turtle", "Beaver", "Coyote", "Donkey", "Falcon",
  "Jaguar", "Weasel", "Badger", "Salmon", "Gopher", "Possum", "Cougar",
  "Bobcat", "Parrot", "Puffin", "Walrus", "Iguana", "Impala", "Marmot",
  "Ferret", "Toucan", "Osprey", "Magpie", "Condor", "Jackal",
  "Cheetah", "Buffalo", "Dolphin", "Leopard", "Giraffe", "Penguin",
  "Mustang", "Peacock", "Ostrich", "Panther", "Wallaby", "Pelican",
  "Sparrow", "Wildcat", "Warthog", "Buzzard", "Bulldog", "Catfish",
  "Antelope", "Squirrel", "Kangaroo", "Elephant", "Chipmunk", "Flamingo",
  "Hedgehog", "Cockatoo", "Mongoose", "Porpoise", "Reindeer", "Aardvark",
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
  "Anchor", "Candle", "Feather", "Pillar", "Garden", "Meadow",
  "Canyon", "Desert", "Valley", "Harbor", "Mirror", "Ribbon",
  "Basket", "Blanket", "Compass", "Diamond", "Fountain", "Journey",
  "Kingdom", "Lantern", "Mountain", "Thunder", "Whisper", "Horizon",
  "Crystal", "Sunset", "Sunrise", "Shadow", "Ember", "Breeze",
  "Pebble", "Marble", "Timber", "Willow", "Cedar", "Maple",
  "Blossom", "Meteor", "Comet", "Galaxy", "Nebula", "Voyage",
  "Odyssey", "Lagoon", "Glacier", "Volcano", "Prairie", "Orchard",
  "Vineyard", "Cascade", "Summit", "Ridge"
];

let replaceLettersWithSymbols = true;
const generateButton = document.querySelector(".generateButton");
const generateButton2 = document.querySelector(".generateButton2");
const output = document.querySelector(".output");
const output2 = document.querySelector(".output2");
const copyButton = document.querySelector(".copyButton");
const copyButton2 = document.querySelector(".copyButton2");

//First Generate New Password button.
generateButton.addEventListener("click", function (generateButtonClick) {
  //Decides if the first word should be a color or a different adjective and returns it to the firstPasswordParameter variable.
  function getFirstPasswordParameter() {
    let passwordPartOne = Math.random();

    if (passwordPartOne <= 0.54) return "color";
    else return "adjective";
  }
  const firstPasswordParameter = getFirstPasswordParameter();

  //Decides if the first word should be an animal or a noun and returns it to the secondPasswordParameter variable.
  function getSecondPasswordParameter() {
    let passwordPartTwo = Math.random();

    if (passwordPartTwo <= 0.54) return "animal";
    else return "noun";
  }
  const secondPasswordParameter = getSecondPasswordParameter();

  //Mashes the first and second words together when combineFirstAndSecondWords() is called.
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

  let firstNumber = Math.floor(Math.random() * 10);
  let secondNumber = Math.floor(Math.random() * 10);

  //If replaceLetterWithSymbols is true, replaces the first A/a and the first S/s in the generated password with a @ and a $ symbol respectively.
  let password =
    combineFirstAndSecondWords(
      firstPasswordParameter,
      secondPasswordParameter,
    ) +
    firstNumber +
    secondNumber;

  if (replaceLettersWithSymbols) {
    password = password.replaceAll("a", "@");
    password = password.replaceAll("A", "@");
    password = password.replaceAll("s", "$");
    password = password.replaceAll("S", "$");
  } else {
    password = password;
  }

  output.value = password;
});

//First Copy Password button.
copyButton.addEventListener("click", function (copyButtonClick) {
  navigator.clipboard.writeText(output.value);
});

//Second Generate New Password button.
generateButton2.addEventListener("click", function (generateButton2Click) {
  let password2 = "Your new password TEST";

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
const symbolReplaceCheckbox = document.querySelector("#symbolReplace");
const lettersOptionCheckbox = document.querySelector("#lettersOption");
const numbersOptionCheckbox = document.querySelector("#numbersOption");
const symbolsOptionCheckbox = document.querySelector("#symbolsOption");
let includeYear = includeYearCheckbox.checked;
let replaceLettersWithSymbols = symbolReplaceCheckbox.checked;
let includeLetters = lettersOptionCheckbox.checked;
let includeNumbers = numbersOptionCheckbox.checked;
let includeSymbols = symbolsOptionCheckbox.checked;
includeYearCheckbox.addEventListener("change", function () {
  includeYear = includeYearCheckbox.checked;
});
symbolReplaceCheckbox.addEventListener("change", function () {
  replaceLettersWithSymbols = symbolReplaceCheckbox.checked;
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
  const characterPool =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  const randomIndex = Math.floor(Math.random() * characterPool.length);
  return characterPool.charAt(randomIndex);
}
