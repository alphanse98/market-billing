import React from 'react';
import CloseIcon from '../../Assets/SvgIcons/CloseIcon';
import { useEffect } from 'react';

interface CustomerViewPopup {
  isOpen: boolean;
  isClose: any;
}

const CustomerViewPopup: React.FC<CustomerViewPopup> = ({
  isOpen,
  isClose,
}) => {
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
              <div className="" style={{color:'white'}}>
               
                <form action="#">
                  <div className="mb-4 flex gap-3">
                    <p>Name : Vijay</p>
                  </div>
                  <div className="mb-4 flex gap-3">
                   <p>Number : 8638733987</p>
                  </div>
                  <div className="mb-4 flex gap-3">
                    <p>Secondary Number : 8763863663</p>
                  </div>
                  <div className="mb-4 flex gap-3">
                    <p>Address : 1/195,subramaniyapuram, vembar</p>
                  </div>
                  <div className="mb-4 flex gap-3">
                    <p>Email : sample@gmail.com</p>
                  </div>
                  <div className="mb-4">
                    <p className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Additional Notes
                    </p>
                    <p className="text-gray-800 dark:text-gray-200 mb-2">
                      Notes
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CustomerViewPopup;
