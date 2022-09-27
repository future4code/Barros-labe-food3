import React from 'react'
import RestaurantDetailPage from '../pages/detailRestaurant/RestaurantDetailPage'
import './card.css'

const CardRestaurant = ({ logo, name, time, priceDelivery, onClickCard }) => {

    return (
        <div className='card-container' onClick={onClickCard}>
            <div className='logo'>
                <img src={logo} alt={name} />
            </div>
            <div className="name-restaurant">
                <p>{name}</p>
            </div>
            <div className='time-and-price'>
                <div>
                    <p>{time}min</p>
                </div>
                <div>
                    <p>Frete R${priceDelivery},00</p>
                </div>
            </div>
        </div>
    )
}

export default CardRestaurant