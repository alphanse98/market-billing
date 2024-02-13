import Itemlisting from './Itemlisting';


const Products = () => {
  return (
    <div className="col-span-2 w-[100%]">
      <div className="flex">
        <div className="flex  border border-2 rounded-md w-[550px]">
          <input
            type="search"
            className="bg-transparent w-full p-1 outline-offset-0 ring-transparent focus:ring-transparent"
            placeholder="Search Products"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-8 pr-2"
          >
            <path
              fill="#808080"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </div>
        <div className="bg-[#e5e7eb] p-1 ml-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-6 h-6"
          >
            <path
              fill="#fd9744"
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
            />
          </svg>
        </div>
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
