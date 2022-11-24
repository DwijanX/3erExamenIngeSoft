import {postAMessage,getMessages,clearPostedMessages} from "./messageManager";
const EMPTYMESSAGE="EMPMSG"

describe("Pruebas de mensajes", () => {
  beforeEach(() => {
    clearPostedMessages();
  });
  it("Deberia agregar un mensaje a las publicaciones", () => {
    postAMessage("Hola mundo")
    expect(getMessages()).toEqual(["Hola mundo"]);
  });
  it("Deberia poder publicar varios mensajes", () => {
    postAMessage("Hola mundo 1")
    postAMessage("Hola mundo 2")
    expect(getMessages()).toEqual(["Hola mundo 1","Hola mundo 2"]);
  });
  it("Si se intenta publicar un mensaje vacio devuelve una flag", () => {
    
    expect(postAMessage("")).toEqual(EMPTYMESSAGE);
  });
});
