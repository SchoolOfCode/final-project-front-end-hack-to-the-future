import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function LocationInput() {
    return (
        <Box
            component='form'
            sx={{
                '& > :not(style)': { m: 1 },
                maxWidth: 500
            }}
            noValidate
            autoComplete='off'
        >
            <TextField
                id='outlined-basic'
                label='Outlined'
                variant='outlined'
            />
        </Box>
    );
}
