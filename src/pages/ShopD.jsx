import React from 'react'

export const ShopD = ({item}) => {
  return (
    <>
     <div className="mt-[50px] lg:flex   justify-between px-3">
                        <div className="lg:w-[24%] w-full sm:w-[50%]">
                            <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                                <img src={item.thumbnail} alt="" />
                            </div>
                            <div className=" text-center mt-[30px]">
                                <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vel elit euismod</h3>

                                <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                            </div>
                        </div>


                    </div>
    </>
  )
}
