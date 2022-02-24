import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import theme from '../../../theme'
import { ThemeProvider } from '@mui/material/styles'

export default function DateSelector() {
    const [value, setValue] = React.useState(null);

    return (
        <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label='Date Picker'
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => (
                    <TextField
                        sx={{
                            width: 400,
                        }}
                        {...params}
                    />
                )}
            />
        </LocalizationProvider>
        </ThemeProvider>
    );
}
