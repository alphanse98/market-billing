import Pricecart from '../Customcomponents/Custom/Pricecart';
import Products from '../Customcomponents/Custom/Products';

const Takeorder = () => {
  return (
    <div className="grid grid-cols-3 h-[85vh] overflow-hidden">
      <Products />
      <Pricecart />
    </div>
  );
};

export default Takeorder;
