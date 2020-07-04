import styled from 'styled-components'

export const ButtonContainer = styled.button `
text-transform: capitalize;
font-size: 1rem;
background: #39e52e;
border: 0.05rem solid var(--mainWhite);
color: var(--mainGreen);
border-radius: 0.8rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
    background: transparent;
    color: var(--mainWhite);
}
&:focus {
    outline: none;
}
`;