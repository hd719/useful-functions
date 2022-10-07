export function createConversations(data) {
  const { messages, users, userId } = data;
  let conversations = [];
  const getAllUserIds = users.map((user) => user.id);

  getAllUserIds.forEach((secondUserId) => {
    const conversationList = filterMessagesById(messages, userId, secondUserId);
    const conversation = createConversation(
      conversationList,
      users,
      secondUserId
    );
    conversations.push(conversation);
  });

  const updatedConversations = conversations.sort(
    (x, y) => y.mostRecentMessage.timestamp - x.mostRecentMessage.timestamp
  );

  return JSON.stringify({ conversations: updatedConversations });
}

function filterMessagesById(messages, userId, secondUserId) {
  const getFirstUserConversation = messages.filter(
    (message) =>
      message.fromUserId === userId && message.toUserId === secondUserId
  );
  const getSecondUserConversation = messages.filter(
    (message) =>
      message.toUserId === userId && message.fromUserId === secondUserId
  );
  const combinedConversation = [
    ...getFirstUserConversation,
    ...getSecondUserConversation,
  ];

  return sortListByTimestamp(combinedConversation);
}

function sortListByTimestamp(list) {
  return list.sort((x, y) => x.timestamp - y.timestamp);
}

function createConversation(conversationList, users, secondUserId) {
  const getSecondUser = users.find((user) => user.id === secondUserId);
  const recentMessage = createMostRecentMessage(
    conversationList[conversationList.length - 1]
  );
  const totalMessages = conversationList.length;

  return {
    avatar: getSecondUser?.avatar,
    firstName: getSecondUser?.firstName,
    lastName: getSecondUser?.lastName,
    mostRecentMessage: recentMessage,
    totalMessages,
    userId: getSecondUser.id,
  };
}

function createMostRecentMessage(message, userId) {
  const { content, timestamp, fromUserId } = message;

  return {
    content,
    timestamp,
    userId: fromUserId,
  };
}

// convert ms into time
function millisecondsToTime(x) {
  const dateObject = new Date(x);
  const humanDateFormat = dateObject.toLocaleString(); //2019-12-31 12:00:00

  return humanDateFormat;
}
