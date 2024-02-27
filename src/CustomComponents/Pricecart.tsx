import React from 'react';
import Pricelist from './Pricelist';
import { PriceMockData } from '../JasonMockData/PriceMockData';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../Redux/Store';





const Pricecart = () => {

  const item = useSelector((state: RootState) => state.item.item);
  
  

  

  
  return (
    <div >
      <div className="flex justify-end  ">
        <button className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90">
          Select Customer
        </button>
      </div>
      <div className="pt-8 p-1">
        <div className="flex justify-start text-white bg-primary p-2 rounded-sm">
          <p className="font-bold">Billing Items</p>
        </div>
        <div
          className="py-2 overflow-y-auto  scrollbar  p-1"
          style={{ height: '61vh' }}
        >
          {item?.map((item: any,index:any) => (
            <Pricelist key={item.Id} item={item} index={index}/>
          ))}
        </div>
      </div>
      <div className="flex justify-between p-2">
        <div className="px-2">
          <p className="font-bold">Total</p>
        </div>
        <div className="px-2">
          <p className="font-bold">₹550</p>
        </div>
      </div>
      <div className="border border-1  m-2"></div>
      {/* <div className="p-2"> */}
      <div className="flex justify-center gap-2">
        <button className="bg-primary font-medium rounded-md py-2 px-5 text-white hover:bg-opacity-90">
          Place Order
        </button>
        <button className="bg-primary font-medium rounded-md py-2 px-5 text-white hover:bg-opacity-90">
          Clear
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Pricecart;
