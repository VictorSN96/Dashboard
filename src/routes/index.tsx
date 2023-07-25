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
                    <div >
                        <div>
                            <Button variant='contained' color='primary' onClick={toggleTheme}>Temas</Button>
                        </div>

                        <div>
                            <Dashboard />
                        </div>
                    </div>
          
                }
            />
            
            {<Route path='*' element={<Navigate to="/pagina-inicial"/>} />}
        </Routes>

    );
        
}
