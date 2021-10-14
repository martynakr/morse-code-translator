import morse from "../data/morse-object.js"

export const isSequenceValidLat = (word) => {
    const arr = word.trim().split("")
    console.log(arr)
    const matches = arr.map(n => morse[n])
    console.log(matches)
        if(matches.indexOf(undefined)> -1) {
            return false
        } else {
             return true
    }
}