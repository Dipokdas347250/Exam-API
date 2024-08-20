import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import { Home } from "./pages/Home"
import Shop from "./pages/Shop"
import ShopLIst from "./pages/ShopLIst"
import { ProductsD } from "./pages/ProductsD"
import ProductDetails from "./pages/ProductDetails"
import { Addtocart } from "./pages/Addtocart"
import About from "./pages/About"
import Yourorder from "./pages/Yourorder"
import Proceed from "./pages/Proceed"
import Blog from "./pages/Blog"



let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/Shop" element={<Shop/>}></Route>
    <Route path="/Shoplist" element={<ShopLIst/>}></Route>
    <Route path="/ProductsD" element={<ProductsD/>}></Route>
    <Route path="/ProductDetails" element={<ProductDetails/>}></Route>
    <Route path="/Addtocart" element={<Addtocart/>}></Route>
    <Route path="/Proceed" element={<Proceed/>}></Route>
    <Route path="/Yourorder" element={<Yourorder/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Blog" element={<Blog/>}></Route>


  </Route>
))


function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
