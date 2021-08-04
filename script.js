var btnTranslate = document.querySelector("#btn-translate")
var userInput = document.querySelector("#userinput")
var output = document.querySelector(".output")


var reset = document.querySelector("#btn-reset")

  
btnTranslate.addEventListener("click", function clickHandler(){
  output.innerText = userInput.value
})

reset.addEventListener("click", function resetHandler(){
    userInput.value = ""
  })