import React, { useEffect, useState } from "react";
import { MY_API_KEY } from "../Utilis/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShimmerUI from "./ShimmerUI";

const VideoContainers = () => {
  const id = useSelector((store) => store.menu.categoryId);
  //console.log(id);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${id}&key=${MY_API_KEY}`
      );
      console.log("fetchdata");
      const json = await data.json();
      //console.log(json);
      setVideos(json.items);
    };
    setTimeout(()=>{fetchData().catch((err) => {
      console.log(err);
    });},0)
    
  }, [id]);

  if (videos.length === 0) return <ShimmerUI/>;

  return (
    <div className="flex md:flex-row flex-col items-center flex-wrap md:justify-center">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainers;
