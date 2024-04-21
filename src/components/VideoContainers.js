import React, { useEffect, useState } from "react";
import { MY_API_KEY } from "../Utilis/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShimmerUI from "./ShimmerUI";
import { addTitle } from "../Utilis/menuSlice";

const VideoContainers = () => {
  const id = useSelector((store) => store.menu.categoryId);
  //console.log("render" ,id);
  const [videos, setVideos] = useState([]);
  const[showShimmer,setShowShimmer]=useState(false);
  const dispatch = useDispatch();
  const fetchData = async () => {
    setShowShimmer(true);
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${id}&key=${MY_API_KEY}`
    );
    //console.log("fetchdata",id);
    const json = await data.json();
    //console.log(json);
    setShowShimmer(false);
    setVideos([...json.items, ...videos]);

  };
  useEffect(() => {
    setTimeout(() => {
      fetchData().catch((err) => {
        console.log(err);
      });
      console.log("maincall")
    }, );
  },[id]);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchData();
      //console.log("schrolcl",id)
    }
  };

  if (videos.length === 0) return <ShimmerUI />;

  const handleTitle = (e) => {
    dispatch(addTitle(e.snippet.title));
  };

  return (
    <div className="md:ml-8 flex md:flex-row flex-col items-start flex-wrap md:justify-center">
      {videos.map((video,index) => (
        <Link
          key={index}
          to={"/watch?v=" + video.id}
          onClick={() => handleTitle(video)}
        >
          <VideoCard info={video} />
        </Link>
      ))}
      {showShimmer && <ShimmerUI/>}
    </div>
  );
};

export default VideoContainers;
