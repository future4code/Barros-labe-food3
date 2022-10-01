import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
    background-color: white;

    div {
        width: 33.33%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Img = styled.img`
    width: 30px;
    height: 30px;
    filter: ${props => props.active ? "grayscale(0%)" : "grayscale(100%)"};
    transition: all 0.35s ease;
`