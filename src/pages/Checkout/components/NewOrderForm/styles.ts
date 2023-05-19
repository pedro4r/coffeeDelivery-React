import { styled } from "styled-components";

export const OrderForm = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
`

const BaseInput = styled.input`
  background: ${(props) => props.theme['gray-300']};
  height: 2.6rem;
  border: 0;
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-700']};
  text-indent: 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }
`

export const ZipCodeInput = styled(BaseInput)`
    grid-row: 1;
    grid-column: span 1;
`

export const AddressInput = styled(BaseInput)`
    grid-row: 2;
    grid-column: span 4;
`

export const ComplementInput = styled(BaseInput)`
    grid-row: 3;
    grid-column: span 4;
`

export const CityInput = styled(BaseInput)`
    grid-row: 4;
    grid-column: span 2;
`

export const StateInput = styled(BaseInput)`
    grid-row: 4;
    grid-column: span 2;
`