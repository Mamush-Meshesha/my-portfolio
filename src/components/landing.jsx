import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const Landing = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())

      
    })
    return () => clearInterval(intervalId);
  },[])
  return (
    <div className="xs:flex xs:flex-col ">
      <div className="lg:flex lg:h-full w-screen lg:pt-10 pt-3  lg:items-center">
        <div className="flex lg:gap-10 xs:flex-col lg:flex-row lg:justify-center lg:items-center">
          <div className="xs:mt-[-10rem] lg:mt-0">
            <img
              src="/images/Ma.jpg"
              alt="no image"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col gap-3  text-white lg:w-[40%] ">
            <span className="xs:text-center">Hello, My Name is ,</span>
            <span className="xs:text-center text-2xl">Mamush Meshesha</span>
            <p className="xs:text-center text-xl">
              As a full-stack web developer, I excel in building modern web
              applications using a MERN (MongoDB, Express.js, React.js, Node.js)
              tech stack, coupled with Vue.js and Hasura. I possess a strong
              understanding of front-end development, back-end programming, and
              database management, allowing me to deliver efficient and
              high-quality solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:pt-52 xs:pt-5 flex justify-between  w-full">
        <div>
          <h1 className="lg:text-3xl capitalize xs:font-bold  lg:py-3">
            Based in Addis Ababa, Ethiopia
          </h1>
          <p className="lg:text-2xl">{currentTime.toLocaleTimeString()}</p>
        </div>
        <div className=" lg:gap-6 xs:gap-3 items-center lg:pr-28 xs:pr-5 flex xs:flex-col lg:flex-row lg:text-3xl">
          <a
            href="https://github.com/Mamush-Meshesha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mamush-meshesha-25a829223/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/mam1620shgmail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing
 