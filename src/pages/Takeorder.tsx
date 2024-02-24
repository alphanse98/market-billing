import React from 'react';
import Pricecart from '../CustomComponents/Pricecart';
import Products from '../CustomComponents/Products';

const Takeorder = () => {
  return (
    <div className=" h-[80vh] hidden sm:flex flex-cal">
      <div>
        <Products />
      </div>
      <div className="test" style={{ width: '2000px' }}>
        <Pricecart />
      </div>
    </div>
  );
};

export default Takeorder;
