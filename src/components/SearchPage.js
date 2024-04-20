import React, {  useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import {  YOUTUBE_SEARCH_RESULT_API } from "../Utilis/constants";

import SearchVideoCard from "./SearchVideoCard";
import { useDispatch } from "react-redux";
import { addTitle } from "../Utilis/menuSlice";
import ShimmerUI from "./ShimmerUI";

const SearchPage = () => {
  const [videoData, setVideoData] = useState([]);
  //const { isloading, setisloading, setValue } = useContext(userContext);
  //const {bodyState,setBodyState}=useContext(bodyContext)

  const { search } = useLocation();
const recommDispatch=useDispatch();
  //console.log();
  

  //console.log("Search input",searchInput);
  //console.log("result is-> ",result);
  // console.log("Location is->", search);
  // console.log("queryparam is->",getUrl );
  // const fetchUrlInput=async ()=>{
  //   setSearchInput( getUrl.get("s"));
  // }

  const result = search.slice(1);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setSearchInput(search.slice(1));
    const fetchSearchResult = async () => {
      const data = await fetch(YOUTUBE_SEARCH_RESULT_API+searchInput
      ); 

      
      const json = await data.json();
      setVideoData(json.items);
      console.log(json);
    };
    //setVideoData(["avhh"])
    if(searchInput===result){
      console.log("55")
    fetchSearchResult();
  }
  }, [search, searchInput, result]);

  //console.log("search Page Render ");
 if(videoData.length===0){
  return <ShimmerUI/>
 }
  return (
    <div className="flex flex-wrap md:justify-center md:ml-14 ">
    { videoData.map((item)=>
      <Link key={item.id.videoId} to={"/watch?v=" + item?.id?.videoId} onClick={()=>{recommDispatch(addTitle(item.snippet.title))}}>
      <SearchVideoCard  data={item}/>
      </Link>
    )
      }
    </div>
  )
};

export default SearchPage;
