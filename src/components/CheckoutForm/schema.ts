import * as yup from "yup";
import valid from "card-validator";
import { cpf } from "cpf-cnpj-validator";

export const validationTravelInfoStep = yup.object({
  startDate: yup
    .string()
    .required("Campo obrigatório")
    .min(1, "O valor mínimo é 1"),
  returnDate: yup.string().required("Campo obrigatório"),
  amountAdults: yup
    .string()
    .required("Campo obrigatório")
    .nullable()
    .test("is-valid", "Deve conter pelo menos um passageiro", (value) => {
      if (value && /^\d+$/.test(value)) {
        const numberValue = parseInt(value, 10);
        return numberValue > 0;
      }
      return false;
    }),
  amountChildren: yup.string().required("Campo obrigatório"),
  origin: yup.string().required("Campo obrigatório").nullable(),
  destination: yup.string().required("Campo obrigatório"),
  leadName: yup.string().required("Campo obrigatório"),
  leadEmail: yup.string().required("Campo obrigatório").email("Email inválido"),
});
export const validationPersonalInfoStep = yup.object({
  firstName: yup.string().required("Campo obrigatório"),
  lastName: yup.string().required("Campo obrigatório"),
  identification: yup
    .string()
    .required("Campo obrigatório")
    .test("valid-cpf", "CPF inválido", (value) => cpf.isValid(value)),
  zipCode: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d{5}-\d{3}$/, "CEP inválido"),
  address: yup.string().required("Campo obrigatório"),
  addressNumber: yup.string().required("Campo obrigatório"),
  neighborhood: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
});
export const validationPaymentInfoStep = yup.object({
  cardName: yup.string().required("Campo obrigatório"),
  cardNumber: yup
    .string()
    .required("Campo obrigatório")
    .test(
      "test-number",
      "Número do cartão inválido",
      (value) => valid.number(value).isValid
    ),
  cardExpirationDate: yup
    .string()
    .required("Campo obrigatório")
    .test(
      "test-date",
      "Data de validade inválida",
      (value) => valid.expirationDate(value).isValid
    ),
  cardCVV: yup
    .string()
    .required("Campo obrigatório")
    .test(
      "test-cvv",
      "Código de segurança inválido",
      (value) => valid.cvv(value).isValid
    ),
});
