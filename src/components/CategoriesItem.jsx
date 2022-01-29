const Items = ({ id, img, des }) => {
  return (
    <div
      className="w-[80%] p-5 mr-1 sm:w-1/4 -gray-100 h-full rounded shadow-lg flex flex-col items-center  mb-8"
      key={id}
    >
      <img src={`${img}`} className="w-10/12 mb-1 h-[60%] object-cover rounded" />
      <h3 className="text-lg  mb-1 text-center sm:text-xl text-black w-[75%] ">{des}</h3>
      <button className="bg-red-500 w-[6rem] p-2 rounded border-none  ">
        Shop Now
      </button>
    </div>
  );
};

export default Items;
