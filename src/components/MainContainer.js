import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainers from './VideoContainers'
import BottomNavbar from './BottomNavbar'
import { useDispatch } from 'react-redux'
import { toggleHiemburger } from '../Utilis/menuSlice'

const MainContainer = () => {
  const dispatchHiemburger=useDispatch();
  useEffect(()=>{
    dispatchHiemburger(toggleHiemburger(true))
  })
  
  return (
    <div className='md:ml-4'>
      <ButtonList/> 
      <VideoContainers/>
      
    </div>
  )
}

export default MainContainer
