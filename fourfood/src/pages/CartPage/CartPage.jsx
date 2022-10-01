import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToFeedPage } from "../../routes/coordinator";
import CartItem from "../../components/Cart/CartItem";
import { ScreenContainer } from "./styledCartPage";
import { Button } from "@mui/material";
const CartPage = (props) => {
  useProtectedPage();
  const navigate = useNavigate();
  const { states, setters, requests, services } =
    useContext(GlobalStateContext);
  const { cart } = states;
  const { setCart } = setters;

  const removeItemFromCart = (itemToRemove) => {
    const index = cart.findIndex((i) => i.id === itemToRemove.id);
    const newCart = [...cart];
    if (newCart[index].amount === 1) {
      //só tem um item nesse produto:
      newCart.splice(index, 1);
    } else {
      //tem mais de um item deste produto
      newCart[index].amount -= 1;
    }
    setCart(newCart);
  };

  const renderedCart = cart.map((prod) => {
    return (
      <CartItem
        key={prod.id}
        product={prod}
        removeItemFromCart={removeItemFromCart}
      />
    );
  });
  let priceToPay = 0;
  cart.forEach((prod) => {
    priceToPay += Number(prod.price) * prod.amount;
  });

  return (
    <ScreenContainer>
      {renderedCart}
      <h1>Total: R$ {priceToPay.toFixed(2)}</h1>
      <Button onClick={() => goToFeedPage(navigate)}>Quero mais!</Button>
      <Button>Realizar pedido</Button>
    </ScreenContainer>
  );
};
export default CartPage;
