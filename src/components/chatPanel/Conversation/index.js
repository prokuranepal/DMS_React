import React from 'react';
import ReceivedMessageCell from "./ReceivedMessageCell/index";
import SentMessageCell from "./SentMessageCell/index";

const Conversation = ({conversationData, selectedUser}) => {

  return (
    <div className="chat-main-content">
      {conversationData.map((conversation, index) => conversation.type === 'sent' ?
        <SentMessageCell key={index} conversation={conversation} data-test="sentMessageComp"/> :
        <ReceivedMessageCell key={index} conversation={conversation} user={selectedUser} data-test="receivedMailComp"/>
      )}
    </div>
  )
};

export default Conversation;