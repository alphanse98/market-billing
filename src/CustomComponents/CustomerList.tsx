import { useState } from 'react';
import DeleteIcon from '../Assets/SvgIcons/DeleteIcon';
import DownloadIcon from '../Assets/SvgIcons/DownloadIcon';
import EyeIcon from '../Assets/SvgIcons/EyeIcon';
import { CustomerList } from '../JasonMockData/CustomersData';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';


const CustomerListTable = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const Modal = ()=>{
    return(
      <div className="fixed z-10 inset-0 overflow-y-auto" style={{ display: isOpen ? 'block' : 'none' }} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-black w-full max-w-lg p-6 rounded-lg rounded-lg cursor-pointer shadow-lg rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark">
          {/* Modal content */}
          <Formik
        initialValues={{
          name: '',
          phoneNumber: '',
          email: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
          phoneNumber: Yup.string()
            .matches(/^[0-9]+$/, 'Must be only digits')
            .min(10, 'Must be exactly 10 digits')
            .max(10, 'Must be exactly 10 digits')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <Field
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="phoneNumber" component="div" className="text-red-500 mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
          </div>
          <button type="submit" className="bg-primary font-medium rounded-md py-2 px-5 text-white mt-4 xl:mt-0 hover:bg-opacity-90">Submit</button>
          <button  className="rounded-md border border-meta-1 bg-meta-1 py-2 px-5 m-2 text-center font-medium text-white transition hover:bg-opacity-90" onClick={()=>closeModal()}>close</button>
        </Form>
      </Formik>
        </div>
      </div>
    </div>
    )
  }









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
          <Modal/>
          <button className="bg-primary font-medium rounded-md py-2 px-5 text-white mt-4 xl:mt-0 hover:bg-opacity-90" onClick={()=>openModal()}>Add customer</button>
       
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Id</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">PhoneNumber</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Action</p>
        </div>
      </div>
      {
        CustomerList?.map((item: any) => (
          <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
            <div className="col-span-1 hidden items-center  sm:flex">
              <p className="text-sm text-black dark:text-white">{item?.Id}</p>
            </div>
            <div className="col-span-2 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {item?.CustomerName}
                </p>
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-start">
              <p className="text-sm text-black  dark:text-white">
                {item?.CustomerEmail}
              </p>
            </div>
            <div className="col-span-2 flex items-center justify-start">
              <p className="text-sm text-black  dark:text-white">
                {item?.CustomerNumber}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <div className="flex items-center space-x-3.5">
                <button className="hover:text-primary">
                  <EyeIcon />
                </button>
                <button className="hover:text-primary">
                  <DeleteIcon />
                </button>
                <button className="hover:text-primary">
                  <DownloadIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CustomerListTable;
