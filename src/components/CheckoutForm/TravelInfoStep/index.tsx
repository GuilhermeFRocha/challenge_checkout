import { ChangeEvent, useState } from "react";

import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ListItemText, TextField } from "@mui/material";

import DatePicker from "../../DatePicker";
import { FormContent, InputContainer, ListItemsCity } from "../styled";
import { City, DataCity, TravelInfoStepProps } from "./types";

export default function TravelInfoStep({
  getFieldHelpers,
  values,
  errors,
}: TravelInfoStepProps) {
  const [cityGoneSuggestions, setCityGoneSuggestions] = useState<City[]>([]);
  const [cityBackSuggestions, setCityBackSuggestions] = useState<City[]>([]);

  const handleDateChange = (field: string, newValue: MaterialUiPickersDate) =>
    getFieldHelpers(field).setValue(newValue, false);

  const handleChange = (
    field: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    getFieldHelpers(field).setValue(value);

    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?nome=${value}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Atualizar as sugestões de cidade com base na resposta da API

        const cities: City[] = data
          .filter((city: DataCity) =>
            city.nome.toLowerCase().startsWith(value.toLowerCase())
          )
          .slice(0, 5)
          .map((city: DataCity) => ({
            name: city.nome,
            state: city.microrregiao.mesorregiao.UF.sigla,
          }));

        if (field === "origin") {
          setCityGoneSuggestions(cities);
        } else if (field === "destination") {
          setCityBackSuggestions(cities);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar cidades:", error);
      });
  };

  const handleCitySelection = (field: string, city: City) => {
    getFieldHelpers(field).setValue(city.name);
    if (field === "origin") {
      setCityGoneSuggestions([]);
    } else if (field === "destination") {
      setCityBackSuggestions([]);
    }
  };

  return (
    <FormContent>
      <InputContainer items={2}>
        <DatePicker
          name="startDate"
          label="Data de ida"
          value={values.startDate}
          onChange={(newDate) => {
            handleDateChange("startDate", newDate);
          }}
          errorMessage={errors.startDate}
          hasError={!!errors.startDate}
          minDate={new Date().toISOString()}
          autoOk
        />
        <DatePicker
          name="returnDate"
          label="Data de volta"
          value={values.returnDate}
          onChange={(newDate) => {
            handleDateChange("returnDate", newDate);
          }}
          errorMessage={errors.returnDate}
          hasError={!!errors.returnDate}
          minDate={
            values.startDate ? values.startDate : new Date().toISOString()
          }
          autoOk
        />
      </InputContainer>

      <InputContainer items={2}>
        <TextField
          id="amountAdults"
          name="amountAdults"
          label="Adultos"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 1,
            min: 1,
            max: 99999,
            type: "number",
          }}
          value={values.amountAdults}
          error={!!errors.amountAdults}
          helperText={errors.amountAdults}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("amountAdults", event)
          }
        />

        <TextField
          id="amountChildren"
          name="amountChildren"
          label="Crianças"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 1,
            min: 0,
            max: 99999,
            type: "number",
          }}
          value={values.amountChildren}
          error={!!errors.amountChildren}
          helperText={errors.amountChildren}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("amountChildren", event)
          }
        />
      </InputContainer>

      <InputContainer items={2}>
        <TextField
          fullWidth
          label="Cidade de origem"
          type="text"
          name="origin"
          id="origin"
          value={values.origin}
          error={!!errors.origin}
          helperText={errors.origin}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("origin", event)
          }
          // onBlur={handleBlur}
          // onFocus={() => setFieldTouched('nome', false)}
          // disabled={fetchLoading}
          InputProps={{
            endAdornment: (
              <div>
                {cityGoneSuggestions.length > 0 && (
                  <ListItemsCity>
                    {cityGoneSuggestions.map((city) => (
                      <div
                        key={`${city.name}-${city.state}`}
                        style={{ display: "flex" }}
                        onClick={() => handleCitySelection("origin", city)}
                      >
                        <ListItemText
                          primary={city.name}
                          secondary={city.state}
                        />
                      </div>
                    ))}
                  </ListItemsCity>
                )}
              </div>
            ),
          }}
        />

        <TextField
          fullWidth
          label="Cidade de destino"
          type="text"
          name="destination"
          id="destination"
          value={values.destination}
          error={!!errors.destination}
          helperText={errors.destination}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("destination", event)
          }
          // onBlur={handleBlur}
          // onFocus={() => setFieldTouched('nome', false)}
          // disabled={fetchLoading}
          InputProps={{
            endAdornment: (
              <div>
                {cityBackSuggestions.length > 0 && (
                  <ListItemsCity>
                    {cityBackSuggestions.map((city) => (
                      <div
                        key={`${city.name}-${city.state}`}
                        style={{ display: "flex" }}
                        onClick={() => handleCitySelection("destination", city)}
                      >
                        <ListItemText
                          primary={city.name}
                          secondary={city.state}
                        />
                      </div>
                    ))}
                  </ListItemsCity>
                )}
              </div>
            ),
          }}
        />
      </InputContainer>

      <InputContainer>
        <TextField
          fullWidth
          label="Nome do passageiro principal"
          type="text"
          name="leadName"
          id="leadName"
          value={values.leadName}
          error={!!errors.leadName}
          helperText={errors.leadName}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("leadName", event)
          }
          // onBlur={handleBlur}
          // onFocus={() => setFieldTouched('nome', false)}
          // disabled={fetchLoading}
        />
      </InputContainer>

      <InputContainer>
        <TextField
          fullWidth
          label="E-mail do passageiro principal"
          type="text"
          name="leadEmail"
          id="leadEmail"
          value={values.leadEmail}
          error={!!errors.leadEmail}
          helperText={errors.leadEmail}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange("leadEmail", event)
          }
          // onBlur={handleBlur}
          // onFocus={() => setFieldTouched('nome', false)}
          // disabled={fetchLoading}
        />
      </InputContainer>
    </FormContent>
  );
}
