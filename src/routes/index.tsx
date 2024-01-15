import { Routes, Route, Navigate} from 'react-router-dom';
import { useEffect } from 'react';

import {  useDrawerContext } from '../shared/contexts';
import { Dashboard, 
    ListagemDeCidade 
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
            label: 'Cidades',
            icon: 'apartment',
            path: '/cidades'
        },
        ]);
    }, []);

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />} />

            <Route path="/cidades" element={<ListagemDeCidade />} />
            {/*<Route path="/cidades/detalhes:id" element={<Dashboard />} >*/}
            
            {<Route path='*' element={<Navigate to="/pagina-inicial"/>} /> }
        </Routes>

    );
        
}
