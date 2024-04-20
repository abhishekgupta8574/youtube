
import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_RESULT_API } from "../Utilis/constants";
import SearchVideoCard from "./SearchVideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTitle } from "../Utilis/menuSlice";
import ShimmerUI from "./ShimmerUI";

const Podcast = () => {
    const [shortsData, setShortsData] = useState([]);
    const [showShimmer,setShowShimmer]=useState(false);
    const recommDispatch = useDispatch();
    const fetchSearchResult = async () => {
      setShowShimmer(true);
      const data = await fetch(YOUTUBE_SEARCH_RESULT_API + "podcast");
  
      const json = await data.json();
      setShowShimmer(false);
      setShortsData([...json.items,...shortsData]);
      console.log(json);
    };
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        fetchSearchResult();
      }
    };
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      fetchSearchResult();
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
      <div className="flex flex-wrap md:justify-center md:ml-14 ">
        {shortsData.map((item) => (
          <Link
            key={item.id.videoId}
            to={"/watch?v=" + item?.id?.videoId}
            onClick={() => {
              recommDispatch(addTitle(item.snippet.title));
            }}
          >
            <SearchVideoCard data={item} />
          </Link>
        ))}
        {showShimmer && <ShimmerUI/>}
      </div>
    );
}

export default Podcast
