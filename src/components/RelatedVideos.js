import React from 'react'
import { viewsConterter } from '../Utilis/constants';
import fromnow from 'fromnow';

const RelatedVideos = ({info}) => {
  const{snippet}=info;
    const {channelTitle,title,}=snippet;
    const thumbnail=snippet.thumbnails.high.url;
  return (
    <div className='p-2 m-2 w-screen md:w-fit md:h-64 my-4 rounded-lg shadow-gray-400  transition duration-300 ease-in-out hover:scale-95 hover:cursor-pointer h-80 flex flex-col items-center'>
      <div className=' '>
      <img alt="thumbnail" src={thumbnail} className='rounded-lg object-cover w-screen md:h-32 h-48 md:w-[30rem]'/>
      </div>
      <ul>
      <li className='font-bold py-1 text-sm md:w-full w-84'>{title}</li>
      <li className='font-semibold'>{channelTitle}</li>
      
      </ul>
    </div>
  )
}

export default RelatedVideos
