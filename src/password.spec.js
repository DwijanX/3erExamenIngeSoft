import {guessPasswordWord} from "./password"

describe("Passwords", () => {
    it("Deberia adivinar password", () => {
        expect(guessPasswordWord("password")).toEqual(2);
      });
    it("Deberia adivinar password sin importar si es mayuscula o minuscula", () => {
    expect(guessPasswordWord("paSsWorD")).toEqual(2);
    });
});
