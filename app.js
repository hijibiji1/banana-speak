var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");

function clickEventHandler() {
  console.log("Clicked");
  console.log("input:", textInput.value);
}

btnTranslate.addEventListener("click", clickEventHandler);
