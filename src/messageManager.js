let postedMessages=[];
function postAMessage(message) {
  postedMessages.push(message);
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
