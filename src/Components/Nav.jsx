import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
  const [theme,setTheme]=useState('light');

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
  return (
    <div className="navbar bg-base-100 opa shadow-md sticky top-0">
  <div className="flex-1">
    <a className="btn btn-ghost text-secondary gap-0 font-bold text-2xl ">Byte<span className=" text-primary">Blaze</span></a>
  </div>
  <div className="flex-none">
    <ul  className="menu navstyle flex gap-6 pr-6 menu-horizontal px-1 *:text-xl font-semibold">
      <NavLink to={"/"} >Home</NavLink>
      <NavLink to={"/blog"} >Blogs</NavLink>
      <NavLink to={"/bookmark"} >Bookmark</NavLink>
    </ul>
    <label className="cursor-pointer grid place-items-center">
  <input onChange={hangdleOnChangle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
  </div>
</div>
  );
};

export default Nav;