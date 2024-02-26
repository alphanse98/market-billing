import React from "react"
import { BillMockData } from "../JasonMockData/BillMockData"
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';


const PrintBillUi = () => {

    const handleWhatsapp = (item)=>{
    
        const content = `Item: ${item?.itemName}\nPrice: ${item?.price}\nQuantity: ${item?.quantity}\nTotal Price: ${item?.totalPrice}`;

       // Create PDF document
    const pdf = new jsPDF();
    pdf.text(content, 10, 10); // Assuming printedContent is the text you want to print

    // Save PDF as Blob
    const blob = pdf.output('blob');

    // Create URL for the Blob
    const blobUrl = URL.createObjectURL(blob);

    // Construct WhatsApp URL with the Blob URL
    const whatsappURL = `whatsapp://send?text=${encodeURIComponent(blobUrl)}`;

    // Open WhatsApp with the Blob URL
    window.open(whatsappURL, '_blank');
       
      }
     
    return (
        <>
        {
            BillMockData?.map((item)=>(
                <div style={{
                    backgroundColor: '#e5e7eb',
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'space-between',
                    padding: '0.5rem 1rem',
                    marginBottom: '0.5rem',
                    cursor: 'pointer',
                    borderRadius: '0.25rem',
                    border: '1px solid #ccc',
                    width:"100%",
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'  
                }}
                key={item.id}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem',justifyContent:"center" }}>
                        <div>
                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0WPPVLxOgapbubuTHJNpisy8vD4uwk6xn3wj5mwddVg&s"} alt="product-img" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', objectFit: 'cover' }} />
                            
                        </div>
                        <div style={{width:"80px"}}>
                            <p>{item?.itemName}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p>{item?.price}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p>{item?.quantity}</p>
                    </div>
                    <div style={{ display: 'flex',alignItems: 'center',justifyContent: 'center' }}>
                        <p>{item?.totalPrice}</p>
                    </div>
                    <div style={{ display: 'flex',alignItems: 'center',justifyContent: 'center' }}>
                    <button onClick={()=>handleWhatsapp(item)}className="bg-warning m-1 p-1 text-black rounded-md">Share Whatsapp</button>
                    </div>
                </div>
            ))
        }
           
        </>
    )
}

export default PrintBillUi
