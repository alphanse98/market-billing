import React, { useEffect, useState } from 'react';
import Pricecart from '../CustomComponents/Pricecart';
import Products from '../CustomComponents/Products';

const Takeorder = () => {
  const [billableData, setBillableData] = useState({
    // billingID: '',
    businessID: '',
    customerID: '',
    // billNumber: '',
    customerName: '',
    // balanceAmount: '',
    // paidAmount: '',
    totalAmount: 0,
    date: '',
    isActive: '',
    items: [ 
      // {
      //   businessID: '',   ll,;
      //   itemName: '',
      //   billingID: '',
      //   itemPrice: '',
      //   isActive: '',
      //   billingNumber: '',
      //   quantity: '', 
      //   totalAmount: '',
      // }
    ],
  });

  useEffect(()=>{
    let total = 0;
    billableData?.items?.map((item:any)=>{
      total += item?.totalAmount
    })

    setBillableData((prev: any) => ({
      ...prev,
      totalAmount: total,
    }));
  },[])

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
//  mhgfguy9yt 987987 