import React, { useState } from 'react';
import CloseIcon from '../../Assets/SvgIcons/CloseIcon';
import { useEffect } from 'react';

interface AddItemPopup {
  isOpen: boolean;
  isClose: any;
}

const AddItemPopup: React.FC<AddItemPopup> = ({ isOpen, isClose }) => {
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

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    setTotal(price * (quantity + 1));
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotal(price * (quantity - 1));
    }
  };


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
              <div className="rounded-sm  bg-white  dark:border-strokedark dark:bg-boxdark">
                <div className=" py-4 px-6.5">
                  <h3 className="text-center mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    Select Customer
                  </h3>
                </div>

                <div className="p-1">
                  <div className="overflow-x-auto">
                    <div>
                      <div className="flex gap-5">
                        <img
                          src="https://images.unsplash.com/photo-1564874997803-e4d589d5fd41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXR0b3xlbnwwfHwwfHx8MA%3D%3D"
                          width="50"
                          height="20"
                          alt="product"
                        />
                        <div>
                          <p className="text-center font-bold">Tomatto</p>
                          <div className="">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              onClick={decrementQuantity}
                            >
                              -
                            </button>
                            <span className="mx-2">{quantity}</span>
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              onClick={incrementQuantity}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-5">
                        <p className="font-bold"> Quantity:</p>
                        <div className="">
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={decrementQuantity}
                          >
                            -
                          </button>
                          <span className="mx-2">{quantity}</span>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={incrementQuantity}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-5">
                        <p className="font-bold"> Price:</p>
                        <div className="">
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={decrementQuantity}
                          >
                            -
                          </button>
                          <span className="mx-2">{quantity}</span>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={incrementQuantity}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <p className="font-bold">Total:</p>
                        <p>₹ 350</p>
                      </div>
                      <div className="flex justify-end ">
                        <button
                          className='"bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90'
                          style={{ background: 'rgb(60,80,224)' }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddItemPopup;
