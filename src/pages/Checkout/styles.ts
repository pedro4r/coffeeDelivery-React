import { styled } from "styled-components";

export const CheckoutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    gap: 2rem;
`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;

    strong {
      line-height: 1rem;
    }
`

export const AddressContainer = styled.div`
    margin-bottom: 0.75rem;
    margin-top: 0.9rem;
    padding: 2.5rem;

    border-radius: 6px;
    background: ${(props) => props.theme['gray-200']};
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    color: ${(props) => props.theme['yellow-300']};

    span {
        font-size: 1.1rem;
        color: ${(props) => props.theme['gray-800']};
        line-height: 160%;
    }

    p {
        line-height: 160%;
        color: ${(props) => props.theme['gray-700']};
    }
`

export const FormContainer = styled.div`
    margin-top: 2rem;
`

export const PaymentContainer = styled.div` 
    height: 100px;

    border-radius: 6px;
    background: ${(props) => props.theme['gray-200']};
`

export const CartDetailsContainer = styled.div`
    height: 100px;
    background: ${(props) => props.theme['gray-200']};
`

export const SelectedCoffeesContainer = styled.div`
`

export const OrderDetails = styled.div`  
`

export const ConfirmeOrderButton = styled.div` 
`


