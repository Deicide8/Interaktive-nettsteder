// Oppgave 1
const textToRemove = document.getElementById("remove");
const removeButton = document.getElementById("remove-btn");

function removeText(){
  textToRemove.innerHTML = null;
};

removeButton.addEventListener("click", removeText);

// Oppgave 2
const textToChange = document.getElementById("change");
const changeButton = document.getElementById("change-btn");

function changeText(){
  textToChange.innerHTML = "Hei! her har jeg endra teksten";
};

changeButton.addEventListener("click", changeText);

// Oppgave 3
let input = document.getElementById("input");
const inputText = document.getElementById("input-text");

function output() {
  input = document.getElementById("input").value;
  inputText.innerHTML = input;
};

input.addEventListener("keyup", output);

// Oppgave 4
const myList = ["item one", "item two", "item three"];
const list = document.getElementById("ul");
const writeListBtn = document.getElementById("write-list");
let count = 0;

function writeList(){
  if (count === 0){
    list.innerHTML = "<li>" + myList[0] + "</li>";
    count++
  } else if (count === 1){
    list.innerHTML += "<li>" + myList[1] + "</li>";
    count++
  } else if (count === 2) {
    list.innerHTML += "<li>" + myList[2] + "</li>";
    count++
  };
};

writeListBtn.addEventListener("click", writeList);

// Oppgave 5
const select = document.getElementById("select");
const create = document.getElementById("create");
let value = select.options[select.selectedIndex].value;
let text = document.getElementById("text").value;
//console.log(value);

function outputList(){
  value = select.options[select.selectedIndex].value;
  text = document.getElementById("text").value;
  document.getElementById("placeholder").innerHTML = "<" + value + ">" + text + "</" + value + ">";
};

create.addEventListener("click", outputList);

// Oppgave 6
const parentList = document.getElementById("list");
const removeLi = document.getElementById("remove-li");
//console.log(parentList.lastElementChild);

function removeListElement(){
  const removeChild = parentList.lastElementChild;
  parentList.removeChild(removeChild);
};

removeLi.addEventListener("click", removeListElement);

// Oppgave 7
let name = document.getElementById("name");
const border = document.getElementById("order");
//console.log(name.length);

function nameLength(){
  name = document.getElementById("name").value;
  if(name.length > 4){
  border.style.border = "thin solid red";
  border.disabled = true;
  } else if (name.length <= 4) {
    border.style.border = null;
    border.disabled = false;
  };
};

name.addEventListener("keyup", nameLength);

// Oppgave 8
const colour = document.getElementById("color");
const parent = document.querySelector(".children");
const parentChildren = parent.querySelectorAll("li");
const childrenArray = Array.from(parentChildren);
//console.log(childrenArray);

function borderColour(){
  for(i = 0; i < childrenArray.length; i++){
    if(i % 2 === 0){
      childrenArray[i].style.border = "1px solid green";
      childrenArray[i].style.margin = "5px";
      childrenArray[i].style.padding = "5px";
      console.log("odd");
    } else {
      console.log("even");
      childrenArray[i].style.border = "1px solid pink"
      childrenArray[i].style.margin = "5px";
      childrenArray[i].style.padding = "5px";
    };
  };
};

colour.addEventListener("click", borderColour);
