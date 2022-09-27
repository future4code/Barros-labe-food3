import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { BASE_URL } from '../../constants/constants'
import { useParams } from 'react-router-dom'
import CardMenu from '../../card/cardMenu/card-menu'
import '../../card/cardMenu/index.css'

const RestaurantDetailPage = () => {

  const [menu, setMenu] = useState([])
  const [restaurant, setRestaurant] = useState([])

  const { id } = useParams()

  useEffect(() => {
    axios.get(`${BASE_URL}/restaurants/${id}`, {
      headers: {
        auth: localStorage.getItem('auth-token')
      }
    })
      .then((res) => {
        setMenu(res.data.restaurant.products);
        setRestaurant(res.data.restaurant)
      })
      .catch((er) => {
        console.log(er);
      })
  }, []);

  console.log(restaurant);

  return (
    <div className='detail-container'>
      <div className="cardMenu-container">
        <div className="logo">
          <img src={restaurant.logoUrl} alt={restaurant.name} />
        </div>
        <div className="restaurant-name">
          <h3>{restaurant.name}</h3>
        </div>
        <div className="descriptions">
          <div className="category">
            <p>{restaurant.category}</p>
          </div>
          <div className="time-and-deliveryPrice">
            <p>Tempo aproximado: {restaurant.deliveryTime} min</p>
            <p>Frete R${restaurant.shipping},00</p>
          </div>
          <div className="localization">
            <p>{restaurant.address}</p>
          </div>
        </div>
      </div>
      <div className="itens-menu">
        {menu.map((menu) => {
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

    </div>
  )
}

export default RestaurantDetailPage