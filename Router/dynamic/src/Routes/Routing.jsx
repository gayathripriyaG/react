import React from 'react'
import {Route,Routes} from "react-router-dom"
import { AllProducts } from '../Components/AllProducts'
import { Error } from '../Components/Error'
import { Home } from '../Components/Home'
import { ProductDetails } from '../Components/ProductDetails'

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/products" element = {<AllProducts/>} />
        <Route path = "/products/:id" element = {<ProductDetails/>}>
        <Route path = "*" element = {<Error/>}/>
        </Route>
        
        <Route path = "*" element = {<Error/>} />
      </Routes>
    </div>
  )
}
