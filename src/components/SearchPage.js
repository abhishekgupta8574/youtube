import React, {  useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { MY_API_KEY } from "../Utilis/constants";

import SearchVideoCard from "./SearchVideoCard";

const SearchPage = () => {
  const [videoData, setVideoData] = useState([]);
  //const { isloading, setisloading, setValue } = useContext(userContext);
  //const {bodyState,setBodyState}=useContext(bodyContext)

  const { search } = useLocation();

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
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=IN&q=${searchInput}{&key=` +
          MY_API_KEY
      );
      const json = await data.json();
      setVideoData(json.items);
      //console.log(videoData);
    };
    //setVideoData(["avhh"])
    if(searchInput===result){
      console.log("55")
    fetchSearchResult();
  }
  }, [search, searchInput, result]);

  //console.log("search Page Render ");
 
  return (
    <div className="flex flex-wrap md:justify-center md:ml-14 ">
    { videoData.map((item)=>
      <Link key={item.id.videoId} to={"/watch?v=" + item.id.videoId}>
      <SearchVideoCard  data={item}/>
      </Link>
    
    )
      }
    </div>
  );
};

export default SearchPage;
