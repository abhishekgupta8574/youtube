import React from 'react'

const ChatData = ({name,message}) => {
  return (
    <div>
      <span className='font-bold'>{name} { " "} </span>
      <span>{message}</span>
    </div>
  )
}

export default ChatData
