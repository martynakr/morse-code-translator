import { toMorseCode } from "./to-morse-code.js";

describe("Test cases for toMorseCode function that translates latin characters to morse code", () => {
    it("should properly translate a single latin character", () => {
        expect(toMorseCode("a")).toBe(".-");
        expect(toMorseCode("z")).toBe("--..");
        expect(toMorseCode("c")).toBe("-.-.");
    });

    it("should insert a space between morse code characters", () => {
        expect(toMorseCode("eat")).toBe(". .- -");
        expect(toMorseCode("kangaroo")).toBe("-.- .- -. --. .- .-. --- ---");
    });

    it("should properly translate a string with more than one word", () => {
        expect(toMorseCode("eat apples")).toBe(". .- - / .- .--. .--. .-.. . ...");
    });

    it("should convert a space between words to /", () => {
        expect(toMorseCode("I love coding")).toBe(".. / .-.. --- ...- . / -.-. --- -.. .. -. --.");
    });


    it("should not be case sensitive", () => {
        expect(toMorseCode("M")===toMorseCode("m")).toBe(true)
        expect(toMorseCode("Australia")===toMorseCode("australia")).toBe(true)
    });

    it("should treat multiple spaces as a single space", () => {
        expect(toMorseCode("apple   juice")).toBe(".- .--. .--. .-.. . / .--- ..- .. -.-. .");
        expect(toMorseCode("milk  chocolate   with     toffee")).toBe("-- .. .-.. -.- / -.-. .... --- -.-. --- .-.. .- - . / .-- .. - .... / - --- ..-. ..-. . .");
    });

    it("should throw a new error if an untranslatable character is passed", () => {
        const notInMorse = new Error(`ERROR: Input includes characters that don't exist in Morse code.`);

        expect(() => toMorseCode("abcdef^")).toThrowError(notInMorse);
        });


});
