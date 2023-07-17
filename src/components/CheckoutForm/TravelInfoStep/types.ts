export interface TravelInfoStepProps {
  getFieldHelpers: any;
  values: {
    startDate: null;
    returnDate: null;
    amountAdults: string;
    amountChildren: string;
    origin: string;
    destination: string;
    leadName: string;
    leadEmail: string;
  };
  errors: {
    startDate?: string;
    returnDate?: string;
    amountAdults?: string;
    amountChildren?: string;
    origin?: string;
    destination?: string;
    leadName?: string;
    leadEmail?: string;
  };
  handleChange: (event: React.ChangeEvent<any>) => void;
  setValue: (values: any) => void;
}

export interface City {
  name: string;
  state: string;
}

export interface Microrregiao {
  mesorregiao: {
    UF: {
      sigla: string;
    };
  };
}

export interface DataCity {
  nome: string;
  microrregiao: Microrregiao;
}
