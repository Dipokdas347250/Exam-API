import React from 'react'
import Container from './Container'
import Flex from './Flex'
import tren from "../assets/trending.png"

const Trending = () => {
  return (
   <section className='py-[50px] bg-[#F1F0FF]'>
    <Container>
        <Flex className=" justify-between ">
           <div className="w-[50%]">
            <img className='' src={tren} alt="" />
           </div>
           <div className="w-[50%]">
            <div className="mt-[50px]">
                <h2 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Unique Features Of leatest &
                Trending Poducts</h2>
            </div>
            <div className=" relative mt-[40px] after:absolute after:contain-[''] after:top-[2px] after:left-0 after:h-[15px] after:w-[15px] after:bg-[#FB2E86] after:rounded-full">
                <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43] ml-[20px] items-center '>All frames constructed with hardwood solids and laminates</h4>
            </div>
            <div className=" relative mt-[40px] after:absolute after:contain-[''] after:top-[2px] after:left-0 after:h-[15px] after:w-[15px] after:bg-[#0D0E43] after:rounded-full">
                <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43] ml-[20px] items-center '>Reinforced with double wood dowels, glue, screw - nails corner 
                blocks and machine nails</h4>
            </div>
            <div className=" relative mt-[40px] after:absolute after:contain-[''] after:top-[2px] after:left-0 after:h-[15px] after:w-[15px] after:bg-[#05E6B7] after:rounded-full">
                <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43] ml-[20px] items-center '>Arms, backs and seats are structurally reinforced</h4>
            </div>
            <div className="flex mt-[50px] gap-6">
                <div className="">
                <button className='py-[10px] px-[25px] bg-[#FB2E86]  font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Add To Cart</button>
                </div>
                <div className="">
                <h2 className='font-Sans font-bold text-[14px] text-[#0D0E43]  '>B&B Italian Sofa </h2>
                <h3 className='font-Sans font-semibold text-[14px] text-[#0D0E43]  '>$32.00</h3>
                </div>
            </div>
           </div>
        </Flex>
    </Container>
   </section>
  )
}

export default Trending