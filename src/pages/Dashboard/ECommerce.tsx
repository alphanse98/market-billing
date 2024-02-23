import CardFour from '../../components/CardFour';
import CardOne from '../../components/CardOne';
import CardThree from '../../components/CardThree';
import CardTwo from '../../components/CardTwo';
import ChartOne from '../../components/ChartOne';
import ChartThree from '../../components/ChartThree';
import ChartTwo from '../../components/ChartTwo';
import ChatCard from '../../components/ChatCard';
import MapOne from '../../components/MapOne';
import TableOne from '../../components/TableOne';
import {useRef} from "react"
import {useReactToPrint} from "react-to-print"
import PrintBillUi from "../../CustomComponents/PrintBillUi"



const ECommerce = () => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: ()=>componentRef.current
  })

//  const CardFour = React.forwardRef((props, ref) => {
//     return <div ref={ref}><CardFour/></div>;
//   });
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div>
        {/* <CardFour ref={componentRef} /> */}
        <div ref={componentRef}>
           <div>
           <PrintBillUi/>
           </div>
        </div>
      <button onClick={()=>handlePrint()} className="bg-warning m-1 p-1 text-black rounded-md">print</button>

      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default ECommerce;
