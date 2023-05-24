import { styled } from "styled-components";

interface ButtonProps {
    selected: boolean;
}

export const CheckoutContainer = styled.div`
    form {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 0.7fr;
        gap: 2rem;
    }
    
`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    strong {
        margin-bottom: 1rem;
      line-height: 1rem;
    }
`

export const AddressContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['gray-200']};
`

export const TitleContainerBase = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

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

export const TitleContainerShipping = styled(TitleContainerBase)`
    color: ${(props) => props.theme['yellow-300']};
`

export const FormContainer = styled.div`
    margin-top: 2rem;
`

export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2.5rem;

    border-radius: 6px;
    background: ${(props) => props.theme['gray-200']};
`

export const TitleContainerPayment = styled(TitleContainerBase)`
    color: ${(props) => props.theme['purple-200']};
`

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
`

export const PaymentButton = styled.button<ButtonProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    height: 3.18rem;
    width: 11.16rem;

    cursor: pointer;

    border-radius: 6px;
    border: 0;
    
    color: ${(props) => props.theme['purple-200']};

    background: ${(props) => (props.selected ? props.theme['purple-100'] : props.theme['gray-400'])};
    border: 1px solid ${(props) => (props.selected ? props.theme['purple-200'] : props.theme['gray-400'])};
        
    &:hover {
        background: ${(props) => (props.selected ? props.theme['purple-100'] : props.theme['gray-500'])};
    }

    span {
            color: ${(props) => props.theme['gray-700']};
    }
`

export const CartDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    strong {
        margin-bottom: 1rem;
      line-height: 1rem;
    }
`

export const SelectedCoffeesContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['gray-200']};
`

export const OrderDetails = styled.div`  
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: space-between;

        span {
            font-size: 1rem;
            color: ${(props) => props.theme['gray-700']};
        }

        strong {
            font-size: 1.25rem;
        }
    }
`

export const ConfirmeOrderButton = styled.button` 
    border: none;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1.5rem;
    border-radius: 6px;

    width: 100%;
    height: 2.8rem;

    background: ${(props) => props.theme['yellow-200']};

    span {
        font-size: 1rem;
        color: ${(props) => props.theme['white']};
    }

    &:disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme['gray-500']};
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-300']};
  }

`


