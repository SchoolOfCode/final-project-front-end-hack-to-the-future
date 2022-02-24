import React from 'react';
import { Button } from '@mui/material';

export default function CardButton({button, theme}) {
    return (
        <div>
            <Button variant='contained'>{button}{theme}</Button>
        </div>
    );
}
