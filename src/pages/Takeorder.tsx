import Pricecart from "../components/Pricecart"
import Products from "../components/Products"



const Takeorder = ()=>{
    return(
        <div className="grid grid-cols-3">
        <Products/>
        <Pricecart/>
        </div>
    )
}

export default Takeorder