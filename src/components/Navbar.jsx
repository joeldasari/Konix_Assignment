import { GiHamburgerMenu } from "react-icons/gi";

import KonixLogo from "../assets/konix_logo.svg";
import { useState } from "react";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <header className="text-sm sticky top-0 font-medium bg-white shadow-sm border flex justify-between h-[10vh] items-center max-sm:px-6 px-[100px]">
      <img src={KonixLogo} alt="konix_logo" />
      <section className="flex items-center gap-6 max-sm:hidden">
        <ul className="flex gap-6">
          <li>Crypto Taxes</li>
          <li>Free Tools</li>
          <li>Resource Center</li>
        </ul>
        <button className="px-6 py-2 text-white transition-shadow bg-blue-700 rounded-lg hover:brightness-105 hover:shadow-lg ">
          Get Started
        </button>
      </section>
      <GiHamburgerMenu
        onClick={() => setSidebar(true)}
        className={`text-black text-2xl hidden ${
          sidebar ? "max-sm:hidden" : "max-sm:block"
        } `}
      />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </header>
  );
};

export default Navbar;
