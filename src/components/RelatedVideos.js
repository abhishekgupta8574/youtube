import React from 'react'
import { viewsConterter } from '../Utilis/constants';
import fromnow from 'fromnow';

const RelatedVideos = ({info}) => {
  const{statistics,snippet}=info;
    const {channelTitle,thumbnails,title,publishedAt}=snippet;
  return (
    <div className='p-2 m-2 w-screen md:w-fit md:h-64 my-4 rounded-lg shadow-gray-400  transition duration-300 ease-in-out hover:scale-95 hover:cursor-pointer h-80 flex flex-col items-center'>
      <div className=' '>
      <img alt="thumbnail" src={thumbnails?.standard?.url} className='rounded-lg object-cover w-screen md:h-32 h-48 md:w-[30rem]'/>
      </div>
      <ul>
      <li className='font-bold py-1 text-sm md:w-full w-84'>{title}</li>
      <li className='font-semibold'>{channelTitle}</li>
      <li className='text-sm text-gray-500'>{viewsConterter (statistics.viewCount)} views    &bull;{' '}
      {fromnow(publishedAt)} ago </li>
      </ul>
    </div>
  )
}

export default RelatedVideos
