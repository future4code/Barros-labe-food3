import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { BASE_URL } from '../../constants/constants'
import { useParams } from 'react-router-dom'
import CardMenu from '../../card/card-menu'

const RestaurantDetailPage = () => {
  const [menu, setMenu] = useState([])
  const {id} = useParams()
  useEffect(()=> {
    console.log(id);
    axios.get(`${BASE_URL}/restaurants/${id}`,{
      headers: {
        auth: localStorage.getItem('auth-token')
      }
    })
    .then((res)=>{
      setMenu(res.data.restaurant.products);
    })
    .catch((er)=>{
      console.log(er);
    })
  },[])

  console.log(menu);
  return (
    <div>
      {menu.map((menu)=>{
       return <CardMenu 
       key={menu.id}
       img={menu.photoUrl}
       category={menu.category}
       description={menu.description}
       name={menu.name}
       price={menu.price}
       />

      
      })}
    </div>
  )
}

export default RestaurantDetailPage