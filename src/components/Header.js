import React, { useContext, useEffect, useState } from "react";
// import {useSelector} from "react-redux";
// import Store from "../Utilis/store";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../Utilis/menuSlice";
import { MY_API_KEY, YOUTUBE_SEARCH_API } from "../Utilis/constants";
import { pickSearchResult } from "../Utilis/searchSlice";
import { Link, useLocation } from "react-router-dom";
import { userContext } from "../App";
import MyImage from "./MyImage.jpg";
import { IoIosNotificationsOutline, IoMdMenu } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggle());
  };

  const location = useLocation();
  //console.log(location);
  //console.log(" header render");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  // const selector=useSelector((store)=>store.menu.isMenuOpen)
  // console.log(selector);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  //console.log(setisloading);
  const dispatchSearch = useDispatch();
  const selectSearch = useSelector((s) => s.search.result);

  const { isloading, setisloading } = useContext(userContext);

  const btnClick = () => {
    setSearchQuery("");
    // document.getElementById("search-input").value = ""
    setisloading(!isloading);
  };
  const YOUTUBE_SEARCH_API_URL =
    "https://youtube-data8.p.rapidapi.com/auto-complete/?q=";

  const OPTIONS = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cd44c2d346msh480a529fe5c1066p199857jsn3677a6571cc3",
      "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
    },
  };
  const fetchSearchData = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_API_URL + searchQuery + "&hl=en&gl=US",
      OPTIONS
    );
    
    const json = await data.json();
    //console.log(json);
    //setSuggestion(json[1]);
    setSuggestion(json?.results);
    dispatchSearch(pickSearchResult({ [searchQuery]: json?.results }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (selectSearch[searchQuery]) {
        setSuggestion(selectSearch[searchQuery]);
      } else {
        //console.log("render", searchQuery)

        fetchSearchData().catch((e) => {
          console.log(e);
        });
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  //console.log(suggestion);
  // const ex=<h1 className="text"> element </h1>;
  // console.log("abhishek",ex);

  return (
    <div className="grid grid-flow-col h-16 md:h-20 shadow-lg sticky top-0 bg-white z-50 w-screen ">
      <div className="flex items-center md:h-20 h-16 md:col-span-1 col-span-3 md:ml-2 ">
        <IoMdMenu
          onClick={() => {
            if (location.pathname === "/") {
              handleToggle();
            }
          }}
          className="ml-[.88rem] md:text-3xl md:hidden"
        />

        <Link to={"/"}>
          {" "}
          <img
            src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
            alt="youtube-logo"
            className=" md:w-36 object-cover w-16 md:ml-4"
          />{" "}
        </Link>
      </div>
      <div className="flex flex-col md:col-span-10  md:my-auto my-auto col-span-6">
        <div className="md:m-2   md:ml-5  text-center ">
          <form
            className="flex items-center justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              btnClick();
            }}
          >
            <input
              type="text"
              className="border rounded-l-full text-xs md:text-xl  md:w-1/2 w-28 md:p-1 px-2  border-gray-400 md:px-4 md:py-2 py-1"
              placeholder="  Search here..."
              onChange={handleSearch}
              id="search-input"
              value={searchQuery}
            />
            <Link to={`/search?${searchQuery}`}>
              <button
                className="md:p-1 text-xs md:text-xl text-gray-800 bg-gray-200 border border-gray-400 rounded-r-full  px-2 py-[.26rem] md:px-5 md:py-2 text-center"
                value={searchQuery}
                type="submit"
                onClick={() => {
                  btnClick();
                }}
              >
                <CiSearch className="inline text-center  text-xs md:text-2xl " />
              </button>
            </Link>
            <button className=" bg-slate-200 px-2 py-2 ml-6 transition duration-300 ease-in-out hover:bg-gray-300 rounded-full hidden md:inline">
              <MdKeyboardVoice className="inline-block text-3xl " />
            </button>
          </form>
        </div>
        <div className="bg-white md:w-[30rem] w-[9rem] ml-8 md:ml-44 shadow-lg rounded-lg border-gray-500 ">
          <ul>
            {suggestion.map((e) => (
              <div
                className="flex items-center my-2  md:w-[30rem] hover:bg-gray-200 shadow-gray-100  font-semibold shadow-sm"
                onClick={(e) => {
                  //console.log("parent call->", e.target.innerHTML);
                  //setSearchQuery("");
                  //setisloading(!isloading);
                  //setSearchQuery("");
                }}
              >
                <CiSearch className="inline md:text-xl text-sm" />

                <Link key={e} to={`/search?${searchQuery}`}>
                  {" "}
                  <li
                    onClick={(e) => {
                      // console.log("child call");
                      setSearchQuery("");
                    }}
                    onMouseUpCapture={(e) => {
                      setSearchQuery(e.target.innerHTML);
                    }}
                    className=" hover:cursor-pointer md:p-2 p-1 md:w-[26rem] "
                  >
                    {e}
                  </li>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className=" h-16 md:mr-2 md:h-20 md:col-span-1 col-span-3 overflow-hidden flex items-center justify-center ">
        <span className="md:mx-6 md:text-3xl hidden md:inline ">
          {" "}
          <RiVideoAddLine />
        </span>
        <span className="md:mx-6 md:mr-10 md:text-3xl hidden md:inline  ">
          <IoIosNotificationsOutline />
        </span>

        <img
          src={MyImage}
          typeof="jpg"
          alt="user"
          className="md:w-20 md:h-20 h-14  w-14 object-cover rounded-full  md:mt-0"
        >
          {}
        </img>
      </div>
    </div>
  );
};

export default Header;
