import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

const ClosedSidebar = () => {
  return (
    <div>
      <ul className=" h-screen fixed bg-white mr-8 md:flex flex-col items-center hidden  ">
        <Link to={"/"}>
          <li className="text-sm text-center hover:cursor-pointer mb-4 hover:bg-gray-200 font-normal p-5 box-border rounded-lg">
            <GoHomeFill size={25} className="ml-1 mb-1" />
            Home
          </li>
        </Link>
        <li className="text-sm hover:cursor-pointer my-4 hover:bg-gray-200 font-normal p-4 px-5 box-border rounded-lg">
          <SiYoutubeshorts size={25} className="ml-1 mb-1" />
          Shorts
        </li>
        <li className="text-sm hover:cursor-pointer text-center my-4 hover:bg-gray-200 font-normal py-4 box-border rounded-lg">
          <MdSubscriptions size={25} className="ml-[1.4rem] mb-1" />
          Subscriptions
        </li>
        <li className="text-sm text-center hover:cursor-pointer my-4 hover:bg-gray-200 font-normal p-4 px-6 box-border rounded-lg">
          {" "}
          <IoLogoYoutube size={25} className=" mb-1" />
          You
        </li>
      </ul>
    </div>
  );
};

export default ClosedSidebar;
