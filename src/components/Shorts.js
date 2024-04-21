import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_RESULT_API } from "../Utilis/constants";
import SearchVideoCard from "./SearchVideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTitle, toggleHiemburger } from "../Utilis/menuSlice";
import ShimmerUI from "./ShimmerUI";

const Shorts = () => {
  const [shortsData, setShortsData] = useState([]);
  const [showShimmer,setShowShimmer]=useState(false);
  const recommDispatch = useDispatch();
  const dispatchHiemburger=useDispatch();
  
  useEffect(() => {
    dispatchHiemburger(toggleHiemburger(false))
    fetchSearchResult();
    window.addEventListener("scroll", handleScroll);


    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const fetchSearchResult = async () => {
    setShowShimmer(true);
    const data = await fetch(YOUTUBE_SEARCH_RESULT_API + "Shorts");

    const json = await data.json();
    setShowShimmer(false);
    setShortsData([...shortsData,...json.items]);
    console.log(json);
  };
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchSearchResult();
    }
  };
  
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
};

export default Shorts;
