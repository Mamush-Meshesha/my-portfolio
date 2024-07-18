import { useRef } from "react";

const Works = () => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const handleMouseEnter = () => {
      if (videoRef.current) {
        videoRef.current.play();
         videoRef.current.playbackRate = 2.0;
      }
       if (containerRef.current) {
         containerRef.current.style.width = "110%"; // Increase width by 10%
       }
    };

    const handleMouseLeave = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
       if (containerRef.current) {
         containerRef.current.style.width = "100%"; // Reset width to 100%
       }
    };
    return (
      <div className="py-16 min-h-screen">
        <div>
          {/* featured works */}
          <div className="bg-[#0b111f] w-[94%]  rounded-2xl text-white  ">
            <div className="pt-2">
              <div className="w-[99%] mx-[0.5%]   h-20 bg-[#10192e] rounded-xl">
                <div className="flex items-center h-full  px-7">
                  <h1 className="text-3xl ">E-commerce website</h1>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10 py-10 px-10">
                <div className="w-[70%] ">
                  <p>
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
              </div>
            </div>
          </div>
          {/* sub works */}
          <div className=" mt-5 w-[94%]  ">
            <div className="grid grid-cols-3 gap-7 ">
              {/* song management */}
              <div className="bg-[#0b111f] w-full h-full rounded-2xl text-white">
                <h1>Song Management</h1>
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <video
                    ref={videoRef}
                    className="w-full h-[350px] object-cover  rounded-2xl"
                    src="/video/song.webm"
                    muted
                    loop
                  />
                </div>
              </div>
              {/* realtime chat */}
              <div className="bg-[#0b111f] w-full h-full  rounded-2xl text-white">
                <h1>Real time chat</h1>
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
              </div>
              {/* food recipe */}
              <div className="bg-[#0b111f] w-full h-full  rounded-2xl text-white">
                <h1>Food recipe</h1>
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
              </div>
            </div>
          </div>
          {/* end subs */}
        </div>
      </div>
    );
}

export default Works