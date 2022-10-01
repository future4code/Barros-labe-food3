import React from "react"
import { Container, Input } from "./styled"
import searchIcon from '../../images/search.svg'

const SearchBar = (props) => {
    return (
        <Container>
            <img src={searchIcon} alt="Pesquisar" />
            <Input
                value={props.search}
                onChange={(e) => props.setSearch(e.target.value)}
                placeholder="Restaurante"
            />
        </Container>
    )
}

export default SearchBar