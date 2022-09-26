import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardRestaurant from '../../card/CardRestaurant'
import { BASE_URL } from '../../constants/constants'
import './index.css'
import { BsSearch } from "react-icons/bs"
import { GoToDetailPage } from '../../routes/navigation'
import { useNavigate } from 'react-router-dom'
import LoadingPage from '../../loading/Loading'

const FeedPage = () => {

  const [restaurants, setRestaurants] = useState([])
  const [errorTratament, setErrorTratament] = useState("")

  const [query, setQuery] = useState("")

  const [removeLoading, setRemoveLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${BASE_URL}/restaurants`, {
      headers: {
        auth: localStorage.getItem('auth-token')
      }
    })
      .then((res) => {
        setRestaurants(res.data.restaurants)
        setRemoveLoading(true)
      })
      .catch((er) => {
        setErrorTratament(er.response.data.message);
        console.log(er);
      })
  }, [])

  const onClickCard = () => {
      GoToDetailPage(navigate)
  }

  return (
    <div className='main-container'>
      <div className='query'>
        <p id='icon-search'>{<BsSearch/>}</p>
          <input id='query'
            type="text" 
            placeholder='Restaurante'
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            />    
      </div>
      <div>
        {
          errorTratament ===""? (undefined) : (<p id='errorTratament'>{errorTratament}<button type='button'>Cadastrar endereço</button></p>)
        }
      </div>
      <div className='restaurants-list'>
        {restaurants.length > 0 &&
          restaurants.filter((res)=>{
            return res.name.includes(query)
        })
        .map((res, index) => (
          <CardRestaurant 
            key={index} 
            logo={res.logoUrl} 
            name={res.name} 
            time={res.deliveryTime}
            priceDelivery={res.shipping}
            onClickCard={onClickCard}
            />
        ))}
        {!removeLoading && <LoadingPage/>}
      </div>
    </div>
  )
}

export default FeedPage