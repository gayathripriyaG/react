import React,{useEffect, useState} from 'react'

export const AllProducts = () => {
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
        {items.map((item) => (
           <div key = {item.id}>
               {item.name}
               {item.price}
            </div>
        ))}
    </div>
  )
}
