import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid var(--black-25);
    width: 99%;
    display: flex;
    border-radius: 3px;

    img {
        padding: 15px;
    }
`

export const Input = styled.input`
    border: none;
    font-size: 16px;
    width: 100%;
    margin-right: 15px;

    :focus {
        outline: none;
    }

    ::placeholder {
        color: var(--black-25);
    }
`