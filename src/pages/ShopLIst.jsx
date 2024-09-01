import React from 'react'
import Container from '../components/Container'
import ECommerceBar from '../components/ECommerceBar'
import shop1 from "../assets/shop1.png"
import shop2 from "../assets/shop2.png"
import shop3 from "../assets/shop3.png"
import shop4 from "../assets/shop4.png"
import shop5 from "../assets/shop5.png"
import shop6 from "../assets/shop6.png"
import shop7 from "../assets/shop7.png"
import chair01 from "../assets/get02.png"
import { FaStar,FaRegHeart,  } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const ShopLIst = () => {
  return (
   <section className='py-[100px] px-3 bg-[#F6F5FF]'>
    <Container>
    <div className="">
         <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Shop List</h3>
    </div>
         <div className=" flex">
            <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Home ,</h4>
              <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Pages ,</h3>
               <p className='font-Sans font-bold text-[16px] text-[#FB2E86]'>Shop List</p>
        </div>
        <div className="">
            <ECommerceBar/>
        </div>

        <div className="lg:flex justify-between mt-[50px] px-3">
            <div className="lg:w-[40%] w-full">
                <div className="">
                    <img className='w-full' src={shop1} alt="" />
                </div>
            </div>
            <div className="lg:w-[55%] w-full">
                <div className="lg:mt-[80px]">
                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                    <div className="flex">
                        <div className="flex mt-[20px] gap-2">
                            <h3  className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                        </div>
                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <div className="flex mt-[20px] gap-6">
                        <FiShoppingCart/>
                        <FaRegHeart/>
                        <IoSearch/>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:flex justify-between mt-[50px] px-3">
            <div className="lg:w-[40%] w-full">
                <div className="">
                    <img className='w-full' src={shop2} alt="" />
                </div>
            </div>
            <div className="lg:w-[55%] w-full">
                <div className="lg:mt-[80px]">
                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                    <div className="flex">
                        <div className="flex mt-[20px] gap-2">
                            <h3  className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                        </div>
                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <div className="flex mt-[20px] gap-6">
                        <FiShoppingCart/>
                        <FaRegHeart/>
                        <IoSearch/>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:flex justify-between mt-[50px] px-3">
            <div className="lg:w-[40%] w-full">
                <div className="">
                    <img className='w-full' src={shop3} alt="" />
                </div>
            </div>
            <div className="lg:w-[55%] w-full">
                <div className="lg:mt-[80px]">
                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                    <div className="flex">
                        <div className="flex mt-[20px] gap-2">
                            <h3  className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                        </div>
                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <div className="flex mt-[20px] gap-6">
                        <FiShoppingCart/>
                        <FaRegHeart/>
                        <IoSearch/>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:flex justify-between mt-[50px] px-3">
            <div className="lg:w-[40%] w-full">
                <div className="">
                    <img className='w-full' src={shop4} alt="" />
                </div>
            </div>
            <div className="lg:w-[55%] w-full">
                <div className="lg:mt-[80px]">
                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                    <div className="flex">
                        <div className="flex mt-[20px] gap-2">
                            <h3  className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                        </div>
                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <div className="flex mt-[20px] gap-6">
                        <FiShoppingCart/>
                        <FaRegHeart/>
                        <IoSearch/>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:flex justify-between mt-[50px] px-3">
            <div className="lg:w-[40%] w-full">
                <div className="">
                    <img className='w-full' src={shop5} alt="" />
                </div>
            </div>
            <div className="lg:w-[55%] w-full">
                <div className="lg:mt-[80px]">
                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                    <div className="flex">
                        <div className="flex mt-[20px] gap-2">
                            <h3  className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                        </div>
                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <div className="flex mt-[20px] gap-6">
                        <FiShoppingCart/>
                        <FaRegHeart/>
                        <IoSearch/>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:flex justify-between mt-[50px] px-3">
            <div className="lg:w-[40%] w-full">
                <div className="">
                    <img className='w-full' src={shop6} alt="" />
                </div>
            </div>
            <div className="lg:w-[55%] w-full">
                <div className="lg:mt-[80px]">
                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                    <div className="flex">
                        <div className="flex mt-[20px] gap-2">
                            <h3  className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                        </div>
                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <div className="flex mt-[20px] gap-6">
                        <FiShoppingCart/>
                        <FaRegHeart/>
                        <IoSearch/>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:flex justify-between mt-[50px] px-3">
            <div className="lg:w-[40%] w-full">
                <div className="">
                    <img className='w-full' src={shop7} alt="" />
                </div>
            </div>
            <div className="lg:w-[55%] w-full">
                <div className="lg:mt-[80px]">
                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                    <div className="flex">
                        <div className="flex mt-[20px] gap-2">
                            <h3  className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                        </div>
                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <div className="flex mt-[20px] gap-6">
                        <FiShoppingCart/>
                        <FaRegHeart/>
                        <IoSearch/>
                    </div>
                </div>
            </div>
        </div>
       

        <div className="pt-[100px] px-3">
                <img className='ml-[50%] translate-x-[-50%] ' src={chair01} alt="" />
                </div>
    </Container>
   </section>
  )
}

export default ShopLIst