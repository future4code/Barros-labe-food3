import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { BASE_URL } from '../../constants/constants'

const RestaurantDetailPage = ({id}) => {
  const [menu, setMenu] = useState([])
  console.log(id);
  useEffect(()=> {
    axios.get(`${BASE_URL}/restaurants/${id}`,{
      headers: {
        auth: localStorage.getItem('auth-token')
      }
    })
    .then((res)=>{
      setMenu(res.restaurant.product)
      console.log(menu);
    })
    .catch((er)=>{
      console.log(er);
    })
  },[])
  return (
    <div>
      {menu.name}
    </div>
  )
}

export default RestaurantDetailPage