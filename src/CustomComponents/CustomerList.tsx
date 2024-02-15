

const CustomerList = ()=>{
    return(
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-base text-black dark:text-white">
            <input type="text" className="bg-transparent w-[600px] outline-none py-1 px-2 border border-1 rounded-md border-dark:border-strokedark" placeholder="Search" />
          </h4>
        </div>
  
        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Id</p>
          </div>
          <div className="col-span-3 hidden items-center sm:flex">
            <p className="font-medium">Item Name</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Price</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Action</p>
          </div>
        </div>
  {
   ItemsMockData && ItemsMockData.map((item:any)=>(
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
       <div className="col-span-1 hidden items-center  sm:flex">
        <p className="text-sm text-black dark:text-white">{item.Id}</p>
      </div>
      <div className="col-span-3 flex items-center">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="h-12.5 w-15 rounded-md ">
            <img src={item.ItemImg} alt="Product" />
          </div>
          <p className="text-sm text-black dark:text-white">
            {item.ItemName}
          </p>
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-start">
        <p className="text-sm text-black  dark:text-white">{item.ItemPrice}</p>
      </div>
      <div className="col-span-2 flex items-center">
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
    )
}

export default CustomerList