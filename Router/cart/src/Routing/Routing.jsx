import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { Aboutus } from '../components/Aboutus';
import { Contactus } from '../components/Contactus';
import { Faq } from '../components/Faq';
import { Products } from '../components/Products';

export const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path = "/" element={<Products/>}/>
            <Route path = "/aboutus" element={<Aboutus/>}/>
            <Route path = "/faq" element = {<Faq/>}/>
            <Route path = "contactus" element = {<Contactus/>}/>
        </Routes>
    </div>
  )
}
