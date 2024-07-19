import SvgCurve from "./curve";

const About = () => {
  return (
    <div id="about" style={{ height: "100vh", }} className="py-16  flex items-center">
      <div className="">
        <div className="flex flex-col gap-6 ">
          <h1 className="text-3xl">About Me</h1>
          <SvgCurve className="text-white" />
        </div>
        <div className="py-8 lg:grid lg:grid-cols-2 xs:flex xs:flex-col gap-3">
          <div className="w-[90%] lg:h-[35rem] p-5 rounded-xl bg-[#0b111f]  ">
            <div>
              <h1 className="text-xl text-center">Hello,</h1>
              <h1 className="text-xl text-center">My Name is, </h1>
              <h1 className="text-3xl text-center pb-4">Mamush Meshesha</h1>
              <div className="flex justify-center text-xl">
                <p className="w-[80%] ">
                  As a full-stack web developer, I excel in building modern web
                  applications using a MERN (MongoDB, Express.js, React.js,
                  Node.js) tech stack, coupled with Vue.js and Hasura. I possess
                  a strong understanding of front-end development, back-end
                  programming, and database management, allowing me to deliver
                  efficient and high-quality solutions.
                </p>
              </div>
            </div>
          </div>
          {/* stack */}
          <div className="w-[90%] lg:h-[35rem] lg:p-5 xs:p-2 rounded-xl bg-[#0b111f]  ">
            <div>
              <h1 className="text-2xl py-3">MY TECH STACK</h1>
            </div>
            <div>
              <div>
                <div className="grid grid-cols-2 px-5 py-3 gap-4">
                  <h1 className="lg:text-2xl text-nowrap  xs:overflow-hidden">
                    Basics
                  </h1>
                  <div className="flex gap-4">
                    <img
                      src="/images/stack/html.png"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/css.jpg"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/js.jpg"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                  </div>
                </div>
                {/* frontend framework  */}
                <div className="grid grid-cols-2 px-5 py-3 gap-4">
                  <h1 className="lg:text-2xl text-nowrap  xs:overflow-hidden  ">
                    Frontend Framworks
                  </h1>
                  <div className="flex gap-4">
                    <img
                      src="/images/stack/react.png"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/vue.png"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/nuxt.png"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/next.png"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                  </div>
                </div>
                {/* backend framework  */}
                <div className="grid grid-cols-2 px-5 py-3 gap-4">
                  <h1 className="lg:text-2xl text-nowrap  xs:overflow-hidden">
                    backend Framworks
                  </h1>
                  <div className="flex gap-4">
                    <img
                      src="/images/stack/node.png"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/go.png"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/hasura.png"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/graphql.png"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 px-5 py-3 gap-4">
                  <h1 className="lg:text-2xl text-nowrap  xs:overflow-hidden">
                    styling frameworks{" "}
                  </h1>
                  <div className="flex gap-4">
                    <img
                      src="/images/stack/tailwind.png"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/boot.png"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                  </div>
                </div>
                {/* database  */}
                <div className="grid grid-cols-2 px-5 py-3 gap-4">
                  <h1 className="lg:text-2xl text-nowrap  xs:overflow-hidden">
                    databases{" "}
                  </h1>
                  <div className="flex gap-4">
                    <img
                      src="/images/stack/mongo.png"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/post.jpg"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                  </div>
                </div>
                {/* contenrization */}
                <div className="grid grid-cols-2 px-5 py-3 gap-4">
                  <h1 className="lg:text-2xl text-nowrap  xs:overflow-hidden">
                    contenerization{" "}
                  </h1>
                  <div className="flex gap-4">
                    <img
                      src="/images/stack/docker.png"
                      alt=""
                      className="lg:w-8 xs:w-6 lg:h-8 xs:h-6 object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
