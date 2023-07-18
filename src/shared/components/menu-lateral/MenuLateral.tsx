import * as React from 'react';


import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from '../../contexts';




interface IMenuLateralProps{
    children: React.ReactNode;
}



export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) =>{
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down ('sm'));

    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();


    return (
        <>
            <Drawer
                open ={isDrawerOpen}  
                variant={smDown ? 'temporary': 'permanent'} /* variant permanet no drawer é melhor usada em telas grandes*/
                onClose={toggleDrawerOpen}
            > 
                <Box 
                    width={theme.spacing(28)} 
                    height='100%'
                    display='flex'
                    flexDirection='column'

                >
                    
                    <Box 
                        width="100%" 
                        height={theme.spacing(20)} 
                        display='flex' 
                        alignItems='center' 
                        justifyContent='center'
                    >
                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }} 
                            src="https://avatars.githubusercontent.com/u/105720840?v=4 " />
                    </Box>

                    <Divider /*Divider serve para colocar uma linha no componente*//>
                    <Box flex={1} /*Box flex={1} serve para que o Box ocupe todo o resto do espaco disponivel*/>
                        <List component="nav">
                            <ListItemButton >
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página Incial" />
                            </ListItemButton> 
                        </List>
                    </Box>

                </Box>
                Teste
            </Drawer>

            <Box 
                height="100vh" 
                marginLeft={smDown ? 0 : theme.spacing(28)}
            >
                {children}
            </Box>
        </>
    );
};