import { Link } from "react-router-dom";

const BlogCard = ({blog}) => {
  let {title,last_comment_at,description,cover_image,id}=blog;
  const notFoundImage = '../../public/404.jpg';
  return (
    <>
    <Link to={`/blog/${id}`}
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline border border-[#b7b6b6] hover:border-2 hover:border-primary p-3 transition hover:scale-105 duration-500"
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
    </>
  );
};

export default BlogCard;