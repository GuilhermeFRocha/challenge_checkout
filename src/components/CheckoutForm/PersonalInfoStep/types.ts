import { ChangeEvent } from "react";

export interface PersonalInfoStepProps {
  getFieldHelpers: any;
  values: {
    firstName: string;
    lastName: string;
    identification: string;
    zipCode: string;
    address: string;
    neighborhood: string;
    state: string;
    city: string;
    addressNumber: string;
    addressComplement: string;
  };
  errors: {
    firstName?: string;
    lastName?: string;
    identification?: string;
    zipCode?: string;
    address?: string;
    neighborhood?: string;
    state?: string;
    city?: string;
    addressNumber?: string;
    addressComplement?: string;
  };
  handleChange: (event: React.ChangeEvent<any>) => void;
  setFieldTouched: (field: string, touched: boolean) => void;
  setValues: (values: any) => void;
  setFieldError: (field: string, error: string) => void;
}

export interface InputMaskProps {
  disabled: boolean;
  mask: string;
  maskChar: null;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}
