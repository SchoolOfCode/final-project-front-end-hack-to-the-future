import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function LocationInput() {
    return (
        <Box component='form' noValidate autoComplete='off'>
            <TextField
                sx={{
                    width: 400,
                }}
                id='outlined-basic'
                label='City'
                variant='outlined'
            />
        </Box>
    );
}
