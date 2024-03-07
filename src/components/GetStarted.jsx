import RightImage from "../assets/image_right.png";
import { FaArrowRight } from "react-icons/fa6";

const GetStarted = () => {
  return (
    <div className="rounded-lg max-sm:hidden gap-6 flex flex-col items-center text-center py-6 text-white bg-blue-600 h-[500px] w-[380px]">
      <h1 className="px-12 text-2xl font-semibold">
        Get Started with KoniX for Free
      </h1>
      <p className="px-6 text-sm font-light leading-6 line-clamp-4">
        With our range of features that you can equip for free, KoniX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img src={RightImage} alt="right_image" />
      <button className="flex items-center gap-3 px-4 py-2 font-semibold text-black bg-white rounded-lg hover:bg-gray-100">
        Get Started for FREE
        <FaArrowRight className="text-base text-black" />
      </button>
    </div>
  );
};

export default GetStarted;
