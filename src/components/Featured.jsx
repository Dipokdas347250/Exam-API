import React, { useContext } from 'react'
import Container from './Container'
import chair01 from "../assets/chair01.png"
import chair02 from "../assets/chair02.png"
import chair03 from "../assets/chair03.png"
import chair04 from "../assets/chair04.png"
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa";

import Slider from "react-slick";
import { apiData } from './ContextApi'
import FeaturedItem from './FeaturedItem'
import { Link } from 'react-router-dom'

function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div className=" absolute h-[40px] w-[40px] bg-[#05E6B7] rounded-full  text-[#fff] top-[50%] translate-y-[-50%] right-[10px] cursor-pointer z-50 duration-300 ease-in-out  hover:bg-black" onClick={onClick}>
      <FaArrowRight className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
     </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className=" absolute h-[40px] w-[40px] bg-[#05E6B7] rounded-full  text-[#fff] top-[50%] translate-y-[-50%] left-[10px] cursor-pointer z-50 duration-300 ease-in-out  hover:bg-black" onClick={onClick}>
       <FaArrowLeft className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
      </div>
     
    );
  }
  

const Featured = () => {
     
     let data = useContext(apiData)
     
     
     
    
   


    const settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
   
        appendDots: dots => (
          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
              position:'absolute',
              left:'50%',
              bottom:'-50px',
              transform:'translateX(-50%)',
             
              
            }}
          >
            <ul style={{ margin: "0px" , display:'flex', }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "30px",
              color: "blue",
              padding: "0  20px",
              borderBottom: "5px #F6F7FB solid"
            }}
          >
            
          </div>
        )
      };
  return (
    <section className='py-[100px] '>
        <Container>
            <div className=" text-center ">
                <h3 className='font-Sans font-bold lg:text-[42px] text-[32px] text-[#0D0E43]'>Featured Products</h3>
            </div>
            
            <Slider className='' {...settings} >
              {data.map((item)=>(
               <Link to="/ProductsD">
                <FeaturedItem item={item} />
               </Link>
              ))}
               
              
                </Slider>
            
            
             
             
            
        </Container>
    </section>
  )
}

export default Featured