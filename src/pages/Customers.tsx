import { Link } from "react-router-dom"
import TableTwo from "../components/TableTwo"

const Customers = () => {

  return (
    <div>
      <Link
              to="#"
              className="mb-5 inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Add Customer
            </Link>
      <TableTwo/>
    </div>
  )
}

export default Customers