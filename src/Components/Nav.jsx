import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Nav = () => {
  const [theme,setTheme]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light');

  const hangdleOnChangle=(e)=>{
     let isChecked=(e.target.checked);
     if(isChecked){
          setTheme('synthwave');
     }else{
      setTheme('light');
     }
  }
  useEffect(()=>{
    localStorage.setItem('theme',theme)
    const localtheme = localStorage.getItem('theme');
    const htmlElement = document.querySelector('html');
    htmlElement.setAttribute('data-theme', localtheme);
  },[theme])
   const [menu,setMenu]=useState(true)
  const handleMenu =()=>{
    setMenu(!menu);
  }
  return (
   <div className="z-50 mx-auto navbar bg-base-100   shadow-md sticky top-0">
     <div className=" navbar  mx-4">
  <div className="flex-1">
    <a className="btn btn-ghost text-secondary gap-0 font-bold text-2xl ">Byte<span className=" text-primary">Blaze</span></a>
  </div>
  <div className="flex-none">
    <ul  className="menu navstyle hidden gap-6 pr-6 menu-horizontal px-1 *:text-xl font-semibold md:flex">
      <NavLink to={"/"} >Home</NavLink>
      <NavLink to={"/blog"} >Blogs</NavLink>
      <NavLink to={"/bookmark"} >Bookmark</NavLink>
    </ul>
    
    <div onClick={handleMenu} className="flex md:hidden mr-3 text-2xl">
      {
      menu?<IoMenuSharp className=" " />: <RxCross2 />
      }

    </div>
    <label className="cursor-pointer grid place-items-center">
  <input onChange={hangdleOnChangle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
  </div>
</div>
<ul  className={` flex flex-col z-50 w-[70%]  gap-3 ${menu?'top-[-1000px]':'top-20 border-2 border-t-0 border-secondary'} rounded-b-xl  duration-500 top-20 py-10  absolute bg-gray-300 *:text-xl font-semibold md:hidden`}>
      <NavLink to={"/"} >Home</NavLink>
      <NavLink to={"/blog"} >Blogs</NavLink>
      <NavLink to={"/bookmark"} >Bookmark</NavLink>
    </ul>
   </div>
  );
};

export default Nav;