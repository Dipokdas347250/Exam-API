import React from 'react'
import Container from './Container'
import Flex from './Flex'
import hekti from "../assets/Hekto.png"
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Navber = () => {
  return (
    <section className='py-4 bg-[#f1f1f1] '>
      <Container>
        <Flex className=" items-center">
          <div className="w-[20%]">
            <img src={hekti} alt="" />
          </div>
          <div className="w-[40%] ">
            <div className="">
              <ul className='flex justify-between items-center text-center'>
                <li className='flex items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]'><Link to="/">Home</Link> <IoIosArrowDown/> </li>
                <li className=' items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]'><Link to="/shop">Pages</Link></li>
                <li   className=' items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]'><Link to="/ProductsD">Products</Link></li>
                <li   className=' items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]'>Blog</li>
                <li  className=' items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]' >
                  <Link to="/About">About us</Link>
                </li>
                <li   className=' items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86]'>Contact</li>
              </ul>
            </div>
          </div>
          <div className="w-[40%] text-end">
            <div className=" relative items-center">
              <input  type="search"  placeholder='search...' className='w-[70%]  outline-none rounded-lg h-[40px] bg-[#D9D9D9] pl-2  '/>
              <div className=" absolute top-[50%] translate-y-[-50%] right-0 w-[40px] h-[40px] bg-[#FB2E86] rounded-r-lg">
                <IoSearchOutline className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-[#fff] text-[22px]'/>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Navber