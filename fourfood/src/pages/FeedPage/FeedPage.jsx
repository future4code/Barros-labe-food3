import React from "react";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import { RestaurantDisplay, Span, Tags } from "./styled";
import Container from "../../components/MainContainer/styled.js";
import useUnprotectedPage from "../../hooks/useProtectedPage";
import axios from "axios";
import { BASE_URL } from "../../constants/url.js";
import { useState, useEffect } from "react";

const FeedPage = () => {
  useUnprotectedPage();

  const [loading, setLoading] = useState(false)
  const [restaurants, setRestaurants] = useState([])
  const [results, setResults] = useState([])
  const [search, setSearch] = useState("")

  const filterResult = () => {
    setResults(restaurants.filter(item => item.name.toLowerCase().includes(search.toLowerCase())))
  }

  const fetch = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`${BASE_URL}/restaurants`, {
        headers: {
          Auth: localStorage.getItem('token')
        }
      })

      setRestaurants(data.restaurants)
      setResults(data.restaurants)
      setLoading(false)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    filterResult()
  }, [search])

  useEffect(() => {
    fetch()
  }, [])

  return (
    <Container>
      <SearchBar search={search} setSearch={setSearch} />

      {search.length === 0 ? (
      <Tags>
        <div>
          <Span active={true}>Burger</Span>
        </div>
        <div>
          <Span active={false}>Asiática</Span>
        </div>
        <div>
          <Span active={false}>Massas</Span>
        </div>
        <div>
          <Span active={false}>Saudável</Span>
        </div>
      </Tags>
      ) : <div style={{height: '15px'}}></div>}
      
      
      {!loading ? (
        <RestaurantDisplay>
        {results.map((item, index) => (
          <RestaurantCard
            key={index}
            logo={item.logoUrl}
            name={item.name}
            time={item.deliveryTime}
            shipping={item.shipping}
            id={item.id}
          />
        ))}
        </RestaurantDisplay>
      ) : (
        <div>Loading</div>
      )}
      
    </Container>
  );
};

export default FeedPage;
