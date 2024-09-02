import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import ECommerceBar from '../components/ECommerceBar'
import pro01 from "../assets/pro01.png"
import pro02 from "../assets/pro02.png"
import pro03 from "../assets/pro03.png"
import pro001 from "../assets/pro001.png"
import men01 from "../assets/men01.png"
import men02 from "../assets/men02.png"
import men03 from "../assets/men03.png"
import men04 from "../assets/men04.png"
import chair01 from "../assets/get02.png"
import { FaStar,FaRegStar,FaStarHalfAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from "react-redux"
import { addtocart } from '../components/slice/ProductSlice'


const ProductDetails = () => {
   
  let [singleData, setSingleData] = useState([])

  let productId = useParams()

  let dispatch = useDispatch()
 
  
  
  let getData = ()=>{
    
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
      setSingleData(response.data);
      
    })
  }
  useEffect(()=>{
   getData()
  },[])
 
  
  let clientRating = Array.from({length:5},(elm , index)=>{

    let ratingNumber = index + 0.5
    return(
      singleData.rating >= index + 1 ? <FaStar className='text-[#FFD881]' /> :   singleData.rating > ratingNumber ? <FaStarHalfAlt  />
      : <FaRegStar/>
    )
  })
  
  let handleAddTocart= (item)=>{
    dispatch(addtocart({...item , qun:1}))
   
    
  }
  
  

  return (

   
    <section className='py-[100px] px-3 bg-[#F6F5FF]'>
        <Container>
        <div className="">
         <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Product Details</h3>
    </div>
         <div className=" flex">
            <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Home ,</h4>
              <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Pages ,</h3>
               <p className='font-Sans font-bold text-[16px] text-[#FB2E86]'>Product Details</p>
        </div>

        <div className="">
            {/* <ECommerceBar/> */}
        </div>
        <div className="lg:flex justify-around mt-[50px] bg-[#F6F4FD] py-[10px] px-3">
          {singleData?.images?.map((item)=>(

            <div className="lg:w-[45%] w-full">
              <div className="w-[90%]">
              <img className='w-full' src={item} alt="" />

              </div>
              
               
            </div>
          ))}
            
            <div className="lg:w-[50%] w-full">
                <div className="mt-[20px]">
                    <h2 className='font-Sans font-bold text-[36px] text-[#0D0E43]'>{singleData.title}</h2>
                    <div className="flex mt-[20px] gap-2  items-center  ">
                        {clientRating}
                        <h5 className='font-Sans font-semibold text-[18px] text-[#0D0E43]'>({singleData.stock})</h5>
                    </div>
                    <div className="flex mt-[20px] gap-2">
                            <h3  className='font-Sans font-bold text-[16px] text-[#0D0E43]'>${singleData.price}</h3>
                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>${singleData.discountPercentage}</h4>
                        </div>
                        <h3 className='font-Sans font-bold text-[18px] text-[#0D0E43] mt-[20px]'>Color</h3>
                        <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px]'>{singleData.description}</p>
                        <Link to="/addtocart" onClick={() => handleAddTocart(singleData)}>
                        <button className='py-[10px] px-[25px] relative bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] duration-300 ease-in-out hover:text-[#000] z-50 rounded-lg after:absolute after:contain-[""] after:top-0 after:left-0 after:h-full after:w-0 after:bg-[#19D16F] after:-z-50  after:rounded-lg after:duration-300 after:ease-in-out after:hover:w-full '>Add To cart</button>
                        </Link>
                        <h4 className='font-Sans font-bold text-[18px] text-[#0D0E43] mt-[20px]'>Categories : {singleData.category}</h4>
                        <h5 className='font-Sans font-bold text-[18px] text-[#0D0E43] mt-[20px]'>Tags</h5>
                </div>
            </div>
        </div>
        <div className="py-[100px] bg-[#F9F8FE]">
            <div className="w-[60%]">
                <ul className='lg:flex justify-between'>
                    <li className=' relative font-Sans font-bold text-[24px] text-[#0D0E43] mt-[50px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[130px] after:bg-[#0D0E43]'>Description</li>
                    <li className=' relative font-Sans font-bold text-[24px] text-[#0D0E43] mt-[50px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[170px] after:bg-[#0D0E43]'>Additional Info</li>
                    <li className=' relative font-Sans font-bold text-[24px] text-[#0D0E43] mt-[50px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[90px] after:bg-[#0D0E43]'>Reviews</li>
                    <li className=' relative font-Sans font-bold text-[24px] text-[#0D0E43] mt-[50px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[70px] after:bg-[#0D0E43]'>Video</li>
                </ul>
            </div>
            <div className="mt-[70px]">
                <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43] '>Varius tempor.</h3>
                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] '>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                
            </div>
            <div className="mt-[70px]">
            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43] '>More details</h3>
            <div className="flex items-center mt-[15px]">
               <FaArrowRight/>
               <p  className='font-Sans font-semibold text-[16px] text-[#0D0E43]  '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
            <div className="flex items-center mt-[10px]">
               <FaArrowRight/>
               <p  className='font-Sans font-semibold text-[16px] text-[#0D0E43]  '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
            <div className="flex items-center mt-[10px]">
               <FaArrowRight/>
               <p  className='font-Sans font-semibold text-[16px] text-[#0D0E43]  '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
            <div className="flex items-center mt-[10px]">
               <FaArrowRight/>
               <p  className='font-Sans font-semibold text-[16px] text-[#0D0E43]  '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
            </div>
        </div>
        <div className="px-3">
            <h2 className='font-Sans font-bold text-[36px] text-[#0D0E43] mt-[20px] '>Related Products</h2>
            <div className="lg:flex justify-between mt-[40px]">
            <div className="lg:w-[24%] w-full">
              <img className='w-full' src={men01} alt="" />
              <div className="flex justify-between px-2">
                <div className="">
                    <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[20px] '>Mens Fashion Wear</h4>
                </div>
                <div className="flex mt-[20px] gap-1  items-center text-[#FFC416] ">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                </div>
              </div>
              <h5 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[10px] px-2 '>$43.00</h5>
            </div>
            <div className="lg:w-[24%] w-full">
              <img className='w-full' src={men02} alt="" />
              <div className="flex justify-between px-2">
                <div className="">
                    <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[20px] '>Women’s Fashion</h4>
                </div>
                <div className="flex mt-[20px] gap-1  items-center text-[#FFC416] ">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                </div>
              </div>
              <h5 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[10px] px-2 '>$43.00</h5>
            </div>
            <div className="lg:w-[24%] w-full">
              <img className='w-full' src={men03} alt="" />
              <div className="flex justify-between px-2">
                <div className="">
                    <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[20px] px-2'>Wolx Dummy Fashion</h4>
                </div>
                <div className="flex mt-[20px] gap-1  items-center text-[#FFC416] ">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                </div>
              </div>
              <h5 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[10px] '>$43.00</h5>
            </div>
            <div className="lg:w-[24%] w-full">
              <img className='w-full' src={men04} alt="" />
              <div className="flex justify-between px-2">
                <div className="">
                    <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[20px] '>Top Wall Digital Clock</h4>
                </div>
                <div className="flex mt-[20px] gap-1  items-center text-[#FFC416] ">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                </div>
              </div>
              <h5 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[10px] px-2 '>$43.00</h5>
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

export default ProductDetails