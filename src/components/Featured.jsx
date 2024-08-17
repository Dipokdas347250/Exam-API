import React from 'react'
import Container from './Container'
import Flex from './Flex'
import chair01 from "../assets/chair01.png"
import chair02 from "../assets/chair02.png"
import chair03 from "../assets/chair03.png"
import chair04 from "../assets/chair04.png"

const Featured = () => {
  return (
    <section className='py-[100px]'>
        <Container>
            <div className=" text-center ">
                <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Featured Products</h3>
            </div>
            <Flex className=" justify-between pt-[50px] px-4">
                <div className="w-[24%] pt-[20px] pb-2 bg-[#F6F7FB] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={chair01} alt="" />
                   <div className=" relative text-center  w-[100%] py-[10px] bg-[#fff] mt-[50px] before:absolute  before:contain-[''] before:bottom-0 before:right-0 before:w-[100%] before:h-[0] before:bg-[#2F1AC4] before:duration-300 before:ease-in-out before:hover:h-[100%] before:hover:text-[#fff] ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#FB2E86] after:absolute after:contain-[""] after:top-[30px] after:left-[50%] after:translate-x-[-50%] after:h-[4px] after:w-[120px]  after:bg-[#05E6B7]'>Cantilever chair</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#000] mt-[10px] '>Code - Y523201</h4>
                        <h5 className=' relative font-Sans font-bold text-[16px] text-[#000] '>$42.00</h5>
                        
                    </div>
                    </div>
                </div>
                <div className="w-[24%] pt-[45px] pb-2 bg-[#F6F7FB] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={chair02} alt="" />
                   <div className=" relative text-center  w-[100%] py-[10px] bg-[#fff] mt-[50px] before:absolute  before:contain-[''] before:bottom-0 before:right-0 before:w-[100%] before:h-[0] before:bg-[#2F1AC4] before:duration-300 before:ease-in-out before:hover:h-[100%] before:hover:text-[#fff] ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#FB2E86] after:absolute after:contain-[""] after:top-[30px] after:left-[50%] after:translate-x-[-50%] after:h-[4px] after:w-[120px]  after:bg-[#05E6B7]'>Cantilever chair</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#000] mt-[10px] '>Code - Y523201</h4>
                        <h5 className=' relative font-Sans font-bold text-[16px] text-[#000] '>$42.00</h5>
                        
                    </div>
                    </div>
                </div>
                <div className="w-[24%] pt-[20px] pb-2 bg-[#F6F7FB] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={chair03} alt="" />
                   <div className=" relative text-center  w-[100%] py-[10px] bg-[#fff] mt-[50px] before:absolute  before:contain-[''] before:bottom-0 before:right-0 before:w-[100%] before:h-[0] before:bg-[#2F1AC4] before:duration-300 before:ease-in-out before:hover:h-[100%] before:hover:text-[#fff] ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#FB2E86] after:absolute after:contain-[""] after:top-[30px] after:left-[50%] after:translate-x-[-50%] after:h-[4px] after:w-[120px]  after:bg-[#05E6B7]'>Cantilever chair</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#000] mt-[10px] '>Code - Y523201</h4>
                        <h5 className=' relative font-Sans font-bold text-[16px] text-[#000] '>$42.00</h5>
                        
                    </div>
                    </div>
                </div>
                <div className="w-[24%] pt-[45px] pb-2 bg-[#F6F7FB] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={chair04} alt="" />
                   <div className=" relative text-center  w-[100%] py-[10px] bg-[#fff] mt-[50px] before:absolute  before:contain-[''] before:bottom-0 before:right-0 before:w-[100%] before:h-[0] before:bg-[#2F1AC4] before:duration-300 before:ease-in-out before:hover:h-[100%] before:hover:text-[#fff] ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#FB2E86] after:absolute after:contain-[""] after:top-[30px] after:left-[50%] after:translate-x-[-50%] after:h-[4px] after:w-[120px]  after:bg-[#05E6B7]'>Cantilever chair</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#000] mt-[10px] '>Code - Y523201</h4>
                        <h5 className=' relative font-Sans font-bold text-[16px] text-[#000] '>$42.00</h5>
                        
                    </div>
                    </div>
                </div>
                
            </Flex>
        </Container>
    </section>
  )
}

export default Featured