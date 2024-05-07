import React from 'react';
import CloseIcon from '../../Assets/SvgIcons/CloseIcon';
import { useEffect } from 'react';

interface EmployeeViewPopup {
  isOpen: boolean;
  isClose: any;
}

const EmployeeViewPopup: React.FC<EmployeeViewPopup> = ({
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
        <div className=" p-2  rounded-xl shadow-lg rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark w-[400px]">
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
                  View Employee
                </h3>
                <div className="" style={{color:'white'}}>
                 
                  <div>
                    <form action="#">
                      <div className="mb-4 flex">
                        <p>Employess Name : Vijay</p>
                      </div>
                      <div className="mb-4 flex">
                        <p>Mobile Number :8636636367</p>
                      </div>
                      <div className="mb-4 flex">
                        <p>Password :djhhjsdhjhj</p>
                      </div>
                      <div className="mb-4 flex">
                        <p>Address : 1/195,subramaniyapuram,vembar</p>
                      </div>
                      <div className="mb-4 flex">
                        <p>Email : sample@gmail.com</p>
                      </div>
                      <div className="mb-4 flex">
                        <p>Access : Admin</p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EmployeeViewPopup;
