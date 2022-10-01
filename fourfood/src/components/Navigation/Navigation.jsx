import React, { useState } from "react"
import { Container, Img } from "./styled"
import home from '../../images/home.svg'
import shop from '../../images/shop.svg'
import profile from '../../images/profile.svg'
import { goToCartPage, goToFeedPage, goToProfilePage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"


const Navigation = () => {
    const navigate = useNavigate()
    const [currentIcon, setCurrentIcon] = useState("home")

    return (
        <Container>
            <div onClick={() => {
                goToFeedPage(navigate)
                setCurrentIcon("home")
            }}>
                <Img
                    src={home}
                    alt="Home"
                    active={currentIcon === "home" ? true : false}
                />
            </div>
            <div onClick={() => {
                goToCartPage(navigate)
                setCurrentIcon("shop")
            }}>
                <Img
                    src={shop}
                    alt="Carrinho"
                    active={currentIcon === "shop" ? true : false}
                />
            </div>
            <div onClick={() => {
                goToProfilePage(navigate)
                setCurrentIcon("profile")
            }}>
                <Img
                    src={profile}
                    alt="Perfil"
                    active={currentIcon === "profile" ? true : false}
                />
            </div>

            
        </Container>
    )
}

export default Navigation