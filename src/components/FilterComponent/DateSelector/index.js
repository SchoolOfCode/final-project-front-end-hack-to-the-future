import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import theme from '../../../theme'
import { ThemeProvider } from '@mui/material/styles'
import { buttonsTheme } from '../../../HelperFunctions';

export default function DateSelector() {
    const [value, setValue] = React.useState(null);

    return (
      <ThemeProvider theme={buttonsTheme.cancel} >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            // style={{ margin: "1rem" }}
            label="Date Picker"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                // sx={{
                //     width: 400,
                // }}
                {...params}
              />
            )}
          />
        </LocalizationProvider>
      </ThemeProvider>
    );
}
