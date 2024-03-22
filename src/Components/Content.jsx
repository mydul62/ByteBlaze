import { useLoaderData } from "react-router-dom";
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
const Content = () => {
  const blog = useLoaderData();
  let { title, last_comment_at, description, cover_image ,tags,body_html} = blog;
  console.log(blog);
  const notFoundImage = "../../public/404.jpg";
  return (
    <div className="max-w-full mx-auto   shadow-xl  overflow-hidden p-2 ">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || notFoundImage}
      />
      <div className="flex flex-wrap py-6 gap-6">
        {tags.map((tag, idx) => (
          <>
            <a
              key={idx}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm "
            >
              {tag}
            </a>
          </>
        ))}
      </div>
      <div className=" space-y-2">
        <h3 className="text-2xl font-semibold underline ">{title}</h3>
        <Markdown rehypePlugins={[rehypeRaw]} >
        {body_html}
        </Markdown>
        
      </div>
    </div>
  );
};

export default Content;
