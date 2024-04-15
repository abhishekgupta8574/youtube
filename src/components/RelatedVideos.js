import React from 'react'
import { viewsConterter } from '../Utilis/constants';
import fromnow from 'fromnow';

const RelatedVideos = ({info}) => {
  const{statistics,snippet}=info;
    const {channelTitle,thumbnails,title,publishedAt}=snippet;
  return (
    <div className='p-2 m-2 w-auto  md:h-96 rounded-lg shadow-gray-400  transition duration-300 ease-in-out hover:scale-95 hover:cursor-pointer h-80 flex flex-col items-center'>
      <div className=' '>
      <img alt="thumbnail" src={thumbnails?.standard?.url} className='rounded-lg object-cover md:h-64 h-auto md:w-[30rem]'/>
      </div>
      <ul>
      <li className='font-bold py-1 md:text-base text-sm md:w-full w-84'>{title}</li>
      <li className='font-semibold'>{channelTitle}</li>
      <li className='text-sm text-gray-500'>{viewsConterter (statistics.viewCount)} views    &bull;{' '}
      {fromnow(publishedAt)} ago </li>
      </ul>
    </div>
  )
}

export default RelatedVideos
