import React from 'react';
import CloseIcon from '../../Assets/SvgIcons/CloseIcon';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addItem } from '../../service/ItemService';

interface ItemsPopup {
  isOpen: boolean;
  isClose: any;
}

const ItemsPopup: React.FC<ItemsPopup> = ({ isOpen, isClose }) => {

  const initialValues = { itemName: '', itemPrice: '' };

  const schema = Yup.object({
    itemName: Yup.string()
    .required('Enter the item name')
      .max(200, 'max 200 character'),
    itemPrice: Yup.string()
      .required('Enter the item Price')
      .max(15, 'Must be 20 character'),
  });

  // Esc key pree popup close
  useEffect(() => {
    function handleKeyPress(event: any) {
      if (event.keyCode === 27) {
        isClose(false);
      }
    }
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleSubtim =async (Item: any) => {
    console.log(Item);

    const temCopy = {...Item}

    const items:any = localStorage.getItem("items")
    temCopy.id =  items?.length + 1
    temCopy.businessID =  localStorage.getItem("businessID")
    temCopy.itemImg =  "tomatto"
    temCopy.isActive =  true
    // temCopy.createDate =  new Date().toISOString();
    temCopy.createDate =  "2019-04-02 11:45";

    try {
      await addItem(temCopy)
      console.log(temCopy)
    } catch (error) {
      console.log(error)
    }

  };

  if (isOpen)
    return (
      // parant popup iu start
      <div
        className="fixed z-99999 inset-0 overflow-y-auto  h-screen w-screen flex items-center justify-center p-5"
        style={{
          backdropFilter: 'blur(2px)',
          backgroundColor: 'rgba(9, 9, 9, 0.8)',
        }}
        onClick={() => isClose(false)}
      >
        {/* child popup iu start */}
        <div className=" p-2  rounded-xl shadow-lg rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark w-[99%] sd:w-[70%]   md:w-[60%] lg:w-[45%]  xl:w-[30%] ">
          {/* icon ui */}
          <div className="flex justify-end mb-2 p-2">
            <div
              className="rounded-full bg-meta-1 p-2 cursor-pointer"
              onClick={() => isClose(false)}
            >
              <CloseIcon />
            </div>
          </div>

          <div className="m-5" onClick={(event) => event.stopPropagation()}>
            <div className="flex flex-col">
              {/* <!-- Contact Form --> */}
              <div className="rounded-sm  bg-white  dark:border-strokedark dark:bg-boxdark">
                <h3 className=" text-center mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Add Item
                </h3>

                <Formik
                  initialValues={initialValues}
                  validationSchema={schema}
                  onSubmit={(value) => {
                    handleSubtim(value);
                  }}
                >
                  <Form>
                    <div className="">
                      <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Item Name <span className="text-meta-1">*</span>
                        </label>

                        <Field
                          type="text"
                          name="itemName"
                          placeholder="Enter Item Name"
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        <ErrorMessage
                          name="itemName"
                          component="div"
                          className="text-danger"
                        />
                      </div>

                      <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Price <span className="text-meta-1">*</span>
                        </label>
                        <Field
                          type="number"
                          name="itemPrice"
                          placeholder="Enter Item price"
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        <ErrorMessage
                          name="itemPrice"
                          component="div"
                          className="text-danger"
                        />
                      </div>

                      <button className="flex w-full justify-center mt-7 rounded bg-primary p-3 font-medium text-gray">
                        Add Item
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ItemsPopup;
