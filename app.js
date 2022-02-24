var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

function clickEventHandler() {
  outputDiv.innerText = "output is: " + textInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler);
