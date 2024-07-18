import About from "./components/about";
import ContactMe from "./components/contact";
import Header from "./components/header";
import Landing from "./components/landing";
import WaterWaveWrapper from "./components/water-wave";
import Works from "./components/work";

function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="w-screen h-screen  mx-[2%]  text-white">
        <WaterWaveWrapper dropRadius={3} perturbance={2} resolution={2048}>
          <div className="">
            <div className="h-screen">
              <Header />
              <div className="pt-[13rem]  ">
                <Landing />
              </div>
            </div>
            <div>
              <About />
              <Works />
              <ContactMe />
            </div>
          </div>
        </WaterWaveWrapper>
      </div>
    </div>
  );
}

export default App;
