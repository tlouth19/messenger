import React from 'react'
import PT from 'prop-types'

const MessageList = ({ messages }) => {
  return (
    <div className='px-6 py-4 flex-1 overflow-y-scroll bg-gray-100'>
      {messages.map(message => {
        console.log(message)
        return (
          <div key={message._id} className={`flex mb-3 ${message.type === 'INCOMING' ? 'justify-start' : "justify-end"}`}>
            <div className={`${message.type === 'INCOMING' ? 'text-left' : "text-right"}`}>
              <div className={`p-2 rounded border border-gray-400 bg-white inline-block text-left ${message.type === 'INCOMING' ? 'bg-white' : "bg-green-800 text-white"}`}>
                {message.image && 
                  <img src={message.image} alt={message.text} className='max-w-sm max-h-sm'/>
                }
                {message.text && 
                  <span className='whitespace-pre-line'>{message.text}</span>
                }
              </div>
              <small className='opacity-50 text-xs w-full block pt-1 px-2'>
                {message.sent_at.toLocaleTimeString()}
              </small>
            </div>
          </div>
        )}
      )}
    </div>
  )
}

MessageList.defaultProps = {
  messages: []
}

MessageList.propTypes = {
  messages: PT.arrayOf(PT.shape({
    _id: PT.number.isRequired,
    text: PT.string,
    image: PT.string,
    type: PT.oneOf(["INCOMING", "OUTGOING"]),
    sent_at: PT.object.isRequired
  })).isRequired
}

export default MessageList