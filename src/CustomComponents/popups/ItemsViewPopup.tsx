import React from 'react';
import CloseIcon from '../../Assets/SvgIcons/CloseIcon';
import { useEffect } from 'react';

interface ItemsViewPopup {
  isOpen: boolean;
  isClose: any;
}

const ItemsViewPopup: React.FC<ItemsViewPopup> = ({ isOpen, isClose }) => {
  // Esc key pree popup close
  useEffect(() => {
    function handleKeyPress(event: any) {
      if (event.keyCode === 27) {
        isClose(false);
      }
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

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
        <div className=" p-2  rounded-xl shadow-lg rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark w-[99%] sd:w-[70%]   md:w-[60%] lg:w-[45%]  xl:w-[30%] ">
          {/* icon ui */}
          <div className="flex justify-end mb-2 p-2">
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
              <div className="">
                <h3 className="text-center mb-4 text-xl font-bold text-gray-800 dark:text-gray-200">
                  View Item
                </h3>
                <form action="#">
                  <div className="mb-4" style={{display:'flex'}}>
                    <p>Item Name : Tomato</p>
                  </div>
                  <div className="mb-4">
                    <p>Price : ₹500</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ItemsViewPopup;
