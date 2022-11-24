const EMPTYMESSAGE="EMPMSG"
let postedMessages=[];
function postAMessage(message) {
  if(message.trim()!="")
  {
    postedMessages.push(message);
  }
  return EMPTYMESSAGE
}
function getMessages()
{
  return postedMessages;
}
function clearPostedMessages()
{
  postedMessages=[]
}

export {postAMessage,getMessages,clearPostedMessages};
