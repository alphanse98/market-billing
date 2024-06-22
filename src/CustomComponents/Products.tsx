import Itemlisting from './Itemlisting';
import React, { useEffect, useState } from 'react';
import getItems from '../service/ItemService';
import Loader from '../common/Loader';
import BillingItemPopup from './popups/BillingItemPopup';

const Products = () => {
  const [isLoading, seIsLoading] = useState<boolean | null>(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([]);

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
    setSelectedItem(item);
    setIsPopupOpen(true);
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
      {/* <div className="col-span-2 w-[100%] h-[88vh] overflow-hidden"> */}
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
        {items?.map((item: any) => (
          <div onClick={() => handleSelectedItem(item)}>
            {' '}
            <Itemlisting item={item} />{' '}
          </div>
        ))}
      </div>
      <BillingItemPopup isOpen={isPopupOpen} isClose={setIsPopupOpen} item = {selectedItem}/>
    </div>
  );
};

export default Products;
