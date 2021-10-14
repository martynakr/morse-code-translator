import {flipped} from "../data/morse-object.js"
export const spacesOnly = /^\s*$/

export const isSequenceValid = (word) => {
    if(spacesOnly.test(word)){
        return true
    }

    else if(!spacesOnly.test(word)){
    console.log(spacesOnly.test(word))
    const arr = word.trim().split(" ")
    console.log(arr)
    const matches = arr.map(n => flipped[n])
        if(matches.indexOf(undefined)> -1) {
            return false
        } else {
             return true
    }
}}