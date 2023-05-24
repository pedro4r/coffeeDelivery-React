import { styled } from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    padding: 2rem 0rem 2rem 0rem;

    img {
        width: 5.31rem
    }

    nav {
        display: flex;
        flex-direction: row;
        gap: 0.75rem;

        a {
            background: ${(props) => props.theme['yellow-100']};
            color: ${(props) => props.theme['yellow-300']};
            padding: 0.5rem;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const HeaderLocation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 0.25rem;
    padding: 0.5rem;

    color: ${(props) => props.theme['purple-200']};
    background: ${(props) => props.theme['purple-100']};
    border-radius: 6px;
`

export const CartContainer = styled.div`
    position: relative;
`


export const CartCounter = styled.div`
    position: absolute;
    top: -1rem;
    right: -1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;

    color: ${(props) => props.theme['white']};
    background: ${(props) => props.theme['yellow-300']};
    border-radius: 50%;

    span {
        font-size: 0.6rem;
    }
`
