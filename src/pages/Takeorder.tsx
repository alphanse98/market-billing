import Pricecart from '../CustomComponents/Pricecart';
import Products from '../CustomComponents/Products';

const Takeorder = () => {
  return (
    <div className="grid grid-cols-3 h-[85vh] overflow-hidden">
      <Products />
      <Pricecart />
    </div>
  );
};

export default Takeorder;
