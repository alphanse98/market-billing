import DeleteIcon from '../Assets/SvgIcons/DeleteIcon';
import DownloadIcon from '../Assets/SvgIcons/DownloadIcon';
import EyeIcon from '../Assets/SvgIcons/EyeIcon';
import { CustomerList } from '../JasonMockData/CustomersData';
import React, { useState } from 'react';
import CustomerPopup from './popups/CustomerPopup';
import CustomerViewPopup from './popups/CustomerViewPopup';
import Swal from 'sweetalert2';
const CustomerListTable = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [isViewPopup, setIsviewPopup] = useState(false);

  const one =()=>{
    Swal.fire({title: "Some Error!!",
    text: "Please select a customer to perform this action.",
    icon: "success",
    confirmButtonText:"ok"
  });
  }
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

      <button onClick={()=> one()}>Just HH</button>
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-base text-black flex justify-between flex-wrap dark:text-white">
          <div className="w-full xl:w-1/2">
            <input
              type="text"
              placeholder="Search customer ..."
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <button
            className="bg-primary font-medium rounded-md py-2 px-5 text-white mt-4 xl:mt-0 hover:bg-opacity-90"
            onClick={() => setIsPopupOpen(true)}
          >
            Add customer
          </button>
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center   ">
          <p className="font-medium">Id</p>
        </div>
        <div className="col-span-2  items-center  ">
          <p className="font-medium">Name</p>
        </div>

        <div className="col-span-2 flex items-center  hidden sm:block ">
          <p className="font-medium">Phone Number</p>
        </div>

        <div className="col-span-2 flex items-center  hidden sm:block ">
          <p className="font-medium">Email</p>
        </div>

        <div className="col-span-1 flex items-center pl-15 sm:pl-0 ">
          <p className="font-medium">Action</p>
        </div>
      </div>
      {CustomerList?.map((item: any) => (
        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-1  items-center    ">
            <p className="text-sm text-black dark:text-white">{item?.Id}</p>
          </div>

          <div className="col-span-3 flex items-center sm:col-span-2 ">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                {item?.CustomerName}
              </p>
            </div>
          </div>

          <div className="col-span-2 flex items-center justify-start  hidden sm:block ">
            <p className="text-sm text-black  dark:text-white">
              {item?.CustomerNumber}
            </p>
          </div>

          <div className="col-span-2 flex items-center justify-start truncate mr-2 hidden sm:block ">
            <p className="text-sm text-black  dark:text-white">
              {item?.CustomerEmail}
            </p>
          </div>

          <div className="col-span-1 flex items-center ">
            <div className="flex items-center space-x-3.5">
              <button
                className="hover:text-primary"
                onClick={() => setIsviewPopup(true)}
              >
                <EyeIcon />
              </button>

              <button className="hover:text-primary">
                <DownloadIcon />
              </button>

              <button className="hover:text-primary">
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
      <CustomerPopup isOpen={isPopupOpen} isClose={setIsPopupOpen} />
      <CustomerViewPopup isOpen={isViewPopup} isClose={setIsviewPopup} />
   
    </div>
  );
};

export default CustomerListTable;
