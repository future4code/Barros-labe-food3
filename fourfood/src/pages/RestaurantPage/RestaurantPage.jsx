import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import Container from "../../components/MainContainer/styled";
import { DisplayProducts, Info, Products } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import ProductCard from "../../components/ProductCard/ProductCard";

const RestaurantPage = () => {
  useProtectedPage();

  const { restauranteId } = useParams();

  const [loading, setLoading] = useState(false);
  const [restaurant, setRestaurant] = useState({});
  const [principal, setPrincipal] = useState([]);
  const [acompanhamento, setAcompanhamento] = useState([]);
  const [bebida, setBebida] = useState([]);

  const fetch = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${BASE_URL}/restaurants/${restauranteId}`,
        {
          headers: {
            Auth: localStorage.getItem("token"),
          },
        }
      );

      setRestaurant(data.restaurant);
      setPrincipal(
        data.restaurant.products.filter(
          (item) =>
            item.category !== "Acompanhamento" && item.category !== "Bebida"
        )
      );
      setAcompanhamento(
        data.restaurant.products.filter(
          (item) => item.category === "Acompanhamento"
        )
      );
      setBebida(
        data.restaurant.products.filter((item) => item.category === "Bebida")
      );
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Container>
      {!loading ? (
        <>
          <Info>
            <img src={restaurant.logoUrl} alt={restaurant.name} />
            <p>{restaurant.name}</p>
            <div>
              <span>
                {restaurant.deliveryTime - 10} - {restaurant.deliveryTime} min
              </span>
              <span>Frete R$ {restaurant.shipping}.00</span>
            </div>
            <span>{restaurant.address}</span>
          </Info>

          <Products>
            <div id="title">
              <p>Principais</p>
            </div>
            <DisplayProducts>
              {principal.map((item, index) => (
                <ProductCard
                  key={index}
                  img={item.photoUrl}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  item={item}
                />
              ))}
            </DisplayProducts>
          </Products>

          {acompanhamento.length > 0 ? (
            <Products>
              <div id="title">
                <p>Acompanhamentos</p>
              </div>
              <DisplayProducts>
                {acompanhamento.map((item, index) => (
                  <ProductCard
                    key={index}
                    img={item.photoUrl}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    item={item}
                  />
                ))}
              </DisplayProducts>
            </Products>
          ) : null}

          <Products>
            <div id="title">
              <p>Bebidas</p>
            </div>
            <DisplayProducts>
              {bebida.map((item, index) => (
                <ProductCard
                  key={index}
                  img={item.photoUrl}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  item={item}
                />
              ))}
            </DisplayProducts>
          </Products>
        </>
      ) : null}
    </Container>
  );
};

export default RestaurantPage;
