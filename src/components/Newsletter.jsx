import { Telegram } from "@material-ui/icons";

const Newletter = () => {
  return (
    <div className="bg-[#FCF5F5] h-[45vh] mt-10 flex flex-col items-center justify-center">
      <h1 className="text-6xl mb-4">Newsletter</h1>
      <p className="text-base mb-3">
        Get timely updates from your favorite products.
      </p>
      <div className="flex">
        <input
          type="email"
          className="focus:outline-none p-2 pl-3 text-sm w-[40rem]"
          placeholder="Your Email"
        />
        <div className="bg-[#008080] w-[5rem] flex items-center justify-center text-white">
          <Telegram />
        </div>
      </div>
    </div>
  );
};

export default Newletter;
