import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={4000}
  >
    <div className=" h-full w-full text-white  bg-cover flex justify-evenly items-center bg-[url(https://images.pexels.com/photos/5214418/pexels-photo-5214418.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)]">
      <div className="w-[80%]">
        <h2 className="lg:text-9xl text-4xl md:text-6xl mb-6">
          Winter Sale!!
        </h2>
        <p className="mb-6 text-xs lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quasi
        </p>
        <button className="bg-red-500 p-2 rounded ">Shop Now</button>
      </div>
    </div>

    <div className=" h-full w-full  text-white  bg-cover flex justify-evenly items-center bg-[url(https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)]">
      <div className="w-[80%]">
        <h2 className="lg:text-9xl text-4xl md:text-6xl mb-6">
          Winter Sale!!
        </h2>
        <p className="mb-6 text-xs lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quasi
        </p>
        <button className="bg-red-500 p-2 rounded ">Shop Now</button>
      </div>
    </div>

    <div className=" h-full w-full text-white  bg-cover flex justify-evenly items-center bg-[url(https://images.pexels.com/photos/804570/pexels-photo-804570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)]">
      <div className="w-[80%]">
        <h2 className="lg:text-9xl text-4xl md:text-6xl mb-6">
          Winter Sale!!
        </h2>
        <p className="mb-6 text-xs lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quasi
        </p>
        <button className="bg-red-500 p-2 rounded ">Shop Now</button>
      </div>
    </div>

    {/* <div data-src="/path/to/image-2.jpg" /> */}
  </AutoplaySlider>
);
