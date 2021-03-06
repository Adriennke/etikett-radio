
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Join from './Join';
import Chat from './Chat';

function ChatApp({ name, setName }) {
  const [chatWindow, setChatWindow] = useState('chat-app-chat');
  const room = 'etikett chat';

  useEffect(() => {
    console.log('[useEffect on ChatApp is running]')
    const name = sessionStorage.getItem('name');
    if (name) {
      setName(name);
    }
  }, [name])

  return (
    name
      ? (
        <div className={`ChatApp ${chatWindow}`}>
          <Chat name={name} setName={setName} room={room} chatWindow={chatWindow} setChatWindow={setChatWindow} />
        </div>
      )
      : (
        <div className="ChatApp chat-app-join">
          <Join setName={setName} />
        </div>
      ) 
  );
}


export default withRouter(ChatApp);