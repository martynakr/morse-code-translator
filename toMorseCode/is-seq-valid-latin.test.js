import { isSequenceValidLat } from "./is-seq-valid-latin.js";

describe("Test cases for isSequenceValidLat function that checks if word characters have a match in morse code", () => {
    it("should return true for a sigle latin alphabet letter", () => {
        expect(isSequenceValidLat("a")).toBe(true);

    });

    it("should return true for more than one latin alphabet word with a space", () => {
        expect(isSequenceValidLat("eat apples")).toBe(true);
    });

    it("should return false for a string that includes at least one character that does not occur in Morse code", () => {
        expect(isSequenceValidLat("58% increase")).toBe(false);
    });


});