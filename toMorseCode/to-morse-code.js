import morse from "../data/morse-object.js"

export const toMorseCode = (word) => {
    const noMultiSpace = word.replace(/\s\s+/g, ' ');
    //split a word into characters
    const arrOfChars = noMultiSpace.toLowerCase().split("")
    return arrOfChars.map(char => {
       return morse[char] ? morse[char] : ""}).join(" ")}


