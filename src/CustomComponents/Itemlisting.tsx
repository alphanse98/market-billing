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
        className="flex rounded-lg cursor-pointer shadow-lg rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark "
        // onClick={() => dispatch(addTocart(props.item))}
        onClick={() => setViewPopup(true)}
      >
        <div>
          <img
            src={vegtableImg[props?.item?.ItemImg]}
            className="w-20 h-20 object-cover"
            alt="productimg"
          />
        </div>

        <div className="w-32  mt-4 px-2">
          <div className=" truncate  font-bold text-base font-medium text-black dark:text-white">
            {props?.item?.ItemName}
          </div>

          <span className="inline-block bg-gray-200 rounded-full text-sm font-semibold dark:text-white">
            ₹ {props?.item?.ItemPrice}
          </span>
        </div>
        
      </div>
      <BillingItemPopup isOpen={isViewPopup} isClose={setViewPopup} />
    </>
  );
};

export default Itemlisting;
   