import {guessPasswordWord} from "./password"

describe("Passwords", () => {
    it("Deberia adivinar password", () => {
        expect(guessPasswordWord("password")).toEqual(2);
      });
});
