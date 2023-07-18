import styled from "styled-components";
import Stepper from "@mui/material/Stepper";

interface InputContainerProps {
  items?: number;
}

export const Container = styled.div`
  min-width: 55%;
  height: 100%;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  padding: 3rem;
  box-sizing: border-box;
`;

export const FormContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-block: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 345px) {
      font-size: 1.5rem;
    }
  }
`;

export const FinalStep = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-block: 2rem;
  justify-content: center;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.items}, 1fr);
  grid-gap: 20px;
  align-items: center;
  width: 100%;
  align-items: stretch;
  height: 68px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: initial;
  }

  .css-1wc848c-MuiFormHelperText-root.Mui-error {
    margin-bottom: 20px;
  }
`;

export const ButtonPrevious = styled.button`
  border: none;
  border-radius: 5px;
  padding-block: 12px;
  min-width: 88px;
  font-weight: 600;
  cursor: pointer;
  color: #4b7d81;
  border: 1px solid #4b7d81;
  background-color: transparent;

  &:disabled {
    background-color: #ccc;
    color: #898989;
    border: none;
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;

export const ButtonNext = styled.button`
  border: none;
  border-radius: 5px;
  padding-block: 12px;
  min-width: 88px;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  background-color: #4b7d81;

  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;

export const ButtonReset = styled.button`
  border: none;
  border-radius: 5px;
  padding-block: 12px;
  min-width: 88px;
  font-weight: 600;
  cursor: pointer;
  color: #4b7d81;
  border: 1px solid #4b7d81;
  background-color: transparent;
  margin: 0 auto;

  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;

export const Stepp = styled(Stepper)`
  & .MuiStepIcon-root.Mui-active,
  .MuiStepIcon-root.Mui-completed {
    color: #4b7d81;
  }

  @media (max-width: 425px) {
    display: grid !important;
    gap: 10px !important;
  }
`;

export const ListItemsCity = styled.div`
  position: absolute;
  left: 0;
  top: 60px;
  background-color: #e8e8e8;
  z-index: 2;
  border-radius: 15px;
  padding: 10px;

  div {
    cursor: pointer;

    :hover {
      opacity: 0.8;
      transition: 0.3s;
    }
  }
`;

export const ContainerCheckout = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 500px;

  p:nth-child(1) {
    text-align: center;
  }

  p {
    padding: 10px 0;
  }
`;

export const ImageCheckout = styled.div`
  margin: 0 auto;
  padding-top: 15px;
`;
