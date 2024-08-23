import React from 'react'
import Container from './Container'
import chair01 from "../assets/chair01.png"

const FeaturedItem = () => {
  return (
    <section>


   <div className="lg:w-[24%] w-full pt-[20px] pb-2 bg-[#F6F7FB]  " >
                 <div className="">
                <img className='ml-[50%] translate-x-[-50%] h-[250px]' src={chair01} alt="" />
                <div className=" relative text-center  w-[100%] py-[10px] bg-[#fff] mt-[50px] before:absolute  before:contain-[''] before:bottom-0 before:right-0 before:w-[100%] before:h-0 before:bg-[#2F1AC4] before:duration-300 before:ease-in-out before:hover:h-[100%]  ">
                     
                     <h3 className=' relative font-Sans font-bold text-[22px] text-[#FB2E86] after:absolute after:contain-[""] after:top-[30px] after:left-[50%] after:translate-x-[-50%] after:h-[4px] after:w-[120px]  after:bg-[#05E6B7]'>Cantilever chair</h3>
                     <h4 className='  font-Sans font-bold text-[16px] text-[#000] mt-[10px] '>Code - Y523201</h4>
                     <h5 className=' relative font-Sans font-bold text-[16px] text-[#000] '>$42.00</h5>
                     
                 </div>
                 </div>
             </div>
   
    </section>
  )
}

export default FeaturedItem