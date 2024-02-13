import Pricelist from './Pricelist';

const Pricecart = () => {
  return (
    <div className="col-span-1" style={{ width: '100%' }}>
      <div className="flex justify-end ">
        <button className="bg-[#e5e7eb] rounded-md flex w-[100px] gap-1 p-1 items-center justify-center text-[#3881ff]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20"
            height="20"
          >
            <path
              fill="#3881ff"
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
            />
          </svg>
          Back
        </button>
      </div>
      <div className="pt-6 p-3">
        <div className="flex justify-between text-white bg-[#3881ff] p-2 rounded-sm">
          <p className="font-bold">CURRENT ORDER</p>
          <p className="font-bold">ORDER INFO</p>
        </div>
        <div
          className="py-2 overflow-y-auto  scrollbar"
          style={{ height: '30vh' }}
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
          <p className="font-bold">Subtotal</p>
          <p className="font-bold">Tax(%)</p>
        </div>
        <div className="px-2">
          <p className="font-bold">₹22,00,000</p>
          <p className="font-bold">₹550</p>
        </div>
      </div>
      <div className="border border-1 border-dashed m-2"></div>
      <div className="flex justify-between p-2">
        <div className="px-2">
          <p className="font-bold">Total</p>
        </div>
        <div className="px-2">
          <p className="font-bold ">₹22,00,550</p>
        </div>
      </div>
      <div className="border border-1  m-2"></div>
      <div className="p-2">
        <p className="font-bold">Payment Method</p>
        <div className="flex justify-between items-center pt-2">
          <button className="flex items-center gap-2 justify-center bg-transparent border border-1 border-black rounded-md w-[100px] text-[#3881ff]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="20"
              height="20"
            >
              <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
            </svg>
            Cash
          </button>
          <button className="flex items-center gap-2 justify-center bg-transparent border border-1 border-black px-2 rounded-md w-[140px] text-[#3881ff]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="20"
              height="20"
            >
              <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z" />
            </svg>
            Debit Card
          </button>
          <button className="flex items-center gap-2 justify-center bg-transparent border border-1 border-black px-2 rounded-md w-[110px] text-[#3881ff]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20"
              height="20"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
            E-wallet
          </button>
        </div>
        <div className="flex justify-center pt-3">
          <button className="bg-[#FF8911] text-white w-[200px] font-bold py-2 rounded-md">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricecart;
