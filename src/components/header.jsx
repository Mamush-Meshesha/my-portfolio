import  {  useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
    const sectionsRef = useRef({});
const handleScroll = (id) => {
  const section = sectionsRef.current[id];
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  setMenuOpen(false);
};

useEffect(() => {
  sectionsRef.current = {
    home: document.getElementById("home"),
    about: document.getElementById("about"),
    work: document.getElementById("work"),
    contact: document.getElementById("contact"),
  };
}, []);

  return (
    <div className="lg:h-24 lg:py-5 fixed lg:w-[94%] bg-[#0F172A] z-50">
      <div className="flex lg:justify-between h-full lg:items-center text-white text-2xl">
        <h1 className="xs:hidden lg:block">My Portfolio</h1>
        <div className="hidden lg:flex gap-10">
          <button onClick={() => handleScroll("home")}>Home</button>
          <button onClick={() => handleScroll("about")}>About</button>
          <button onClick={() => handleScroll("work")}>Works</button>
          <button onClick={() => handleScroll("contact")}>Contact</button>
          <div className="w-[10rem] border h-12 flex items-center justify-center rounded-lg">
            <a
              href="https://drive.google.com/file/d/12b3QWXTbgqb-e4imYN9W3KYOfZtbTYg7/view?usp=drive_link"
              target="_blank"
              className="gradient-hover-button w-full flex justify-center"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="lg:hidden flex items-center text-2xl">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden fixed top-0 left-0 w-[70%] h-full bg-[#0F172A] z-40 p-5 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={toggleMenu} className="mb-5">
          <FaTimes />
        </button>
        <button onClick={() => handleScroll("home")} className="block mb-5">
          Home
        </button>
        <button onClick={() => handleScroll("home")} className="block mb-5">
          About
        </button>
        <button onClick={() => handleScroll("home")} className="block mb-5">
          Works
        </button>
        <button onClick={() => handleScroll("home")} className="block mb-5">
          Contact
        </button>
        <div className="w-[10rem] border h-12 flex items-center justify-center rounded-lg">
          <button className="gradient-hover-button w-full">
            <a
              href="https://drive.google.com/file/d/12b3QWXTbgqb-e4imYN9W3KYOfZtbTYg7/view?usp=drive_link"
              target="_blank"
              className="gradient-hover-button w-full flex justify-center"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
