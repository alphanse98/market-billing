import { useState } from 'react';
import { EmployeeData } from '../JasonMockData/EmployeeData';
import EyeIcon from '../Assets/SvgIcons/EyeIcon';
import DeleteIcon from '../Assets/SvgIcons/DeleteIcon';
import DownloadIcon from '../Assets/SvgIcons/DownloadIcon';

import React from 'react';
import EmployeePopup from './popups/EmployeePopup';

const EmployeeTable = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="rounded-sm border border-stroke bg-white px-3 pt-3 pb-2 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
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
            onClick={() => setIsPopupOpen(true)}
          >
            Add Employee
          </button>
        </h4>
      </div>

      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4 ">
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Employee Name
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Mobile Number
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Password
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Access
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {EmployeeData?.map((item) => (
              <tr className="text-left">
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {item?.EmpName}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {item?.EmpNumber}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex py-1 px-3 text-sm font-medium ">
                    {item?.Password}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex py-1 px-3 text-sm font-medium flex flex-col gap-1">
                    <div>
                      <label
                        htmlFor="checkboxLabelOne"
                        className="flex cursor-pointer select-none items-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="checkboxLabelOne"
                            className="sr-only"
                          />
                          <div
                            className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                              isChecked &&
                              'border-primary bg-gray dark:bg-transparent'
                            }`}
                          >
                            <span
                              className={`h-2.5 w-2.5 rounded-sm ${
                                isChecked && 'bg-primary'
                              }`}
                            ></span>
                          </div>
                        </div>
                        Checkbox Text
                      </label>
                    </div>
                    <div>
                      <label
                        htmlFor="checkboxLabelOne"
                        className="flex cursor-pointer select-none items-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="checkboxLabelOne"
                            className="sr-only"
                            onChange={() => {
                              setIsChecked(!isChecked);
                            }}
                          />
                          <div
                            className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                              isChecked &&
                              'border-primary bg-gray dark:bg-transparent'
                            }`}
                          >
                            <span
                              className={`h-2.5 w-2.5 rounded-sm ${
                                isChecked && 'bg-primary'
                              }`}
                            ></span>
                          </div>
                        </div>
                        Checkbox Text
                      </label>
                    </div>
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EmployeePopup isOpen={isPopupOpen} isClose={setIsPopupOpen} />
    </div>
  );
};

export default EmployeeTable;
