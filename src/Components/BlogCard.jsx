import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { deleteItem } from "../Unit/Util";
const BlogCard = ({blog,deletable,handleDelete}) => {
  let {title,last_comment_at,description,cover_image,id}=blog;
  const notFoundImage = '../../public/404.jpg';

  return (
    <>
   <div className="relative mx-auto group hover:no-underline focus:no-underline border border-[#b7b6b6] hover:border-2 hover:border-primary p-3 transition hover:scale-105 duration-500">
   <Link to={`/blog/${id}`} className=" z-10"
      
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || notFoundImage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs text-gray-400"> {new Date(last_comment_at).toLocaleDateString()}</span>
        <p>
          {description}
        </p>
      </div>
    </Link>
    <div onClick={()=>handleDelete(id)} className="absolute -top-6 -right-6 z-20">
      {deletable && <div><MdDeleteForever className=" text-4xl text-secondary" /></div>}
      </div>
   </div>
    </>
  );
};

export default BlogCard;