import React from 'react';
import { vegtableImg } from '../Assets/Img/vegetableImg';

const Itemlisting = (props: any) => {
  return (
    <>
      <div className="flex h-20 rounded-lg cursor-pointer shadow-lg rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark ">
        <div>
          <img
            src={vegtableImg[props?.item?.itemImg]}
            className="w-20 h-20 object-cover"
            alt="productimg"
          />
        </div>

        <div className="w-32  mt-4 px-2">
          <div className=" truncate  font-bold text-base font-medium text-black dark:text-white">
            {props?.item?.itemName}
          </div>

          <span className="inline-block bg-gray-200 rounded-full text-sm font-semibold dark:text-white">
            ₹ {props?.item?.itemPrice}
          </span>
        </div>
      </div>
    </>
  );
};

export default Itemlisting;
