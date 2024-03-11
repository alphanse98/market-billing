import React from 'react';
import CloseIcon from '../../Assets/SvgIcons/CloseIcon';
import { useEffect } from 'react';

interface SelectCustomerPopup {
  isOpen: boolean;
  isClose: any;
}

const SelectCustomerPopup: React.FC<SelectCustomerPopup> = ({
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

          <div className="m-1" onClick={(event) => event.stopPropagation()}>
            <div className="flex flex-col gap-9">
              <div className="rounded-sm  bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className=" py-4 px-6.5">
                  <h3 className="text-center mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    Select Customer
                  </h3>
                </div>

                <div className="p-1">
                  <div className="flex items-center justify-center overflow-y-auto">
                    <table className="table-auto min-w-full ">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 ">ID</th>
                          <th className="px-4 py-2 ">Item Name</th>
                          <th className="px-4 py-2 ">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className=" px-4 py-2 text-center">1</td>
                          <td className=" px-4 py-2 text-center">divakar</td>
                          <td className=" px-4 py-2 text-center">
                            <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
                              select
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SelectCustomerPopup;
