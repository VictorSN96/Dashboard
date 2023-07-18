import { Routes, Route, Navigate} from 'react-router-dom';
import { useEffect } from 'react';

import { Button } from '@mui/material';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';




export const Approutes = () =>{
    const { toggleTheme } = useAppThemeContext();
    const { toggleDrawerOpen, setDrawerOptions} = useDrawerContext();

    useEffect(() =>{
        setDrawerOptions([
        {
            label: 'Página Inicial',
            icon: 'home',
            path: '/pagina-inicial'
        }
        ]);
    }, []);

    return(
        <Routes>
            <Route 
                path="/pagina-inicial" 
                element={
                    <div>
                        <Button variant='contained' color='primary' onClick={toggleDrawerOpen}> Toggle Drawer </Button>
                        <Button variant='contained' color='primary' onClick={toggleTheme}> Temas </Button>
                    </div>
                }
            />
            
            {<Route path='*' element={<Navigate to="/pagina-inicial"/>} />}
        </Routes>

    );
        
}
