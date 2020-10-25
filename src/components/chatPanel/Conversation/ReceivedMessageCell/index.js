import React from 'react';

const ReceivedMessageCell = ({conversation, user}) => {
  return (
    <div className="d-flex flex-nowrap chat-item">

      <img className="rounded-circle avatar size-40 align-self-end" src={user.thumb}
           data-test="imageComp" alt=""/>

      <div className="bubble">
        <div className="message" data-test="messageComp">{conversation.message}</div>
        <div className="time text-muted text-right mt-2" data-test="sentAtComp">{conversation.sentAt}</div>
      </div>

    </div>
  )
};

export default ReceivedMessageCell;