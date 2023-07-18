import styled from "styled-components";

export const BannerContainer = styled.div`
  background-image: url("https://images.unsplash.com/photo-1652961989677-a236d38f63f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 50%;
  opacity: 0.8;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;

  @media (max-width: 768px) {
    width: 100%;
    height: 260px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
`;
