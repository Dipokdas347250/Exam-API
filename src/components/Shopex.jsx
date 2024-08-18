import React from 'react'
import Container from './Container'
import Flex from './Flex'
import offer01 from "../assets/offer01.png"
import offer02 from "../assets/offer02.png"
import offer03 from "../assets/offer03.png"
import offer04 from "../assets/offer04.png"

const Shopex = () => {
  return (
    <section className='py-[100px]'>
        <Container>
        <div className=" text-center ">
                <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>What Shopex Offer!</h3>
            </div>
            <div  className=" lg:flex justify-between py-[50px] bg-[#F6F7FB] px-4">
            <div className="lg:w-[24%] w-full pt-[20px] pb-2 bg-[#fff] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={offer01} alt="" />
                   <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>24/7 Support</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h4>
                        
                        
                    </div>
                    </div>
                </div>
            <div className="lg:w-[24%] w-full  pt-[20px] pb-2 bg-[#fff] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={offer02} alt="" />
                   <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>24/7 Support</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h4>
                        
                        
                    </div>
                    </div>
                </div>
            <div className="lg:w-[24%] w-full  pt-[20px] pb-2 bg-[#fff] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={offer03} alt="" />
                   <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>24/7 Support</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h4>
                        
                        
                    </div>
                    </div>
                </div>
            <div className="lg:w-[24%] w-full  pt-[20px] pb-2 bg-[#fff] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={offer04} alt="" />
                   <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>24/7 Support</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h4>
                        
                        
                    </div>
                    </div>
                </div>

            </div>
        </Container>
    </section>
  )
}

export default Shopex