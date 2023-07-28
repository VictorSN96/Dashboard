import { createTheme } from '@mui/material';
import { blue, red, } from '@mui/material/colors';




export const DarkTheme = createTheme ({
    palette:{
        mode: 'dark',
        primary:{
            main: blue[700],
            dark: blue[800] ,
            light: blue[500],
            contrastText: '#ffffff',
        },
        secondary:{
            main: red[500],
            dark: blue[400] ,
            light: blue[300],
            contrastText: '#ffffff',
        },
        background:{
            default: '#202124' ,
            paper: '#303134',
        },
    },
    typography: {
        allVariants:{
            color: 'white',
        }
    }
});