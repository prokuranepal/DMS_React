import React from 'react';
import UserCell from "./UserCell/index";

const ChatUserList = ({chatUsers, onSelectUser}) => {
  return (
    <div>
      {chatUsers.map((chat, index) =>
        <UserCell key={index} identifier= {index} chat={chat} onSelectUser={onSelectUser} data-test={`usercell-component${index}`}/>
      )}
    </div>
  )
};

export default ChatUserList;