import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    margin-bottom: 20px;

    picture {
        width: 80%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px 0px 0px 10px;
    }
`

export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    position: relative;

    p {
        color: var(--green);
        margin: 0;
        margin-bottom: 8px;
        font-weight: 400;
    }

    span {
        color: #979797;
        font-size: 15px;
    }

    #price {
        color: black;
        margin-bottom: 0;
    }
`

export const Button = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: transparent;
    border: 1px solid var(--green);
    color: var(--green);
    padding: 15px 0px;
    border-radius: 10px 0px;
    width: 48%;
`