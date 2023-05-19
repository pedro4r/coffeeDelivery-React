import { styled } from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 70rem;
    height: calc(100vh - 10rem);

    display: flex;
    flex-direction: column;
    margin: 0 auto;
`
export const InputBase = styled.div`
    background: ${(props) => props.theme['gray-300']};
`
