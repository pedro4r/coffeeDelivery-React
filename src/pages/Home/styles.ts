import { styled } from "styled-components";

export const Main = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    margin-top: 5.8rem;
`;

export const Intro = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap:2rem;

    strong {
        font-size: 3rem;
    }
    p {
        margin-top: 1rem;
        font-size: 1.1rem;
        color: ${(props) => props.theme['gray-800']};
    }
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
        width: 30rem;
    }
`;

export const Benefits = styled.div`
    margin-top: 4.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
`;

export const BenefitsList = styled.div`
    display: grid;
    gap: 1.25rem;
`;

export const BenefitsItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.25rem;
    
    div{
        border-radius: 50%;
        height: 2rem;
        width: 2rem;
        padding: 0.5rem;

        background-color: ${(props) => props.theme['yellow-300']};
        color: ${(props) => props.theme['white']};
    }

    span {
        color: ${(props) => props.theme['gray-700']};
        font-weight: 0.5rem;
    }
`

export const SecurityPurchase = styled(BenefitsItem)`
   div{
        background-color: ${(props) => props.theme['yellow-300']};
    }
`;

export const FastDelivery = styled(BenefitsItem)`
   div{
        background-color: ${(props) => props.theme['yellow-200']};
    }
`;

export const CoffeePacking = styled(BenefitsItem)`
   div{
        background-color: ${(props) => props.theme['gray-700']};
    }
`;

export const FreshCoffee = styled(BenefitsItem)`
   div{
        background-color: ${(props) => props.theme['purple-200']};
    }
`;