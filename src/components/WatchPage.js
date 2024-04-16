import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../Utilis/menuSlice";
import ChatData from "./ChatData";
import { addMessage } from "../Utilis/ChatSlice";
import { MY_API_KEY } from "../Utilis/constants";
import RelatedVideos from "./RelatedVideos";

const WatchPage = () => {
  const [isLiveChat, setIsLiveChat] = useState(true);
  const [chat, setChat] = useState("");
  const [searchUrl] = useSearchParams();
  //console.log(searchQuery.get("v"))
  const watchId = searchUrl.get("v");
  const dispatch = useDispatch();
  const dispatchAction = useDispatch();
  const messageSelector = useSelector((msg) => msg.chat.message);
  //console.log("searchpage")
  
  const[recommondedVideos,setRecommondedVideos]=useState([]);
 
  const fetchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=0&key=${MY_API_KEY}`
    );
    console.log("fetchdata");
    const json = await data.json();
    //console.log(json)
    setRecommondedVideos(json.items);
  }
  useEffect(()=>{
    fetchData();
  },[])

  const person = [
    "D Trump",
    "Elon Musk",
    "Shiva",
    "Virat",
    "Sachin",
    "Maxwell",
    "Obama",
  ];
  const personData = [
    "Naam to suna hi hoga",
    "Abhishek, I m Hire You",
    "Amazing !!",
    "Carry on",
    "Keep it up",
    "Mind Blowing!!",
    "I like your style",
    "Keep up the good work",
    " Marvelous abhishek",
    "I m in lov with ur creative vision.",
    "Looks like u r ready for hiring",
    "You're on the right track now.",
    "Top-notch work!"
    
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("dispatch");
      dispatchAction(
        addMessage({
          naam: person[Math.floor(Math.random() * person.length)],
          msg: personData[Math.floor(Math.random() * personData.length)],
        })
      );
    }, 700);
    return () => {
      clearInterval(timer);
    };
  }, []);

  //console.log(messageSelector);
  useEffect(() => {
    dispatch(closeSidebar());
  });
  return (
    <div className= "md:m-7 md:ml-16">
      <div className="md:flex">
        <div className="flex md:flex-row flex-col">
          <div className="md:mx-2 p-2">
            <iframe
              width="800"
              height="550"
              src={`https://www.youtube.com/embed/${watchId}?autoplay=1`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen="allowfullscreen"
              className="md:w-[40rem] w-screen h-72 md:h-[30rem] "
            ></iframe>
          </div>
          <div className="mx-2 md:mx-0 p-2 md:w-[19rem] md:h-[22rem] w-screen ">
            <div className="flex justify-between ">
              <div
                className={`mt-0 p-2 px-5 transition duration-200 ease-in-out rounded-full ${
                  isLiveChat ? "bg-green-500" : "bg-red-600"
                }`}
              >
                Live Chat {isLiveChat === true ? "On" : "Off"}{" "}
              </div>
              <span>
                <button
                  className={`mt-0 p-2 transition duration-200 ease-in-out rounded-md ${
                    isLiveChat ? "bg-red-600" : "bg-green-500"
                  }`}
                  onClick={() => {
                    setIsLiveChat(!isLiveChat);
                  }}
                >
                  Click to {isLiveChat ? "Off" : "On"}
                </button>
              </span>
            </div>
            {isLiveChat && (
              <section className="bg-gray-100">
                {" "}
                <p className="border-b-2 border-b-gray-300 my-2"></p>
                <ul className=" overflow-y-scroll h-[24rem] flex flex-col-reverse">
                  {messageSelector.map((data) => (
                    <li className="md:ml-1">
                      <ChatData name={data.naam} message={data.msg} />
                    </li>
                  ))}
                </ul>
                <div className="flex">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      dispatchAction(addMessage({
                        naam:"You",
                        msg:chat

                      }))
                      setChat("");
                    }}
                  >
                    <input
                      className="border border-gray-800 rounded-lg p-1 my-1 px-3 mr-2"
                      placeholder="Chat Here..."
                      onChange={(e) => {
                        setChat(e.target.value);
                      }}
                      value={chat}
                    ></input>
                    <button className="mx-2  bg-gray-800 text-white font-bold rounded-lg px-3 h-9 mt-1">
                      Send
                    </button>
                  </form>
                </div>{" "}
              </section>
            )}
          </div>
          <div className="md:mx-2 mt-3 md:mt-0 md:p-2 border shadow-lg md:w-[18rem] w-screen h-[34rem] overflow-y-scroll overflow-x-hidden bg-slate-100">
            <p className="text-center font-bold text-gray-800"> Related Videos</p>
            <div>
            {recommondedVideos.map((video) => (
              <Link key={video.id} to={"/watch?v=" + video.id}>
                <RelatedVideos info={video} />
              </Link>
            ))}
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
