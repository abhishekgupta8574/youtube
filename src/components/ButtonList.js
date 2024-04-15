import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../Utilis/menuSlice";

const ButtonList = () => {
  const id = useSelector((store) => store.menu.categoryId);
  const dispatch = useDispatch();
  return (
    <div className="md:flex md:justify-center md:mt-2 hidden">
      <button
        className={`py-[.35rem] px-4 m-4 text-center bg-slate-200 text-md text-slate-800 font-semibold transition duration-300 ease-in-out rounded-md ${
          id === 0 ? "bg-slate-900 hover:bg-black text-white" : "hover:bg-gray-300 "
        } `}
        onClick={() => {
          dispatch(setCategoryId(0));
        }}
      >
        All
      </button>
      <button
        className={`py-[.35rem] px-4 my-3 mx-2 text-center bg-slate-200 text-md text-slate-800 font-semibold transition duration-300 ease-in-out  rounded-md ${
          id === 25 ? "bg-slate-900 hover:bg-black text-white" : "hover:bg-gray-300"
        } `}
        onClick={() => {
          dispatch(setCategoryId(25));
        }}
      >
        News
      </button>
      <button
        className={`py-[.35rem] px-4 my-3 mx-2 text-center bg-slate-200 text-md text-slate-800 font-semibold transition duration-300 ease-in-out rounded-md ${
          id === 23? "bg-slate-900 hover:bg-black text-white" : "hover:bg-gray-300 "
        } `}
        onClick={() => {
          dispatch(setCategoryId(23));
        }}
      >
       Comedy
      </button>
      <button
        className={`py-[.35rem] px-4 my-3 mx-2 text-center bg-slate-200 text-md text-slate-800 font-semibold transition duration-300 ease-in-out rounded-md ${
          id === 17 ? "bg-slate-900 hover:bg-black text-white" : "hover:bg-gray-300"
        } `}
        onClick={() => {
          dispatch(setCategoryId(17));
        }}
      >
        Sports
      </button>
      <button
        className={`py-[.35rem] px-4 my-3 mx-2 text-center bg-slate-200 text-md text-slate-800 font-semibold transition duration-300 ease-in-out rounded-md ${
          id === 24 ? "bg-slate-900 hover:bg-black text-white" : " hover:bg-gray-300 "
        } `}
        onClick={() => {
          dispatch(setCategoryId(24));
        }}
      >
        Entertainment
      </button>
      <button
        className={`py-[.35rem] px-4 my-3 mx-2 text-center bg-slate-200 text-md text-slate-800 font-semibold transition duration-300 ease-in-out rounded-md ${
          id === 28 ? "bg-slate-900 hover:bg-black text-white" : " hover:bg-gray-300 "
        } `}
        onClick={() => {
          dispatch(setCategoryId(28));
        }}
      >
        Technology
      </button>
      <button
        className={`py-[.35rem] px-4 my-3 mx-2 text-center bg-slate-200 text-md text-slate-800 font-semibold transition duration-300 ease-in-out  rounded-md ${
          id === 10 ? "bg-slate-900 hover:bg-black text-white" : " hover:bg-gray-300 "
        } `}
        onClick={() => {
          dispatch(setCategoryId(10));
        }}
      >
        Music
      </button>
      <button
        className={`py-[.35rem] px-4 my-3 mx-2 text-center bg-slate-200 text-md text-slate-800 font-semibold transition duration-300 ease-in-out  rounded-md ${
          id === 22 ? "bg-slate-900 hover:bg-black text-white" : " hover:bg-gray-300 "
        } `}
        onClick={() => {
          dispatch(setCategoryId(22));
        }}
      >
        Blogs
      </button>
      <button
        className={`py-[.35rem] px-4 my-3 mx-2 text-center bg-slate-200 text-md text-slate-800 font-semibold transition duration-300 ease-in-out  rounded-md ${
          id === 20 ? "bg-slate-900 hover:bg-black text-white" : "hover:bg-gray-300"
        } `}
        onClick={() => {
          dispatch(setCategoryId(20));
        }}
      >
        Gaming
      </button>
      <button
        className={`py-[.35rem] px-4 my-3 mx-2 text-center bg-slate-200 text-md text-slate-800 font-semibold transition duration-300 ease-in-out rounded-md ${
          id === 29 ? "bg-slate-900 hover:bg-black text-white" : " hover:bg-gray-300"
        } `}
        onClick={() => {
          dispatch(setCategoryId(29));
        }}
      >
      Activism
      </button>
      <button
        className={`py-[.35rem] px-4 my-3 mx-2 text-center bg-slate-200 text-md text-slate-800 font-semibold transition duration-300 ease-in-out rounded-md ${
          id === 15? "bg-slate-900 hover:bg-black text-white" : "hover:bg-gray-300"
        } `}
        onClick={() => {
          dispatch(setCategoryId(15));
        }}
      >
      Pets & Animals
      </button>
      
    </div>
  );
};

export default ButtonList;
