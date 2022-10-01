import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Info } from "./styles";

const RestaurantCard = (props) => {
    const navigate = useNavigate()

    return (
        <Container onClick={() => navigate(`/restaurante/${props.id}`)}>
            <img src={props.logo} alt={props.name} />
            <Info>
                <span id="name">{props.name}</span>
                <div>
                    <span>{props.time - 10} - {props.time} min</span>
                    <span>Frete R$ {props.shipping.toFixed(2)}</span>
                </div>
            </Info>
        </Container>
    )
}

export default RestaurantCard