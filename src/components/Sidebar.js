import React from "react";
//import isMenuOpen from "../Utilis/menuSlice"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import ClosedSidebar from "./ClosedSidebar";
import { setCategoryId, toggle } from "../Utilis/menuSlice";

const Sidebar = () => {
  const dispatchToggle = useDispatch();
  const handleToggle = () => {
    dispatchToggle(toggle());
  };
  const id = useSelector((store) => store.menu.categoryId);
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.menu.isMenuOpen);
  if (!selector) return <ClosedSidebar />;
  return (
    <div className=" shadow-sm w-48 flex flex-col bg-white h-screen transition duration-300 ease-in-out fixed z-10 cursor-pointer ">
      <ul>
        <Link to={"/"}>
          {" "}
          <li
            className={`py-[.35rem] px-2 m-3 text-center  text-md text-slate-800 font-semibold transition duration-300 ease-in-out rounded-md ${
              id === 0
                ? "bg-slate-900 hover:bg-black text-white"
                : "hover:bg-gray-300 "
            } `}
            onClick={() => {
              dispatch(setCategoryId(0));
              handleToggle();
            }}
          >
            Home
          </li>
        </Link>
        <li
          className={`py-[.35rem] px-2 my-3 mx-2 text-center   text-md text-slate-800 font-semibold transition duration-300 ease-in-out  rounded-md ${
            id === 25
              ? "bg-slate-900 hover:bg-black text-white"
              : "hover:bg-gray-300"
          } `}
          onClick={() => {
            dispatch(setCategoryId(25));
            handleToggle();
          }}
        >
          News
        </li>
        <li
          className={`py-[.35rem] px-2 my-3 mx-2 text-center text-md text-slate-800 font-semibold transition duration-300 ease-in-out rounded-md ${
            id === 23
              ? "bg-slate-900 hover:bg-black text-white"
              : "hover:bg-gray-300 "
          } `}
          onClick={() => {
            handleToggle();
            dispatch(setCategoryId(23));
          }}
        >
          Comedy
        </li>
        <li
          className={`py-[.35rem] px-2 my-3 mx-2 text-center  text-md text-slate-800 font-semibold transition duration-300 ease-in-out rounded-md ${
            id === 17
              ? "bg-slate-900 hover:bg-black text-white"
              : "hover:bg-gray-300"
          } `}
          onClick={() => {
            handleToggle();
            dispatch(setCategoryId(17));
          }}
        >
          Sports
        </li>
        <li
          className={`py-[.35rem] px-2 my-3 mx-2 text-center  text-md text-slate-800 font-semibold transition duration-300 ease-in-out rounded-md ${
            id === 24
              ? "bg-slate-900 hover:bg-black text-white"
              : " hover:bg-gray-300 "
          } `}
          onClick={() => {
            handleToggle();
            dispatch(setCategoryId(24));
          }}
        >
          Entertainment
        </li>
        <li
          className={`py-[.35rem] px-2 my-3 mx-2 text-center   text-md text-slate-800 font-semibold transition duration-300 ease-in-out rounded-md ${
            id === 28
              ? "bg-slate-900 hover:bg-black text-white"
              : " hover:bg-gray-300 "
          } `}
          onClick={() => {
            handleToggle();
            dispatch(setCategoryId(28));
          }}
        >
          Technology
        </li>
        <li
          className={`py-[.35rem] px-2 my-3 mx-2 text-center  text-md text-slate-800 font-semibold transition duration-300 ease-in-out  rounded-md ${
            id === 10
              ? "bg-slate-900 hover:bg-black text-white"
              : " hover:bg-gray-300 "
          } `}
          onClick={() => {
            handleToggle();
            dispatch(setCategoryId(10));
          }}
        >
          Music
        </li>
        <li
          className={`py-[.35rem] px-2 my-3 mx-2 text-center   text-md text-slate-800 font-semibold transition duration-300 ease-in-out  rounded-md ${
            id === 22
              ? "bg-slate-900 hover:bg-black text-white"
              : " hover:bg-gray-300 "
          } `}
          onClick={() => {
            dispatch(setCategoryId(22));
          }}
        >
          Blogs
        </li>
        <li
          className={`py-[.35rem] px-2 my-3 mx-2 text-center  text-md text-slate-800 font-semibold transition duration-300 ease-in-out  rounded-md ${
            id === 20
              ? "bg-slate-900 hover:bg-black text-white"
              : "hover:bg-gray-300"
          } `}
          onClick={() => {
            handleToggle();
            dispatch(setCategoryId(20));
          }}
        >
          Gaming
        </li>
        <li
          className={`py-[.35rem] px-2 my-3 mx-2 text-center  text-md text-slate-800 font-semibold transition duration-300 ease-in-out rounded-md ${
            id === 29
              ? "bg-slate-900 hover:bg-black text-white"
              : " hover:bg-gray-300"
          } `}
          onClick={() => {
            handleToggle();
            dispatch(setCategoryId(29));
          }}
        >
          Activism
        </li>
        <li
          className={`py-[.35rem] px-2 my-3 mx-2 text-center   text-md text-slate-800 font-semibold transition duration-300 ease-in-out rounded-md ${
            id === 15
              ? "bg-slate-900 hover:bg-black text-white"
              : "hover:bg-gray-300"
          } `}
          onClick={() => {
            handleToggle();
            dispatch(setCategoryId(15));
          }}
        >
          Pets & Animals
        </li>
      </ul>
      <section className="border border-b-1 border-gray-200"></section>
    </div>
  );
};

export default Sidebar;
