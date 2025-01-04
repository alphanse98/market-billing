import DeleteIcon from '../Assets/SvgIcons/DeleteIcon';
import EyeIcon from '../Assets/SvgIcons/EyeIcon';
import React, { useEffect, useState } from 'react';
import CustomerPopup from './popups/CustomerPopup';
import CustomerViewPopup from './popups/CustomerViewPopup';
import getCstomers, {
  addCustomer,
  deleteCustomer,
  updateCustomer,
} from '../service/CustomerService';
import Loader from '../common/Loader';
import DeletPopup from './popups/DeletPopup';
import EditIcon from '../Assets/SvgIcons/EditIcon';

const CustomerListTable = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isViewPopup, setIsviewPopup] = useState(false);
  const [isLoading, seIsLoading] = useState<boolean | null>(true);

  const [customers, setCustomers] = useState([]);
  const [isDeletedPopUp, setDeletedPopUp] = useState(false);
  const [isdeletableCustomer, setdeletableCustomer] = useState<any>(null);
  const [editCustomer, setEditCustomer] = useState<any>(null);

  const d = () => {
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 16).replace('T', ' ');
    console.log(formattedDate);
    return formattedDate;
  };

  const handleAddCustomer = async (value: any) => {
    const temCopy = { ...value };
    temCopy.businessID = localStorage.getItem('businessID');
    temCopy.isActive = true;
    // temCopy.isActive = true;  v  jhbk htil mk ggnn  kjgb um h  ;l,
    temCopy.createDate = d();
    // temCopy.createDate = '2019-04-02 11:45';
    setIsPopupOpen(false);
    try {
      await addCustomer(temCopy);
      await fetchCustomers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditCustomer = async (value: any) => {
    const temCopy = { ...editCustomer };
    temCopy.customersName = value?.customersName;
    temCopy.address = value?.address;
    temCopy.mobile = value?.mobile;
    temCopy.secMobile = value?.secMobile;
    temCopy.email = value?.email;
    setIsPopupOpen(false);
    try {
      await updateCustomer(temCopy);
      await fetchCustomers();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCustomers = async () => {
    try {
      const res: any = await getCstomers();
      setCustomers(res);
      seIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleDeleted = async () => {
    let temCopy = { ...isdeletableCustomer };
    temCopy.isActive = false;
    try {
      await deleteCustomer(temCopy);
      await fetchCustomers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRestore = async (item: any) => {
    let temCopy = { ...item };
    temCopy.isActive = true;
    try {
      await deleteCustomer(temCopy);
      await fetchCustomers();
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   let localItems: any = localStorage.getItem('customers');
  //   if (!JSON.parse(localItems)) {
  //     fetchCustomers();
  //   } else {
  //     setCustomers(JSON.parse(localItems));
  //     seIsLoading(false);
  //   }
  // }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-base text-black flex justify-between flex-wrap dark:text-white">
          <div className="w-full xl:w-1/2">
            <input
              type="text"
              placeholder="Search customer ..."
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <button
            className="bg-primary font-medium rounded-md py-2 px-5 text-white mt-4 xl:mt-0 hover:bg-opacity-90"
            onClick={() => setIsPopupOpen(true)}
          >
            Add customer
          </button>
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center   ">
          <p className="font-medium">Id</p>
        </div>

        <div className="col-span-2  items-center  ">
          <p className="font-medium">Name</p>
        </div>

        <div className="col-span-2 flex items-center  hidden sm:block ">
          <p className="font-medium">Phone Number</p>
        </div>

        {/* <div className="col-span-2 flex items-center  hidden sm:block ">
          <p className="font-medium">Email</p>
        </div> */}

        <div className="col-span-1 flex items-center pl-15 sm:pl-0 ">
          <p className="font-medium">Action</p>
        </div>
      </div>

      {customers?.map((item: any, index: number) => (
        <div
          key={index}
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
        >
          <div
            className={`col-span-1  items-center ${
              !item?.isActive && 'opacity-40'
            }`}
          >
            <p className="text-sm text-black dark:text-white">{item?.customerId}</p>
          </div>

          <div className="col-span-3 flex items-center sm:col-span-2 ">
            <div
              className={`flex flex-col gap-4 sm:flex-row sm:items-center ${
                !item?.isActive && 'opacity-40'
              }`}
            >
              <p className="text-sm text-black dark:text-white">
                {item?.customersName}
              </p>
            </div>
          </div>

          <div
            className={`col-span-2 flex items-center justify-start  hidden sm:block ${
              !item?.isActive && 'opacity-40 '
            }`}
          >
            <p className="text-sm  text-black  dark:text-white ">
              {/* <p className="text-red-700"> */}
              {item?.mobile}
            </p>
          </div>

          {/* <div
            className={`col-span-2 flex items-center justify-start truncate mr-2 hidden sm:block  ${
              !item?.isActive && 'opacity-40'
            }`}
          >
            <p className="text-sm text-black  dark:text-white">{item?.email}</p>
          </div> */}

          <div className="col-span-1 flex items-center ">
            {item?.isActive ? (
              <div className="flex items-center space-x-3.5">
                <button
                  className="hover:text-primary"
                  onClick={() => setIsviewPopup(true)}
                >
                  <EyeIcon />
                </button>

                <button
                  className="hover:text-primary"
                  onClick={() => {
                    setEditCustomer(item), setIsPopupOpen(true);
                  }}
                >
                  <EditIcon />
                </button>

                <button
                  className="hover:text-primary"
                  onClick={() => {
                    setDeletedPopUp(true), setdeletableCustomer(item);
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            ) : (
              <button
                className="bg-primary font-medium rounded-md py-2 px-5 text-white  hover:bg-opacity-90"
                onClick={() => {
                  handleRestore(item);
                }}
              >
                Restore
              </button>
            )}
          </div>
        </div>
      ))}

      <CustomerPopup
        isOpen={isPopupOpen}
        isClose={setIsPopupOpen}
        handleAdd={handleAddCustomer}
        handleEdit={handleEditCustomer}
        editCustomer={editCustomer}
        setEditCustomer={setEditCustomer}
      />

      <CustomerViewPopup isOpen={isViewPopup} isClose={setIsviewPopup} />

      <DeletPopup
        isOpen={isDeletedPopUp}
        isClose={setDeletedPopUp}
        delet={handleDeleted}
        massage={`want to delete ${isdeletableCustomer?.customersName} customer ?`}
      />
    </div>
  );
};

export default CustomerListTable;
