import { ReactNode } from 'react';

import { useDrawerContext } from '../contexts';

import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import {Box } from '@mui/system';


 
interface ILayoutBaseDePaginaProps{
    titulo: string;
    children: ReactNode;
    barraDeFerramentas: ReactNode;
}


export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo, barraDeFerramentas }) =>{
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down ('sm'));
    const theme = useTheme()

    const { toggleDrawerOpen } = useDrawerContext();
    
    return(
        <Box height="100%" display='flex' flexDirection='column' gap={1}/*a unidade de medida por padrão do gap é x8 (1=8px)*/>
            <Box padding={1} display='flex' alignItems='center' height={theme.spacing(12)} gap={1}/*itens um lado do outro da na horizontal é bom usar o gap como espaçamento*/>
                {smDown &&(
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}{/*smDown && vai esconder a botão menu quando o menu lateral estiver aparecendo*/}

                <Typography
                    overflow=""
                    whiteSpace=""
                    textOverflow="" 
                    variant="h5"
                >
                    {titulo}
                </Typography>
            </Box>

            {barraDeFerramentas &&(
                <Box>
                    {barraDeFerramentas}
                </Box>
            )}                    

            <Box flex={1} overflow='auto'>{/*o overflow ='auto' vai permitir que quando a tela que o children tiver uma altura muito grande 
                                           ou tiver muitos componentes childrens ele vai permitir a "Box ou Div" passee a ter barra de scroll*/}
                {children}
            </Box>
        </Box>
    );
};