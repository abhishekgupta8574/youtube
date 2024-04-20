import React, { createContext, useState } from 'react'
import Sidebar from './Sidebar'
import {Outlet} from "react-router-dom";
import BottomNavbar from './BottomNavbar';

export const bodyContext=createContext();
const Body = () => {
  console.log("body render");
  const [bodyState,setBodyState]=useState(false);
  return (
    
    <div className='flex'>

    <Sidebar className=""/>
    <div className='flex flex-col'>
    <bodyContext.Provider value={{bodyState,setBodyState}}>
      <Outlet/>
      <BottomNavbar/>
      </bodyContext.Provider>
      </div>
      
    </div>
   
  )
}

export default Body
