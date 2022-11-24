import {guessPasswordWord} from "./password"

describe("Passwords", () => {
    it("Deberia adivinar password", () => {
        expect(guessPasswordWord("cuidado")).toEqual(1);
      });
    it("Deberia adivinar password sin importar si es mayuscula o minuscula", () => {
    expect(guessPasswordWord("el")).toEqual(1);
    });
    it("Deberia adivinar password sin importar .", () => {
        expect(guessPasswordWord("paSsWorD")).toEqual(3);
        });
    it("Deberia adivinar password sin importar guion", () => {
        expect(guessPasswordWord("poco")).toEqual(1);
        });
    it("Deberia adivinar password sin importar coma", () => {
        expect(guessPasswordWord("de")).toEqual(2);
        });
});
