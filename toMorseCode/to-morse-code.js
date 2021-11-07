import morse from "../data/morse-object.js"
import { isSequenceValidLat } from "./is-seq-valid-latin.js";

export const toMorseCode = (word) => {
    const noMultiSpace = word.replace(/\s\s+/g, ' ');

    if(isSequenceValidLat(noMultiSpace) === false){
        throw new Error (`ERROR: Input includes characters that don't exist in Morse code.`)
    }

    const arrOfChars = noMultiSpace.toLowerCase().split("")
    return arrOfChars.map(char => {
       return morse[char]}).join(" ")}


