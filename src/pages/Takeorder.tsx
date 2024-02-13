import Pricecart from '../components/Custom/Pricecart';
import Products from '../components/Custom/Products';

const Takeorder = () => {
  return (
    <div className="grid grid-cols-3 h-[85vh] overflow-hidden">
      <Products />
      <Pricecart />
    </div>
  );
};

export default Takeorder;
