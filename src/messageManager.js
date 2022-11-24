let postedMessage;
function postAMessage(message) {
  postedMessage=message;
}
function getMessage()
{
  return postedMessage;
}

export {postAMessage,getMessage};
