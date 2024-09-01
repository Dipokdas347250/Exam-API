import React, { useContext, useState } from 'react'
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
import { apiData } from '../components/ContextApi'
import Post from '../components/pagination/Post'
import PaginationArea from '../components/pagination/PaginationArea'

export const ProductsD = () => {

    let data = useContext(apiData)
    

    let [currentpage, setCurrentpage] = useState(1)
    let [perpage,setPerpage] = useState(6)

    let lastpage = currentpage * perpage
    let firstpage = lastpage - perpage

     

    let allData = data.slice(firstpage , lastpage)
    
    let pageNumber = []


    for( let i = 0; i < Math.ceil(data.length / perpage ); i++){
        pageNumber.push(i)

    }
    
   let paginte = (pageNumber)=>{
    setCurrentpage(pageNumber);
   
   }
    


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
                       <Post allData={allData}/>
                    <div className="text-end">
                        <PaginationArea pageNumber={pageNumber} paginte={paginte}/>
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
