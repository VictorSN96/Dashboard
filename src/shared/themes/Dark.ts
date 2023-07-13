import { createTheme } from '@mui/material';
import { blue, } from '@mui/material/colors';




export const DarkTheme = createTheme ({
    palette:{
        primary:{
            main: blue[700],
            dark: blue[800] ,
            light: blue[500],
            contrastText: '#ffffff',
        },
        secondary:{
            main: blue[500],
            dark: blue[400] ,
            light: blue[300],
            contrastText: '#ffffff',
        },
        background:{
            default: '#202124' ,
            paper: '#303134',
        }
    }
});