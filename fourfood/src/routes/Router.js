import React from "react";
import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import OnGoingPage from "../pages/OnGoingPage/OnGoingPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import SearchRestaurantPage from "../pages/SearchRestaurantPage/SearchRestaurantPage";
import SignUpPage from "../pages/SingUpPage/SignUpPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import EditProfile from "../pages/ProfilePage/EditProfile";
import EditAddres from "../pages/ProfilePage/EditAddres";
import Adress from "../pages/SingUpPage/Adress";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";

const Container = styled.div``;

const Router = () => {
  const location = useLocation()

  const checkPageNagivate = () => {
    if (location.pathname === '/') return false
    if (location.pathname === '/login') return false
    if (location.pathname === '/cadastro') return false
    return true
  }

  const checkPageHeader = () => {
    if (location.pathname === '/') return false
    if (location.pathname === '/login') return false
    return true
  }

  return (
    <Container>

      {checkPageHeader() ? (
        <Header />
      ) : null}

        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/cadastro" element={<SignUpPage />} />
          <Route exact path="/cadastro-endereco" element={<Adress />} />
          <Route exact path="/perfil" element={<ProfilePage />} />
          <Route exact path="/editar-perfil" element={<EditProfile />}/>
          <Route exact path="/editar-endereco" element={<EditAddres />}/>
          <Route exact path="/home" element={<FeedPage />} />
          <Route exact path="/carrinho" element={<CartPage />} />
          <Route exact path="/pedido-em-andamento" element={<OnGoingPage />} />
          <Route
            exact
            path="/restaurante/:restauranteId"
            element={<RestaurantPage />}
          />
          <Route exact path="/restaurantes" element={<SearchRestaurantPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

      {checkPageNagivate() ? (
        <Navigation />
      ) : null}
      
    </Container>
  );
};
export default Router;
