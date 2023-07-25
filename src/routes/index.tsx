import { Routes, Route, Navigate} from 'react-router-dom';
import { useEffect } from 'react';

import { Button } from '@mui/material';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';
import { Dashboard } from '../pages';




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
                    <div style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ position: 'absolute',bottom: '20px', right: '20px' }}>
                            <Button variant='contained' color='primary' onClick={toggleTheme}>Temas</Button>
                        </div>
                        
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                            <Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle Drawer</Button>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                        <Dashboard />
                        </div>
                    </div>
          
                }
            />
            
            {<Route path='*' element={<Navigate to="/pagina-inicial"/>} />}
        </Routes>

    );
        
}
