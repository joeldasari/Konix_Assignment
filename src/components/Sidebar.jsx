import { MdClose } from "react-icons/md";

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <div
      className={`bg-white h-[100vh] border shadow-lg w-[70%] fixed top-0 right-0 ${
        sidebar ? "block" : "hidden"
      }`}
    >
      <MdClose
        onClick={() => setSidebar(false)}
        className={`text-black text-2xl absolute right-6 top-6 ${
          sidebar ? "block" : "hidden"
        }`}
      />
      <section className="flex flex-col h-screen mt-16 items-center gap-6">
        <ul className="flex flex-col items-center gap-6">
          <li>Crypto Taxes</li>
          <li>Free Tools</li>
          <li>Resource Center</li>
        </ul>
        <button className="bg-blue-700 hover:brightness-105 hover:shadow-lg transition-shadow px-6 py-2 text-white rounded-lg ">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Sidebar;
