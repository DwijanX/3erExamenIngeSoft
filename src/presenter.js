import {postAMessage,getMessages} from "./messageManager";

const Message = document.querySelector("#Message");
const form = document.querySelector("#publish-form");
const MessagesList = document.querySelector("#messages-Div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  postAMessage(Message.value);
  updateMessageList();
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