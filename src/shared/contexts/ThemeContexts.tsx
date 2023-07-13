import { Children, createContext, useCallback, useContext, useMemo, useState } from "react";

import { ThemeProvider } from "@mui/material";
import { Box } from '@mui/system';
import { DarkTheme, LightTheme } from "./../themes";


interface IThemeContextdata {
    themeName:  'light' | 'dark';
    toggleTheme: () => void;
}

interface IAppThemeProviderProps{
    children: React.ReactNode
}

const ThemeContext = createContext({} as IThemeContextdata);

export const useAppThemeContext = () =>{
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC< IAppThemeProviderProps > = ({ children }) =>{
    const [themeName, setThemeName] = useState< 'light' | 'dark' >('light');

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')

    }, []) /* useCallback é uma função que serve para armazenar funções */

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme;
        
        return DarkTheme;
    }, [ themeName]);

    return(
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width= "100vw" height= "100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}