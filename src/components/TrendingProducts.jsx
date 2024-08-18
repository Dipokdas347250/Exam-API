import React from 'react'
import Container from './Container'
import Flex from './Flex'
import chair000 from "../assets/chair000.png"
import chair0001 from "../assets/chair0001.png"
import chair0002 from "../assets/chair0002.png"
import chair0003 from "../assets/chair0003.png"
import mini1 from "../assets/mini1.png"
import mini2 from "../assets/mini2.png"
import mini01 from "../assets/mini01.png"

const TrendingProducts = () => {
  return (
    <section className='py-[100px]'>
        <Container>
        <div className=" text-center ">
                <h3 className='font-Sans font-bold lg:text-[42px] text-[32px] text-[#0D0E43]'>Trending Products</h3>
            </div>
            <div className=" lg:flex md:flex justify-between px-3">
            <div className="lg:w-[25%] w-full md:w-[50%] pt-[20px] pb-2 bg-[#fff] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={chair000} alt="" />
                   <div className="  text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className='  font-Sans font-bold text-[22px] text-[#0D0E43] '>Cantilever chair</h3>
                        <h4 className='  font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$26.00 <span className='font-Sans font-semibold text-[14px] text-[#1A0B5B] mt-[10px]'>$42.00</span></h4>  
                    </div>
                    </div>
                </div>
            <div className="lg:w-[25%] w-full md:w-[50%]  pt-[20px] pb-2 bg-[#fff] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={chair0001} alt="" />
                   <div className="  text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className='  font-Sans font-bold text-[22px] text-[#0D0E43] '>Cantilever chair</h3>
                        <h4 className='  font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$26.00 <span className='font-Sans font-semibold text-[14px] text-[#1A0B5B] mt-[10px]'>$42.00</span></h4>  
                    </div>
                    </div>
                </div>
            <div className="lg:w-[25%] w-full md:w-[50%]  pt-[20px] pb-2 bg-[#fff] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={chair0002} alt="" />
                   <div className="  text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className='  font-Sans font-bold text-[22px] text-[#0D0E43] '>Cantilever chair</h3>
                        <h4 className='  font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$26.00 <span className='font-Sans font-semibold text-[14px] text-[#1A0B5B] mt-[10px]'>$42.00</span></h4>  
                    </div>
                    </div>
                </div>
            <div className="lg:w-[25%] w-full md:w-[50%]  pt-[20px] pb-2 bg-[#fff] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={chair0003} alt="" />
                   <div className="  text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className='  font-Sans font-bold text-[22px] text-[#0D0E43] '>Cantilever chair</h3>
                        <h4 className='  font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$26.00 <span className='font-Sans font-semibold text-[14px] text-[#1A0B5B] mt-[10px]'>$42.00</span></h4>  
                    </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex justify-between mt-[50px] px-3">
                <div className="lg:w-[35%] w-full">
                    <div className=" pt-[50px] px-[50px] bg-[#FFF6FB] ">
                        <div className="">
                        <h2 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>23% off in all products</h2>
                        <h3 className=' relative font-Sans font-bold text-[18px] text-[#FB2E86] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[90px] after:bg-[#FB2E86]'>Shop Now</h3>
                        </div>
                        <div className="ml-[200px] ">
                        <img className='' src={mini1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="lg:w-[35%] w-full">
                <div className=" pt-[50px] pb-[61px] px-[50px] bg-[#EEEFFB] ">
                        <div className="">
                        <h2 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>23% off in all products</h2>
                        <h3 className=' relative font-Sans font-bold text-[18px] text-[#FB2E86] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[130px] after:bg-[#FB2E86]'>View Collection</h3>
                        </div>
                        <div className="ml-[200px] ">
                        <img className='' src={mini2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="lg:w-[27%] w-full ">
                    <div className="flex gap-3 items-center">
                    <div className="">
                        <img src={mini01} alt="" />

                    </div>
                    <div className="">
                        <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Executive Seat chair</h3>
                        <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>$32.00</h4>
                    </div>
                    </div>
                    <div className="flex gap-3 items-center my-[16px]">
                    <div className="">
                        <img src={mini01} alt="" />

                    </div>
                    <div className="">
                        <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Executive Seat chair</h3>
                        <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>$32.00</h4>
                    </div>
                    </div>
                    <div className="flex gap-3 items-center">
                    <div className="">
                        <img src={mini01} alt="" />

                    </div>
                    <div className="">
                        <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Executive Seat chair</h3>
                        <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>$32.00</h4>
                    </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default TrendingProducts