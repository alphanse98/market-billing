import React from 'react';
import CloseIcon from '../../Assets/SvgIcons/CloseIcon';

interface DeletPopupProps {
  isOpen: boolean;
  isClose: any;
  delet: any;
  massage: string;
}

const DeletPopup: React.FC<DeletPopupProps> = ({
  isOpen,
  isClose,
  delet,
  massage,
}) => {
  const deleteAction = () => {
    delet();
    isClose(false);
  };

  if (isOpen)
    return (
      // parant popup iu start
      <div
        className="fixed z-99999 inset-0 overflow-y-auto  h-full w-full flex items-center justify-center p-5"
        style={{
          backdropFilter: 'blur(2px)',
          backgroundColor: 'rgba(9, 9, 9, 0.8)',
        }}
        onClick={() => isClose(false)}
      >
        {/* child popup iu start */}
        <div className=" p-2  rounded-xl shadow-lg rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark ">
          {/* icon ui */}
          <div className="mb-2  p-2 r flex justify-end  ">
            <div
              className="rounded-full bg-meta-1 p-2 cursor-pointe"
              onClick={() => isClose(false)}
            >
              <CloseIcon />
            </div>
          </div>

          <div className="m-10" onClick={(event) => event.stopPropagation()}>
            <p className=" text-center text-xl font-bold text-black dark:text-white sm:text-2xl ">
              Are you sure ?
            </p>
            <p className=" text-center mt-5">{massage}</p>

            <div className="mt-10 flex flex-wrap gap-10 items-center justify-center">
              <button
                className=" px-15 py-3   rounded border border-stroke bg-gray  text-center font-medium text-black transition  dark:border-strokedark dark:bg-meta-4 dark:text-white"
                onClick={() => isClose(false)}
              >
                Cancel
              </button>

              <button
                className=" px-15  py-3   rounded border border-meta-1 bg-meta-1 text-center font-medium text-white  hover:bg-opacity-90"
                onClick={() => deleteAction()}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DeletPopup;
