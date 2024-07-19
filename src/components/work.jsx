import { useRef, useState } from "react";
import SvgCurve from "./curve";
import { VscLiveShare } from "react-icons/vsc";

const Works = () => {
    const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [shovered, setSHovered] = useState(false)
  const [chovered, setCHovered] = useState(false)
  const [fhovered, setFHovered] = useState(false)
  const [vhovered,setVHovered] = useState(false)
    const handleMouseEnter = () => {
      if (videoRef.current) {
        videoRef.current.play();
         videoRef.current.playbackRate = 2.0;
      }
       if (containerRef.current) {
         containerRef.current.style.width = "110%"; 
       }
    };

    const handleMouseLeave = () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.playbackRate = 2.0;
      }
  
    };
    return (
      <div id="work" className="md:py-16 md:min-h-screen">
        <div>
          <div className="flex flex-col gap-6 ">
            <h1 className="text-3xl">Featured Works</h1>
            <SvgCurve className="text-white" />
          </div>
          {/* featured works */}
          <div className="bg-[#0b111f] w-[94%]  rounded-2xl text-white  ">
            <div className="pt-2">
              <div className="w-[99%] mx-[0.5%]   h-20 bg-[#10192e] rounded-xl">
                <div className="flex items-center h-full  px-7">
                  <h1 className="text-2xl ">E-commerce website</h1>
                </div>
              </div>
              <div
                onMouseEnter={() => setVHovered(true)}
                onMouseLeave={() => setVHovered(false)}
                className="md:grid md:grid-cols-2 sx:flex xs:flex-col relative gap-10 md:p-10 xs:p-4"
              >
                <div className="lg:w-[70%] ">
                  <p className="text-xl">
                    I developed a fully functional e-commerce website using the
                    MERN stack (MongoDB, Express.js, React.js, Node.js) and
                    Redux Toolkit for state management. The website allows users
                    to register, explore products, place orders, and make
                    payments through PayPal. It also includes an admin panel
                    where administrators can manage the website, check order
                    status, and verify product deliveries.{" "}
                  </p>
                </div>
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <video
                    ref={videoRef}
                    className="w-full h-[350px] object-cover  rounded-2xl"
                    src="/video/ecomerce-portf.webm"
                    muted
                    loop
                  />
                </div>
                {vhovered ? (
                  <div className="absolute top-0 right-0 rounded-md px-5  h-12 ">
                    <a
                      href="https://e-commerce-e0of.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <VscLiveShare className="w-7 h-7 bg-white rounded-md text-black text-xs " />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {/* sub works sub title of the original */}
          <div className=" mt-5 w-[94%]  ">
            <div className="lg:grid lg:grid-cols-3 xs:flex xs:flex-col gap-7 ">
              {/* song management */}
              <div
                onMouseLeave={() => setSHovered(false)}
                onMouseEnter={() => setSHovered(true)}
                className="bg-[#0b111f] relative w-full h-full rounded-2xl text-white"
              >
                <h1>Song Management</h1>
                <div>
                  <img
                    className="w-full h-[350px] object-cover  rounded-2xl"
                    src="/images/song.png"
                  />
                </div>
                {shovered ? (
                  <div className="absolute top-0 right-0 rounded-md px-5  h-12 ">
                    <a
                      href="https://addis-sontware-test.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <VscLiveShare className="w-7 h-7 bg-white rounded-md text-black text-xs " />
                    </a>
                  </div>
                ) : null}
              </div>
              {/* realtime chat */}
              <div
                onMouseEnter={() => setCHovered(true)}
                onMouseLeave={() => setCHovered(false)}
                className="bg-[#0b111f] w-full h-full relative  rounded-2xl text-white"
              >
                <h1>Real time chat</h1>
                <div>
                  <img
                    className="w-full h-[350px] object-cover  rounded-2xl"
                    src="/images/chat.png"
                  />
                </div>
                {chovered ? (
                  <div className="absolute top-0 right-0 rounded-md px-5  h-12 ">
                    <a
                      href="https://github.com/Mamush-Meshesha/M-chat"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <VscLiveShare className="w-7 h-7 bg-white rounded-md text-black text-xs " />
                    </a>
                  </div>
                ) : null}
              </div>
              {/* food recipe */}
              <div
                onMouseEnter={() => setFHovered(true)}
                onMouseLeave={() => setFHovered(false)}
                className="bg-[#0b111f] w-full h-full relative  rounded-2xl text-white"
              >
                <h1>Food recipe</h1>
                <div>
                  <img
                    className="w-full h-[350px] object-cover  rounded-2xl"
                    src="/images/food.png"
                  />
                </div>
                {fhovered ? (
                  <div className="absolute top-0 right-0 rounded-md px-5  h-12 ">
                    <a
                      href="https://github.com/Mamush-Meshesha/recipe_frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <VscLiveShare className="w-7 h-7 bg-white rounded-md text-black text-xs " />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {/* end subs */}
        </div>
      </div>
    );
}

export default Works