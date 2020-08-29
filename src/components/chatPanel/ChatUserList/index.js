import React from 'react';
import UserCell from "./UserCell/index";

const ChatUserList = ({chatUsers, selectedSectionId, onSelectUser}) => {
  return (
    <div className="chat-user">
      {chatUsers.map((chat, index) =>
        <UserCell key={index} chat={chat} selectedSectionId={selectedSectionId} onSelectUser={onSelectUser} data-test={`usercell-component${index}`}/>
      )}
    </div>
  )
};

export default ChatUserList;