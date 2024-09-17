import React, { useContext, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import hekti from "../assets/Hekto.png"
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GiCrossedBones } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";
import { apiData } from './ContextApi';

import { useNavigate } from "react-router-dom";


const Navber = () => {
   
  let info = useContext(apiData)
   let navigate = useNavigate();
  
  let [searchInput,setSearchInput] = useState("")
  let [searchFilter,setSearchFilter] = useState([])
  


  
  let [show , setShow] = useState (()=>{

  })
  let handleInput = (e)=>{
    setSearchInput(e.target.value);
    if(e.target.value == ""){
      setSearchFilter([])
    }else{

      let searchone = info.filter((item)=>item.title.toLowerCase().includes(e.target.value))
      setSearchFilter(searchone);
    }
    console.log(searchFilter);
    

  }

  let handleSingleSearch = (id)=>{
    navigate(`/ProductsD/${id}`)
    setSearchFilter([])
    setSearchInput("")
  } 
  

  return (
    <section className='py-4 bg-[#f1f1f1] px-3 '>
      <Container>
        <div className=" lg:flex items-center">
          <div className="w-[20%]">
            <img src={hekti} alt="" />
          </div>
          <div className="lg:w-[40%] w-full flex  justify-between items-center ">
            <div className=" justify-between ">
              <ul className={`lg:flex justify-between items-center lg:gap-8  py-5 lg:py-0 text-center z-50 absolute lg:static duration-700 ease-in-out ${show == true ? " bg-[#FB2E86] w-[50%] left-[0px] top-0  " : "  w-[50%] left-[-300px] top-[0px] "}`}>

                <li className=' items-center font-Sans font-semibold text-[16px] text-[#0D0E43]   duration-300 ease-in-out hover:text-[#FB2E86]'><Link to="/">Home</Link>  </li>
                <li className=' items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86] mt-4 lg:mt-0'>Pages</li>
                <li   className=' items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86] mt-4 lg:mt-0'><Link to="/ProductsD">Products</Link></li>
                <li   className=' items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86] mt-4 lg:mt-0'>
                  <Link to="/Blog">Blog</Link>
                </li>
                <li  className=' items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86] mt-4 lg:mt-0' >
                  <Link to="/About">About </Link>
                </li>
                <li   className=' items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86] mt-4 lg:mt-0'><Link to="/Contact">Contact</Link></li>
              </ul>
            </div>
              <div className=" lg:hidden cursor-pointer mt-[-20px] " onClick={()=>setShow(!show)}>
                {show == true ? <GiCrossedBones/> : <FaBars/>}
              
              
              </div>
          </div>
          <div className="lg:w-[40%] w-full lg:text-end">
            <div className="relative items-center mt-5 lg:mt-0 ">
              
              <input value={searchInput} onChange={handleInput}  type="search"  placeholder='search...' className='w-[90%]  outline-none rounded-lg h-[40px] bg-[#D9D9D9] pl-2  '/>
              <div className=" absolute top-[50%] translate-y-[-50%] right-0 w-[40px] h-[40px] bg-[#FB2E86] rounded-r-lg">
                <IoSearchOutline className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-[#fff] text-[22px]'/>
              </div>
             
              {searchFilter.length > 0 &&
              <div className="absolute lg:h-[400px] h-[300px] overflow-y-scroll bg-[#D9D9D9] ml-12 mt-4">
                {searchFilter.map((item)=>(

                <div onClick={()=>handleSingleSearch(item.id)} className="   flex justify-between w-full px-10 items-center mt-5  ">
                <div className="">

                <img className=' h-28 w-28' src={item.thumbnail} alt="" /> 
                </div>
                <div className="">

                <h2 className='font-Sans font-semibold text-[22px] text-[#0D0E43]'>{item.title}</h2> 
                </div>
              </div>
                ))}
              </div>
              }
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Navber