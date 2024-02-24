import React from 'react';
import carrot from "../Assets/img/images/carrot.jpg"

const Itemlisting = (props: any, ) => {


  return (
    <>
      <div className="flex flex-col" >
        <div>
          <img
            src={carrot}
            className="w-36 h-32 object-cover"
            alt="productimg"
          />
        </div>
        <div className="w-36 h-24 p-3 rounded-lg cursor-pointer shadow-lg rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="px-1">
            <div className="mb-1 font-bold text-lg font-medium text-black dark:text-white">
              {props?.item?.ItemName}
            </div>
          </div>
          <div className="px-1">
            <span className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700">
              {props?.item?.ItemPrice}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Itemlisting;
