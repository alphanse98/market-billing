import Itemlisting from './Itemlisting';


const Products = () => {
  return (
    <div className="col-span-2 w-[100%]">
      <div className="p-2">
        <h4 className="text-base text-black flex justify-between flex-wrap dark:text-white">
          <div className="w-full">
            <input
              type="text"
              placeholder="Search customer ..."
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </h4>
      </div>
     
      <div className="flex flex-wrap gap-2.5 overflow-y-auto pt-5 scrollbar h-5/6">
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
        <Itemlisting/>
      </div>
    </div>
  );
};

export default Products;
