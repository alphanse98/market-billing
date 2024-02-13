


const ProductItems = ()=>{
    return(
        <>
         <div>
                  <div className="w-36 h-56 rounded overflow-hidden shadow-lg">
      <img className="w-full h-32" src="https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fycm90fGVufDB8fDB8fHww" alt="Product" />
      <div className="px-6 py-1">
        <div className="text-base mb-1">Product Title</div>
      </div>
      <div className="px-6 py-1">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">$19.99</span>
      </div>
    </div>
                      </div> 
        </>
    )
}


export default ProductItems