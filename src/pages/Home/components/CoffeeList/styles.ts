import { styled } from "styled-components";

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 5rem;

    strong {
        font-size: 1.5rem;
    }
`;
export const ListGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 16rem);
    grid-gap: 2rem;
`;
