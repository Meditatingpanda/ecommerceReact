import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  return (
    // <div className="h-[60vh] flex shadow-md">

    // </div>
    <AwesomeSlider>
      <div className=" h-full w-full text-black  bg-cover flex justify-center items-center bg-[url(https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)]">
        <div className="w-[80%]">
          <h2 className="text-5xl  mb-6">Summer Sale!!!</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quasi
            atquis aut aliquid velit nostrum, illum neque? Obcaecati?
          </p>
          <button className="bg-red-500 p-2 rounded ">Shop Now</button>
        </div>
      </div>
      <div>2</div>
      <div>3</div>
      
    </AwesomeSlider>
  );
};

export default Slider;
