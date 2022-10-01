import styled from 'styled-components'

export const Info = styled.div`
    img {
        height: 130px;
        width: 100%;
        object-fit: cover;
        border-radius: 8px 8px 0px 0px;

        @media (min-width: 500px) {
            height: 18vw;
        }
    }

    p {
        color: var(--green);
        margin: 0;
        padding-top: 10px;
        font-size: 22px;
    }

    span {
        color: #9d9d9d;
        padding: 10px 0px;
        font-size: 16px;
    }

    div {
        display: flex;
        justify-content: space-between;
    }
`

export const Products = styled.div`
    margin-bottom: 50px;

    #title {
        width: 100%;
        border-bottom: 2px solid black;
        margin: 25px 0px;
    }

    p {
        font-size: 18px;
        font-weight: 500;
        margin: 8px 0px;
    }
`

export const DisplayProducts = styled.div`
    @media (min-width: 500px) {
        display: grid;
        grid-gap: 0px 20px;
        grid-template-columns: repeat(auto-fill,minmax(500px, 1fr));
    }
`