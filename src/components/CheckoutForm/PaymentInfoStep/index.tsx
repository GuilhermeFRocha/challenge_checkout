import { ChangeEvent } from "react";

import { TextField } from "@mui/material";
import InputMask from "react-input-mask";

import { InputMaskProps, PaymentInfoStepProps } from "./types";
import { FormContent, InputContainer } from "../styled";

export default function PaymentInfoStep({
  getFieldHelpers,
  values,
  errors,
}: PaymentInfoStepProps) {
  // É um manipulador de evento para campos de entrada (inputs) no formulário. Recebe o nome de um campo e um evento de mudança (ChangeEvent), e atualiza o valor do campo no estado do formulário utilizando a função getFieldHelpers passada como prop.
  const handleChange = (
    field: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    getFieldHelpers(field).setValue(value);
  };

  return (
    <FormContent>
      <InputContainer items={2}>
        <TextField
          fullWidth
          label="Nome no Cartão"
          type="text"
          name="cardName"
          id="cardName"
          value={values.cardName}
          error={!!errors.cardName}
          helperText={errors.cardName}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("cardName", event)
          }
        />

        <InputMask
          disabled={false}
          mask="9999 9999 9999 9999"
          maskChar={null}
          value={values.cardNumber}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("cardNumber", event)
          }
        >
          {(inputProps: InputMaskProps) => (
            <TextField
              disabled={inputProps && inputProps.disabled}
              fullWidth
              label="Número do Cartão"
              type="text"
              name="cardNumber"
              id="cardNumber"
              value={inputProps.value}
              error={!!errors.cardNumber}
              helperText={errors.cardNumber}
              onChange={inputProps.onChange}
            />
          )}
        </InputMask>
      </InputContainer>

      <InputContainer items={2}>
        <InputMask
          disabled={false}
          mask="99/99"
          maskChar={null}
          value={values.cardExpirationDate}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("cardExpirationDate", event)
          }
        >
          {(inputProps: InputMaskProps) => (
            <TextField
              disabled={inputProps && inputProps.disabled}
              fullWidth
              label="Data de Vencimento"
              type="text"
              name="cardExpirationDate"
              id="cardExpirationDate"
              value={inputProps.value}
              error={!!errors.cardExpirationDate}
              helperText={errors.cardExpirationDate}
              onChange={inputProps.onChange}
            />
          )}
        </InputMask>

        <TextField
          fullWidth
          label="Código de segurança"
          type="text"
          name="cardCVV"
          id="cardCVV"
          value={values.cardCVV}
          error={!!errors.cardCVV}
          helperText={errors.cardCVV}
          inputProps={{ maxLength: 3 }}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("cardCVV", event)
          }
        />
      </InputContainer>
    </FormContent>
  );
}
