import React from 'react';
import CloseIcon from '../../Assets/SvgIcons/CloseIcon';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface CustomerPopup {
  isOpen: boolean;
  isClose: any;
}

const CustomerPopup: React.FC<any> = ({ isOpen, isClose, handleAdd, handleEdit, editCustomer, setEditCustomer }) => {

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

  const handleClose = () => {
    isClose(false);
    setEditCustomer(null);
  };

  let initialValues = {
    customersName : editCustomer?.customersName || "",
    address : editCustomer?.address || "",
    mobile : editCustomer?.mobile || "",
    secMobile : editCustomer?.secMobile || "",
    email : editCustomer?.email || "",
  }

  const schema = Yup.object({
    customersName: Yup.string()
      .required('Enter the customer name')
      .max(200, 'max 200 character'),
    address: Yup.string()
      .required('Enter the address')
      .max(200, 'max 200 character'),
    mobile: Yup.string()
      .min(10, 'Mobile number must be exactly 10 digits')
      .max(10, 'Mobile number must be exactly 10 digits')
      .required('Mobile number is required'),
      
      secMobile: Yup.string()
      .min(10, 'Mobile number must be exactly 10 digits')
      .max(10, 'Mobile number must be exactly 10 digits'),
      email: Yup.string()
      .max(200, 'max 200 character'),
  });



  if (isOpen)
    return (
      <div
        className="fixed z-99999 inset-0 overflow-y-auto  h-screen w-screen flex items-center justify-center p-5"
        style={{
          backdropFilter: 'blur(2px)',
          backgroundColor: 'rgba(9, 9, 9, 0.8)',
        }}
        onClick={() => handleClose()}
      >
        {/* child popup iu start */}
        <div
          className=" p-2  rounded-xl shadow-lg rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark w-[99%] sd:w-[70%]   md:w-[60%] lg:w-[45%]  xl:w-[30%] h-[80vh] overflow-y-auto"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            position: 'relative',
          }}
        >
          {/* icon ui */}
          <div className="flex justify-end mb-2  p-2">
            <div
              className=" fixed rounded-full bg-meta-1 p-2 cursor-pointer"
              onClick={() => handleClose()}
            >
              <CloseIcon />
            </div>
          </div>

          <div className="m-5" onClick={(event) => event.stopPropagation()}>
            <div className="flex flex-col gap-9">
              {/* <!-- Contact Form --> */}
              <div className="rounded-sm  bg-white  dark:border-strokedark dark:bg-boxdark">
                <div className=" py-4 px-6.5">
                  <h3 className="text-center mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    {/* Add Customer */}
                    {editCustomer ? 'Edit Customer' : 'Add Customer'}
                  </h3>
                </div>

                <Formik
                  initialValues={initialValues}
                  validationSchema={schema}
                  onSubmit={(value) => {
                    if (editCustomer) {
                      handleEdit(value);
                    } else {
                      handleAdd(value);
                    }
                  }}
                >
                <Form action="#">
                  <div className="">
                    <div className="w-full mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Name <span className="text-meta-1">*</span>
                      </label>

                      <Field
                        type="text"
                        name = "customersName"
                        // placeholder="Enter your  name"
                         placeholder="Customer name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <ErrorMessage
                          name="customersName"
                          component="div"
                          className="text-danger"
                        />
                    </div>

                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Mobile Number <span className="text-meta-1">*</span>
                      </label>
                      <Field
                        type="number"
                        name = "mobile"
                        placeholder="Enter mobile number"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                      <ErrorMessage
                          name="mobile"
                          component="div"
                          className="text-danger"
                        />
                    </div>

                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Address <span className="text-meta-1">*</span>
                      </label>

                      <Field
                        // rows={3}
                        type = "text"
                        name="address"
                        placeholder="Customer Address"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                       <ErrorMessage
                          name="address"
                          component="div"
                          className="text-danger"
                        />
                    </div>

                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Alternate Mobile Number{' '}
                        <span className="text-xs">(optional)</span>
                      </label>

                      <Field
                        type="number"
                        name="secMobile"
                        placeholder="Enter mobile number"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                      <ErrorMessage
                          name="secMobile"
                          component="div"
                          className="text-danger"
                        />
                    </div>

                    <div className="w-full mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Email <span className="text-xs">(optional)</span>
                      </label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                      <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                        />
                    </div>

                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Additional Notes{' '}
                        <span className="text-xs">(optional)</span>
                      </label>

                      <textarea
                        rows={3}
                        placeholder="Type your message"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      ></textarea>

                      <ErrorMessage
                          name="itemName"
                          component="div"
                          className="text-danger"
                        />
                    </div>

                    <button type='submit' className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                      Add Customer
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

export default CustomerPopup;
