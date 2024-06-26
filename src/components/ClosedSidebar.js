import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { HiTrendingUp } from "react-icons/hi";
import { FaPodcast } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ClosedSidebar = () => {
  return (
    <div>
      <ul className=" h-screen fixed bg-white mr-8 md:flex flex-col items-center hidden  ">
        <Link to={"/"}>
          <li className="text-sm text-center hover:cursor-pointer mb-4 hover:bg-gray-200 font-normal p-5 box-border rounded-lg flex flex-col items-center">
            <GoHomeFill size={25} className=" mb-1" />
            Home
          </li>
        </Link>
        <Link to={"/shorts"}>
        <li className="text-sm hover:cursor-pointer my-4 hover:bg-gray-200 font-normal p-4 px-5 box-border rounded-lg flex flex-col items-center">
          <SiYoutubeshorts size={25} className=" mb-1" />
          Shorts
        </li>
        </Link>
        <Link to={"/trending"}>
        <li className="text-sm hover:cursor-pointer text-center my-4 hover:bg-gray-200 font-normal py-4 box-border rounded-lg flex flex-col items-center">
          <HiTrendingUp size={25} className=" mb-1" />
          Trending
        </li>
        </Link>
        <Link to={"/podcast"}>
        <li className="text-sm text-center hover:cursor-pointer my-4 hover:bg-gray-200 font-normal p-4 px-6 box-border rounded-lg flex flex-col items-center">
          {" "}
          <FaPodcast size={25} className=" mb-1" />
          Podcats
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default ClosedSidebar;
