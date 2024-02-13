const Itemlisting = () => {
  return (
    <>
      <div>
        <div className="w-36 p-3 shadow-lg rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="px-1">
            <div className="mb-1 font-bold text-lg font-medium text-black dark:text-white">Product Title</div>
          </div>
          <div className="px-1">
            <span className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700">
              ₹ 19.99
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Itemlisting
