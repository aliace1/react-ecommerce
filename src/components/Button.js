import styled from 'styled-components'

export const ButtonContainer = styled.button`
         text-transform: capitalize;
         font-size: 1.4rem;
         background: transparent;
         border: 0.05rem solid var(--lightGreen);
         border-color: ${props =>
           props.cart ? "var(--mainYellow)" : "var(--lightGreen)"};
         color: ${prop =>
           prop.cart ? "var(--mainYellow)" : "var(--lightGreen)"};
         border-radius: 0.5rem;
         padding: 0.2rem 0.5rem;
         margin: 0.2rem 0.5rem 0.2rem 0;
         cursor: pointer;
         transition: all 0.5s ease-in-out;
         &:hover {
           backgroung: ${prop =>
              prop.cart ? "var(--mainYellow)" : "var(--lightGreen)"};
           color: var(--hightGreen);
         }
         &:focus {
           outline: none;
         }
       `;