import {toMorseCode} from "./toMorseCode/to-morse-code.js"
import {toLatin} from "./toLatin/to-latin.js"
import morse, {flipped} from "./data/morse-object.js"

const latin = document.querySelector("#latin")
const morseIn = document.querySelector("#morse")
const morseError = document.querySelector(".error-morse")
const latinError = document.querySelector(".error-latin")


// error messages for Morse code 
const error1 = `ERROR: Morse code consists of ., -, / and spaces only. Please enter valid characters.`

const error2 = `ERROR: Sorry, this sequence is not recognized. Please make sure you put spaces between each character.`


//error message for Latin input
const error3 = `ERROR: Input includes characters that don't exist in Morse code.`

// regex checks
const morseCharOnly = /[^./ -]/ // checking for anything that's not a dot, , / space or - 

const spacesOnly = /^\s*$/ //checking if an input value is only spaces

const notInMorse = /[#^_{}]/  //checking for characters that dont exist in morse code

const invalidSeq = /[]/ //checking if input includes an invalid sequence 
// error states
let error1IsPrinted = false
let error2IsPrinted = false
let error3IsPrinted = false

morseIn.addEventListener('input',()=>{
    console.log(morse.value)
    if(spacesOnly.test(morse.value)){
        latin.value = ""
        console.log(latin.value)

    }
   
    // if morse code input includes something other than morse code symbols
    if(morseCharOnly.test(morse.value) && error1IsPrinted === false) {
        console.log(morseCharOnly.test(morseIn.value))
        morseError.innerText= error1
        error1IsPrinted = true
    }

    if(!morseCharOnly.test(morseIn.value) && error1IsPrinted === true) {
         morseError.innerText = ""
         error1IsPrinted = false
    }


    // if input includesd something that doesnt match the object key
//     if((Object.values(morse).indexOf(morseIn.value) < 0 && morseIn.value !== "")) {
//         morseError.innerText = error2
//         error2IsPrinted = true
//    }

//    if((!Object.values(morse).indexOf(morseIn.value) < 0 && error2IsPrinted === true)) {
//     morseError.innerText = ""
//     error2IsPrinted = false
// }

      
    latin.value = toLatin(morseIn.value)
    console.log(Object.values(flipped).indexOf(morseIn.value))
});


latin.addEventListener('input',()=>{
    if(error3IsPrinted === false && notInMorse.test(latin.value)){
        latinError.innerText = error3
        error3IsPrinted = true
        }

    if(error3IsPrinted === true && !notInMorse.test(latin.value)){
        latinError.innerText = ""
        error3IsPrinted = false
    }
    
    morseIn.value = toMorseCode(latin.value)
});

