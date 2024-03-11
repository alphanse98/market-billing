import Itemlisting from './Itemlisting';
import { ItemsMockData } from '../JasonMockData/ItemsData';
import React, { useState }  from 'react';
import AddItemPopup from './popups/AddItemPopup';


const Products = () => {


  const [isPopupOpen, setIsPopupOpen] = useState(false);


  

  return (
    <div className="col-span-2 w-[100%] h-[88vh] overflow-hidden">
      <div className="p-2">
        <h4 className="text-base text-black flex justify-between flex-wrap dark:text-white">
          <div className="w-full xl:w-1/2">
            <input
              type="text"
              placeholder="Search customer ..."
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
              <button className='mt-2 p-2 text-center bg-primary mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl' onClick={()=>setIsPopupOpen(true)}>Add</button>
          </div>
        </h4>
      </div> 
      <div className="flex flex-wrap gap-2.5 overflow-y-auto pt-5 scrollbar h-5/6">
        {ItemsMockData?.map((item: any) => <Itemlisting item={item} />)}
      </div>
      <AddItemPopup  isOpen={isPopupOpen} isClose={setIsPopupOpen} />
    </div>
  );
};

export default Products;
