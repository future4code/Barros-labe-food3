import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { goToAdress } from "../routes/coordinator";
const GlobalState = (props) => {
  //Organizando o código

  //1 - Estados gerais da aplicação:
  const token = localStorage.getItem("token");
  const [loginButtonText, setLoginButtonText] = useState(
    token ? "Logout" : "Login"
  );
  const [cart, setCart] = useState([]);
  const [profile, setProfile] = useState([]);
  const [restaurantDetail, setRestaurantDetail] = useState({});
  const [restaurant, setRestaurant] = useState([]);
  const [activeOrder, setActiveOrder] = useState({});
  const [temporaryToken, setTemporaryToken] = useState("");

  const states = {
    loginButtonText,
    cart,
    restaurantDetail,
    activeOrder,
    temporaryToken,
    profile,
    restaurant,
  };
  const setters = {
    setLoginButtonText,
    setCart,
    setRestaurantDetail,
    setActiveOrder,
    setTemporaryToken,
    setProfile,
    setRestaurant,
  };

  //2 - Services:
  const login = (body, clear, navigate, setLoginButtonText) => {
    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        goToAdress(navigate);
        setLoginButtonText("Logout");
        console.log(res);
      })
      .catch((err) => alert(err.response.data.message));
  };
  const signUp = (body, clear, navigate, setLoginButtonText) => {
    axios
      .post(`${BASE_URL}/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        goToAdress(navigate);
        setLoginButtonText("Logout");
        console.log(res);
      })
      .catch((err) => alert(err.response.data.message));
  };

  const services = { login, signUp };

  //3 - Requests:
  //3.1 - Restaurantes:
  const getRestaurant = () => {
    const token = localStorage.getItem("token");

    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setRestaurant(res.data.restaurants);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
  //3.2 - Detalhes do Restaurante:
  const getRestaurantDetails = (restaurantId) => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/restaurants/${restaurantId}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setRestaurantDetail(res.data);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
  //3.3 - Adicionar objetos ao carrinho:

  const addToCart = (product, quantity, restId) => {
    const cartProduct = {};
    cartProduct.product = product;
    cartProduct.quantity = quantity;
    cartProduct.restId = restId;
    setCart([...cart, cartProduct]);
  };
  //3.4 - Remover Objetos do carrinho:
  const removeFromCart = (id) => {
    let newList = [...cart];
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].product.id === id) {
        if (newList.length === 1) {
          setCart([]);
          localStorage.removeItem("cart");
        }
        newList.splice(i, 1);
        setCart(newList);
      }
    }
  };
  //3.5 - Receber Pedido:
  const getActiveOrder = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/active-order`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        console.log(res.data.order);
        setActiveOrder(res.data.order);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
  //3.6 - Receber Perfil:
  const getProfile = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setProfile(res.data.user);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  const requests = {
    addToCart,
    removeFromCart,
    getActiveOrder,
    getProfile,
    getRestaurant,
    getRestaurantDetails,
  };

  useEffect(() => {
    if (cart && cart.length > 0) {
      //Caso Cart tenha conteúdo, envia para localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
    } else if (
      cart.length <= 0 &&
      localStorage.getItem("cart") &&
      localStorage.getItem("cart").length
    ) {
      //Caso esteja vazio e exista cart no localStorage, recebe o que está no localstorage
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [cart]);
  //4 - Passar por props para o provider:
  return (
    <GlobalStateContext.Provider
      value={{ states, setters, services, requests }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
