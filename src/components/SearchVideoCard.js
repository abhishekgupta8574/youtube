import React from "react";

const SearchVideoCard = ({ data }) => {
  //const { videoId } = data.id;
  const thumbnail = data.snippet.thumbnails.high.url;
  const{title}=data.snippet;
  const {channelTitle}=data.snippet;

  
    return (
      <div className='w-screen md:w-96 h-84 md:h-84 md:m-2 p-2 rounded-lg shadow-gray-400  transition duration-300 ease-in-out hover:scale-95 hover:cursor-pointer  flex flex-col'>
        <img alt="thumbnail" src={thumbnail} className='rounded-lg object-cover w-90 md:h-52 h-40'/>
        <ul>
        <li className='font-bold py-2 text-md '>{title}</li>
        <li className='font-semibold'>{channelTitle}</li>
        </ul>
      </div>
    )
};

export default SearchVideoCard;
