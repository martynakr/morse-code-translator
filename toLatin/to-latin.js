import morse, {flipObj} from "../data/morse-object.js"
import { isSequenceValid } from "./is-seq-valid-morse.js"

export const toLatin = (word) => {
    const noMultiSpace = word.replace(/\s\s+/g, ' ')

    if(/[^./ -]/.test(noMultiSpace)){
        throw new Error (`ERROR: Morse code consists of ., -, / and spaces only. Please enter valid characters.`)
    }

    if(isSequenceValid(noMultiSpace) === false){
        throw new Error (`ERROR: Sorry, this sequence is not recognized. Please make sure you put spaces between each character.`)
    }

    const lat = flipObj(morse)
    const arrOfChars = noMultiSpace.split(" ")
    return arrOfChars.map(char => {
        return lat[char] }).join("")
}

