import React from 'react';
import CloseIcon from '../../Assets/SvgIcons/CloseIcon';
import { useEffect } from 'react';
import CheckboxOne from '../../components/CheckboxOne';

interface CustomerPopup {
  isOpen: boolean;
  isClose: any;
}

const CustomerPopup: React.FC<CustomerPopup> = ({ isOpen, isClose }) => {
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
        <div
          className=" p-2  rounded-xl shadow-lg rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark w-[99%] sd:w-[70%]   md:w-[60%] lg:w-[45%]  xl:w-[30%] h-[80vh] overflow-y-auto"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            position: 'relative',
          }}
        >
          {/* icon ui */}
          <div className="flex justify-end mb-2  p-2">
            <div
              className=" fixed rounded-full bg-meta-1 p-2 cursor-pointer"
              onClick={() => isClose(false)}
            >
              <CloseIcon />
            </div>
          </div>

          <div className="m-5" onClick={(event) => event.stopPropagation()}>
            <div className="flex flex-col gap-9">
              {/* <!-- Contact Form --> */}
              <div className="rounded-sm  bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className=" py-4 px-6.5">
                  <h3 className="text-center mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    Add Customer
                  </h3>
                </div>
                <form action="#">
                  <div className="p-6.5">
                    <div className="w-full mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Name <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Mobile Number <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter your email address"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Password <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Select subject"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Address <span className="text-meta-1">*</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Type your message"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      ></textarea>
                    </div>
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Notes <span className="text-meta-1">*</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Type your message"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      ></textarea>
                    </div>

                    <div className="w-full mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Email <span className="text-xs">(optional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your Email"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Access <span className="text-meta-1">*</span>
                      </label>
                      <div className="pl-4">
                        <CheckboxOne />
                      </div>
                    </div>

                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                      Add Customer
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

export default CustomerPopup;
