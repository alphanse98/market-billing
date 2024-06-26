import React from 'react';
import CloseIcon from '../../Assets/SvgIcons/CloseIcon';
import { useEffect } from 'react';
import img1 from '../../Assets/Img/images/carrot.jpg';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface BillingItemPopup {
  isOpen: boolean;
  isClose: any;
}

const BillingItemPopup: React.FC<any> = ({ isOpen, isClose, item }) => {
  const initialValues: any = {
    Price: item?.itemPrice || '',
    qty: 1,
    // unit: '',
  };

  const schema = Yup.object({
    Price: Yup.string().required('Enter the Price'),

    qty: Yup.string().required('Enter the item Price'),
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

          <div
            className="m-5 mt-0"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col ">
              <h3 className="text-center mb-4 text-xl font-bold text-gray-800 dark:text-white">
                Add Item
              </h3>
              <div className="flex  ">
                <div className="w-20 h-20 ">
                  <img src={img1} className="w-20 h-20 rounded-lg" />
                </div>

                <div className="ml-5">
                  <div className="text-xl font-bold text-gray-800 dark:text-white">
                    {item?.itemName}{' '}
                  </div>
                  <p className="mt-2 dark:text-white">
                    {' '}
                    Price : {item?.itemPrice}{' '}
                  </p>
                </div>
              </div>

              <hr className="my-5" />
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(value) => {
                  console.log('value >>>', value);
                }}
              >
                <Form>
                  <div className="flex  mb-2">
                    <p className="ml-5 dark:text-white">Price : </p>
                    <Field
                      type="number"
                      name="Price"
                      className="ml-4 h-10 w-34 p-2 rounded border-[1.5px] border-stroke bg-transparent  font-sm outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <ErrorMessage
                    name="Price"
                    component="div"
                    className="text-danger mr-4"
                  />

                  <div className="flex mb-2">
                    <p className="ml-5 dark:text-white">Qty : </p>
                    <Field
                      type="number"
                      name="qty"
                      className="ml-7 h-10 w-34 p-2 rounded border-[1.5px] border-stroke bg-transparent  font-sm outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <ErrorMessage
                    name="qty"
                    component="div"
                    className="text-danger"
                  />

                  {/* <div className="flex mb-2">
                  <p className="ml-5 dark:text-white">Units : </p>
                  <input
                    type="number"
                    
                    className="ml-4 h-10 w-34 p-2 rounded border-[1.5px] border-stroke bg-transparent  font-sm outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div> */}
                  <button
                    className="flex w-full mt-5 justify-center rounded bg-primary p-3 font-medium text-gray"
                   
                  >
                    Save
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BillingItemPopup;
