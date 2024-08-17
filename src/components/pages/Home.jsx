import React from 'react'
import Banner from '../Banner'
import Featured from '../Featured'
import Leatest from '../Leatest'
import Shopex from '../Shopex'
import Trending from '../Trending'
import TrendingProducts from '../TrendingProducts'
import Discount from '../Discount'
import TopCategories from '../TopCategories'
import { LeatestBlog } from '../LeatestBlog'

export const Home = () => {
  return (
    <>
    <Banner/>
    <Featured/>
    <Leatest/>
    <Shopex/>
    <Trending/>
    <TrendingProducts/>
    <Discount/>
    <TopCategories/>
    <LeatestBlog/>
    </>
  )
}
