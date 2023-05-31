import { styled } from "styled-components";

export const SuccessContainer = styled.div`
    margin-top: 5rem;
    
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "title title"
    "tracking imgContainer";

    p, span{
        color: ${(props) => props.theme['gray-700']};
    }

`;

export const Title = styled.div`
    display: flex;
    margin-bottom: 2.5rem;
    flex-direction: column;
    gap: 0.25rem;
    grid-area: title;

    strong {
        font-size: 1.5rem;
        line-height: 130%;
        color: ${(props) => props.theme['yellow-300']};
    }

    span {
        color: ${(props) => props.theme['gray-700']};
    }
`;

export const TrackingContainer = styled.div`
    position: relative;
    padding: 2.5rem 8.2rem 2.5rem 2.5rem;

    margin-right: 6.37rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 6px 36px 6px 36px;
        padding: 1px; 
        background:linear-gradient(45deg,${(props) => props.theme['yellow-200']},${(props) => props.theme['purple-200']}); 
        -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude; 
}
    
`;

const IconContainerBase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 2rem;
    min-width: 2rem;

    border-radius: 50%;
    color: ${(props) => props.theme['white']};
`;

export const TrackingInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
`;

export const Address = styled.div`
    p {
        font-weight: bold;
    }
    
`;

export const AddressIconContainer = styled(IconContainerBase)`
    background: ${(props) => props.theme['purple-200']}
`;

export const EstimatedDeveliery = styled.div`
    
`;

export const TimeIconContainer = styled(IconContainerBase)`
    background: ${(props) => props.theme['yellow-200']}
`;

export const ChosePayment = styled.div`
    p {
        font-weight: bold;
    }

`;

export const PaymentIconContainer = styled(IconContainerBase)`
    background: ${(props) => props.theme['yellow-300']}
`;

export const IconContainer = styled.div`
    
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    
    img {
        width: 30.75rem
    }
`;


