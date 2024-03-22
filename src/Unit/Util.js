import toast from "react-hot-toast";
export const takeItem = () => {
  const items = JSON.parse(localStorage.getItem('blog')) || [];
  return items;
}
export const saveItem = (blog) => {
  let blogs = takeItem();
  const isExist = blogs.find((b) => b.id === blog.id);
  
  if (isExist) {
    toast.error(`Blog already exists!`);
  } else {
    blogs.push(blog);
    localStorage.setItem('blog', JSON.stringify(blogs)); 
    toast.success(`Blog bookmark successfully`);
  }
}
export const deleteItem = (id) => {
  let blogs = takeItem();
  const newBlogs = blogs.filter((b) => b.id !==id);
  localStorage.setItem('blog', JSON.stringify(newBlogs)); 
}
