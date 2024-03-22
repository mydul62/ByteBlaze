import { Link } from 'react-router-dom';

const ErrorMsg = () => {
  return (
    <div className=' space-y-6 '>
    <h1 className=" text-3xl font-bold">No Item added in BookMark</h1>
    <Link
        to={"/blog"}
        class="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">
          Read Blog
        </span>
      </Link>
  </div>
  );
};

export default ErrorMsg;