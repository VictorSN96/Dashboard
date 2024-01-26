import { Routes, Route, Navigate} from 'react-router-dom';
import { useEffect } from 'react';

import {  useDrawerContext } from '../shared/contexts';
import { Dashboard, 
    ListagemDePessoas,
    DetalheDePessoas 
} from '../pages';






export const Approutes = () =>{
    const {setDrawerOptions} = useDrawerContext();

    useEffect(() =>{
        setDrawerOptions([
        {
            label: 'Página Inicial',
            icon: 'home',
            path: '/pagina-inicial'
        },
        {
            label: 'Pessoas',
            icon: 'people',
            path: '/pessoas'
        },
        ]);
    }, []);

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />} />

            <Route path="/pessoas" element={<ListagemDePessoas />} />
            <Route path="/pessoas/detalhe/:id" element={<DetalheDePessoas/>} />
            
            {<Route path='*' element={<Navigate to="/pagina-inicial"/>} /> }
        </Routes>

    );
        
};
