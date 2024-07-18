import SvgCurve from "./curve";
import WaterWaveWrapper from "./water-wave";

const ContactMe = () => {
  return (
    <WaterWaveWrapper dropRadius={3} perturbance={2} resolution={2048}>
      <div className="min-h-screen  flex items-center w-full">
        <div className="w-full">
          <div className="flex flex-col  gap-4 py-10">
            <h1 className="text-3xl">Contact Me</h1>
            <SvgCurve className="text-white" />
          </div>
          <div className="bg-[#0B111F] h-[45rem] w-[94%] py-10  rounded-2xl ">
            <div></div>
          </div>
        </div>
      </div>
    </WaterWaveWrapper>
  );
};

export default ContactMe;
