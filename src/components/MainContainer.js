import React from 'react'
import ButtonList from './ButtonList'
import VideoContainers from './VideoContainers'
import BottomNavbar from './BottomNavbar'

const MainContainer = () => {
  return (
    <div className='md:ml-4'>
      <ButtonList/> 
      <VideoContainers/>
      
    </div>
  )
}

export default MainContainer
