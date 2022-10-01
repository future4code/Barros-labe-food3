import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid var(--black-25);
    border-radius: 10px;
    margin: 0 0 10px;
    cursor: pointer;

    img {
        height: 130px;
        width: 100%;
        object-fit: cover;
        border-radius: 8px 8px 0px 0px;
    }
`

export const Info = styled.div`
    padding: 10px 15px;

    #name {
        color: var(--green);
        font-weight: 400;
    }

    span {
        color: #979797;
        font-weight: 400;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 5px 0px;
    }
`