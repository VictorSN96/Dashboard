import { Routes, Route, Navigate} from 'react-router-dom';
import { useEffect } from 'react';

import {  useDrawerContext } from '../shared/contexts';
import { Dashboard } from '../pages';






export const Approutes = () =>{
    const {setDrawerOptions} = useDrawerContext();

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
                            <Dashboard />
                        </div>
                    </div>
                }
            />
            
            {<Route path='*' element={<Navigate to="/pagina-inicial"/>} />}
        </Routes>

    );
        
}
