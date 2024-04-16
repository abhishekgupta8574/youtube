import React from 'react'

const ChatData = ({name,message}) => {
  return (
    <div>
      <span className='font-bold'>{name} { " "} </span>
      <span className='md:text-sm whitespace-nowrap'>{message}</span>
    </div>
  )
}

export default ChatData
