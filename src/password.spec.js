import {guessPasswordWord,setPassword} from "./password"

describe("Passwords", () => {
    beforeEach(() => {
        setPassword("El password de, mi cuenta es PASSWORD. Es un Password de-poco-cuidado");
      });
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
    it("Deberia poder agregar un password nuevo y adivinar sobre el", () => {
        setPassword("de-de.de,de de")
        expect(guessPasswordWord("de")).toEqual(5);
        });
});
