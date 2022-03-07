import React,{useState,useEffect} from 'react'
import { Banner } from './Banner'

export const Products = () => {
  
  const URL = "http://localhost:3500/products"
const [items,setItems] = useState([])

useEffect(() => {
    const fetchItems = async() => {
      try{
          const response = await fetch(URL)
          if(!response.ok) throw Error ('Data not found')
          const listItems  = await response.json()
          setItems(listItems)
      }
      catch(err){
          console.log(err)
      }
    }
    fetchItems()
},[])

  return (
    <div>
      <Banner/>
      <div>
        {items.map((item) => (
          <div key = {item.id}>
            <img src = {item.image} alt="imageproduct"/>
            {item.name}
            {item.price}
            </div>
        ))}
      </div>
    </div>
  )
}
