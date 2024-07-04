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

  const selectDeleteItem = (item: object) => {
    setisDeletepopup(true);
    setDeletableItem(item);
    // setDeleteIndex(index);
  };

  const handleDelete = () => {
    let tempCopy: any = { ...billableData };
    tempCopy.items = tempCopy?.items.filter(
      (param: any) => param?.id !== deletableItem?.id,
    );
    setBillableData(tempCopy);
  };

  const selectEditItem = (item: object) => {
    setEditItem(item);
    setisEditpopup(true);
    console.log(item);
  };

  const handleEditItem = (value:any) => {
    
    let updatedItem :AnyObject = {...editItem}
    updatedItem.itemPrice = value?.itemPrice
    updatedItem.qty = value?.qty

    let items =  billableData.itms 

    // for (let i =0 ; i<= )

    console.log(items)

    setisEditpopup(false)
  };

  return (
    <div>
      <div className="flex justify-end  ">
        <button
          className="bg-primary font-medium rounded-md py-2 px-5 text-white xl:mt-0 hover:bg-opacity-90"
          onClick={() => setSelectCustomerPopup(true)}
        >
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
          <p className="font-bold">₹550</p>
        </div>
      </div>
      <div className="border border-1  m-2"></div>

      <div className="flex justify-center gap-2">
        <button className="bg-primary font-medium rounded-md py-2 px-5 text-white hover:bg-opacity-90">
          Place Order
        </button>
        <button className="bg-primary font-medium rounded-md py-2 px-5 text-white hover:bg-opacity-90">
          Clear
        </button>
      </div>

      <SelectCustomerPopup
        isOpen={CustomerPopup}
        isClose={setSelectCustomerPopup}
      />

      <DeletPopup
        isOpen={isdeletepopup}
        isClose={setisDeletepopup}
        delet={handleDelete}
        massage={`want to delete  ${deletableItem?.itemName} item ?`}
      />

      <BillingItemPopup
        isOpen={iseditpopup}
        isClose={setisEditpopup}
        item={null}
        handleSave={null}
        editItem={editItem}
        handleEditItem={handleEditItem}
      />
    </div>
  );
};

export default Pricecart;
