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
import { FaStar, FaRegHeart, } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom'

export const ProductsD = () => {
    return (
        <section className='py-[100px] px-3 bg-[#F6F5FF]'>
            <Container>
                <div className="">
                    <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Shop Left Sidebar</h3>
                </div>
                <div className=" flex">
                    <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Home ,</h4>
                    <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Pages ,</h3>
                    <p className='font-Sans font-bold text-[16px] text-[#FB2E86]'>Shop Left Sidebar</p>
                </div>
                <div className="">
                    <ECommerceBar />
                </div>
                <div className="lg:flex justify-between px-3">
                    <div className="lg:w-[23%] w-full mt-[50px]">
                        <div className="">
                            <h2 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[150px] after:bg-[#0D0E43]'>Product Brand</h2>
                        </div>
                        <div className="mt-[30px]">
                            <div className="flex  gap-3  ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>Coaster Furniture</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>Fusion Dot High Fashion</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>Unique Furnitture Restor</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>Dream Furnitture Flipping</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>Young Repurposed</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>Green DIY furniture</p>
                            </div>
                        </div>
                        <div className="mt-[70px]">
                            <h2 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[150px] after:bg-[#0D0E43]'>Discount Offer</h2>
                        </div>
                        <div className="mt-[30px]">
                            <div className="flex  gap-3  ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>20% Cashback</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>5% Cashback Offer</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>25% Discount Offer</p>
                            </div>

                        </div>
                        <div className="mt-[70px]">
                            <h2 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[130px] after:bg-[#0D0E43]'>Rating Item</h2>
                        </div>
                        <div className="mt-[30px]">
                            <div className="flex  gap-3  ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>20% Cashback</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>5% Cashback Offer</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>25% Discount Offer</p>
                            </div>

                        </div>
                        <div className="mt-[70px]">
                            <h2 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[150px] after:bg-[#0D0E43]'>Product Brand</h2>
                        </div>
                        <div className="mt-[30px]">
                            <div className="flex  gap-3  ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>Prestashop</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>Magento</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>Bigcommerce</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>osCommerce</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>3dcart</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>Bags Accessories</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="radio" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>Watches</p>
                            </div>
                        </div>
                        <div className="mt-[70px]">
                            <h2 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[120px] after:bg-[#0D0E43]'>Price Filter</h2>
                        </div>
                    </div>
                    <div className=" lg:w-[73%] w-full">
                        <Link to="/productDetails">
                        
                        <div className="lg:flex justify-between mt-[50px] px-3">
                            <div className="lg:w-[40%] w-full">
                                <div className="">
                                    <img className='w-full' src={shop1} alt="" />
                                </div>
                            </div>
                            <div className="lg:w-[55%] w-full">
                                <div className="">
                                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                                    <div className="flex">
                                        <div className="flex mt-[20px] gap-2">
                                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                                        </div>
                                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className="flex mt-[20px] gap-6">
                                        <FiShoppingCart />
                                        <FaRegHeart />
                                        <IoSearch />
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
                                <div className="">
                                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                                    <div className="flex">
                                        <div className="flex mt-[20px] gap-2">
                                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                                        </div>
                                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className="flex mt-[20px] gap-6">
                                        <FiShoppingCart />
                                        <FaRegHeart />
                                        <IoSearch />
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
                                <div className="">
                                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                                    <div className="flex">
                                        <div className="flex mt-[20px] gap-2">
                                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                                        </div>
                                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className="flex mt-[20px] gap-6">
                                        <FiShoppingCart />
                                        <FaRegHeart />
                                        <IoSearch />
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
                                <div className="">
                                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                                    <div className="flex">
                                        <div className="flex mt-[20px] gap-2">
                                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                                        </div>
                                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className="flex mt-[20px] gap-6">
                                        <FiShoppingCart />
                                        <FaRegHeart />
                                        <IoSearch />
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
                                <div className="">
                                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                                    <div className="flex">
                                        <div className="flex mt-[20px] gap-2">
                                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                                        </div>
                                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className="flex mt-[20px] gap-6">
                                        <FiShoppingCart />
                                        <FaRegHeart />
                                        <IoSearch />
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
                                <div className="">
                                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                                    <div className="flex">
                                        <div className="flex mt-[20px] gap-2">
                                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                                        </div>
                                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className="flex mt-[20px] gap-6">
                                        <FiShoppingCart />
                                        <FaRegHeart />
                                        <IoSearch />
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
                                <div className="">
                                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                                    <div className="flex">
                                        <div className="flex mt-[20px] gap-2">
                                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                                        </div>
                                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className="flex mt-[20px] gap-6">
                                        <FiShoppingCart />
                                        <FaRegHeart />
                                        <IoSearch />
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        </Link>
                        </div>
                    
                   
                </div>

                <div className="mt-[100px]">
                        <div className="lg:flex justify-between">
                            <div className="w-[15%]"></div>
                            <div className="lg:w-[70%] w-full">
                                <img src={chair01} alt="" />
                            </div>
                            <div className="w-[15%]"></div>

                        </div>
                    </div>
            </Container>
        </section>
    )
}
