import { ChangeEvent } from "react";

import { TextField } from "@mui/material";
import InputMask from "react-input-mask";

import { InputMaskProps, PersonalInfoStepProps } from "./types";
import { FormContent, InputContainer } from "../styled";

export default function PersonalInfoStep({
  getFieldHelpers,
  values,
  errors,
  setFieldTouched,
  setValues,
  setFieldError,
}: PersonalInfoStepProps) {
  // É um manipulador de evento para campos de entrada (inputs) no formulário. Recebe o nome de um campo e um evento de mudança (ChangeEvent), e atualiza o valor do campo no estado do formulário utilizando a função getFieldHelpers passada como prop.
  const handleChange = (
    field: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    getFieldHelpers(field).setValue(value);
  };

  // Realiza uma requisição assíncrona para obter os dados de um endereço a partir de um CEP informado, utilizando a API do ViaCEP. Retorna os dados de endereço, incluindo logradouro, bairro, estado e cidade, ou lança um erro caso o CEP não seja encontrado.
  const fetchAddress = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        throw new Error("CEP não encontrado");
      }
      return data;
    } catch (error: any) {
      throw new Error(error?.message);
    }
  };

  // É um manipulador de evento para o campo de CEP quando este perde o foco (blur). Extrai apenas os dígitos do CEP e verifica se possui o tamanho esperado. Em seguida, realiza uma busca do endereço associado a esse CEP, utilizando a função fetchAddress. Se a busca for bem-sucedida, atualiza os campos de endereço no estado do formulário.
  const handleCepBlur = async (event: ChangeEvent<HTMLInputElement>) => {
    const cep = event.target.value.replace(/\D/g, "");
    if (cep.length === 8) {
      try {
        const addressData = await fetchAddress(cep);

        setFieldTouched("zipCode", true);
        setValues({
          ...values,
          address: addressData.logradouro,
          neighborhood: addressData.bairro,
          state: addressData.uf,
          city: addressData.localidade,
        });
      } catch (error: any) {
        setFieldError("zipCode", error.message);
      }
    }
  };

  return (
    <FormContent>
      <InputContainer items={2}>
        <TextField
          fullWidth
          label="Nome"
          type="text"
          name="firstName"
          id="firstName"
          value={values.firstName}
          error={!!errors.firstName}
          helperText={errors.firstName}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("firstName", event)
          }
        />

        <TextField
          fullWidth
          label="Sobrenome"
          type="text"
          name="lastName"
          id="lastName"
          value={values.lastName}
          error={!!errors.lastName}
          helperText={errors.lastName}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("lastName", event)
          }
        />
      </InputContainer>

      <InputContainer>
        <InputMask
          disabled={false}
          mask="999.999.999-99"
          maskChar={null}
          value={values.identification}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("identification", event)
          }
        >
          {(inputProps: InputMaskProps) => (
            <TextField
              disabled={inputProps && inputProps.disabled}
              fullWidth
              label="CPF"
              type="text"
              name="identification"
              id="identification"
              value={inputProps.value}
              error={!!errors.identification}
              helperText={errors.identification}
              onChange={inputProps.onChange}
            />
          )}
        </InputMask>
      </InputContainer>

      <InputContainer items={2}>
        <InputMask
          mask="99999-999"
          maskChar={null}
          value={values.zipCode}
          onFocus={() => setFieldTouched("zipCode", false)}
          onBlur={handleCepBlur}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("zipCode", event)
          }
        >
          {(inputProps: InputMaskProps) => (
            <TextField
              disabled={inputProps && inputProps.disabled}
              fullWidth
              label="CEP"
              type="text"
              name="zipCode"
              id="zipCode"
              value={inputProps.value}
              error={!!errors.zipCode}
              helperText={errors.zipCode}
              onChange={inputProps.onChange}
              onBlur={inputProps.onBlur}
            />
          )}
        </InputMask>

        <TextField
          fullWidth
          label="Endereço"
          type="text"
          name="address"
          id="address"
          value={values.address}
          error={!!errors.address}
          helperText={errors.address}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("address", event)
          }
        />
      </InputContainer>

      <InputContainer items={3}>
        <TextField
          fullWidth
          label="Bairro"
          type="text"
          name="neighborhood"
          id="neighborhood"
          value={values.neighborhood}
          error={!!errors.neighborhood}
          helperText={errors.neighborhood}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("neighborhood", event)
          }
        />
        <TextField
          fullWidth
          label="Número"
          type="number"
          name="addressNumber"
          id="addressNumber"
          value={values.addressNumber}
          error={!!errors.addressNumber}
          helperText={errors.addressNumber}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("addressNumber", event)
          }
        />

        <TextField
          fullWidth
          label="Complemento"
          type="text"
          name="addressComplement"
          id="addressComplement"
          value={values.addressComplement}
          error={!!errors.addressComplement}
          helperText={errors.addressComplement}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("addressComplement", event)
          }
        />
      </InputContainer>

      <InputContainer items={2} style={{ gridTemplateColumns: "1fr 1fr" }}>
        <TextField
          fullWidth
          label="Cidade"
          type="text"
          name="city"
          id="city"
          value={values.city}
          error={!!errors.city}
          helperText={errors.city}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("city", event)
          }
        />

        <TextField
          fullWidth
          label="Estado"
          type="text"
          name="state"
          id="state"
          value={values.state}
          error={!!errors.state}
          helperText={errors.state}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("state", event)
          }
        />
      </InputContainer>
    </FormContent>
  );
}
