import * as React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';


import { useAppThemeContext, useDrawerContext } from '../../contexts';

import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";





interface IMenuLateralProps{
    children: React.ReactNode;
}

interface IListItemLinkProps{
    to: string;
    icon: string;
    label: string;
    onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) =>{
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () =>{
        navigate(to);
        onClick?.();

    };

    return(
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton> 
    );
};

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) =>{
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down ('sm'));

    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
    const { toggleTheme, themeName } = useAppThemeContext();


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
                            {drawerOptions.map(drawerOption => (
                                <ListItemLink 
                                    key={drawerOption.path}
                                    icon={drawerOption.icon}
                                    to={drawerOption.path}
                                    label={drawerOption.label}
                                    onClick={smDown ? toggleDrawerOpen: undefined}
                                />
                            ))}
                        </List>
                    </Box>

                </Box>

                <Box >
                    <List component="nav">
                        <ListItemButton onClick={toggleTheme}>
                            <ListItemIcon>
                                <Icon>{themeName === "dark" ? "light_mode" : "dark_mode"}</Icon>
                            </ListItemIcon> 
                            <ListItemText primary={themeName === "dark" ? "Tema claro" : "Tema escuro"}/>
                        </ListItemButton>
                    </List> 
                </Box>
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