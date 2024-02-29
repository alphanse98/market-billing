import React, { useState } from 'react';
import { vegtableImg } from '../Assets/img/vegetableImg';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../src/Redux/Cartslice';
import { AppDispatch } from '../../src/Redux/store';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DeleteIcon from '../Assets/SvgIcons/DeleteIcon';
import EditIcon from '../Assets/SvgIcons/EditIcon';
import DeletPopup from './popups/DeletPopup';

const Pricelist = (props: any) => {
  const dispatch: AppDispatch = useDispatch();

  const [editisOpen, editsetIsOpen] = useState(false);

  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const deleteAction = () => {
    dispatch(deleteCart(props.index));
  };

  const Modal2 = () => {
    return (
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        style={{ display: editisOpen ? 'block' : 'none' }}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative bg-black w-full max-w-lg p-6 rounded-lg rounded-lg cursor-pointer shadow-lg rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark">
            {/* Modal content */}
            <Formik
              initialValues={{
                name: '',
                phoneNumber: '',
                email: '',
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
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Phone Number
                  </label>
                  <Field
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-black py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit
                </button>
                <button
                  className="rounded-md border border-meta-1 bg-meta-1 py-2 px-5 m-2 text-center font-medium text-white transition hover:bg-opacity-90"
                  // onClick={() => editcloseModal()}
                >
                  close
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    );
  };

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
            <div>
              <EditIcon />
            </div>
            <div
              onClick={() => {
                setIsDeletePopupOpen(true);
              }}
            >
              <DeleteIcon />
            </div>
          </div>
          <p>₹ 300</p>
        </div>
      </div>
      <DeletPopup
        isOpen={isDeletePopupOpen}
        isClose={setIsDeletePopupOpen}
        delet={deleteAction}
        massage={` Are you want to delete ${props?.item?.ItemName} item`}
      />
    </>
  );
};

export default Pricelist;
