import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

   @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: initial;
  }
`;