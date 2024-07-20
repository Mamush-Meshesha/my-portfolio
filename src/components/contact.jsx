import { HiPhoneMissedCall } from "react-icons/hi";
import SvgCurve from "./curve";
import { IoMailSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";


const ContactMe = () => {

    const formRef = useRef()
const notify = () => toast("Message Sent successfully")
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm( "service_os9lvrh",
      "template_09emu19",
      formRef.current,
            "sK8ewAa9v9qwRZNPB",).then((res) => {
                notify();
                console.log(res.text)
                console.log("email sent successfully")
                formRef.current.reset();
                
            }, (error) => {
                console.log(error.text)
      })
    }

  return (
    <>
      <div id="contact" className="min-h-screen  flex items-center w-full">
        <div className="w-full">
          <div className="flex flex-col  gap-4 lg:py-10 xs:py-4">
            <h1 className="text-3xl">Contact Me</h1>
            <SvgCurve className="text-white" />
          </div>
          <div
            className="h-[45rem] w-[94%] lg:py-10 xs:py-5 lg:px-10   rounded-2xl flex lg:flex-row xs:flex-col gap-10 "
            style={{ backgroundColor: "rgba(11, 17, 31, 0.9)" }}
          >
            <div className="lg:w-[550px]  flex flex-col gap-6 px-3 ">
              {/* info */}
              <div
                style={{ backgroundColor: "rgba(15, 23, 42, 0.9)" }}
                className="lg:w-[500px] xs:w-[98%] flex flex-col h-auto rounded-lg gap-5 px-6 py-10  "
              >
                <div className="">
                  <span className="bg-white w-8 h-8 rounded-lg grid  place-items-center">
                    <HiPhoneMissedCall className="text-black" />
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <h1>Call Me Directly</h1>
                  <span>+251938301620</span>
                </div>
              </div>
              {/* chat with me */}
              <div
                style={{ backgroundColor: "rgba(15, 23, 42, 0.9)" }}
                className="lg:w-[500px] xs:w-[98%] flex flex-col h-auto rounded-lg gap-5 px-6 py-10 "
              >
                <div className="">
                  <span className="bg-white w-8 h-8 rounded-lg grid  place-items-center">
                    <IoMailSharp className="text-black" />
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <h1>Chat with Me</h1>
                  <span>mam1620she@gmail.com</span>
                </div>
              </div>
            </div>
            {/* chatting session */}
            <div className="w-full  ">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="w-full h-[40rem] rounded-2xl p-7"
                style={{ backgroundColor: "rgba(15, 23, 42, 0.9)" }}
              >
                <div className="flex flex-col xs:gap-4 lg:gap-12">
                  <div className="lg:grid lg:grid-cols-2 xs:flex xs:flex-col xs:gap-4 lg:gap-10   ">
                    <div className="relative w-[100%] ">
                      <FaUser className="absolute my-6 mx-3" />
                      <input
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        className="h-16 rounded-lg bg-[#0B1120] w-full px-10 "
                      />
                    </div>
                    <div className="relative w-full">
                      <IoMailSharp className="absolute my-6 mx-3" />
                      <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className="h-16 rounded-lg bg-[#0B1120] w-full px-10 "
                      />
                    </div>
                  </div>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="h-16 rounded-lg bg-[#0B1120] px-3 "
                  />
                  <textarea
                    name="message"
                    className="h-52 rounded-lg bg-[#0B1120] px-3 py-3 "
                    placeholder="Tell me about your projects ...."
                  ></textarea>
                </div>
                <div className="flex justify-end pt-12  ">
                  <button
                    type="submit"
                    className="bg-[#0B1120] px-10 py-3 rounded-lg"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
