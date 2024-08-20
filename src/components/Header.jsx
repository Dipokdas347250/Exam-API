import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { MdOutgoingMail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidLogInCircle } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";





const Header = () => {
  return (
    <section className=' py-2 bg-[#7E33E0] px-3  '>
        <Container>
           <div className="lg:flex">
           <div className="lg:w-[70%] lg:flex">
                    <div className="lg:w-[35%] w-full flex items-center   gap-1 text-[#F1F1F1]">
                        <MdOutgoingMail/>
                    <h2 className=' font-Sans font-semibold text-[16px] '>mhhasanul@gmail.com</h2>

                    </div>
                    <div className="w-[65%] flex items-center gap-1 text-[#F1F1F1]">
                        <MdAddIcCall/>
                    <h2 className='  font-semibold text-[16px] '>(12345)67890</h2>

                    </div>
                </div>
                <div className="w-[30%] flex justify-between">
                    <div className=" flex font-Sans font-semibold text-[16px] items-center text-[#F1F1F1]">
                        <h3>English</h3>
                        <IoIosArrowDown/>

                    </div>
                    <div className="  font-Sans font-semibold text-[16px] items-center text-[#F1F1F1]">
                    <select className='bg-[#7E33E0] border-none'  >
                      <option value="">USD</option>
                      <option value="">BDT</option>
                      
                    </select>
                        

                    </div>
                    <div className=" flex font-Sans font-semibold text-[16px] items-center text-[#F1F1F1]">
                        <h3>Login</h3>
                        <BiSolidLogInCircle/>

                    </div>
                    <div className=" flex font-Sans font-semibold text-[16px] items-center text-[#F1F1F1]">
                        <h3>Wishlist</h3>
                        <FaRegHeart/>

                    </div>
                    <div className=" flex font-Sans font-semibold text-[16px] items-center text-[#F1F1F1]">
                        
                        <FaShoppingCart/>

                    </div>
                </div>
           </div>
        </Container>
    </section>
  )
}

export default Header