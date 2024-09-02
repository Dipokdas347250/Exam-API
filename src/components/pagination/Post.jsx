import React, { useContext } from 'react'
import { FaStar, FaRegHeart, } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { apiData } from '../ContextApi';

const Post = ({allData}) => {

   
    return (
        <>
            {allData.map((item) => (
                <Link to={`/ProductsD/${item.id}`}>

                    <div className="lg:flex justify-between mt-[50px] px-3">
                        <div className="lg:w-[40%] w-full">
                            <div className="">
                                <img className='w-[80%]' src={item.thumbnail} alt="" />
                            </div>
                        </div>
                        <div className="lg:w-[55%] w-full">
                            <div className="">
                                <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>{item.title}</h2>
                                <div className="flex">
                                    <div className="flex mt-[20px] gap-2">
                                        <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>${item.price}</h3>
                                        <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>${item.discountPercentage}</h4>
                                    </div>
                                    <div className="flex mt-[20px] gap-2 ml-[20px]">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>{item.description}</p>
                                <div className="flex mt-[20px] gap-6">
                                    <FiShoppingCart />
                                    <FaRegHeart />
                                    <IoSearch />
                                </div>

                            </div>
                        </div>
                    </div>


                </Link>
            ))}
        </>
    )
}

export default Post