import { Button } from '@mui/material';
import { Routes, Route, Navigate} from 'react-router-dom';



export const Approutes = () =>{

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button> Test Bu </Button>} />

            <Route path='*' element={<Navigate to="/pagina-inicial"/>} />
        </Routes>

    );
    
}
