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


export const CoffeeContainer = styled.div`
    max-width: 16rem;
    margin-top: 1.5rem;
    padding: 0rem 1.5rem 1.25rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 6px 36px 6px 36px;
    background: ${(props) => props.theme['gray-200']};

    img {
        margin-top: -1.25rem;
    }

    span {
        font-size: 0.9rem;
        text-align: center;
        color: ${(props) => props.theme['gray-600']};
    }

    strong {
        font-size: 1.2rem;
    }
`;

export const CoffeeTag = styled.div`
    margin-top: 1rem;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;

    border-radius: 100px;
    background: ${(props) => props.theme['yellow-100']};

    span {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.62rem;
        color: ${(props) => props.theme['yellow-300']};
    }

`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 2rem;
    gap: 1.43rem;
`;

export const Price = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
        padding-right: 0.2rem;
        color: ${(props) => props.theme['gray-800']};
    }

    strong {
        font-size: 1.5rem;
    }
`;

export const Purchase = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
`;

export const QuantityContainer = styled.div`
    height: 2.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    padding: 0.87rem;

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

export const BuyButton = styled.button`
    all: unset;
    cursor: pointer;
    height: 2.3rem;
    width: 2.3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    background: ${(props) => props.theme['purple-300']};
    color: ${(props) => props.theme['white']};

    &:hover {
        background: ${(props) => props.theme['purple-200']};
    }
`;
