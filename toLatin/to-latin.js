import morse, {flipObj} from "../data/morse-object.js"

export const toLatin = (word) => {

    // if(/[^./ -]/.test(word)){
    //     throw new Error (`ERROR: Morse code consists of ., -, / and spaces only. Please enter valid characters.`)
    // }
    const lat = flipObj(morse)
    const noMultiSpace = word.replace(/\s\s+/g, ' ')
    const arrOfChars = noMultiSpace.split(" ")
    return arrOfChars.map(char => {
        return lat[char] }).join("")
}

