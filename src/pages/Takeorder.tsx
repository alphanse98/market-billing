import React, { useState } from 'react';
import Pricecart from '../CustomComponents/Pricecart';
import Products from '../CustomComponents/Products';

const Takeorder = () => {
  const [billableData, setBillableData] = useState({
    billingID: '',
    businessID: '',
    customerID: '',
    billNumber: '',
    customerName: '',
    balanceAmount: '',
    paidAmount: '',
    totalAmount: '',
    date: '',
    isActive: '',
    items: [
      {
        businessID: '',
        itemName: '',
        billingID: '',
        itemPrice: '',
        isActive: '',
        billingNumber: '',
        quantity: '',
        totalAmount: '',
      }
    ],
  });

  return (
    <>
      <div className=" h-[80vh] w-full  flex ">
        <div className="w-3/5">
          <Products
            billableData={billableData}
            setBillableData={setBillableData}
          />
        </div>

        <div className="w-2/5">
          {/* <div  style={{ width: '500PX' }}> */}
          <Pricecart
            billableData={billableData}
            setBillableData={setBillableData}
          />
        </div>
      </div>
    </>
  );
};

export default Takeorder;
