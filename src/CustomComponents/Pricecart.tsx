import React, { useState } from 'react';
import Pricelist from './Pricelist';
import SelectCustomerPopup from './popups/SelectCustomer';
import DeletPopup from './popups/DeletPopup';
import BillingItemPopup from './popups/BillingItemPopup';
import { AnyObject } from 'yup';

const Pricecart: React.FC<any> = ({ billableData, setBillableData }) => {
  const [CustomerPopup, setSelectCustomerPopup] = useState(false);
  const [isdeletepopup, setisDeletepopup] = useState(false);
  const [iseditpopup, setisEditpopup] = useState(false);
  const [deletableItem, setDeletableItem] = useState<any>(null);
  const [editItem, setEditItem] = useState<object>();
  const [isClear, setIsclear]= useState<boolean>(false);
  
  const selectDeleteItem = (item: object) => {
    setisDeletepopup(true);
    setDeletableItem(item);
  };

  const handleDelete = () => {
    let tempCopy: any = { ...billableData };

    tempCopy.items = tempCopy?.items.filter(
      (param: any) => param?.id !== deletableItem?.id,
    );

    let grandTotal = 0;
    tempCopy?.items.map((item: any) => (grandTotal += item?.totalAmount));
    tempCopy.totalAmount = grandTotal;

    setBillableData(tempCopy);
  };

  const selectEditItem = (item: object) => {
    setEditItem(item);
    setisEditpopup(true);
  };

  const handleEditItem = (value: any) => {
    let updatedItem: AnyObject = { ...editItem };
    updatedItem.itemPrice = value?.Price;
    updatedItem.qty = value?.qty;
    updatedItem.totalAmount = value?.qty * value?.Price;
    // calculate item total
    let billableItems = billableData.items;

    for (let i = 0; i < billableItems.length; i++) {
      if (billableItems[i] && billableItems[i].id === updatedItem?.id) {
        billableItems[i] = updatedItem;
      }
    }

    let grandTotal = 0;
    billableData?.items.map((item: any) => (grandTotal += item?.totalAmount));

    setBillableData((prev: any) => ({
      ...prev,
      items: billableItems,
      totalAmount: grandTotal,
    }));

    setisEditpopup(false);
  };

  const handleCustomer = (customer: any) => {
    setBillableData((prev: any) => ({
      ...prev,
      customerID: customer.id,
      customerName: customer.customersName,
    })); 
    setSelectCustomerPopup(false);
  };

  const handleClear = ()=>{
    setBillableData({
      billingID: '',
      businessID: '',
      customerID: '',
      billNumber: '',
      customerName: '',
      balanceAmount: '',
      paidAmount: '',
      totalAmount: 0,
      date: '',
      isActive: '',
      items: [],
    })
    
  }

  return (
    <div>
      <div className="flex justify-end  ">
        <button
          className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90"
          onClick={() => setSelectCustomerPopup(true)}
        >
          
          {billableData.customerID?billableData.customerName:"Select Customer"}
        </button>
      </div>
      <div className="pt-8 p-1">
        <div className="flex justify-start text-white bg-primary p-2 rounded-sm">
          <p className="font-bold">Billing Items</p>
        </div>
        <div
          className="py-2 overflow-y-auto  scrollbar p-1"
          style={{ height: '61vh' }}
        >
          {billableData?.items?.map((item: any, index: any) => (
            <div key={index}>
              <Pricelist
                item={item}
                index={index}
                selectDeleteItem={selectDeleteItem}
                selectEditItem={selectEditItem}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between p-2">
        <div className="px-2">
          <p className="font-bold">Total</p>
        </div>
        <div className="px-2">
          {/* <p className="font-bold"> ₹ 550</p> */}
          <p className="font-bold"> ₹ {billableData?.totalAmount}</p>
        </div>
      </div>
      <div className="border border-1  m-2"></div>

      <div className="flex justify-center gap-2">
        <button className="bg-primary font-medium rounded-md py-2 px-5 text-white hover:bg-opacity-90">
          Place Order
        </button>
        <button onClick={()=> setIsclear(true)} className="bg-primary font-medium rounded-md py-2 px-5 text-white hover:bg-opacity-90">
          Clear
        </button>
      </div>

      <SelectCustomerPopup
        isOpen={CustomerPopup}
        isClose={setSelectCustomerPopup}
        handleCustomer={handleCustomer}
      />

      <DeletPopup
        isOpen={isdeletepopup}
        isClose={setisDeletepopup}
        delet={handleDelete}
        massage={`want to delete  ${deletableItem?.itemName} item ?`}
      />

      <DeletPopup
        isOpen={isClear}
        isClose={setIsclear}
        delet={handleClear}
        massage={`want to delete all items ?`}
      />

      <BillingItemPopup
        handleClose={() => {
          setEditItem({});
          setisEditpopup(false);
        }}
        isOpen={iseditpopup}
        isClose={setisEditpopup}
        editItem={editItem}
        handleEditItem={handleEditItem}
      />
    </div>
  );
};

export default Pricecart;

