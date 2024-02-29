import React, { useState } from 'react';
import { vegtableImg } from '../Assets/Img/vegetableImg';
import { useDispatch } from 'react-redux';
import { deleteCart } from "../../src/Redux/Cartslice"
import {  AppDispatch } from '../../src/Redux/store';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const Pricelist = (props: any) => {
  const dispatch: AppDispatch = useDispatch();
  
  const [isOpen, setIsOpen] = useState(false);
  const [editisOpen, editsetIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const editOpen = () => {
    editsetIsOpen(true);
  };

  const editcloseModal = () => {
    editsetIsOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteCart(props.index));
  };

  

 const Modal = ()=>{
  return(
    <div className="fixed z-10 inset-0 overflow-y-auto cursor-pointer" style={{ display: isOpen ? 'block' : 'none' }} aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative p-3 rounded-lg cursor-pointer shadow-lg rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark w-full max-w-lg p-6 rounded-lg">
        {/* Modal content */}
        <p className='text-center text-xl py-2 font-bold '>Are you sure?</p>
        <div className="-mx-3 flex flex-wrap gap-y-4">
         
          <div className="2xsm:w-1/2 w-full px-3">
            <button className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white" onClick={()=>closeModal()}>Cancel</button>
            </div>
            <div className="2xsm:w-1/2 w-full px-3">
              <button className="block w-full rounded border border-meta-1 bg-meta-1 p-3 text-center font-medium text-white transition hover:bg-opacity-90" onClick={()=>handleDelete()}>Delete</button>
              </div>
              </div>
      </div>
    </div>
  </div>

  )
}

 const Modal2 = ()=>{
  return(
    <div className="fixed z-10 inset-0 overflow-y-auto" style={{ display: editisOpen ? 'block' : 'none' }} aria-labelledby="modal-title" role="dialog" aria-modal="true">
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
        <button type="submit" className="bg-white text-black py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
        <button  className="rounded-md border border-meta-1 bg-meta-1 py-2 px-5 m-2 text-center font-medium text-white transition hover:bg-opacity-90" onClick={()=>editcloseModal()}>close</button>
      </Form>
    </Formik>
      </div>
    </div>
  </div>

  )
}



  return (
    <>
      <div
        className="bg-[#e5e7eb] flex justify-between p-2 mb-1 cursor-pointer task cursor-move rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark"
        key={props.Id}
      >
        <div className="flex items-center gap-2 w-52">
          <div>
            <img
              src={vegtableImg[props?.item?.ItemImg]}
              alt="product-img"
              className="w-10 h-10 rounded-md object-cover"
            />
          </div>
          <div>
            <p>{props?.item?.ItemName}</p>
            <p>{props?.item?.ItemPrice}</p>
          </div>
        </div>

        <div className="flex items-end justify-center">
          <p>Qty {props?.item?.ItemQty}</p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
          <svg
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        width="20"
        height="20"
        onClick={()=>editOpen()}
      >
        <path
          fill=""
          d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V299.6l-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.7l-15 60.1c-2.3 9.4-1.8 19 1.4 27.8H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"
        />
      </svg>
      <Modal2/>
          <Modal/>
            
     
      
        
         <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={()=>openModal()}
                    >
                      <path
                        d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                        fill=""
                      />
                      <path
                        d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                        fill=""
                      />
                      <path
                        d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                        fill=""
                      />
                      <path
                        d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                        fill=""
                      />
                    </svg>
        

          </div>
          <p>₹ 300</p>
        </div>
      </div>
    </>
  );
};

export default Pricelist;
