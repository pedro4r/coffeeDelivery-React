import { styled } from "styled-components";

export const CoffeeDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.20rem;

    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme['gray-400']};

    img {
        height: 4rem;
        width: 4rem;
    }

    strong {
        margin-left: 1.87rem;
        color: ${(props) => props.theme['gray-700']};
    }

    margin-bottom: 2rem;

`
export const CoffeeDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
        color: ${(props) => props.theme['gray-800']};
    }
`
export const Purchase = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
`;

export const QuantityContainer = styled.div`
    max-width: 4.5rem;
    height: 2.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 1rem;

    border-radius: 6px;
    background: ${(props) => props.theme['purple-100']};

    span {
        font-size: 1.1rem;
        color: ${(props) => props.theme['gray-900']};
    }
`;

export const AddRemoveButton = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme['purple-200']};

    &:hover{
        color: ${(props) => props.theme['purple-300']};
    }
`;

export const RemoveButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;

    height: 2.3rem;

    cursor: pointer;

    border-radius: 6px;
    border: 0;
    
    color: ${(props) => props.theme['purple-200']};

    background: ${(props) => props.theme['gray-400']};
        
    &:hover {
        background: ${(props) => props.theme['gray-500']};
    }

    span {
            color: ${(props) => props.theme['gray-700']};
    }
`