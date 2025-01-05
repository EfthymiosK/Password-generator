const password = document.getElementById("password");
const copy_icon = document.getElementById("copy-image");
const copy_text = document.querySelector(".copied");
const button = document.querySelector(".btn");
const range = document.getElementById("length");
const CharacterLength = document.getElementById("character-length");
const tooWeak = document.querySelector(".too-weak");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const strengths = document.querySelectorAll(".strength");
const checkboxes = document.querySelectorAll('input[type=checkbox][name=strength]');
const uppercaseLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

range.addEventListener("input", rangeInputFun);
button.addEventListener("click", generateFun);
copy_icon.addEventListener("click", copyFun);


let enabledSettings = []
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      enabledSettings = 
        Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
        
      console.log(enabledSettings)

    })
  });

function rangeInputFun() {
    CharacterLength.innerText = this.value
};
function calculateStrength() {
if (enabledSettings.length > 3) {
   clearStrength()
  /*  tooWeak.classList.add("none");
    strong.classList.remove("none");*/
    tooWeak.style.display = "none"
    strong.style.display = "flex"
 }
 else if (enabledSettings.length > 2) {
   clearStrength()
    tooWeak.classList.add("none");
    medium.classList.remove("none"); 
 }
 else if (enabledSettings.length > 1) {
   clearStrength()
    tooWeak.classList.add("none");
    weak.classList.remove("none"); 
 }
}

 function generateFun() {
    createPassword()
 }

 function copyFun() {
   navigator.clipboard.writeText(password.innerText);
   copy_text.style.display = "block";

 }

function createPassword() {
   let passPhrase = ""
    if (enabledSettings.includes("Uppercase-Letters") && enabledSettings.includes("Lowercase-Letters") && enabledSettings.includes("Numbers") && enabledSettings.includes("Symbols")) {
      let passwordBase = uppercaseLetters.concat(lowercaseLetters,numbers,symbols)
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      strong.style.display = "flex"
    }
    else if (enabledSettings.includes("Uppercase-Letters") && enabledSettings.includes("Lowercase-Letters") && enabledSettings.includes("Numbers")) {
      let passwordBase = uppercaseLetters.concat(lowercaseLetters,numbers)
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      medium.style.display = "flex"
    }
    else if (enabledSettings.includes("Uppercase-Letters") && enabledSettings.includes("Lowercase-Letters") && enabledSettings.includes("Symbols")) {
      let passwordBase = uppercaseLetters.concat(lowercaseLetters,symbols)
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      medium.style.display = "flex"
    }
    else if (enabledSettings.includes("Uppercase-Letters") && enabledSettings.includes("Symbols") && enabledSettings.includes("Numbers")) {
      let passwordBase = uppercaseLetters.concat(symbols,numbers)
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      medium.style.display = "flex"
    }
    else if (enabledSettings.includes("Symbols") && enabledSettings.includes("Lowercase-Letters") && enabledSettings.includes("Numbers")) {
      let passwordBase = symbols.concat(lowercaseLetters,numbers)
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      medium.style.display = "flex"
    }
    else if (enabledSettings.includes("Uppercase-Letters") && enabledSettings.includes("Lowercase-Letters")) {
      let passwordBase = uppercaseLetters.concat(lowercaseLetters)
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      weak.style.display = "flex"
    }
    else if (enabledSettings.includes("Uppercase-Letters") && enabledSettings.includes("Symbols")) {
      let passwordBase = uppercaseLetters.concat(symbols)
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      weak.style.display = "flex"
    }
    else if (enabledSettings.includes("Uppercase-Letters") && enabledSettings.includes("Numbers")) {
      let passwordBase = uppercaseLetters.concat(numbers)
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      weak.style.display = "flex"
    }
    else if (enabledSettings.includes("Symbols") && enabledSettings.includes("Lowercase-Letters")) {
      let passwordBase = symbols.concat(lowercaseLetters)
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      weak.style.display = "flex"
    }
    else if (enabledSettings.includes("Numbers") && enabledSettings.includes("Lowercase-Letters")) {
      let passwordBase = numbers.concat(lowercaseLetters)
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      weak.style.display = "flex"
    }
    else if (enabledSettings.includes("Symbols") && enabledSettings.includes("Numbers")) {
      let passwordBase = symbols.concat(numbers)
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      weak.style.display = "flex"
    }
    else if (enabledSettings.includes("Uppercase-Letters")) {
      let passwordBase = uppercaseLetters
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      tooWeak.style.display = "flex"
    }
    else if (enabledSettings.includes("Lowercase-Letters")) {
      let passwordBase = lowercaseLetters
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      tooWeak.style.display = "flex"
    }
    else if (enabledSettings.includes("Symbols")) {
      let passwordBase = symbols
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      tooWeak.style.display = "flex"
    }
    else if (enabledSettings.includes("Numbers")) {
      let passwordBase = numbers
      for (let i = 0; i < range.value; i++) {
         let j = Math.floor(Math.random() * passwordBase.length);
         let letter = passwordBase[j]
         passPhrase+=letter
      }
      password.innerText = passPhrase;
      clearStrength()
      copy_text.style.display = "none";
      tooWeak.style.display = "flex"
    }
}

function clearStrength() {
   for (let i = 0; i < 4; i++) {
      strengths[i].style.display="none"
   }

}