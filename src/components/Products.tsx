import React from "react"

import ProductItems from "./Productitems";



const Products = ()=>{
    return(
        <div className="col-span-2 style={{ width: '70%' }}">
            <div className="flex">
            <div className="flex  border border-2 rounded-md w-[550px]">
                <input type="search" className="bg-transparent w-full pl-2 outline-offset-0 ring-transparent focus:ring-transparent" placeholder="Search Products"/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 pr-2"><path fill="#808080" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
            <div className="flex items-center justify-center">
                <div className="p-2 m-1 rounded-md" style={{backgroundColor: "#e5e7eb"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4"><path fill="#ffb066" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>
                </div>
                <div className="p-2 m-1 rounded-md" style={{backgroundColor: "#e5e7eb"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4"><path fill="#ffb066" d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg>
                </div>
                <div className="p-2 m-1 rounded-md" style={{backgroundColor: "#e5e7eb"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4"><path fill="#ffb066" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/></svg>
                </div>
                <div className="p-2 m-1 rounded-md" style={{backgroundColor: "#e5e7eb"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4"><path fill="#ffb066" d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
                </div>
            </div>
            </div>
            <div>
            <h2 className="text-lg font-bold pt-6 pb-2 text-black">Biriyani</h2>
            </div>
            <div className="flex flex-wrap gap-2 overflow-y-auto  scrollbar" style={{ height: '60vh' }}>
               
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
                 <ProductItems/>
            </div>
        </div>
    )
}

export default Products