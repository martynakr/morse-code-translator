import { toLatin } from "../to-latin.js";

describe("Test cases for morseCode function that translates morse code characters to latin alphabet", () => {

    it("should properly translate a single latin character", () => {
        expect(toLatin("-...")).toBe("b");
        expect(toLatin("-")).toBe("t");
        expect(toLatin(".-.")).toBe("r")
    });

    it("should remove a space between latin characters", () => {
        expect(toLatin("-... .-. . .- -.- ..-. .- ... -")).toBe("breakfast");
    });

    it("should convert / into a single space", () => {
        expect(toLatin("")).toBe("");
    });

    // it("should throw a new error if anything other than .,  -, / or space is passed", () => {
    //     const notMoreChars = new Error(`ERROR: Morse code consists of ., -, / and spaces only. Please enter valid characters.`);

    //     expect(() => toLatin("abcd")).toThrowError(notMoreChars);
    //     });

    it("should treat multiple spaces as a single space", () => {
        expect(toLatin(".-  / ...   . -. - . -. -.-. .")).toBe("a sentence");
    });

    // it("should throw error for every untranslatable character(a wrong combination of symbols used by morse code", () => {
    //     const invalidSequence = new Error("Sorry, this sequence is not a morse code character");

    //     expect(() => toLatin(".---------")).toThrowError(invalidSequence);
    //     });

    
});

