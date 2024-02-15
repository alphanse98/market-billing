import DeleteIcon from "../Assets/SvgIcons/DeleteIcon"
import DownloadIcon from "../Assets/SvgIcons/DownloadIcon"
import EyeIcon from "../Assets/SvgIcons/EyeIcon"
import { BillingData } from "../JasonMockData/BillingData"



const BillingTable = ()=>{
    return(
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
          <button className="bg-primary font-medium rounded-md py-2 px-5 text-white mt-4 xl:mt-0 hover:bg-opacity-90">Create Bill</button>
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke mt-2 py-4 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Bill No</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Customer Name</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Items</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">status</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Action</p>
        </div>
      </div>
{
 BillingData?.map((item:any)=>(
    <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
     <div className="col-span-1 hidden items-center  sm:flex">
      <p className="text-sm text-black dark:text-white">{item?.BillNo}</p>
    </div>
    <div className="col-span-2 flex items-center">
      
        <p className="text-sm text-black  dark:text-white">
          {item?.CustomerName}
        </p>
     
    </div>
    <div className="col-span-1 flex items-center justify-start">
      <p className="text-sm text-black  dark:text-white">{item?.Items}</p>
    </div>
    <div className="col-span-2 flex items-center justify-start">
        {
            item?.status === "pending" ? (<p className="inline-flex rounded-full text-left bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
            {item?.status}
          </p> ): item?.status === "Paid" ? (<p className="inline-flex rounded-full text-left bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
            {item?.status}
          </p> ) : item?.status === "Unpaid" ? (<p className="inline-flex rounded-full text-left bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
            {item?.status}
          </p> ) : ""
        }
                
              </div>
    <div className="col-span-1 flex items-center justify-start">
      <p className="text-sm text-black  dark:text-white">{item?.Price}</p>
    </div>
    <div className="col-span-1 flex items-center">
    <div className="flex items-center space-x-3.5">
                  <button className="hover:text-primary">
                    <EyeIcon/>
                  </button>
                  <button className="hover:text-primary">
                  <DeleteIcon/>
                  </button>
                  <button className="hover:text-primary">
                   <DownloadIcon/>
                  </button>
                </div>
    </div>
  </div>
 ))
}
     
    </div>
        </>
    )
}


export default BillingTable