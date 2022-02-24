import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#83C5BE',
        },
        secondary: {
            main: '#edf2ff',
        },
        background: {
            default: '#e4f0e2',
        },
    },
});

export let cancel = createTheme({
    palette: {
        primary: {
            main: '#006D77',
        }
    }
});

export let create = createTheme({
    palette: {
        primary: {
            main: '#E29578',
        }
    }
});

export default theme;
