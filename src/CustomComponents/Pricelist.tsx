import React from 'react';
import DeleteIcon from '../Assets/SvgIcons/DeleteIcon';
import EditIcon from '../Assets/SvgIcons/EditIcon';
import { vegtableImg } from '../Assets/img/vegetableImg';

const Pricelist = (props: any) => {
  return (
    <>
      <div
        className="bg-[#e5e7eb] flex justify-between p-2 mb-1 cursor-pointer task cursor-move rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark"
        key={props.Id}
      >
        <div className="flex items-center gap-2 w-52">
          <div>
            <img
              src={vegtableImg[props?.item?.ItemImg]}
              alt="product-img"
              className="w-10 h-10 rounded-md object-cover"
            />
          </div>
          <div>
            <p>{props?.item?.ItemName}</p>
            <p>{props?.item?.ItemPrice}</p>
          </div>
        </div>

        <div className="flex items-end justify-center">
          <p>Qty {props?.item?.ItemQty}</p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <EditIcon />
            <DeleteIcon />
          </div>
          <p>₹ 300</p>
        </div>
      </div>
    </>
  );
};

export default Pricelist;
