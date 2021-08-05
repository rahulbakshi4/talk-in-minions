const btnTranslate = document.querySelector("#btn-translate")
const userInput = document.querySelector("#userinput")
const output = document.querySelector(".output")
const reset = document.querySelector("#btn-reset")
const serverUrl = "https://api.funtranslations.com/translate/minion.json"

const getTranslatedUrl =(text) => {
    return `${serverUrl}?text=${text}`
}

const errorHandler = (error) =>{
     console.log("Some Error Occurred",error)
     alert("Sorry something went wrong with server! Please try after some time")
}

const resetHandler = () =>{
    userInput.value = ""
    output.innerText= ""
  }
const clickHandler = () =>{
    const textInput = userInput.value

    fetch(getTranslatedUrl(textInput))
    .then(response =>response.json())
    .then(json=>{
        const translatedText = json.contents.translated;
        output.innerText = translatedText
    }).catch(errorHandler)
}
  
btnTranslate.addEventListener("click",  clickHandler)
  


reset.addEventListener("click",resetHandler)

