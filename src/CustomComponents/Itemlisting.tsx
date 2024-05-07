import React, { useState } from 'react';
import { vegtableImg } from '../Assets/Img/vegetableImg';
import { useDispatch } from 'react-redux';
import { addTocart } from '../Redux/Cartslice';
import { AppDispatch } from '../Redux/store';
import BillingItemPopup from './popups/BillingItemPopup';

const Itemlisting = (props: any) => {
  const dispatch: AppDispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isViewPopup, setViewPopup] = useState(false);

  return (
    <>
  
      <div
        className="flex flex-col"
        onClick={() => dispatch(addTocart(props.item))}
      >
        <div>
          <img
            src={vegtableImg[props?.item?.ItemImg]}
            className="w-36 h-32 object-cover"
            alt="productimg"
            onClick={() => setViewPopup(true)}
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
        <BillingItemPopup isOpen={isViewPopup} isClose={setViewPopup}/>
      </div>
    </>
  );
};

export default Itemlisting;
