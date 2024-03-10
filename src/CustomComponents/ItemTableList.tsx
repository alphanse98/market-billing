import React, {  useState } from 'react';
import DeleteIcon from '../Assets/SvgIcons/DeleteIcon';
import DownloadIcon from '../Assets/SvgIcons/DownloadIcon';
import EyeIcon from '../Assets/SvgIcons/EyeIcon';
import { ItemsMockData } from '../JasonMockData/ItemsData';
import ItemsPopup from './popups/ItemsPopup';
import ItemsViewPopup from './popups/ItemsViewPopup';
import { vegtableImg } from '../Assets/Img/vegetableImg';

const ItemTableList = (props: any) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isviewPopupOpen, setviewIsPopupOpen] = useState(false);

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-base text-black flex justify-between flex-wrap dark:text-white">
            <div className="w-full xl:w-1/2">
              <input
                type="text"
                placeholder="Search Items ..."
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <button
              className="bg-primary font-medium rounded-md py-2 px-5 text-white mt-4 xl:mt-0 hover:bg-opacity-90"
              onClick={() => setIsPopupOpen(true)}
            >
              Add Items
            </button>
          </h4>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke mt-2 py-4 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Id</p>
          </div>
          <div className="col-span-3  items-center ">
            <p className="font-medium">Item Name</p>
          </div>
          <div className="col-span-2 flex items-center hidden sm:block">
            <p className="font-medium">Price</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Action</p>
          </div>
        </div>
        {ItemsMockData?.map((item: any) => (
          <div
            className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
            key={item?.Id}
          >
            <div className="col-span-1  items-center  ">
              <p className="text-sm text-black dark:text-white">{item?.Id}</p>
            </div>
            <div className="col-span-3 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-15 rounded-md ">
                  <img src={vegtableImg[item?.ItemImg]} alt="item" />
                </div>
                <p className="text-sm text-black dark:text-white">
                  {item?.ItemName}
                </p>
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-start hidden sm:block">
              <p className="text-sm text-black  dark:text-white">
                {item?.ItemPrice}
              </p>
            </div>
            <div className="col-span-2 flex items-center">
              <div className="flex items-center space-x-3.5">
                <button
                  className="hover:text-primary"
                  onClick={() => setviewIsPopupOpen(true)}
                >
                  <EyeIcon />
                </button>
                <button className="hover:text-primary">
                  <DeleteIcon />
                </button>
                <button className="hover:text-primary">
                  <DownloadIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ItemsPopup isOpen={isPopupOpen} isClose={setIsPopupOpen} />
      <ItemsViewPopup isOpen={isviewPopupOpen} isClose={setviewIsPopupOpen} />
    </>
  );
};

export default ItemTableList;
