import React from 'react'
import Container from '../components/Container'
import about from "../assets/about.png"
import offer01 from "../assets/offer01.png"
import offer02 from "../assets/offer02.png"
import offer03 from "../assets/offer03.png"
import offer04 from "../assets/offer04.png"
import client from "../assets/client.png"

const About = () => {
  return (
    <section className='py-[100px] px-3 bg-[#F6F5FF]'>
        <Container>
        <div className="">
                    <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>About Us</h3>
                </div>
                <div className=" flex">
                    <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Home ,</h4>
                    <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Pages ,</h3>
                    <p className='font-Sans font-bold text-[16px] text-[#FB2E86]'>About Us</p>
                </div>
                <div className="lg:flex justify-between mt-[100px]">
                    <div className="lg:w-[50%] w-full">
                        <img src={about} alt="" />
                    </div>
                    <div className="lg:w-[50%] w-full">
                        <div className="mt-[50px]">
                        <h3 className='font-Sans font-bold text-[36px] text-[#0D0E43]'>Know About Our Ecomerce
                        Business, History</h3>
                        <p className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        </div>

                        <div className="">
                        <button className='py-[10px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Contact us</button>
                        </div>
                    </div>
                </div>
                <div className="mt-[100px]">
                <div className=" text-center  ">
                <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Our Features</h3>
            </div>
            <div  className=" lg:flex justify-between py-[50px] bg-[#F6F7FB] px-4">
            <div className="lg:w-[24%] w-full pt-[20px] pb-2 bg-[#fff] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={offer01} alt="" />
                   <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>Free Delivery</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h4>
                        
                        
                    </div>
                    </div>
                </div>
            <div className="lg:w-[24%] w-full  pt-[20px] pb-2 bg-[#fff] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={offer02} alt="" />
                   <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>100% Cash Back</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</h4>
                        
                        
                    </div>
                    </div>
                </div>
            <div className="lg:w-[24%] w-full  pt-[20px] pb-2 bg-[#fff] ">
                    <div className="">
                   <img className='ml-[50%] translate-x-[-50%]' src={offer03} alt="" />
                   <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>Quality Product</h3>
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
                </div>

                <div className=" text-center">
                    <div className="mt-[40px]">
                        <h3 className='  font-Sans font-bold text-[36px] text-[#0D0E43] '>Our Client Say!</h3>
                        <img className='ml-[50%] translate-x-[-50%] mt-[20px]' src={client} alt="" />
                        <h4 className='  font-Sans font-bold text-[16px] text-[#0D0E43] mt-[20px] '>Selina Gomez</h4>
                        <h4 className='  font-Sans font-semibold text-[14px] text-[#0D0E43] '>Ceo At Webecy Digital</h4>
                        <p className='  font-Sans font-semibold text-[14px] text-[#0D0E43] mt-[20px] lg:w-[40%] w-full lh:ml-[50%] translate-x-[-50%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                    </div>
                </div>
        </Container>
    </section>
  )
}

export default About