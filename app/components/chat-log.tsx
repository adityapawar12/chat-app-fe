import React, { Fragment } from "react";
import MyChat from "./my-chat";
import OthersChat from "./others-chat";

const ChatLog = () => {
  let chats: Array<{
    id: number;
    userId: number;
    message: string;
  }> = [];

  for (let index = 0; index < 100; index++) {
    const randomNum = Math.floor(Math.random() * 2);

    if (randomNum > 0) {
      chats.push({ id: index, userId: 1, message: `Chat text ${index}` });
    } else {
      chats.push({ id: index, userId: 2, message: `Chat text ${index}` });
    }
  }

  return (
    <div className="w-full flex flex-col gap-2">
      {chats.map((chat: { id: number; userId: number; message: string }) => (
        <Fragment key={chat.id}>
          {chat.userId === 1 && (
            <div className="w-full flex flex-row justify-end items-center">
              <MyChat chatMessage={chat.message} />
            </div>
          )}

          {chat.userId === 2 && (
            <div className="w-full flex flex-row justify-start items-center">
              <OthersChat chatMessage={chat.message} />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default ChatLog;
