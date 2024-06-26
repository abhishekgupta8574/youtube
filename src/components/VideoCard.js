import React from 'react'
import { viewsConterter } from '../Utilis/constants';

import moment from 'moment';
import fromnow from 'fromnow';


const VideoCard = ({info}) => {
    //console.log(info);
    const{statistics,snippet}=info;
    const {channelTitle,thumbnails,title,publishedAt}=snippet;
  return (
    <div className='md:p-2 md:m-2 px-1 md:px-0  w-screen mb-8 md:mb-0 md:w-[24rem] md:h-[21rem] rounded-lg shadow-gray-400  transition duration-300 ease-in-out hover:scale-95 hover:cursor-pointer h-80 flex flex-col items-center justify-start'>
      <div className=' '>
      <img alt="thumbnail" src={thumbnails?.standard?.url} className='rounded-lg object-cover md:h-52 h-48  w-screen md:w-[30rem]'/>
      </div>
      <ul>
      <li className='font-bold py-1 md:text-base md:w-full w-84  '>{title}</li>
      <li className='font-semibold ' >{channelTitle}</li>
      <li className='text-sm text-gray-500 '>{viewsConterter (statistics.viewCount)} views    &bull;{' '}
      {fromnow(publishedAt)} ago </li>
      </ul>
    </div>
  )
}

export default VideoCard
