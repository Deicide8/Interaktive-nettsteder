// TODO: Sett startverdien for de ulike tellerene du trenger for å ha kontroll på
// - antall feil
let wrongCount = 0;
// - posisjonen til bokstaven du skal skrive
let letterCount = 0;
// - ordet som skal vises
let currentWord = "";
let currentLetter = "";
let random = null;
let output = null;

// TODO: Lag en liste med ulike ord
let words = [
  "apple",
  "banana",
  "pineapple",
  "fruit",
  "berry",
  "raspberry",
  "strawberry",
  "blackberry",
  "device",
  "computer",
  "phone",
  "fan",
  "processor",
  "graphics",
  "microphone",
  "keyboard",
  "supplement",
  "vitamin",
  "iron",
  "potassium",
  "organ",
  "heart",
  "stomach",
  "liver",
  "intestine",
  "vein",
  "kidney",
  "brain",
  "immune"
];
console.log(words);

// TODO: Hent ut HTML #ider og knappen
const word = document.getElementById("word");
const letter = document.getElementById("letter");
const wrongs = document.getElementById("wrongs");
const button = document.querySelector("button");
// TODO: Lag en funksjon for å skrive ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
function wordToWrite(){
  button.innerHTML = "Startknapp";
  wrongs.innerHTML = "Antall feil:" + wrongCount;
  window.addEventListener("keyup", keyboardEvent);
  button.disabled = true;
  random = Math.floor(Math.random() * words.length);
  word.innerHTML = "Skriv: " + words[random];
  currentWord = words[random];
  if(words.length === 0){
    reset();
  };
};
// TODO: Lag en funksjon som gjør at vi kan bytte ord. Må også oppdatere tellerene
function changeWord(){
  window.addEventListener("keyup", keyboardEvent);
  word.style.color = "black";
  letterCount = 0;
  words.splice(random, 1);
  wordToWrite();
};
// TODO: Lag en funksjon for å sjekke om vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
function checkCorrectLetter(){
  currentLetter = currentWord.charAt(letterCount);
  if(currentLetter === event.key){
    letterCount++
    checkCorrectWord();
  } else {
    window.removeEventListener("keyup", keyboardEvent);
    wrongCount++;
    wrongs.innerHTML = "Antall feil: " + wrongCount;
    word.style.color = "red";
    setTimeout(changeWord, 1000);
  };
};
// TODO: Lag en funksjon for å sjekke om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
function checkCorrectWord(){
  if(letterCount === currentWord.length){
    window.removeEventListener("keyup", keyboardEvent);
    word.style.color = "green";
    setTimeout(changeWord, 1000);
  };
};
// TODO: Lag en funksjon som trigges når vi skriver på tastaturen og basert på hva vi skriver / posisjonen vi er på gjør nødvendige oppdateringer av grensesnittet
function keyboardEvent(){
  if(random != null){
    currentLetter = event.key;
    letter.innerHTML = currentLetter;
    checkCorrectLetter();
  };
};
// TODO: Lag en funksjon som kan brukes til å oppdatere grensesnittet
function reset(){
  wrongCount = 0;
  letterCount = 0;
  currentWord = "";
  currentLetter = "";
  random = null;
  output = null;
  words = [
    "apple",
    "banana",
    "pineapple",
    "fruit",
    "berry",
    "raspberry",
    "strawberry",
    "blackberry",
    "device",
    "computer",
    "phone",
    "fan",
    "processor",
    "graphics",
    "Microphone",
    "keyboard",
    "supplement",
    "vitamin",
    "iron",
    "potassium",
    "organ",
    "heart",
    "stomach",
    "liver",
    "intestine",
    "vein",
    "kidney",
    "brain",
    "immune"
  ];

  button.disabled = false;
  window.removeEventListener("keyup", keyboardEvent);
  button.innerHTML = "Reset";
  word.innerHTML = "Ingen flere ord!";
  letter.innerHTML = null;
// - Vise antall feil
// - Vise ordet vi skal skrive
// - Vise hvor langt vi har kommet (posisjonen) på det ordet vi skal skrive
};
// TODO: Lytt til keyup på window
window.addEventListener("keyup", keyboardEvent);
// TODO: Lytt til klikk på knappen. Klikket skal gjøre knappen "disabled" samt starte oppgaven
button.addEventListener("click", wordToWrite);
