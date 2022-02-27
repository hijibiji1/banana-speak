var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorhandler(error) {
  console.log("error occured:", error);
  alert("Somthing wrong with the server! Try again after some time.");
}

function clickEventHandler() {
  var inputText = textInput.value;

  //calling server for response
  fetch(getTranslationURL(inputText))
    .then((Response) => Response.json())
    .then((json) => {
      var trasnlatedText = json.contents.translated;
      outputDiv.innerText = trasnlatedText; // output
    })
    .catch(errorhandler);
}

btnTranslate.addEventListener("click", clickEventHandler);
