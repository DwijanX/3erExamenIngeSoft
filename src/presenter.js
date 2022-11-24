import {postAMessage,getMessages} from "./messageManager";
//Flags
const EMPTYMESSAGE="EMPMSG"


const Message = document.querySelector("#Message");
const form = document.querySelector("#publish-form");
const MessagesList = document.querySelector("#messages-Div");
const errorDiv = document.querySelector("#errorDiv");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  if(postAMessage(Message.value)==EMPTYMESSAGE)
  {
    errorDiv.innerHTML="No se puede ingresar un post sin texto"
  }
  else
  {
    updateMessageList();
    errorDiv.innerHTML=""
  }
});

function updateMessageList()
{
  MessagesList.innerHTML=""
  let messages=getMessages()
  for(let index=0;index<messages.length;index++)
  {
    MessagesList.innerHTML+="<p>"+messages[index]+"</p>"

  }
}