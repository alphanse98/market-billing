import React, { useState } from 'react';
import { vegtableImg } from '../Assets/Img/vegetableImg';
import DeleteIcon from '../Assets/SvgIcons/DeleteIcon';
import EditIcon from '../Assets/SvgIcons/EditIcon';

const Pricelist: React.FC<any> = ({ item, index, selectDeleteItem, selectEditItem }) => {
  return (
    <>
      <div
        className="bg-[#e5e7eb] flex justify-between p-2 mb-1 cursor-pointer task cursor-move rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark"
        key={index}
      >

        <div className="flex items-center">
        <div className="flex items-center gap-2 w-52">
          <div>
            <img
              src={vegtableImg[item?.itemImg]}
              alt="product-img"
              className="w-10 h-10 rounded-md object-cover"
            />
          </div>

          <div>
            <p>{item?.itemName}</p>
            <p>{item?.itemPrice}</p>
          </div>

          

        </div>
        <p>Qty {item?.qty}</p>
        </div>

        {/* <div className="flex items-end justify-center">
          <p>Qty {item?.qty}</p>
        </div> */}

        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <div onClick={() => {
                selectEditItem(item);
              }}>
              <EditIcon />
            </div>
            <div
              onClick={() => {
                selectDeleteItem(item);
              }}
            >
              <DeleteIcon />
            </div>
          </div>
          {/* <p>₹ 300</p> */}
          <p className='pt-2'>{item?.totalAmount}</p>
        </div>
      </div>
    </>
  );
};

export default Pricelist;
