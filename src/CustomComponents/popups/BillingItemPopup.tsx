import React, { useState } from 'react';
import CloseIcon from '../../Assets/SvgIcons/CloseIcon';
import { useEffect } from 'react';
import img1 from '../../Assets/Img/images/carrot.jpg';
interface BillingItemPopup {
  isOpen: boolean;
  isClose: any;
}

const BillingItemPopup: React.FC<BillingItemPopup> = ({ isOpen, isClose }) => {

  let [tomatoPrice,setTomatoPrice]=useState(0);
  let [Quantity,setQuantity]=useState(0);

  let total =tomatoPrice*Quantity;
  const handleqtyInc =()=>{
    setQuantity(++Quantity);
  }

  const handleqtyDec =()=>{
    setQuantity(--Quantity);
  }

  const handleIncrease=()=>{
    setTomatoPrice(++tomatoPrice);
  }
  const handleDecrease=()=>{
    setTomatoPrice(--tomatoPrice);
  }
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
                  Tomato
                </h3>
                <div className="" style={{ color: 'white' }}>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-around' }}
                  >
                    <img src={img1}  style={{width:'100px',height:'100px'}} />
                    <div style={{ lineHeight: '30px' }} className="mt-3 gap-3 text-black-2">
                      <p className='text-white'>price</p>
                      <div className=" mt-3">
                        {/* <span className="gap-1 font-extrabold">
                          <button className='bg-primary font-medium rounded-md  text-white xl:mt-0 hover:bg-opacity-90'
                            style={{ border: '1px solid', width: '30px' }}
                            onClick={handleDecrease}
                          >
                            -
                          </button>
                        </span> */}
                        {/* <span className="gap-1 ml-6">{tomatoPrice}</span>
                        <span className="gap-1 ml-6">
                          <button className='bg-primary font-medium rounded-md  text-white xl:mt-0 hover:bg-opacity-90'
                            style={{ border: '1px solid', width: '30px' }}
                            onClick={handleIncrease}
                          >
                            +
                          </button>
                        </span> */}
                        <input type='number'  />
                      </div>
                      <div className='mt-6'>
                      <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90 float-right mt-10">
         Save
        </button>
                      </div>
                    </div>
                  </div>

                  <hr className="mt-8" />

                  <div style={{ lineHeight: '30px' }}>
                    <div className="gap-4 mt-3">
                      <span className="ml-3">Quantity :</span>
                      {/* <span className="gap-1 font-extrabold ml-6">
                        <button className='bg-primary font-medium rounded-md  text-white xl:mt-0 hover:bg-opacity-90' style={{ border: '1px solid', width: '30px' }} onClick={handleqtyDec}>
                          -
                        </button>
                      </span> */}
                      {/* <span className="gap-1 ml-6">{Quantity}</span>
                      <span className="gap-1 ml-6">
                        <button className='bg-primary font-medium rounded-md text-white xl:mt-0 hover:bg-opacity-90' style={{ border: '1px solid', width: '30px' }} onClick={handleqtyInc}>
                          +
                        </button>
                      </span> */}
                    <input type="number"  className='ml-4 text-black'/>
                    </div>
                  </div>

                  <div className="ml-3 mt-4">
                    <p>Price : {total}</p>
                  </div>

                          <div style={{float:'right'}} className='mt-5'>
                          <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90" >
          Add Items
        </button>
                          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BillingItemPopup;
