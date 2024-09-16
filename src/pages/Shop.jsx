import React, { useContext } from 'react'
import Container from '../components/Container'
import ECommerceBar from '../components/ECommerceBar'
import shop01 from "../assets/shop01.png"
import shop02 from "../assets/shop02.png"
import chair01 from "../assets/get02.png"
import { Link } from 'react-router-dom'
import { apiData } from '../components/ContextApi'
import { ShopD } from './ShopD'


const Shop = () => {

    let data = useContext(apiData)

    return (
        <section className='py-[100px] px-3 bg-[#F6F5FF]'>
            <Container>
                <div className="">
                    <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Shop Grid Default</h3>
                </div>
                <div className=" flex">
                    <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Home ,</h4>
                    <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Pages ,</h3>
                    <p className='font-Sans font-bold text-[16px] text-[#FB2E86]'>Shop Grid Default</p>
                </div>
                <div className="">
                    <ECommerceBar />
                </div>

                
                {data.map((item) => (
                        <Link to="/shoplist">

                            <ShopD item={item} />

                        </Link>
                ))}
               


                <div className="pt-[100px] px-3">
                    <img className='ml-[50%] translate-x-[-50%] ' src={chair01} alt="" />
                </div>

            </Container>
        </section>
    )
}

export default Shop