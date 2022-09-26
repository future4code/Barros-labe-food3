import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { BASE_URL } from '../../constants/constants'
import { useParams } from 'react-router-dom'

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
       return <p key={menu.id}>
        <p><img src={menu.photoUrl} alt="" width={'150px'} /></p>
        <p>{menu.category}</p>
        <p>{menu.description}</p>
        {menu.name}
        <p>R${menu.price}</p>
        </p>
      })}
    </div>
  )
}

export default RestaurantDetailPage