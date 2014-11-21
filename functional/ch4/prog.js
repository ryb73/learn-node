module.exports = function getShortMessages(messageObjs) {
  return messageObjs.map(getMessage)
                    .filter(isShort);
};

function isShort(message) {
  return message.length < 50;
}

function getMessage(messageObj) {
  return messageObj.message;
}