import {postAMessage,getMessage} from "./messageManager";

describe("Pruebas de mensajes", () => {
  it("Deberia agregar un mensaje a las publicaciones", () => {
    postAMessage("Hola mundo")
    expect(getMessage()).toEqual("Hola mundo");
  });
});
