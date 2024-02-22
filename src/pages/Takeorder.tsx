import Pricecart from '../CustomComponents/Pricecart';
import Products from '../CustomComponents/Products';

const Takeorder = () => {
  return (
    // <div className="grid grid-cols-3 h-[85vh] overflow-hidden">
    <div className="flex flex-cal h-[80vh]">
      <div ><Products /></div>
      {/* <div className='w-96' ><Pricecart /></div> */}
      <div  className='test' style={{ width: '2000px'}} ><Pricecart /></div>
      
      
    </div>
  );
};

export default Takeorder;
