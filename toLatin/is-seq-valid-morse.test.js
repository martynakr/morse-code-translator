import { isSequenceValid } from "./is-seq-valid-morse.js";

describe("Test cases for isSequenceValid function that checks if passed dot, dash, space slash combinations exist in Morse code", () => {
    it("should return true if string consists of spaces only", () => {
        expect(isSequenceValid("    ")).toBe(true);

    });

    it("should return true for a single character that exists in morse code", () => {
        expect(isSequenceValid("... --- ...")).toBe(true);
    });

    it("should return false for a character sequence that does not have a match in Morse code", () => {
        expect(isSequenceValid("..........")).toBe(false);
        expect(isSequenceValid("..........  ------------")).toBe(false);
    });

    it("should return false if at least one of the sequences does not have a match in Morse code", () => {
        expect(isSequenceValid(". ........------- . .")).toBe(false);

    });


});