import React, { useState } from 'react';
import CloseIcon from '../../Assets/SvgIcons/CloseIcon';
import { useEffect } from 'react';
import ProfileIcon from '../../Assets/SvgIcons/ProfileIcon';
import getCstomers from '../../service/CustomerService';
import Loader from '../../common/Loader';



const SelectCustomerPopup: React.FC<any> = ({
  isOpen,
  isClose,
  handleCustomer,
}) => {
  const [isLoading, seIsLoading] = useState<boolean | null>(true);
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const res: any = await getCstomers();
      setCustomers(res);
      seIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let localItems: any = localStorage.getItem('customers');
    if (!JSON.parse(localItems)) {
      fetchCustomers();
    } else {
      setCustomers(JSON.parse(localItems));
      seIsLoading(false);
    }
  }, []);

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

  if (isLoading) return <Loader />;

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
              <div className="rounded-sm  ">
                <div className=" py-4 px-6.5">
                  <h3 className="text-center mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    Select Customer
                  </h3>
                </div>

                <div className="p-1">
                  <div className=" overflow-y-auto">
                    {customers?.map((item: any, index:any) => (
                      <div onClick={()=> handleCustomer(item)} className="flex  items-center   gap-6  m-2 p-2 cursor-pointer" key={index}>
                        <div className="items-center">
                          <p className="rounded-full bg-primary p-3">
                            <ProfileIcon />
                          </p>
                        </div>
                        <div className="  items-center    ">
                          <p className="text-sm text-black dark:text-white">
                            {item?.id}
                          </p>
                        </div>

                        <div className="  items-center    ">
                          <p className="text-sm  text-black dark:text-white">
                          {item?.customersName}
                          </p>
                        </div>
                      </div>
                    ))}
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
