import React from 'react'
import Container from './Container'
import Flex from './Flex'
import top from "../assets/top.png"
import top01 from "../assets/top01.png"
import top02 from "../assets/top02.png"
import top03 from "../assets/top03.png"
import get from "../assets/get.png"


const TopCategories = () => {
  return (
    <section className='pb-[100px]'>
        <Container>
        <div className=" text-center ">
                <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Top Categories</h3>
            </div>
            <Flex className=" justify-between px-3 mt-[50px]">
            <div className="w-[24%] pt-[20px] pb-2  ">
                    <div className="bg-[#F6F7FB] py-[50px] rounded-full">
                   <img className='ml-[50%] translate-x-[-50%]' src={top} alt="" />
                   <button className='py-[10px] px-[25px] bg-[#08D15F] ml-[50%] translate-x-[-50%] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>View Shop</button>
                    </div>
                    <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>Mini LCW chair</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$56.00</h4>
                        
                        
                    </div>
                </div>
            <div className="w-[24%] pt-[20px] pb-2  ">
                    <div className="bg-[#F6F7FB] py-[50px] rounded-full">
                   <img className='ml-[50%] translate-x-[-50%]' src={top01} alt="" />
                   <button className='py-[10px] px-[25px] bg-[#08D15F] ml-[50%] translate-x-[-50%] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>View Shop</button>
                    </div>
                    <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>Mini LCW chair</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$56.00</h4>
                        
                        
                    </div>
                </div>
            <div className="w-[24%] pt-[20px] pb-2  ">
                    <div className="bg-[#F6F7FB] py-[50px] rounded-full">
                   <img className='ml-[50%] translate-x-[-50%]' src={top02} alt="" />
                   <button className='py-[10px] px-[25px] bg-[#08D15F] ml-[50%] translate-x-[-50%] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>View Shop</button>
                    </div>
                    <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>Mini LCW chair</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$56.00</h4>
                        
                        
                    </div>
                </div>
            <div className="w-[24%] pt-[20px] pb-2  ">
                    <div className="bg-[#F6F7FB] py-[50px] rounded-full">
                   <img className='ml-[50%] translate-x-[-50%]' src={top03} alt="" />
                   <button className='py-[10px] px-[25px] bg-[#08D15F] ml-[50%] translate-x-[-50%] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>View Shop</button>
                    </div>
                    <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>Mini LCW chair</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$56.00</h4>
                        
                        
                    </div>
                </div>

            </Flex>
        </Container>
        <div className=" mt-[50px] ">
           <img className=' ' src={get} alt="" />
        <div className=" text-center mt-[30px]">
                <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Get Leatest Update By Subscribe
                0ur Newslater</h3>
           <button className='py-[10px] px-[25px] bg-[#FB2E86] mt-[0px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Shop Now</button>
            </div>
            </div>
           
        
    </section>
  )
}

export default TopCategories