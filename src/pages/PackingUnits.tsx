import React, { useEffect, useState } from 'react';
import EditIcon from '../Assets/SvgIcons/EditIcon';
import DeleteIcon from '../Assets/SvgIcons/DeleteIcon';
import PackingPopup from '../CustomComponents/popups/PackingPopup';
import {
  addPack,
  getPack,
  updatePack,
  deletePack,
} from '../service/PackingService';
import Loader from '../common/Loader';
import DeletPopup from '../CustomComponents/popups/DeletPopup';
const PackingUnits = () => {
  const [isLoading, seIsLoading] = useState<boolean | null>(true);
  const [packPopup, setPackPopup] = useState(false);
  const [isdeletePopUp, setIsDeletePopUp] = useState(false);
  const [deletablePack, setDeletablePack] = useState<any>();
  const [packList, setPackList] = useState([]);
  const [editPack, setEditPack] = useState<any>();

  // item api call
  const fetchpackList = async () => {
    try {
      const res: any = await getPack();
      setPackList(res);
      seIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddPack = async (value: any) => {
    const temCopy = { ...value };
    temCopy.businessID = localStorage.getItem('businessID');
    temCopy.isActive = true;
    // temCopy.id = 10;
    temCopy.createDate = '2019-04-02 11:45';
    setPackPopup(false);
    try {
      await addPack(temCopy);
      await fetchpackList();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditPack = async (value: any) => {
    const temCopy: any = { ...editPack };
    temCopy.packingName = value?.packingName;
    temCopy.packingPrice = value?.packingPrice;

    setEditPack(null);
    setPackPopup(false);

    try {
      await updatePack(temCopy);
      await fetchpackList();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    console.log('delete', deletablePack);
    try {
      await deletePack(deletablePack);
      await fetchpackList();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchpackList();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-base text-black flex justify-between flex-wrap dark:text-white">
            <div className="w-full xl:w-1/2">
              <input
                type="text"
                placeholder="Search Items ..."
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <button
              className="bg-primary font-medium rounded-md py-2 px-5 text-white mt-4 xl:mt-0 hover:bg-opacity-90"
              onClick={() => setPackPopup(true)}
            >
              Add Packing units
            </button>
          </h4>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke mt-2 py-4 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Id</p>
          </div>
          <div className="col-span-3  items-center ">
            <p className="font-medium">Pack Name</p>
          </div>
          <div className="col-span-2 flex items-center hidden sm:block">
            <p className="font-medium">Price</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Action</p>
          </div>
        </div>

        {packList?.map((item: any) => (
          <div
            className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
            key={item?.id}
          >
            <div className="col-span-1  items-center  ">
              <p className="text-sm text-black dark:text-white">{item?.id}</p>
            </div>
            <div className="col-span-3 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {item?.packingName}
                </p>
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-start hidden sm:block">
              <p className="text-sm text-black  dark:text-white">
                {item?.packingPrice}
              </p>
            </div>
            <div className="col-span-2 flex items-center">
              <div className="flex items-center space-x-3.5">
                {/* <button
                className="hover:text-primary"
                onClick={() => setviewIsPopupOpen(true)}
              >
                <EyeIcon />
              </button> */}
                <button
                  className="hover:text-primary"
                  onClick={() => {
                    setEditPack(item), setPackPopup(true);
                  }}
                >
                  <EditIcon />
                </button>
                <button
                  className="hover:text-primary"
                  onClick={() => {
                    setIsDeletePopUp(true), setDeletablePack(item);
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PackingPopup
        isOpen={packPopup}
        isClose={setPackPopup}
        handleAddPack={handleAddPack}
        editPack={editPack}
        setEditPack={setEditPack}
        handleEditPack={handleEditPack}
      />

      {/* <ItemsViewPopup isOpen={isviewPopupOpen} isClose={setviewIsPopupOpen} /> */}

      <DeletPopup
        isOpen={isdeletePopUp}
        isClose={setIsDeletePopUp}
        delet={handleDelete}
        massage={`want to delete ${deletablePack?.packingName} pack ?`}
      />
    </>
  );
};

export default PackingUnits;

// function deletPack(deletablePack: any) {
//   throw new Error('Function not implemented.');
// }
