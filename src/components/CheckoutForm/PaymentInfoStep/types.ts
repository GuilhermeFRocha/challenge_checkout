import { ChangeEvent } from "react";

export interface PaymentInfoStepProps {
  getFieldHelpers: any;
  values: {
    cardName: string;
    cardNumber: string;
    cardExpirationDate: string;
    cardCVV: string;
  };
  errors: {
    cardName: string;
    cardNumber: string;
    cardExpirationDate: string;
    cardCVV: string;
  };
  handleChange: (event: React.ChangeEvent<any>) => void;
}

export interface InputMaskProps {
  disabled: boolean;
  mask: string;
  maskChar: null;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
