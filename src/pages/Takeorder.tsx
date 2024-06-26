import React, { useState } from 'react';
import Pricecart from '../CustomComponents/Pricecart';
import Products from '../CustomComponents/Products';

const Takeorder = () => {
  const [addTocart, setAddTocart] = useState({
    date: '',
    billNumber: '',
    customername: '',
    items: [],
  });

  return (
    <>
      <div className=" h-[80vh] w-full  flex ">
        <div className="w-3/5">
          <Products />
        </div>

        <div className="w-2/5">
          {/* <div className="test" style={{ width: '20000px' }}> */}
          <Pricecart />
        </div>
      </div>
    </>
  );
};

export default Takeorder;


