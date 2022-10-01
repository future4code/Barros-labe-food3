import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    border-bottom: 1px solid var(--black-25);
    background-color: white;
    z-index: 2;

    div {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h3 {
        font-weight: 400;
        font-size: 18px;
    }

    picture {
        position: absolute;
        left: 0;
        height: 100%;
        width: 75px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`