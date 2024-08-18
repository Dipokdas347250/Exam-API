import React from 'react'
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const ECommerceBar = () => {
  return (
    <>
     <div className="flex mt-[100px] bg-[#fff] py-[50px] px-3">
                <div className="w-[40%]">
                    <h2 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Ecommerce Acceories & Fashion item </h2>
                    <h5 className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>About 9,620 results (0.62 seconds)</h5>
                </div>
                <div className="w-[60%] flex">
                    <div className="w-[25%] flex items-center justify-between">
                        <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>per page </h4> 
                            <input className='h-[25px] w-[60%] border-2 border-[#000] ' type="text" />
                    </div>
                    <div className="w-[25%] flex items-center justify-around">
                    <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43] ml-[10px]'>Sort By: </h4> 
                    <input className='h-[25px] w-[60%] border-2 border-[#000] ' type="text" />
                    </div>
                    <div className="w-[50%] flex items-center justify-around">
                    <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43] ml-[10px]'>View: </h4> 
                    <IoGrid/>
                    <FaThList/>
                    <input className='h-[25px] w-[60%] border-2 border-[#000] ' type="text" />
                    </div>
                    
                    
                </div>
            </div>
    </>
  )
}

export default ECommerceBar