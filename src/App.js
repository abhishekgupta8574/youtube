import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Store from "./Utilis/store";
// import Sidebar from "./components/Sidebar";
import { createBrowserRouter, Outlet } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";
import { createContext, useState } from "react";
import Shorts from "./components/Shorts";
import Trending from "./components/Trending";
import Podcast from "./components/Podcast";

export const userContext = createContext({ data: "name" });
function App() {
  const [isloading, setisloading] = useState(false);
  const [value, setValue] = useState("");
  console.log("app render", value);
  return (
    <Provider store={Store}>
      <div className="App relative">
        <userContext.Provider value={{ isloading, setisloading, setValue }}>
          <Header />

          <Outlet />
        </userContext.Provider>
      </div>
    </Provider>
  );
}

console.log(App);
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "/watch",
            element: <WatchPage />,
          },
          {
            path: "/search",
            element: <SearchPage />,
          },
          {
            path: "/shorts",
            element: <Shorts />,
          },
          {
            path: "/trending",
            element: <Trending />,
          },
          {
            path: "/podcast",
            element: <Podcast/>,
          },
        ],
      },
    ],
  },
]);
console.log(appRouter);
export default App;
