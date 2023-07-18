import { KeyboardDatePicker } from "@material-ui/pickers";
import { KeyboardDatePickerProps } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

interface DatePickerProps extends KeyboardDatePickerProps {
  errorMessage?: string;
  hasError?: boolean;
}

const DatePicker = (props: DatePickerProps) => {
  const { errorMessage, hasError, ...otherProps } = props;

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        {...otherProps}
        clearable
        inputVariant="outlined"
        invalidLabel={errorMessage}
        invalidDateMessage={errorMessage ?? "Data Inválida"}
        minDateMessage={errorMessage ?? "Data menor que"}
        maxDateMessage={errorMessage}
        error={hasError}
        inputProps={{
          format: "dd/MM/yyyy",
        }}
        format="dd/MM/yyyy"
        cancelLabel="Cancelar"
        clearLabel="Limpar"
        okLabel="Enviar"
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
