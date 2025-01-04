import Itemlisting from './Itemlisting';
import React, { useEffect, useState } from 'react';
import getItems from '../service/ItemService';
import Loader from '../common/Loader';
import BillingItemPopup from './popups/BillingItemPopup';
// import { object } from 'yup';
// import any from 'react/jsx-runtime';

const Products: React.FC<any> = ({ billableData, setBillableData }) => {
  const [isLoading, seIsLoading] = useState<boolean | null>(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>({});
  const [items, setItems] = useState([]);
  const [iseditpopup, setisEditpopup] = useState(false);
  const [editItem, setEditItem] = useState<any>({});      

  // item api call
  const fetchItems = async () => {
    try {
      const res: any = await getItems();
      setItems(res);
      seIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedItem = (item: any) => {

    let selectedItem: any = null;
    billableData.items.map((element: any) => {
      if (element.id === item?.id) {
        selectedItem = element;
      }
    });

    if (selectedItem) {
      setEditItem(selectedItem);
      setisEditpopup(true);
    } else {
      setSelectedItem(item);
      setIsPopupOpen(true);
    }
  };

  const handleSave = (item: any) => {
    let temCopy: any = { ...selectedItem };
    temCopy.itemPrice = item?.Price;
    temCopy.qty = item?.qty;
    temCopy.totalAmount = item?.qty * item?.Price;

    let grandTotal = temCopy?.totalAmount;
    billableData?.items.map((item: any) => (grandTotal += item?.totalAmount));

    setBillableData((prev: any) => ({
      ...prev,
      items: [...prev?.items, temCopy],
      totalAmount: grandTotal,
    }));

    setIsPopupOpen(false);
  };

  const handleEditItem = (value: any) => {
    let updatedItem: any = { ...editItem };
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

  useEffect(() => {
    let localItems: any = localStorage.getItem('items');
    if (!JSON.parse(localItems)) {
      fetchItems();
    } else {
      setItems(JSON.parse(localItems));
      seIsLoading(false);
    }
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="col-span-2 w-[100%]  overflow-hidden">
      {/* <div className="col-span-2 w-[100%] h-[88vh] overflow-hidden
        kiden hidden  hiden old  old lop hidden hidden hidenn hiden hidde"> */}
      <div className="p-2">
        <h4 className="text-base text-black flex justify-between flex-wrap dark:text-white">
          <div className="w-full xl:w-1/2">
            <input
              type="text"
              placeholder="Search customer ..."
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </h4>
      </div>

      <div className="flex flex-wrap gap-2.5 overflow-y-auto pt-5 scrollbar h-5/6">
        {items?.map((item: any, index: any) => (
          <div key={index} onClick={() => handleSelectedItem(item)}>
            {' '}
            <Itemlisting item={item} />{' '}
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <BillingItemPopup
          isOpen={isPopupOpen}
          isClose={setIsPopupOpen}
          item={selectedItem}
          handleSave={handleSave}
        />
      )}

      {iseditpopup && (
        <BillingItemPopup
          isOpen={iseditpopup}
          isClose={setisEditpopup}
          editItem={editItem}
          handleEditItem={handleEditItem}
        />
      )}

    </div>
  );
};

export default Products;
