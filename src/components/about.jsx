import SvgCurve from "./curve";

const About = () => {
  return (
    <div className="py-16 min-h-screen flex items-center">
      <div className="">
        <div className="flex flex-col gap-6 ">
          <h1 className="text-3xl">About Me</h1>
          <SvgCurve className="text-white" />
        </div>
        <div className="py-8 grid grid-cols-2 gap-3">
          <div className="w-[90%] h-[35rem] p-5 rounded-xl bg-[#0b111f]  ">
            <div>
              <span className="text-3xl">Hello</span>
              <h1 className="text-3xl">My Name is </h1>
              <h1 className="text-3xl">Mamush Meshesha</h1>
              <p>
                As a full-stack web developer, I excel in building modern web
                applications using a MERN (MongoDB, Express.js, React.js,
                Node.js) tech stack, coupled with Vue.js and Hasura. I possess a
                strong understanding of front-end development, back-end
                programming, and database management, allowing me to deliver
                efficient and high-quality solutions.
              </p>
            </div>
          </div>
          {/* stack */}
          <div className="w-[90%] h-[35rem] p-5 rounded-xl bg-[#0b111f]  ">
            <div>
              <h1>MY TECH STACK</h1>
            </div>
            <div>
              <div>
                <div className="grid grid-cols-2 px-5 py-3 gap-4">
                  <h1 className="text-2xl">Basics</h1>
                  <div className="flex gap-4">
                    <img
                      src="/images/stack/html.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/css.jpg"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/js.jpg"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                  </div>
                </div>
                {/* frontend framework  */}
                <div className="grid grid-cols-2 px-5 py-3 gap-4">
                  <h1 className="text-2xl">Frontend Framworks</h1>
                  <div className="flex gap-4">
                    <img
                      src="/images/stack/react.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/vue.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/nuxt.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/next.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                  </div>
                </div>
                {/* backend framework  */}
                <div className="grid grid-cols-2 px-5 py-3 gap-4">
                  <h1 className="text-2xl">backend Framworks</h1>
                  <div className="flex gap-4">
                    <img
                      src="/images/stack/node.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/go.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/hasura.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/graphql.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 px-5 py-3 gap-4">
                  <h1 className="text-2xl">styling frameworks </h1>
                  <div className="flex gap-4">
                    <img
                      src="/images/stack/tailwind.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/boot.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                  </div>
                </div>
                {/* database  */}
                <div className="grid grid-cols-2 px-5 py-3 gap-4">
                  <h1 className="text-2xl">databases </h1>
                  <div className="flex gap-4">
                    <img
                      src="/images/stack/mongo.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                    <img
                      src="images/stack/post.jpg"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
                    />
                  </div>
                </div>
                {/* contenrization */}
                <div className="grid grid-cols-2 px-5 py-3 gap-4">
                  <h1 className="text-2xl">databases </h1>
                  <div className="flex gap-4">
                    <img
                      src="/images/stack/docker.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-md"
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
