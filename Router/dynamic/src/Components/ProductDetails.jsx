import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

export const ProductDetails = () => {
    const {id} = useParams()
    const API_URL = `http://localhost:3500/products/${id}`
const [items,setItems] = useState({})

useEffect(() => {
    if(id){
        const fetchItems = async() => {
            try{
                const response = await fetch(API_URL)
                if(!response.ok) throw Error ('Data not found')
                const listItems  = await response.json()
                setItems(listItems)
            }
            catch(err){
                console.log(err)
            }
          }
          fetchItems()
    }
    
},[id,API_URL])
  return (
    <div>
     
      {items.name}
      {items.price}
    </div>
  )
}
