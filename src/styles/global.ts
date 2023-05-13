import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${(props) => props.theme['gray-100']};
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

strong {
    font-family: 'Baloo 2', sans-serif;
    line-height: 3.9rem;
    color: ${(props) => props.theme['gray-900']};
}
`




