import React, { createContext, useState } from 'react'
import Sidebar from './Sidebar'
import {Outlet} from "react-router-dom";

export const bodyContext=createContext();
const Body = () => {
  console.log("body render");
  const [bodyState,setBodyState]=useState(false);
  return (
    
    <div className='flex'>

    <Sidebar className=""/>
    <bodyContext.Provider value={{bodyState,setBodyState}}>
      <Outlet/>
      </bodyContext.Provider>
    </div>
   
  )
}

export default Body
