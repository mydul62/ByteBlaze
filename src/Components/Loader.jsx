import {ScaleLoader} from "react-spinners";
const Loader = () => {
  return (
    <div className=" flex flex-col justify-center items-center  min-h-[calc(100vh-112px)] ">
      <ScaleLoader></ScaleLoader>
    </div>
  );
};

export default Loader;