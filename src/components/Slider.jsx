import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Heroimagedata } from "../data/data";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={4000}
    bullets={false}
  >
    {Heroimagedata.map((key) => {
      return (
        <div
          className=" h-full w-full
         text-white 
           flex 
          justify-evenly 
          items-center 
          
          "
          style={{
            backgroundImage: `url(${key.img})`,
            backgroundSize: "cover",
          }}
        >
          <div className="w-[80%]">
            <h2 className="lg:text-9xl text-4xl md:text-6xl mb-6">{key.h1}</h2>
            <p className="mb-6 text-xs lg:text-lg">{key.des}</p>
            <button className="bg-red-500 p-2 rounded ">Shop Now</button>
          </div>
        </div>
      );
    })}
  </AutoplaySlider>
);
