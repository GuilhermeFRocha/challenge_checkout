import { useState, useCallback } from "react";

import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { AiFillCheckCircle } from "react-icons/ai";

import TravelInfoStep from "./TravelInfoStep";
import PaymentInfoStep from "./PaymentInfoStep";
import PersonalInfoStep from "./PersonalInfoStep";
import "react-toastify/dist/ReactToastify.css";
import {
  validationPaymentInfoStep,
  validationPersonalInfoStep,
  validationTravelInfoStep,
} from "./schema";
import { initialState } from "./constants";

import {
  FinalStep,
  Container,
  Content,
  FormContainer,
  ButtonNext,
  ButtonPrevious,
  Stepp,
  ButtonReset,
  ContainerCheckout,
  ImageCheckout,
} from "./styled";

const steps = ["Dados da viagem", "Dados pessoais", "Pagamento"];

export default function CheckoutForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [submitted, setSubmitted] = useState(false);

  // Verifica se um determinado passo foi pulado durante o processo do formulário.
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  // Função de callback para tratar o envio do formulário. Imprime os valores do formulário no console.
  const onSubmitForm = useCallback((values: any) => {
    console.log(values);
  }, []);

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: onSubmitForm,
    validateOnChange: submitted,
    validateOnBlur: submitted,
    validationSchema:
      activeStep === 0
        ? validationTravelInfoStep
        : activeStep === 1
        ? validationPersonalInfoStep
        : validationPaymentInfoStep,
  });

  // Controla a ação de voltar para o passo anterior do formulário.
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Reinicia o processo do formulário, voltando para o primeiro passo.
  const handleReset = () => {
    setActiveStep(0);
    formik.setValues(initialState);
  };

  // Função de callback para avançar para o próximo passo do formulário.
  // Verifica se o formulário é válido antes de avançar. Se houver erros, exibe uma mensagem de erro.
  // Caso contrário, atualiza o estado para avançar e marca o passo como não pulado.
  const handleNext = useCallback(() => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        toast.error("Corrija os erros antes de prosseguir");
        setSubmitted(true);
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(skipped);
        setSubmitted(false);
      }
    });
  }, [formik, skipped]);

  return (
    <Container>
      <Content>
        <Stepp activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepp>

        {activeStep !== steps.length ? (
          <>
            <FormContainer>
              <h2>{steps[activeStep]}</h2>

              {activeStep === 0 && (
                <TravelInfoStep
                  getFieldHelpers={formik.getFieldHelpers}
                  values={formik.values}
                  errors={formik.errors}
                  handleChange={formik.handleChange}
                  setValue={formik.setValues}
                />
              )}
              {activeStep === 1 && (
                <PersonalInfoStep
                  getFieldHelpers={formik.getFieldHelpers}
                  values={formik.values}
                  errors={formik.errors}
                  handleChange={formik.handleChange}
                  setFieldTouched={formik.setFieldTouched}
                  setValues={formik.setValues}
                  setFieldError={formik.setFieldError}
                />
              )}
              {activeStep === 2 && (
                <PaymentInfoStep
                  getFieldHelpers={formik.getFieldHelpers}
                  values={formik.values}
                  errors={
                    formik.errors as {
                      cardName: string;
                      cardNumber: string;
                      cardExpirationDate: string;
                      cardCVV: string;
                    }
                  }
                  handleChange={formik.handleChange}
                />
              )}
            </FormContainer>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <ButtonPrevious
                type="button"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Voltar
              </ButtonPrevious>
              <ButtonNext type="button" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
              </ButtonNext>
            </Box>
          </>
        ) : (
          <>
            <FinalStep>
              <ContainerCheckout>
                <div>
                  <p>Parabéns!</p>
                  <p>
                    🎉 Agradecemos por ter preenchido todos os campos
                    necessários no checkout da Wizzi! Estamos muito contentes
                    por ter escolhido nossos serviços.
                  </p>
                  <p>
                    Gostaríamos de informar que você receberá em breve uma
                    mensagem de confirmação no seu email. Verifique sua caixa de
                    entrada para garantir que todas as informações estejam
                    corretas.
                  </p>
                  <p> Tenha um ótimo dia! 😊</p>
                </div>

                <ImageCheckout>
                  <AiFillCheckCircle size={"100px"} color={"#4b7d81"} />
                </ImageCheckout>
              </ContainerCheckout>
            </FinalStep>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
              }}
            >
              <ButtonReset type="button" onClick={handleReset}>
                Início
              </ButtonReset>
            </Box>
          </>
        )}
      </Content>
      <ToastContainer />
    </Container>
  );
}
