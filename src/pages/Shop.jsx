import React from 'react'
import Container from '../components/Container'
import ECommerceBar from '../components/ECommerceBar'
import shop01 from "../assets/shop01.png"
import shop02 from "../assets/shop02.png"
import chair01 from "../assets/get02.png"
import { Link } from 'react-router-dom'


const Shop = () => {
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

                <Link to="/shoplist">
                <div className="mt-[50px] lg:flex   justify-between px-3">
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop01} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vel elit euismod</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop02} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[18px] text-[#0D0E43]'>Ultricies condimentum imperdiet</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop01} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vitae suspendisse sed</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop02} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Sed at fermentum</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>

                </div>
                <div className="mt-[50px] lg:flex justify-between px-3">
                <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop02} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vel elit euismod</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop01} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[18px] text-[#0D0E43]'>Ultricies condimentum imperdiet</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop02} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vitae suspendisse sed</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop01} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Sed at fermentum</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>

                </div>
                <div className="mt-[50px] lg:flex justify-between px-3">
                <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop01} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vel elit euismod</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop02} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[18px] text-[#0D0E43]'>Ultricies condimentum imperdiet</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop01} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vitae suspendisse sed</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop02} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Sed at fermentum</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>

                </div>
                </Link>


                <div className="pt-[100px] px-3">
                <img className='ml-[50%] translate-x-[-50%] ' src={chair01} alt="" />
                </div>

            </Container>
        </section>
    )
}

export default Shop