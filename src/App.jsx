import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import { Home } from "./components/pages/Home"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>


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
