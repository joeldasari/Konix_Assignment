import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const BreadCrumb = () => {
  return (
    <div className="flex items-center gap-1 text-xs font-medium">
      <span className="text-gray-500">Cryptocurrencies </span>
      <MdOutlineKeyboardDoubleArrowRight className="text-xl text-gray-500" />
      <span className="text-black">Bitcoin</span>
    </div>
  );
};

export default BreadCrumb;
