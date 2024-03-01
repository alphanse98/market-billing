import React from 'react';
import CloseIcon from '../../Assets/SvgIcons/CloseIcon';

interface ItemsPopup {
  isOpen: boolean;
  isClose: any;
}

const ItemsPopup: React.FC<ItemsPopup> = ({ isOpen, isClose }) => {
  if (isOpen)
    return (
      // parant popup iu start
      <div
        className="fixed z-99999 inset-0 overflow-y-auto  h-screen w-screen flex items-center justify-center p-5"
        style={{
          backdropFilter: 'blur(2px)',
          backgroundColor: 'rgba(9, 9, 9, 0.8)',
        }}
        onClick={() => isClose(false)}
      >
        {/* child popup iu start */}
        <div className=" p-2 lg:w-[40%] md:w-[60%] w-[80%] rounded-xl shadow-lg rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark ">
          {/* icon ui */}
          <div className="flex justify-end">
            <div
              className="rounded-full bg-meta-1 p-2 cursor-pointer"
              onClick={() => isClose(false)}
            >
              <CloseIcon />
            </div>
          </div>

          <div className="m-5" onClick={(event) => event.stopPropagation()}>
            <div className="flex flex-col">
              {/* <!-- Contact Form --> */}
              <div className="rounded-sm  bg-white  dark:border-strokedark dark:bg-boxdark">
                <div className=" pb-1 ">
                  <h3 className="font-medium text-black dark:text-white text-center">
                    Add Items
                  </h3>
                </div>
                <form action="#">
                  <div className="">
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Item Name <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Price
                      </label>
                      <input
                        type="text"
                        placeholder="Select subject"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ItemsPopup;
