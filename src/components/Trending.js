import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_RESULT_API } from "../Utilis/constants";
import { Link } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";
import { addTitle, toggleHiemburger } from "../Utilis/menuSlice";
import ShimmerUI from "./ShimmerUI";

const Trending = () => {
  const [trendingData, setTrendingData] = useState([]);
 const [showShimmer,setShowShimmer]=useState(false);
  const recommDispatch = useDispatch();
  const dispatchHiemburger=useDispatch();
  const fetchSearchResult = async () => {
    setShowShimmer(true);
    const data = await fetch(YOUTUBE_SEARCH_RESULT_API + "trending");

    const json = await data.json();
    setTrendingData([...json.items,...trendingData]);
    setShowShimmer(false);
    //console.log(json);
  };
  const handleScroll=()=>{
    if(window.innerHeight+window.scrollY>=document.body.scrollHeight){
        fetchSearchResult()
    }
  }
  useEffect(() => {
    dispatchHiemburger(toggleHiemburger(false))
    window.addEventListener("scroll", handleScroll);
    fetchSearchResult();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-wrap md:justify-center md:ml-14 ">
      {trendingData.map((item) => (
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

export default Trending;
