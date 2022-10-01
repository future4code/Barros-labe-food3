import styled from 'styled-components'

export const Container = styled.div`
    overflow-y: auto;
    padding: 15px;
    margin-bottom: 55px;
`

export const Tags = styled.div`
    display: flex;
    overflow-x: auto;
    margin-bottom: 8px;

    div {
        width: 90px;
        text-align: center;
        margin-right: 18px;
        cursor: pointer;
    }
`

export const Span = styled.div`
    padding: 20px 0px;
    color: ${props => props.active ? "var(--green)" : "black"};
`

export const RestaurantDisplay = styled.div`
    @media (min-width: 500px) {
        display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
    }
`