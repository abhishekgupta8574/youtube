import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Store from "./Utilis/store";
// import Sidebar from "./components/Sidebar";
import {
  
  createBrowserRouter,
 
  Outlet,
} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";
import { createContext, useState } from "react";



export const userContext=createContext({data:"name"});
function App() {
  
  const [isloading,setisloading]=useState(false);
  const [value, setValue] = useState('');
  console.log("app render",value)
  return (
    <Provider store={Store}>
      <div className="App relative">
      <userContext.Provider value={{isloading,setisloading,setValue}}>
      
      <Header />
      
      <Outlet updateData={setValue}/> 
      </userContext.Provider>
      </div>
    </Provider>
  );
}

console.log(App);
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element:<Body/>,
        children: [
          {
            path: "/",
            element:<MainContainer/>
          },
          {
            path: "/watch",
            element:<WatchPage/>
          },
          {
            path: "/search",
            element:<SearchPage/>
          },
        ]
      },
      
    ],
  },
]);
console.log(appRouter);
export default App;
