import { useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";

const BlogPosts = () => {
  const posts = useLoaderData();
  const [togle,setTogle]=useState(1)
  const navigation = useNavigation();

  if(navigation.state==='loading')
  return (
    <div>
      <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 ">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              Suspendisse ut magna et ipsum sodales accumsan.
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
              <div className="flex items-center md:space-x-2">
                <img
                  src="https://source.unsplash.com/75x75/?portrait"
                  alt=""
                  className="w-4 h-4 border rounded-full bg-gray-500 border-gray-700"
                />
                <p className="text-sm">Leroy Jenkins • July 19th, 2021</p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                4 min read • 1,570 views
              </p>
            </div>

            {/* tabs */}
            <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowra">
              <Link to='' onClick={()=>setTogle(1)}
                rel="noopener noreferrer"
                href="#"
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${togle===1?'border border-b-0 rounded-t-lg border-gray-300':'border-b border-gray-300'}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Content</span>
              </Link>
              <Link 
              to={'author'}
               onClick={()=>setTogle(2)}
                rel="noopener noreferrer"
                href="#"
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${togle===2?'border border-b-0 rounded-t-lg border-gray-300':'border-b border-gray-300'} `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Author</span>
              </Link>
            </div>
          </div>
        </article>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default BlogPosts;
