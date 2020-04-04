import React, { useState } from 'react';
import Header from './components/header'
import MessageList from './components/message_list'
import MessageBox from './components/message_box'
import { createMessage } from './helpers/'

let INITIAL_MESSAGES = [
  createMessage("Hello, how are you today?", null, 'INCOMING'),
  createMessage('Try sending me a message or a photo 😎', null, "INCOMING")
]

const App = () => {

  const [messages, addMessage] = useState(INITIAL_MESSAGES)

  const onPostMessage = (message) => {
    addMessage(messages => ([ ...messages, message ]))
  }

  return (
    <div className='flex flex-col h-screen'>
      <Header/>
      <MessageList messages={messages}/>
      <MessageBox onPostMessage={onPostMessage}/>
    </div>
  )
}

export default App;
