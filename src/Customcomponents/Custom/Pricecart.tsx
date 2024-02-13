import Pricelist from './Pricelist';

const Pricecart = () => {
  return (
    <div className="col-span-1" style={{ width: '100%' }}>
      <div className="flex justify-end ">
        <button className="bg-primary rounded-md flex w-[150px] p-1 gap-1 items-center justify-center text-white hover:bg-opacity-90">
          Select customer
        </button>
      </div>
      <div className="pt-6 p-3">
        <div className="flex justify-start text-white bg-primary p-2 rounded-sm">
          <p className="font-bold">Billing Items</p>
        </div>
        <div
          className="py-2 overflow-y-auto  scrollbar"
          style={{ height: '50vh' }}
        >
          <Pricelist />
          <Pricelist />
          <Pricelist />
          <Pricelist />
          <Pricelist />
          <Pricelist />
          <Pricelist />
          <Pricelist />
          <Pricelist />
        </div>
      </div>
      <div className="flex justify-between p-2">
        <div className="px-2">
          <p className="font-bold">Total</p>
        </div>
        <div className="px-2">
          <p className="font-bold">₹550</p>
        </div>
      </div>
      <div className="border border-1  m-2"></div>
      <div className="p-2">
        <div className="flex justify-center pt-3 gap-2">
          <button className="rounded-md py-2 bg-primary  text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
            Place Order
          </button>
          <button className='rounded-md py-2 bg-primary  text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricecart;
