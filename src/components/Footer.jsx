import React from 'react'
import Container from './Container'
import Flex from './Flex'
import hekto from "../assets/Hekto.png"
import { FaFacebookSquare , FaTwitter,FaLinkedin} from "react-icons/fa";



const Footer = () => {
  return (
    <section className='pt-[50px] bg-[#EEEFFB]'>
      <Container>
        <div className=" lg:flex justify-between px-3 ">
          <div className="lg:w-[38%] w-full  ">
             <img className='  ' src={hekto} alt="" />
             <div className="flex  ">
              <input className='lg:w-[60%] w-[65%]  outline-none rounded-lg h-[40px] bg-[#D9D9D9] mt-[50px] pl-2' type="text" placeholder='Enter Email Address' />
              <button className='py-[8px] px-[20px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Sign Up</button>
             </div>
             <h5 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[40px]'>Contact Info</h5>
             <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
          <div className="lg:w-[20%] w-full">
            <div className="">
              <h2 className='font-Sans font-bold text-[22px] text-[#000] mt-[20px] lg:mt-0  '>Catagories</h2>
              <ul className='lg:mt-[20px] gap-y-8'>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43]  '>Laptops & Computers</li>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>Cameras & Photography</li>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>Smart Phones & Tablets</li>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>Video Games & Consoles</li>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>Waterproof Headphones</li>
               
              </ul>
            </div>
          </div>
          <div className="lg:w-[20%] w-full">
          <div className="">
              <h2 className='font-Sans font-bold text-[22px] text-[#000] mt-[20px] lg:mt-0 '>Customer Care</h2>
              <ul className='lg:mt-[20px] gap-y-8'>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43]  '>My Account</li>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>Discount</li>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>Returns</li>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>Orders History</li>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>Order Tracking</li>
               
              </ul>
            </div>
          </div>
          <div className="lg:w-[20%] w-full">
          <div className="">
              <h2 className='font-Sans font-bold text-[22px] text-[#000] mt-[20px] lg:mt-0  '>Pages</h2>
              <ul className='lg:mt-[20px] gap-y-8'>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43]  '>Blog</li>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>Browse the Shop</li>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>Category</li>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>Orders Pre-Built Pages</li>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>Visual Composer Elements</li>
                <li className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>WooCommerce Pages</li>
               
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="py-[10px] bg-[#E7E4F8] flex justify-around">
        <div className="w-[70%]">
          <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43] lg:ml-[100px] ml-[10px] '>©Webecy - All Rights Reserved</h4>
        </div>
        <div className="w-[30%]">
          <div className="flex  items-center gap-4 text-[#0D0E43]">
            <FaFacebookSquare/>
            <FaLinkedin/>
            <FaTwitter/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer