import { Link } from "react-router-dom";
import wave from "../assets/wave.svg";
const Hero = () => {
  return (
    <div className="hero flex flex-col justify-center items-center relative min-h-[calc(100vh-112px)] bg-base-200">
      <div className="hero-content text-center">
        <div className="w-[80%]">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Wellcome to{" "}
            <span className=" bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
              ByteBlaze
            </span>
          </h1>
          <p className="py-6 text-xl">
          ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it
          </p>
          <div className=" flex gap-3 justify-center">
            <Link
              to={"/blog"}
              class="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Read Blogs
              </span>
            </Link>
            <Link
              to={"/bookmark"}
              class="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Bookmarks
              </span>
            </Link>
          </div>
        </div>
      </div>
      <img className=" absolute bottom-0 w-full" src={wave} alt="" />
    </div>
  );
};
export default Hero;
