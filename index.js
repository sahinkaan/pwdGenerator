const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

firstPwdEl = document.getElementById("first-pwd")
secondPwdEl = document.getElementById("second-pwd")
numberEl = document.getElementById("check-numbers")
symbolsEl = document.getElementById("check-symbols")

function getRandomCharacters() {
    return characters[Math.floor(Math.random() * characters.length)]
}

function getPassword(){
    let length = document.getElementById("pwd-length").value
    let pass = ""
    for (let i = 0; i < length; i++){
        pass += getRandomCharacters()
    }
    return pass
}

function generatePwds(){
    firstPwdEl.textContent = getPassword()
    secondPwdEl.textContent = getPassword()
}

numberEl.addEventListener('change',function() {
    if (this.checked) {
    console.log("Numbers checkbox is checked..");
    characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
  } else {
    console.log("Numbers checkbox is not checked..");
    characters.splice(characters.indexOf("0"),10)
  }
})

symbolsEl.addEventListener('change',function() {
    if (this.checked) {
    console.log("Symbols checkbox is checked..");
    characters.push("~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/")
  } else {
    console.log("Symbols checkbox is not checked..");
    characters.splice(characters.indexOf("~"),29)
  }
})
//characters.splice(characters.indexOf("0"),10)
console.log(characters.indexOf("0"))
console.log(characters.indexOf("9"))
console.log(characters.indexOf("~"))
console.log(characters.indexOf("/"))
